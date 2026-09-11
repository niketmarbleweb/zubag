import { createFileRoute } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import { allProducts } from '../data/siteData';

export const Route = createFileRoute('/products')({
  component: ProductsPage,
});

function ProductsPage() {
  const products = allProducts().map((p) => ({
    name: p.name,
    slug: p.slug,
    image: p.images && p.images[0] ? p.images[0] : 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  }));

  return (
    <>
      <Seo title="Products" description="Browse Niket's product panels and sheets." path="/products" />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Catalogue</p>
        <h1 className="mt-3 font-display text-4xl">Products</h1>
        <p className="mt-2 text-sm text-ink-soft dark:text-stone">Select a product to view details or request a quote.</p>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={`${p.slug}-${p.name}`}
              className="overflow-hidden rounded-lg border border-stone bg-white shadow-sm transition-transform hover:scale-[1.01] dark:bg-trueGray-800"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-ink-soft dark:text-stone">Code: {p.slug}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <a
                    href={`/products/${p.slug}`}
                    className="inline-block rounded-md bg-gold-deep px-3 py-2 text-sm font-medium text-white hover:bg-gold-600"
                  >
                    View details
                  </a>
                  <button
                    className="text-sm text-ink-soft hover:text-ink"
                    onClick={() => window.open('/contact?quote=1', '_self')}
                  >
                    Request quote
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
