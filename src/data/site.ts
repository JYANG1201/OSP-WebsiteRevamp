/* Site-wide SEO constants. SITE_URL must match `site` in astro.config.mjs. */
export const SITE_URL = 'https://onesearchpro.my';
export const SITE_NAME = 'One Search Pro';
export const DEFAULT_OG_IMAGE = '/images/logo/osp-logo-color.png';

/* Same GTM container as the WordPress site, so GA4 history stays continuous.
   It only loads on the production host (or in GTM Preview mode), so normal
   preview visits on workers.dev don't land in analytics. */
export const GTM_ID = 'GTM-TDZPL2F';
export const PRODUCTION_HOST = 'onesearchpro.my';

/* Web3Forms access key for both lead forms (public by design: it only allows
   submitting to the inbox it was created for). Empty = forms show a send error. */
export const WEB3FORMS_KEY = '';

export const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'One Search Pro',
  legalName: 'One Search Pro Marketing Sdn. Bhd.',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo/osp-logo-color.png`,
  email: 'info@onesearchpro.my',
  telephone: '+60330095621',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 11-M, 11-1 & 11-2, Jalan Manis 4, Taman Segar',
    addressLocality: 'Kuala Lumpur',
    postalCode: '56100',
    addressCountry: 'MY',
  },
  sameAs: [
    'https://my.linkedin.com/company/one-search-pro',
    'https://www.facebook.com/onesearchpro/',
    'https://www.instagram.com/onesearchpro/',
    'https://www.youtube.com/@onesearchprodigitalmarketi8159',
  ],
};

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-MY',
};
