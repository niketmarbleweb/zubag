import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { testimonials, whyChoose } from '../../data/siteData';

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visible = useMemo(() => {
    const count = 3;
    return Array.from({ length: count }, (_, i) => testimonials[(activeIndex + i) % testimonials.length]);
  }, [activeIndex]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-mist py-20 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Why Niket</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Chosen by architects who specify, not shop</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <article key={item.title} className="border border-stone bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-stone">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Client love</p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous review"
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center border border-stone bg-white text-ink transition hover:border-gold hover:text-gold dark:border-white/10 dark:bg-white/5 dark:text-mist"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center border border-stone bg-white text-ink transition hover:border-gold hover:text-gold dark:border-white/10 dark:bg-white/5 dark:text-mist"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((t) => (
                <blockquote
                  key={`${t.name}-${t.role}`}
                  className="flex h-full min-h-[240px] flex-col border border-gold/30 bg-paper p-6 transition-all duration-300 dark:bg-[#161412]"
                >
                  <div className="flex gap-1 text-gold" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 font-display text-xl leading-snug sm:text-2xl">“{t.quote}”</p>
                  <footer className="mt-6 text-sm text-ink-soft dark:text-stone">
                    <cite className="not-italic font-medium text-ink dark:text-mist">{t.name}</cite>
                    <br />
                    {t.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
