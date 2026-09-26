import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingSidebar from '../components/layout/FloatingSidebar';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <ThemeProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="tile-bg min-h-screen">
        <Header />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
        <FloatingSidebar />
      </div>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-32 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">404</p>
      <h1 className="mt-4 font-display text-5xl">This slab is not in the lot book</h1>
      <p className="mt-4 text-ink-soft dark:text-stone">The page you requested does not exist.</p>
      <Link
        to="/"
        className="mt-8 inline-block border border-gold px-6 py-3 text-xs uppercase tracking-[0.22em]"
      >
        Return home
      </Link>
    </section>
  );
}
