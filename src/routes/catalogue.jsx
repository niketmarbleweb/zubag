import { useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import ProductCard from '../components/product/ProductCard';
import { productCatalog, productCategories } from '../data/productCatalog';

export const Route = createFileRoute('/catalogue')({
  validateSearch: (search) => ({
    q: typeof search.q === 'string' ? search.q : '',
    category: productCategories.includes(search.category) ? search.category : '',
  }),
  component: CataloguePage,
});

function CataloguePage() {
  const { q, category } = Route.useSearch();
  const navigate = Route.useNavigate();

  const setFilter = (patch) => {
    navigate({
      search: (prev) => ({ ...prev, ...patch }),
      replace: true,
    });
  };

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return productCatalog.filter((p) => {
      const name = (p.name || '').toLowerCase();
      const code = (p.code || '').toLowerCase();
      const categoryName = (p.category || '').toLowerCase();
      const matchQ = !query || name.includes(query) || code.includes(query) || categoryName.includes(query);
      const matchCategory = !category || p.category === category;
      return matchQ && matchCategory;
    });
  }, [q, category]);

  return (
    <>
      <Seo
        title="Product catalogue"
        description="Browse Niket Marble & Interior products by category, name, and product code."
        path="/catalogue"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Lot book</p>
        <h1 className="mt-3 font-display text-5xl">Catalogue</h1>
        <p className="mt-3 max-w-2xl text-ink-soft dark:text-stone">
          Indicative starting prices in INR. Final quotes depend on lot, thickness, edge, and site.
        </p>

        <div className="mt-8 grid gap-4 border border-stone bg-white p-4 dark:border-white/10 dark:bg-white/5 md:grid-cols-3">
          <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em]">
            Search
            <input
              type="search"
              value={q}
              onChange={(e) => setFilter({ q: e.target.value })}
              placeholder="Product name, code"
              className="border border-stone bg-paper px-3 py-2 text-sm normal-case tracking-normal outline-none focus:border-gold dark:border-white/15 dark:bg-black/40"
            />
          </label>
          <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em]">
            Category
            <select
              value={category}
              onChange={(e) => setFilter({ category: e.target.value })}
              className="border border-stone bg-paper px-3 py-2 text-sm normal-case tracking-normal outline-none focus:border-gold dark:border-white/15 dark:bg-black/40"
            >
              <option value="">All categories</option>
              {productCategories.map((productCategory) => (
                <option key={productCategory} value={productCategory}>
                  {productCategory}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-ink-soft">{filtered.length} products</p>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={`${p.slug}-${p.name}`} product={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-soft">No lots match those filters. Try clearing search.</p>
        )}
      </section>
    </>
  );
}
