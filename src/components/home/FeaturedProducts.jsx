import ProductCard from '../product/ProductCard';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { products } from '../../data/siteData';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Lot book</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Featured stone</h2>
        </div>
        <Button to="/catalogue" variant="outline">
          Full catalogue
        </Button>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
