import { Link } from '@tanstack/react-router';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import { categories } from '../../data/siteData';

export default function SolutionsStrip() {
  const interior = categories.filter((c) => c.space === 'interior').slice(0, 2);
  const exterior = categories.filter((c) => c.space === 'exterior').slice(0, 2);
  const cards = [
    { title: 'Interior solutions', to: '/interior', items: interior, image: interior[0].image },
    { title: 'Tile facades', to: '/exterior', items: exterior, image: exterior[0].image },
  ];

  return (
    <section className="bg-mist py-20 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Spaces</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Interior and tile surfaces, equally considered</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.to} to={card.to} className="group img-zoom relative block min-h-[340px] overflow-hidden">
              <LazyImage src={card.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/35" />
              <div className="relative flex h-full min-h-[340px] flex-col justify-end p-8 text-white">
                <h3 className="font-display text-4xl">{card.title}</h3>
                <p className="mt-2 text-sm text-white/80">{card.items.map((i) => i.name).join(' · ')}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
