import Button from '../ui/Button';
import { hero } from '../../data/siteData';

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden text-white">
      <img
        src={hero.image}
        alt="Architectural tile interior with sculpted stone walls and floors"
        className="hero-pan absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold-light">Patna · Since 1998</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight sm:text-7xl">{hero.headline}</h1>
        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">{hero.sub}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/catalogue">View catalogue</Button>
          <Button to="/contact" variant="outline" className="border-white/50 text-white hover:bg-white/10">
            Book a yard visit
          </Button>
        </div>
      </div>
    </section>
  );
}
