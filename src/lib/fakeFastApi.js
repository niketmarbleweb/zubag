// Minimal fakeFastApi for local editing and persistence via localStorage.
// Provides sync methods so existing loaders and components remain synchronous.

const STORAGE_KEY = 'fakefast_products_v1';

class FakeFastApi {
  constructor() {
    this._initialized = false;
    this._items = [];
  }

  init(defaultItems = []) {
    if (this._initialized) return;
    // Attempt to load from localStorage first
    try {
      const raw = globalThis.localStorage && localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this._items = JSON.parse(raw);
      } else {
        this._items = JSON.parse(JSON.stringify(defaultItems));
        this._save();
      }
    } catch (e) {
      // Fallback to defaults if anything goes wrong
      this._items = JSON.parse(JSON.stringify(defaultItems));
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
    this._items = JSON.parse(JSON.stringify(items));
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
