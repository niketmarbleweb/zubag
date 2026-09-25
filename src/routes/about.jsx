import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';
import Seo from '../components/seo/Seo';
import Reveal from '../components/ui/Reveal';
import { company, faqs, trustBadges } from '../data/siteData';
import { faqSchema, orgSchema } from '../lib/seo';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Seo
        title="About & FAQ"
        description={`The story of ${company.name} in Patna, plus answers on marble, granite, thickness, and delivery across India.`}
        path="/about"
        jsonLd={[orgSchema(), faqSchema(faqs)]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Since {company.founded}</p>
        <h1 className="mt-3 font-display text-5xl">About Niket Marble & Interior</h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft dark:text-stone">
              Niket began as a family yard on the Patna marble belt. We still buy lots the old way —
              walking the quarry and the crate — then fabricate in a workshop that sits minutes from the
              market. That proximity is our advantage: architects see the actual stone, not a colour-corrected PDF.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft dark:text-stone">
              Today we dress interiors and elevations for homes, hotels, and temples across India. Makrana
              remains our sacred specialty. Italian and Brazilian lots are imported for clients who need a
              particular movement of vein. Marble facade work is specified for sun, dust, and monsoon, not just
              elevation renders.
            </p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {trustBadges.map((b) => (
              <li key={b.label} className="border border-stone p-5 dark:border-white/10">
                <p className="font-display text-2xl gold-text">{b.label}</p>
                <p className="mt-2 text-sm text-ink-soft">{b.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-stone bg-mist py-16 dark:border-white/10 dark:bg-black/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-4xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-stone border border-stone dark:divide-white/10 dark:border-white/10">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="font-display text-xl">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <p className="px-4 pb-5 text-sm leading-relaxed text-ink-soft dark:text-stone">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
