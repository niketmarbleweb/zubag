import { Link } from '@tanstack/react-router';
import Seo from '../seo/Seo';
import ProductCard from '../product/ProductCard';
import { getProductsBySubcategory, interiorSubcategories, tileSubcategories } from '../../data/productCatalog';

export default function ProductSubcategoryPage({ category, slug }) {
  const subcategories = category === 'Tiles' ? tileSubcategories : interiorSubcategories;
  const selected = subcategories.find((item) => item.slug === slug);
  const products = getProductsBySubcategory(category, slug);
  const title = selected?.label || `${category} Collection`;
  const basePath = category === 'Tiles' ? '/marble' : '/interior';

  return (
    <>
      <Seo
        title={`${title} | ${category} Collection`}
        description={`Browse ${title.toLowerCase()} products from Niket Tiles & Interior.`}
        path={`${basePath}/${slug}`}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone pb-6 dark:border-white/10">
          <div>
            <Link to={basePath} className="text-[11px] uppercase tracking-[0.2em] text-ink-soft hover:text-gold-deep">
              {category} Collection
            </Link>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h1>
          </div>
          <span className="border border-stone px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-ink-soft dark:border-white/15 dark:text-stone">
            {products.length} {products.length === 1 ? 'product' : 'products'}
          </span>
        </div>

        <nav className="mt-6 flex flex-wrap gap-2" aria-label={`${category} subcategories`}>
          {subcategories.map((item) => (
            <Link
              key={item.slug}
              to={`${basePath}/${item.slug}`}
              aria-current={item.slug === slug ? 'page' : undefined}
              className={`border px-3 py-2 text-[10px] uppercase tracking-[0.12em] transition ${
                item.slug === slug
                  ? 'border-gold bg-gold/10 text-gold-deep dark:text-gold-light'
                  : 'border-stone text-ink-soft hover:border-gold hover:text-gold-deep dark:border-white/15 dark:text-stone'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {products.length ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <p className="mt-10 border border-dashed border-stone px-6 py-12 text-center text-sm text-ink-soft dark:border-white/15 dark:text-stone">
            No products are tagged for this subcategory yet.
          </p>
        )}
      </section>
    </>
  );
}
