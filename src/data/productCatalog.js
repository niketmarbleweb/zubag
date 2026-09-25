import { products as curatedProducts } from './siteData';

const productPlaceholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <rect width="1200" height="900" fill="#f5f1ea"/>
    <rect x="80" y="80" width="1040" height="740" rx="28" fill="#efe4d1"/>
    <path d="M350 600L560 300L780 600H350Z" fill="#d9b778" opacity="0.7"/>
    <circle cx="910" cy="280" r="110" fill="#caa368" opacity="0.5"/>
    <text x="600" y="500" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" fill="#4b3b2a" font-weight="700">Product Image</text>
  </svg>
`)}`;

const assetModules = {
  ...import.meta.glob('/public/Image/Interiorandmarble/**/*.{png,jpg,jpeg,webp,avif}', { eager: true, import: 'default' }),
  ...import.meta.glob('/public/Image/Interior/**/*.{png,jpg,jpeg,webp,avif}', { eager: true, import: 'default' }),
  ...import.meta.glob('/public/Image/Marble/**/*.{png,jpg,jpeg,webp,avif}', { eager: true, import: 'default' }),
};

export const productCategories = ['Interior', 'Exterior', 'Marble'];
export const categoryBadgeClasses = {
  Interior: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-200',
  Marble: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200',
  Exterior: 'border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-200',
};
const marbleKeywords = ['MARBLE', 'ITALIAN', 'GRANITE', 'PEARL', 'ONYX', 'STONE', 'TRAVERTINE'];
const exteriorKeywords = ['WOOD', 'WPC', 'CLADDING', 'OUTDOOR', 'ELEVATION', 'EXTERIOR'];

const normalizeAssetPath = (value) => {
  if (!value) return '';
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('/public/')) return trimmed.replace('/public', '');
  if (trimmed.startsWith('/')) return trimmed;
  return `/${trimmed}`;
};

const toDisplayName = (filename) => {
  const base = filename.replace(/\.[^/.]+$/, '').replace(/[_]+/g, ' ');
  return base
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const extractCode = (filename) => {
  const match = filename.match(/(PG[-_ ]?\d+[A-Z0-9-]*)/i) || filename.match(/(\d{3,})/);
  if (!match) return 'N/A';
  const code = match[1].toUpperCase().replace(/\s+/g, '-');
  return code.includes('PG') ? code.replace(/-+/g, '-') : `PG-${code.replace(/-+/g, '')}`;
};

const inferCategory = (name, source) => {
  const upperName = name.toUpperCase();
  const existingCategory = source && typeof source === 'object' ? source.category : '';
  if (productCategories.includes(existingCategory)) return existingCategory;
  if (marbleKeywords.some((keyword) => upperName.includes(keyword))) return 'Marble';
  if (exteriorKeywords.some((keyword) => upperName.includes(keyword))) return 'Interior';
  if (typeof source === 'string' && source.includes('/Marble/')) return 'Marble';
  return 'Interior';
};

const makeDescription = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes('wood')) return 'Premium wood-inspired finish for elegant interiors and feature walls.';
  if (lower.includes('marble')) return 'Premium decorative marble finish panel designed for refined, luxury interiors.';
  if (lower.includes('granite')) return 'Architectural stone-inspired finish with strength, depth, and lasting appeal.';
  if (lower.includes('panel')) return 'Versatile decorative panel for interiors, wardrobes, and custom furniture.';
  if (lower.includes('3d')) return 'Contemporary 3D textured finish for statement walls and feature applications.';
  return 'Premium decorative finish ideal for modern interior styling and custom specifications.';
};

const imageProducts = Object.entries(assetModules)
  .map(([source, value]) => ({ source, image: normalizeAssetPath(value) || normalizeAssetPath(source) }))
  .filter(({ image }) => Boolean(image))
  .map(({ source, image }) => {
    const filename = source.split('/').pop() || 'product';
    const name = toDisplayName(filename);
    const code = extractCode(filename);
    const category = inferCategory(name, source);
    const space = category === 'Exterior' ? 'exterior' : 'interior';
    const description = makeDescription(name);
    const id = source
      .replace(/^\/public\/Image\//, '')
      .replace(/\.[^/.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');

    return {
      id,
      slug: id,
      name,
      code,
      image,
      space,
      category,
      description,
      features: [
        'Premium finish',
        'Interior-ready application',
        'Easy project specification',
      ],
      specifications: {
        Material: category,
        Finish: 'Decorative',
        Application: 'Interior walls, wardrobes, and surfaces',
        Code: code,
      },
      placeholder: productPlaceholder,
    };
  });

const exteriorProducts = curatedProducts
  .filter((product) => inferCategory(product.name, product) === 'Exterior')
  .map((product) => {
    const code = extractCode(product.name);
    return {
      id: product.slug,
      slug: product.slug,
      name: product.name,
      code,
      image: product.images?.[0] || productPlaceholder,
      space: 'exterior',
      category: 'Exterior',
      description: product.description || product.short,
      features: [...(product.finish || []), ...(product.colors || [])],
      specifications: {
        ...(product.specs || {}),
        Thickness: (product.thickness || []).join(', ') || 'Project specific',
        Code: code,
      },
      placeholder: productPlaceholder,
    };
  });

export const productCatalog = [...imageProducts, ...exteriorProducts];

export const getProductById = (id) => {
  if (!id) return null;
  return productCatalog.find((product) => String(product.id) === String(id)) || null;
};

export const getRelatedProducts = (id) => {
  const product = getProductById(id);
  if (!product) return [];
  return productCatalog
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3);
};

export const getProductBySlug = (slug) => {
  if (!slug) return null;
  return productCatalog.find((product) => String(product.slug) === String(slug)) || null;
};

export const PRODUCT_PLACEHOLDER = productPlaceholder;
