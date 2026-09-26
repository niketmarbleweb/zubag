import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { navLinks } from '../../data/siteData';
import {
  getProductsBySubcategory,
  interiorSubcategories,
  tileSubcategories,
} from '../../data/productCatalog';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';
import Button from '../ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState('');
  const { theme, toggleTheme } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const dropdowns = [
    { label: 'Interior', path: '/interior', category: 'Interior', items: interiorSubcategories },
    { label: 'Tiles', path: '/marble', category: 'Tiles', items: tileSubcategories },
  ];
  const primaryLinks = navLinks.filter((link) => !['Interior', 'Tiles'].includes(link.label));

  const closeMobileMenu = () => {
    setOpen(false);
    setExpandedMenu('');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone/80 bg-paper/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0c0b0a]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={pathname === link.to ? 'page' : undefined}
              className={`text-[11px] uppercase tracking-[0.22em] transition ${pathname === link.to ? 'text-gold-deep dark:text-gold-light' : 'text-ink-soft hover:text-ink dark:text-stone dark:hover:text-mist'}`}
            >
              {link.label}
            </Link>
          ))}
          {dropdowns.map((dropdown) => {
            const active = pathname.startsWith(dropdown.path);
            const count = dropdown.items.reduce(
              (total, item) => total + getProductsBySubcategory(dropdown.category, item.slug).length,
              0,
            );
            return (
              <div key={dropdown.category} className="group relative py-3">
                <Link
                  to={dropdown.path}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] transition ${active ? 'text-gold-deep dark:text-gold-light' : 'text-ink-soft hover:text-ink dark:text-stone dark:hover:text-mist'}`}
                >
                  {dropdown.label}<span className="rounded-full border border-stone px-1.5 py-0.5 text-[9px] leading-none text-ink-soft dark:border-white/15">{count}</span><ChevronDown size={13} />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 max-h-[min(70vh,34rem)] w-72 -translate-x-1/2 translate-y-2 overflow-y-auto border border-white/60 bg-paper/90 p-2 opacity-0 shadow-xl backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-white/10 dark:bg-[#171513]/90">
                  <Link to={dropdown.path} className="flex items-center justify-between border-b border-stone/70 px-3 py-3 text-[10px] uppercase tracking-[0.18em] text-gold-deep dark:border-white/10 dark:text-gold-light">
                    All {dropdown.label}<span>{count}</span>
                  </Link>
                  {dropdown.items.map((item) => {
                    const itemPath = `${dropdown.path}/${item.slug}`;
                    const itemActive = pathname === itemPath;
                    return (
                      <Link
                        key={item.slug}
                        to={itemPath}
                        aria-current={itemActive ? 'page' : undefined}
                        className={`flex items-center justify-between px-3 py-2.5 text-xs transition ${itemActive ? 'bg-gold/10 text-gold-deep dark:text-gold-light' : 'text-ink-soft hover:bg-white/60 hover:text-ink dark:text-stone dark:hover:bg-white/5 dark:hover:text-mist'}`}
                      >
                        {item.label}<span className="text-[10px] tabular-nums opacity-65">{getProductsBySubcategory(dropdown.category, item.slug).length}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
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
            {primaryLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block py-2 text-sm uppercase tracking-[0.18em]"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {dropdowns.map((dropdown) => {
              const active = pathname.startsWith(dropdown.path);
              const count = dropdown.items.reduce(
                (total, item) => total + getProductsBySubcategory(dropdown.category, item.slug).length,
                0,
              );
              const expanded = expandedMenu === dropdown.category;
              return (
                <li key={dropdown.category}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setExpandedMenu(expanded ? '' : dropdown.category)}
                    className={`flex w-full items-center justify-between py-2 text-sm uppercase tracking-[0.18em] ${active ? 'text-gold-deep dark:text-gold-light' : ''}`}
                  >
                    <span>{dropdown.label}<span className="ml-2 inline-flex min-w-6 justify-center rounded-full border border-stone px-1.5 py-0.5 text-[10px] leading-none opacity-70 dark:border-white/15">{count}</span></span>
                    <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                  {expanded && (
                    <ul className="ml-3 border-l border-stone/70 pl-3 dark:border-white/10">
                      <li><Link to={dropdown.path} onClick={closeMobileMenu} className="flex justify-between py-2 text-sm text-gold-deep dark:text-gold-light">All {dropdown.label}<span>{count}</span></Link></li>
                      {dropdown.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`${dropdown.path}/${item.slug}`}
                            aria-current={pathname === `${dropdown.path}/${item.slug}` ? 'page' : undefined}
                            onClick={closeMobileMenu}
                            className="flex justify-between py-2 text-sm text-ink-soft dark:text-stone"
                          >
                            {item.label}<span className="text-xs opacity-60">{getProductsBySubcategory(dropdown.category, item.slug).length}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
