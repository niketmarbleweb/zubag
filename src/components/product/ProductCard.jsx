import { Link } from '@tanstack/react-router';
import { formatPrice } from '../../data/siteData';
import LazyImage from '../ui/LazyImage';

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col border border-stone bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <Link to={`/products/${product.slug}`} className="img-zoom block aspect-[4/3] overflow-hidden">
        <LazyImage
          src={`${product.images[0]}&w=900`}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] uppercase tracking-[0.24em] text-gold-deep dark:text-gold-light">
          {product.badge || 'Collection'} · {product.origin || 'Patna showroom'}
        </p>
        <h3 className="mt-2 font-display text-2xl text-ink dark:text-mist">
          <Link to={`/products/${product.slug}`} className="hover:text-gold-deep">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-stone">
          {product.short || 'Premium stone product available for project consultation and quote.'}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-sm text-ink dark:text-mist">
            From {formatPrice(product.priceFrom || 0)}
            <span className="text-ink-soft"> / {product.unit || 'sq.ft'}</span>
          </p>
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center justify-center rounded-md bg-gold-deep px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-gold-600"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
