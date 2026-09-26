import { useEffect, useRef } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import QuoteForm from '../components/contact/QuoteForm';
import { company } from '../data/siteData';
import { orgSchema } from '../lib/seo';

export const Route = createFileRoute('/contact')({
  validateSearch: (search) => ({
    quote: search.quote === '1' || search.quote === true,
  }),
  component: ContactPage,
});

function ContactPage() {
  const { quote } = Route.useSearch();
  const formRef = useRef(null);

  useEffect(() => {
    if (quote && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [quote]);

  return (
    <>
      <Seo
        title="Contact & quote"
        description={`Visit ${company.name} in Patna or request a project quote by WhatsApp, phone, or email.`}
        path="/contact"
        jsonLd={orgSchema()}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep dark:text-gold-light">Atelier</p>
        <h1 className="mt-3 font-display text-5xl">Contact</h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <address className="not-italic leading-relaxed text-ink-soft dark:text-stone">
              <p className="font-display text-2xl text-ink dark:text-mist">{company.name}</p>
              <p className="mt-3">
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.city}, {company.address.state} {company.address.pin}
              </p>
              <p className="mt-4">
                <a href={company.phoneHref} className="hover:text-gold-deep">
                  {company.phone}
                </a>
                <br />
                <a href={company.emailHref} className="hover:text-gold-deep">
                  {company.email}
                </a>
              </p>
              <p className="mt-4">{company.hours}</p>
              <p className="mt-2 text-sm">GSTIN {company.gstin}</p>
            </address>
            <div className="mt-8 aspect-[16/10] overflow-hidden border border-stone dark:border-white/10">
              <iframe
                title="Map of Niket Tiles & Interior, Patna"
                src={company.mapEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={company.mapLink}
              className="mt-3 inline-block text-sm text-gold-deep hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div ref={formRef} id="quote">
            <h2 className="font-display text-3xl">Request a quote</h2>
            <p className="mt-2 mb-6 text-sm text-ink-soft dark:text-stone">
              Share space, stone, and timeline. We reply on WhatsApp with lot options.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
