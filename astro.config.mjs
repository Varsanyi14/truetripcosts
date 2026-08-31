import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://truetripcosts.com',
  integrations: [
    sitemap({
      // /search is a tool for getting around the site, not a page to rank, and it carries
      // noindex, so it stays out of the sitemap too. Everything it can find is listed here
      // on its own account.
      //
      // /embed/* is excluded on the same principle. Those pages are iframe bodies that
      // other sites render, each a stripped-down view of a visualization whose real page is
      // already in this sitemap. They carry noindex, and listing a noindex URL in a sitemap
      // asks a crawler to consider a page that then tells it to go away. Worse, the embed
      // and its canonical page are the same map, so any ranking the embed picked up would be
      // taken from the page the embed exists to promote.
      filter: (page) =>
        !page.endsWith('/search/') && !page.endsWith('/search')
        && !page.includes('/embed/'),
    }),
  ],
});
