import vietnam from './vietnam.js';
import japan from './japan.js';

const soon = [
  { slug: 'mexico', name: 'Mexico', live: false },
  { slug: 'thailand', name: 'Thailand', live: false },
  { slug: 'italy', name: 'Italy', live: false },
  { slug: 'france', name: 'France', live: false },
  { slug: 'spain', name: 'Spain', live: false },
  { slug: 'united-kingdom', name: 'United Kingdom', live: false },
];

export const countries = [vietnam, japan, ...soon];
