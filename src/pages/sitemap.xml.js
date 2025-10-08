// src/pages/sitemap.xml.js
// Dynamic sitemap generation for Joseign

const WEBSITE_URL = 'https://joseign.com';

function generateSiteMap() {
  const staticPages = [
    '',
    '/about',
    '/testimonials',
    '/projects',
    '/bookme',
  ];

  const projectPages = [
    '/projects/replicaide',
    '/projects/marhabten',
    '/projects/plonkkaa',
    '/projects/blonk',
    '/projects/vendr-ai',
  ];

  const allPages = [...staticPages, ...projectPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allPages
       .map((page) => {
         const path = page === '' ? '' : page;
         const priority = page === '' ? '1.0' : page.includes('/projects/') ? '0.8' : '0.9';
         return `
       <url>
           <loc>${`${WEBSITE_URL}${path}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
           <priority>${priority}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
