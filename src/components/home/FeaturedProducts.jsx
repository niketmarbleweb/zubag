import ProductCard from '../product/ProductCard';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { productCatalog } from '../../data/productCatalog';

export default function FeaturedProducts() {
  const collections = [
    { category: 'Interior', description: 'Decorative finishes and surfaces for considered interiors.' },
    { category: 'Marble', description: 'Natural marble and stone finishes selected for distinctive spaces.' },
    { category: 'Exterior', description: 'Durable stone and cladding selections for exterior projects.' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Browse by category</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Product Collections</h2>
      </Reveal>
      {collections.map(({ category, description }) => {
        const categoryProducts = productCatalog
          .filter((product) => product.category === category)
          .slice(0, 3);

        return (
          <section key={category} className="border-b border-stone py-12 last:border-b-0 dark:border-white/10">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl">{category} Collection</h3>
                <p className="mt-2 text-sm text-ink-soft dark:text-stone">{description}</p>
              </div>
              <Button to="/products" search={{ category }} variant="outline">
                View collection
              </Button>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
