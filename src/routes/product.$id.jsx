import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import LazyImage from '../components/ui/LazyImage';
import Button from '../components/ui/Button';
import { categoryBadgeClasses, getProductById, getRelatedProducts, PRODUCT_PLACEHOLDER } from '../data/productCatalog';

export const Route = createFileRoute('/product/$id')({
  component: ProductDetails,
});

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = Route.useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <>
        <Seo title="Product Not Found" description="Requested product was not found." path="/product" />
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">404</p>
          <h1 className="mt-4 font-display text-5xl">Product Not Found</h1>
          <p className="mt-4 text-ink-soft dark:text-stone">
            The product you requested is not available in our current catalogue.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: '/products' })}
              className="border border-gold px-6 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Back to Products
            </button>
            <Link to="/" className="border border-stone px-6 py-3 text-[11px] uppercase tracking-[0.2em]">
              Home
            </Link>
          </div>
        </section>
      </>
    );
  }

  const related = getRelatedProducts(id);
  const categoryClass = categoryBadgeClasses[product.category] || categoryBadgeClasses.Interior;

  return (
    <>
      <Seo
        title={product.name}
        description={product.description}
        path={`/product/${product.id}`}
        image={product.image}
      />
      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link to="/products" className="inline-flex items-center border border-stone px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition hover:border-gold hover:text-gold-deep">
            ← Back
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-stone bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="img-zoom overflow-hidden rounded-xl">
              <LazyImage
                src={product.image || product.placeholder || PRODUCT_PLACEHOLDER}
                alt={product.name}
                onError={(event) => {
                  event.currentTarget.src = product.placeholder || PRODUCT_PLACEHOLDER;
                }}
                className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <span className={`inline-flex border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] ${categoryClass}`}>
              {product.category}
            </span>
            <h1 className="mt-3 font-display text-5xl">{product.name}</h1>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-ink-soft dark:text-stone">Product Code: {product.code}</p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft dark:text-stone">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact?quote=1">Request Quote</Button>
              <button
                type="button"
                onClick={() => navigate({ to: '/products' })}
                className="border border-stone px-6 py-3 text-[11px] uppercase tracking-[0.2em] transition hover:border-gold hover:text-gold-deep"
              >
                Back to Catalogue
              </button>
            </div>

            <div className="mt-8 rounded-xl border border-stone bg-mist p-5 dark:border-white/10 dark:bg-black/30">
              <h2 className="font-display text-2xl">Features</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft dark:text-stone">
                {(product.features || []).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold-deep" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl">Specifications</h2>
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            {Object.entries(product.specifications || {}).map(([key, value]) => (
              <div key={key} className="rounded-xl border border-stone bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-ink-soft dark:text-stone">{key}</dt>
                <dd className="mt-2 text-base text-ink dark:text-mist">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-3xl">Related Products</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-xl border border-stone bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <Link to={`/product/${item.id}`} className="block">
                    <img
                      src={item.image || item.placeholder || PRODUCT_PLACEHOLDER}
                      alt={item.name}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">{item.category}</p>
                    <h3 className="mt-2 font-display text-2xl">{item.name}</h3>
                    <Link to={`/product/${item.id}`} className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-gold-deep">
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export default ProductDetails;
