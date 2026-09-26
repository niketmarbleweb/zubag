import { useEffect } from 'react';
import { SITE_URL } from '../../data/siteData';

export default function Seo({
  title,
  description,
  path = '/',
  image,
  jsonLd,
}) {
  const fullTitle = title.includes('Niket') ? title : `${title} | Niket Tiles & Interior`;
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = image || `${SITE_URL}/og-cover.svg`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', ogImage);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    document.querySelectorAll('script[data-seo-json]').forEach((n) => n.remove());
    const payloads = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    payloads.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJson = 'true';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [fullTitle, description, url, ogImage, jsonLd]);

  return null;
}
