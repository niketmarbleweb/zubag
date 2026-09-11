import { company, SITE_URL } from '../data/siteData';

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'StoneSupplier',
    name: company.name,
    description: company.description,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.pin,
      addressCountry: 'IN',
    },
    sameAs: Object.values(company.social),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function productSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { '@type': 'Brand', name: company.name },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.priceFrom,
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(`/products/${product.slug}`),
    },
  };
}
