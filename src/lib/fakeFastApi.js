// Minimal fakeFastApi for local editing and persistence via localStorage.
// Provides sync methods so existing loaders and components remain synchronous.

const STORAGE_KEY = 'fakefast_products_v1';

const normalizeImageUrl = (src) => {
  if (!src || typeof src !== 'string') return '';
  const cleaned = src.trim();
  if (!cleaned) return '';
  if (cleaned.startsWith('/Image/')) return encodeURI(cleaned);
  if (cleaned.startsWith('data:')) return cleaned;
  if (cleaned.startsWith('http')) {
    return cleaned.includes('?') ? cleaned : `${cleaned}?auto=format&fit=crop&w=900&q=80`;
  }
  return cleaned;
};

const sanitizeProducts = (items) => {
  if (!Array.isArray(items)) return [];
  return items.map((product) => {
    if (!product || typeof product !== 'object') return product;
    const images = Array.isArray(product.images) ? product.images.map(normalizeImageUrl).filter(Boolean) : [];
    return {
      ...product,
      images,
    };
  });
};

class FakeFastApi {
  constructor() {
    this._initialized = false;
    this._items = [];
  }

  init(defaultItems = []) {
    if (this._initialized) return;
    try {
      const raw = globalThis.localStorage && localStorage.getItem(STORAGE_KEY);
      const defaults = sanitizeProducts(defaultItems);
      if (raw) {
        const parsed = JSON.parse(raw);
        this._items = sanitizeProducts(parsed);
        const hasBrokenImages = this._items.some((product) => !Array.isArray(product.images) || product.images.length === 0);
        if (hasBrokenImages || this._items.length === 0) {
          this._items = defaults;
          this._save();
        }
      } else {
        this._items = defaults;
        this._save();
      }
    } catch (e) {
      this._items = sanitizeProducts(defaultItems);
    }
    this._initialized = true;
  }

  list() {
    return this._items;
  }

  get(slug) {
    return this._items.find((p) => p.slug === slug);
  }

  update(slug, changes) {
    const idx = this._items.findIndex((p) => p.slug === slug);
    if (idx === -1) return null;
    this._items[idx] = { ...this._items[idx], ...changes };
    this._save();
    return this._items[idx];
  }

  replaceAll(items) {
    this._items = sanitizeProducts(items);
    this._save();
  }

  resetTo(defaultItems) {
    this._items = JSON.parse(JSON.stringify(defaultItems));
    this._save();
  }

  _save() {
    try {
      if (globalThis.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._items));
      }
    } catch (e) {
      // ignore quota errors
      // console.warn('fakeFastApi: could not save to localStorage', e);
    }
  }

  exportJSON() {
    return JSON.stringify(this._items, null, 2);
  }

  importJSON(raw) {
    try {
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (Array.isArray(parsed)) {
        this.replaceAll(parsed);
        return true;
      }
    } catch (e) {
      // invalid JSON
    }
    return false;
  }
}

export const fakeApi = new FakeFastApi();

// Also provide a tiny helper that simulates an HTTP-like fetch for GET/POST on /api/products
export async function fakeFetch(path, options = {}) {
  const method = (options.method || 'GET').toUpperCase();
  if (path === '/api/products' && method === 'GET') {
    return { ok: true, json: async () => fakeApi.list() };
  }
  if (path.startsWith('/api/products/') && method === 'GET') {
    const slug = path.replace('/api/products/', '');
    return { ok: true, json: async () => fakeApi.get(slug) };
  }
  if (path.startsWith('/api/products/') && method === 'PUT') {
    const slug = path.replace('/api/products/', '');
    const body = options.body ? JSON.parse(options.body) : {};
    const updated = fakeApi.update(slug, body);
    return { ok: !!updated, json: async () => updated };
  }
  return { ok: false, status: 404 };
}
