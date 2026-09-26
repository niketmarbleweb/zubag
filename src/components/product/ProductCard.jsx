import { Link } from '@tanstack/react-router';
import { formatPrice, resolveImageSrc } from '../../data/siteData';
import { categoryBadgeClasses } from '../../data/productCatalog';
import LazyImage from '../ui/LazyImage';

export default function ProductCard({ product }) {
  const imageSrc = resolveImageSrc(product.image || product.images?.[0] || product.placeholder);
  const productId = product.id || product.slug;
  const detailPath = product.detailPath || `/product/${productId}`;
  const category = product.category || 'Interior';
  const categoryClass = categoryBadgeClasses[category] || categoryBadgeClasses.Interior;
  const badge = product.badge;
  const origin = product.origin || 'Patna showroom';
  const short = product.short || product.description || 'Premium decorative finish available for project consultation.';
  const price = product.priceFrom || 0;
  const unit = product.unit || 'sq.ft';

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-stone bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
      <Link to={detailPath} className="img-zoom block aspect-[4/3] overflow-hidden">
        <LazyImage
          src={imageSrc}
          alt={product.name}
          onError={(event) => {
            event.currentTarget.src = product.placeholder || '/Image/Interior/PG12012-8.png';
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={`inline-flex border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${categoryClass}`}>
            {category}
          </span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-ink-soft dark:text-stone">
            {badge || origin}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl text-ink dark:text-mist">
          <Link to={detailPath} className="hover:text-gold-deep">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft dark:text-stone">
          Code: {product.code || product.slug || 'N/A'}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-ink-soft dark:text-stone">
          {product.subCategory || category}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-stone">
          {short}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-sm text-ink dark:text-mist">
            {price > 0 ? <>From {formatPrice(price)} <span className="text-ink-soft"> / {unit}</span></> : <span className="text-ink-soft">Custom quote</span>}
          </p>
          <Link
            to={detailPath}
            className="inline-flex items-center justify-center rounded-md bg-gold-deep px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-gold-600"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
