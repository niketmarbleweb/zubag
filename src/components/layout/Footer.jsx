import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { company, navLinks } from '../../data/siteData';
import Logo from './Logo';
import Button from '../ui/Button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you. We will send atelier notes and lot releases.');
    setEmail('');
  };

  return (
    <footer className="border-t border-stone bg-mist dark:border-white/10 dark:bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft dark:text-stone">
            {company.description}
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl">Quick links</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-ink-soft hover:text-gold-deep dark:text-stone">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl">Atelier</h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-ink-soft dark:text-stone">
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.city}, {company.address.state} {company.address.pin}
            <br />
            <a className="mt-2 inline-block hover:text-gold-deep" href={company.phoneHref}>
              {company.phone}
            </a>
            <br />
            <a className="hover:text-gold-deep" href={company.emailHref}>
              {company.email}
            </a>
          </address>
        </div>
        <div>
          <h2 className="font-display text-xl">Newsletter</h2>
          <p className="mt-4 text-sm text-ink-soft dark:text-stone">
            Slab releases, finish studies, and project stories.
          </p>
          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3">
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="border border-stone bg-white px-3 py-2 text-sm outline-none focus:border-gold dark:border-white/15 dark:bg-white/5"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          {status && <p className="mt-2 text-xs text-gold-deep dark:text-gold-light">{status}</p>}
          <div className="mt-6 flex gap-3">
            <a href={company.social.instagram} aria-label="Instagram" className="hover:text-gold">
              <Instagram size={18} />
            </a>
            <a href={company.social.facebook} aria-label="Facebook" className="hover:text-gold">
              <Facebook size={18} />
            </a>
            <a href={company.social.pinterest} aria-label="Pinterest" className="hover:text-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.2-.1-.8-.2-2 0-2.8.2-.8 1.3-5.5 1.3-5.5s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 1.9 1.6 1.9 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.2-3.8-3.1 0-5 2.3-5 4.8 0 .9.3 1.8.7 2.4.1.1.1.2.1.3l-.3 1.1c0 .2-.1.3-.4.2-1.4-.6-2.1-2.2-2.1-4 0-3 2.5-6.6 7.5-6.6 4 0 6.7 2.9 6.7 6 0 4.1-2.3 7.1-5.6 7.1-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.2.9-.9 2-1.3 2.7.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </a>
            <a href={company.social.youtube} aria-label="YouTube" className="hover:text-gold">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="gold-line" />
      <p className="px-4 py-6 text-center text-xs tracking-wide text-ink-soft dark:text-stone">
        © {new Date().getFullYear()} {company.name}. GSTIN {company.gstin}. All rights reserved.
      </p>
    </footer>
  );
}
