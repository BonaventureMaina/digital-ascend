import { readdirSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://digital-ascend.pages.dev';

const staticRoutes = ['/', '/shows', '/blog', '/stream', '/tickets'];

const blogDir = resolve(__dirname, '..', 'src', 'content', 'blog');
const blogFiles = readdirSync(blogDir).filter(f => f.endsWith('.md'));
const blogRoutes = blogFiles.map(f => `/blog/${f.replace('.md', '')}`);

const allRoutes = [...staticRoutes, ...blogRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

writeFileSync(resolve(__dirname, '..', 'static', 'sitemap.xml'), sitemap);
console.log('Sitemap generated with', allRoutes.length, 'URLs');
