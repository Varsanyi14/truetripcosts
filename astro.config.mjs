import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://truetripcosts.com',
  integrations: [
    sitemap({
      // /search is a tool for getting around the site, not a page to rank, and it carries
      // noindex, so it stays out of the sitemap too. Everything it can find is listed here
      // on its own account.
      filter: (page) => !page.endsWith('/search/') && !page.endsWith('/search'),
    }),
  ],
});
