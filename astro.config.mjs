import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://onesearchpro.my',
  trailingSlash: 'always',
  output: 'static',
  // inline page CSS so it isn't a separate render-blocking request (mobile LCP)
  build: { inlineStylesheets: 'always' },
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/404') })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
  },
});
