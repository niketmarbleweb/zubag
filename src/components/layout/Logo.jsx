import { Link } from '@tanstack/react-router';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="Niket Tiles & Interior home">
      <img
        src="/niket-marble-logo.jpeg"
        alt="Niket Tiles & Interior logo"
        className="h-10 w-10 rounded-md object-cover ring-1 ring-gold/50"
      />
      <span className="flex flex-col">
        <span className="font-display text-xl leading-none tracking-wide text-ink dark:text-mist">
          Niket
        </span>
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-gold-deep dark:text-gold-light">
          Tiles & Interior
        </span>
      </span>
    </Link>
  );
}
