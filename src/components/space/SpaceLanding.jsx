import { categoriesBySpace, productsBySpace, projects } from '../../data/siteData';
import ProductCard from '../product/ProductCard';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import Button from '../ui/Button';

export default function SpaceLanding({ space, title, intro, heroImage }) {
  const cats = categoriesBySpace(space);
  const featured = productsBySpace(space).filter((p) => p.featured);
  const gallery = projects[space];

  return (
    <>
      <section className="relative isolate min-h-[48vh] overflow-hidden text-white">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold-light">{space}</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl">Categories</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <article key={c.id} className="img-zoom border border-stone dark:border-white/10">
              <LazyImage src={c.image} alt={c.name} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-2xl">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-soft dark:text-stone">{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16 dark:bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl">Featured products</h2>
            <Button to="/catalogue" search={{ space }}>
              Filter catalogue
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-4xl">Project gallery</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {gallery.map((g) => (
            <figure key={g.title} className="img-zoom">
              <LazyImage src={g.image} alt={`${g.title} in ${g.location}`} className="aspect-[16/10] w-full object-cover" />
              <figcaption className="mt-3">
                <p className="font-display text-2xl">{g.title}</p>
                <p className="text-sm text-ink-soft dark:text-stone">
                  {g.location} — {g.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
