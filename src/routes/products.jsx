import { createFileRoute, Link } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import ProductCard from '../components/product/ProductCard';
import { productCatalog, productCategories } from '../data/productCatalog';

export const Route = createFileRoute('/products')({
  validateSearch: (search) => ({
    category: productCategories.includes(search.category) ? search.category : '',
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const products = productCatalog.filter((product) => !category || product.category === category);

  return (
    <>
      <Seo title="Products" description="Browse Niket's product panels and sheets." path="/products" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Catalogue</p>
        <h1 className="mt-3 font-display text-4xl">Products</h1>
        <p className="mt-2 text-sm text-ink-soft dark:text-stone">Browse all products by category.</p>

        <label className="mt-6 flex max-w-xs flex-col gap-2 text-[11px] uppercase tracking-[0.18em]">
          Category
          <select
            value={category}
            onChange={(event) => navigate({ search: { category: event.target.value }, replace: true })}
            className="border border-stone bg-paper px-3 py-2 text-sm normal-case tracking-normal outline-none focus:border-gold dark:border-white/15 dark:bg-black/40"
          >
            <option value="">All categories</option>
            {productCategories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>

        {products.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-stone bg-white p-8 text-center dark:border-white/10 dark:bg-white/5">
            <p className="font-display text-2xl">No product images found</p>
            <p className="mt-3 text-sm text-ink-soft dark:text-stone">
              Add product images under public/Image/Interiorandmarble, public/Image/Interior, or public/Image/Marble to populate the catalogue.
            </p>
            <Link to="/" className="mt-5 inline-block border border-gold px-5 py-3 text-[11px] uppercase tracking-[0.2em]">
              Return Home
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default ProductsPage;
