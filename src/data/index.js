import vietnam from './vietnam.js';
import japan from './japan.js';
import mexico from './mexico.js';
import thailand from './thailand.js';

const soon = [
  { slug: 'italy', name: 'Italy', live: false },
  { slug: 'france', name: 'France', live: false },
  { slug: 'spain', name: 'Spain', live: false },
  { slug: 'united-kingdom', name: 'United Kingdom', live: false },
];

export const countries = [vietnam, japan, mexico, thailand, ...soon];
