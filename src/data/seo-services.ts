export interface ServicePillar {
  idx: string;
  slug: string;
  name: string;
  icon: string;
  art: number;
  image?: string;
  claim: string;
  subs: string[];
  heroLead: string;
  whyNeeded: string[];
  servicesOffered: { title: string; body: string; image?: string }[];
  whyChooseUs: string[];
  faq: { q: string; a: string }[];
}

export const seoServices: ServicePillar[] = [
  {
    idx: '01',
    slug: 'technical-seo',
    name: 'Technical SEO',
    icon: 'technical',
    art: 4,
    image: '/images/seo-services/technical-seo.jpg',
    claim: 'Build Your Organic Search Presence',
    subs: ['SEO Audit & Strategy', 'Keyword Research', 'On-Page/Off-Page SEO', 'Technical SEO', 'Content SEO'],
    heroLead:
      "The best content in the world won't rank if search engines can't crawl, index, or trust your site. Technical SEO is the foundation everything else stands on.",
    whyNeeded: [
      'A slow, poorly-structured site quietly loses rankings no amount of content can fix.',
      'Google rewards sites that are fast, mobile-friendly and easy to crawl — technical issues cap your ceiling before you even start.',
      'Without a proper audit, small issues (broken links, duplicate content, missing schema) compound over time.',
      'Competitors investing in technical SEO will consistently outrank you on fundamentals alone.',
    ],
    servicesOffered: [
      { title: 'SEO Audit & Strategy', image: '/images/service-offers/technical-seo/audit-strategy.jpg', body: 'A full technical and content audit of your site, benchmarked against competitors, with a prioritised roadmap.' },
      { title: 'Keyword Research', image: '/images/service-offers/technical-seo/keyword-research.jpg', body: 'Identifying the exact terms your customers search for, mapped to search intent and business value.' },
      { title: 'On-Page & Off-Page SEO', image: '/images/service-offers/technical-seo/on-page-off-page.jpg', body: 'Optimising titles, meta descriptions, internal linking and content structure, paired with authoritative backlink building.' },
      { title: 'Technical SEO', image: '/images/service-offers/technical-seo/technical-seo.jpg', body: 'Site speed, crawlability, indexation, structured data, mobile responsiveness and Core Web Vitals.' },
      { title: 'Content SEO', image: '/images/service-offers/technical-seo/content-seo.jpg', body: 'Aligning your content with what ranks — search intent, topical depth and on-page optimisation working together.' },
    ],
    whyChooseUs: [
      'Over 10 years of combined SEO expertise across dozens of industries.',
      'Real reporting on rankings, traffic and conversions — not vanity metrics.',
      'A dedicated specialist, not a rotating account manager.',
      'Data-driven strategy that adapts as search algorithms evolve.',
    ],
    faq: [
      { q: 'How long does technical SEO take to show results?', a: 'Most technical fixes start improving crawl efficiency within weeks, but ranking improvements typically build over 3–6 months as search engines re-index and re-evaluate your site.' },
      { q: 'Do I need technical SEO if I already have great content?', a: 'Yes — technical SEO determines whether search engines can find, understand and trust that content in the first place. Without it, even the best content underperforms.' },
      { q: 'Will you audit my current site before starting?', a: "Always. Every engagement starts with a full technical and competitive audit so recommendations are grounded in your site's actual state, not guesswork." },
    ],
  },
  {
    idx: '02',
    slug: 'local-seo',
    name: 'Local SEO',
    icon: 'local',
    art: 2,
    image: '/images/seo-services/local-seo.jpg',
    claim: 'Be Found by Customers Near You',
    subs: [
      'Google Business Profile Optimisation',
      'Local Keyword Strategy',
      'Local Landing Page Optimisation',
      'Local Citations & Business Information',
      'Local Search Performance',
    ],
    heroLead:
      "Local SEO connects your business with nearby customers who are ready to visit, call or buy right now — the highest-intent traffic your business can get.",
    whyNeeded: [
      'Most local searches lead to a decision within 24 hours — if you’re not visible, a competitor gets that customer instead.',
      'An unoptimised Google Business Profile means missed calls, missed directions and missed reviews.',
      'Local search dominates "near me" queries on both Search and Maps — visibility there is non-negotiable for physical or service-area businesses.',
      'Inconsistent business information across directories quietly erodes trust with both customers and Google.',
    ],
    servicesOffered: [
      { title: 'Comprehensive Site Audit', image: '/images/service-offers/local-seo/site-audit.jpg', body: "A full review of your site and local presence to identify gaps holding back local visibility." },
      { title: 'Local Keyword Research', image: '/images/service-offers/local-seo/keyword-research.jpg', body: 'Targeting the exact "near me" and location-specific terms your customers actually search.' },
      { title: 'Google Business Profile Setup & Optimisation', image: '/images/service-offers/local-seo/gbp-optimisation.jpg', body: 'A fully optimised, actively managed profile that drives calls, directions and reviews.' },
      { title: 'Local Content Optimisation', image: '/images/service-offers/local-seo/content-optimisation.jpg', body: 'Location-specific landing pages and content that speak directly to nearby customers.' },
      { title: 'Local Directory Submissions', image: '/images/service-offers/local-seo/directory-submissions.jpg', body: 'Consistent, accurate business listings across the directories that matter for local trust.' },
      { title: 'Content Writing', image: '/images/service-offers/local-seo/content-writing.jpg', body: 'Locally-relevant content that supports both rankings and genuine customer connection.' },
      { title: 'Monthly Reporting', image: '/images/service-offers/local-seo/monthly-reporting.jpg', body: 'Clear visibility into rankings, calls, and profile performance every month.' },
    ],
    whyChooseUs: [
      'Deep experience winning "near me" search and Google Maps visibility.',
      'Budget-friendly solutions built for local and small businesses.',
      'Dedicated local SEO specialists, not generalists.',
      'Continuous performance monitoring, not a set-and-forget approach.',
    ],
    faq: [
      { q: 'Why does Google Business Profile matter so much?', a: "It's often the very first thing a nearby customer sees — your profile directly drives calls, directions and reviews, and is a major local ranking factor in its own right." },
      { q: 'How is local SEO different from regular SEO?', a: 'Local SEO specifically targets location-based searches and Google Maps visibility, using signals like your Business Profile, local citations and location-specific content.' },
      { q: 'How long until I see more local enquiries?', a: 'Google Business Profile improvements can show impact within weeks; broader local ranking gains typically build over 2–4 months.' },
    ],
  },
  {
    idx: '03',
    slug: 'ai-search-seo',
    name: 'AI Search SEO',
    icon: 'ai',
    art: 3,
    image: '/images/seo-services/ai-search-seo.jpg',
    claim: 'Be Discoverable Beyond Traditional Search',
    subs: [
      'AI Search Readiness',
      'Content Structure & Entity Clarity',
      'Answer-Focused Content',
      'Authority & Trust Signals',
      'Search Evolution Monitoring',
    ],
    heroLead:
      "Search is changing — AI Overviews, chat-based search and answer engines are reshaping how people find businesses. Being ranked isn't enough if you're not the answer being cited.",
    whyNeeded: [
      'AI-generated answers increasingly satisfy searches before a user ever clicks a traditional result.',
      'Sites structured for AI comprehension get cited and quoted; sites that aren’t become invisible in these new surfaces.',
      'Traditional keyword-only SEO doesn’t account for how large language models parse and trust content.',
      'Early movers in AI search optimisation are building a lasting advantage as the shift accelerates.',
    ],
    servicesOffered: [
      { title: 'AI Search Readiness', image: '/images/service-offers/ai-search-seo/ai-readiness.jpg', body: 'Assessing how well your current content and site structure are understood by AI-driven search surfaces.' },
      { title: 'Content Structure & Entity Clarity', image: '/images/service-offers/ai-search-seo/content-structure.jpg', body: 'Structuring content so topics, entities and relationships are unambiguous to AI systems.' },
      { title: 'Answer-Focused Content', image: '/images/service-offers/ai-search-seo/answer-focused.jpg', body: 'Writing content that directly and clearly answers the questions your audience is asking.' },
      { title: 'Authority & Trust Signals', image: '/images/service-offers/ai-search-seo/authority-trust.jpg', body: 'Building the credibility markers AI systems weigh when deciding what to cite.' },
      { title: 'Search Evolution Monitoring', image: '/images/service-offers/ai-search-seo/evolution-monitoring.jpg', body: 'Tracking how AI search surfaces evolve and adjusting strategy ahead of the curve, not behind it.' },
    ],
    whyChooseUs: [
      "We track how search itself is evolving, not just how to rank in today's results.",
      'A structured, entity-first approach to content that serves both traditional and AI search.',
      'Straight answers on what’s genuinely working versus what’s still speculative in this fast-moving space.',
      'The same data-driven rigour we apply to traditional SEO, applied to what comes next.',
    ],
    faq: [
      { q: 'What is AI Search SEO, exactly?', a: 'Optimising your content and site structure so AI-driven search surfaces (like AI Overviews and answer engines) can understand, trust and cite your business — not just traditional search rankings.' },
      { q: 'Does this replace traditional SEO?', a: 'No — it builds on the same technical and content foundations. AI search readiness is an additional layer, not a replacement for solid SEO fundamentals.' },
      { q: 'How do you measure success here?', a: 'We track visibility and citations across AI search surfaces alongside traditional rankings, since the two increasingly influence each other.' },
    ],
  },
];
