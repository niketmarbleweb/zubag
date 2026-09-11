import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import LazyImage from '../components/ui/LazyImage';
import {
  company,
  formatPrice,
  getProduct,
  relatedProducts,
  whatsappLink,
} from '../data/siteData';
import { productSchema } from '../lib/seo';
import { useState } from 'react';

export const Route = createFileRoute('/products/$slug')({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const related = relatedProducts(product);
  const wa = whatsappLink(
    `Hello Niket, I would like a quote for ${product.name} (${product.slug}).`,
  );

  return (
    <>
      <Seo
        title={product.name}
        description={product.short}
        path={`/products/${product.slug}`}
        image={product.images[0]}
        jsonLd={productSchema(product)}
      />
      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-sm text-ink-soft">
          <Link to="/catalogue" className="hover:text-gold-deep">
            Catalogue
          </Link>
          <span> / {product.name}</span>
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="img-zoom aspect-[4/3] bg-mist">
              <LazyImage
                src={product.images[active]}
                alt={`${product.name} view ${active + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`img-zoom border ${i === active ? 'border-gold' : 'border-transparent'}`}
                  aria-label={`Show image ${i + 1}`}
                >
                  <LazyImage src={src} alt="" className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">
              {product.origin} · {product.space}
            </p>
            <h1 className="mt-3 font-display text-5xl">{product.name}</h1>
            <p className="mt-4 text-lg text-ink-soft dark:text-stone">{product.short}</p>
            <p className="mt-6 font-display text-3xl">
              From {formatPrice(product.priceFrom)}
              <span className="text-base text-ink-soft"> / {product.unit}</span>
            </p>
            <p className="mt-6 leading-relaxed text-ink-soft dark:text-stone">{product.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wider">
              {product.finish.map((f) => (
                <li key={f} className="border border-stone px-3 py-1 dark:border-white/15">
                  {f}
                </li>
              ))}
              {product.colors.map((c) => (
                <li key={c} className="border border-stone px-3 py-1 dark:border-white/15">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={wa} target="_blank" rel="noreferrer">
                Quote on WhatsApp
              </Button>
              <Button href={company.phoneHref} variant="outline">
                Call the yard
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl">Specifications</h2>
          <dl className="mt-6 divide-y divide-stone border border-stone dark:divide-white/10 dark:border-white/10">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
                <dt className="uppercase tracking-[0.12em] text-ink-soft">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4 px-4 py-3 text-sm">
              <dt className="uppercase tracking-[0.12em] text-ink-soft">Thickness</dt>
              <dd>{product.thickness.join(', ')}</dd>
            </div>
          </dl>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-3xl">Related stone</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
