import { company, trustBadges } from '../../data/siteData';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import Button from '../ui/Button';

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="img-zoom">
          <LazyImage
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
            alt="Craftsman inspecting a marble slab in the atelier"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </Reveal>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">The atelier</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Craftsmanship from quarry to courtyard</h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft dark:text-stone">
            For {company.years} years, Niket Marble & Interior has selected, fabricated, and installed natural
            stone for residences, hotels, and sacred spaces. We work as a quiet partner to architects —
            matching lots, photographing slabs, and speaking the language of thickness, sealer, and joint.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-stone">
            Our Patna showroom sits at the heart of India’s marble trade. From here we ship Makrana whites,
            Italian Statuario, South Indian granites, and desert sandstones to sites across the country.
          </p>
          <Button to="/about" className="mt-8">
            Our story & FAQ
          </Button>
        </Reveal>
      </div>
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((b) => (
          <li key={b.label} className="border border-stone bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <p className="font-display text-2xl gold-text">{b.label}</p>
            <p className="mt-2 text-sm text-ink-soft dark:text-stone">{b.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
