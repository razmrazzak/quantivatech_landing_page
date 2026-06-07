/**
 * Creates real index.html files for each client-side route so direct URLs work
 * on static hosts (Render, Netlify, S3, etc.) without relying on rewrite rules.
 * Required for App Store / Play Store privacy & terms links.
 *
 * Add new app routes here when you ship more products.
 */
import { cpSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, '../dist');
const indexHtml = join(dist, 'index.html');

if (!existsSync(indexHtml)) {
  console.error('spa-fallback: dist/index.html not found — run vite build first.');
  process.exit(1);
}

const routes = [
  '/privacy',
  '/terms',
  '/apps/habitica/privacy',
  '/apps/habitica/terms',
  '/apps/capgen/privacy',
  '/apps/capgen/terms',
];

for (const route of routes) {
  const dir = join(dist, route.replace(/^\//, ''));
  mkdirSync(dir, { recursive: true });
  cpSync(indexHtml, join(dir, 'index.html'));
  console.log(`spa-fallback: ${route}`);
}

cpSync(indexHtml, join(dist, '404.html'));
console.log('spa-fallback: /404.html');
