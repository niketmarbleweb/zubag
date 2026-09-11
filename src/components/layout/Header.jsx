import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';
import Button from '../ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-stone/80 bg-paper/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0c0b0a]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[11px] uppercase tracking-[0.22em] transition ${
                  active
                    ? 'text-gold-deep dark:text-gold-light'
                    : 'text-ink-soft hover:text-ink dark:text-stone dark:hover:text-mist'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center border border-stone text-ink dark:border-white/15 dark:text-mist"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button to="/contact" className="hidden sm:inline-flex" search={{ quote: '1' }}>
            Get quote
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-stone lg:hidden dark:border-white/15"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-stone px-4 py-4 lg:hidden dark:border-white/10"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block py-2 text-sm uppercase tracking-[0.18em]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
