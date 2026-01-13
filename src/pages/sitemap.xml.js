// src/pages/sitemap.xml.js
// Dynamic sitemap generation for Joseign

const WEBSITE_URL = 'https://joseign.com';

function generateSiteMap() {
  const staticPages = [
    '',
    '/about',
    '/testimonials',
    '/projects',
    '/pricing',
    '/agencies-collaboration',
    '/bookme',
  ];

  const servicePages = [
    '/landing-page-design',
    '/ui-ux-design-saas',
    '/mvp-design-development',
  ];

  const projectPages = [
    '/projects/gearshare',
    '/projects/replicaide',
    '/projects/marhabten',
    '/projects/plonkkaa',
    '/projects/blonk',
    '/projects/vendr-ai',
    '/projects/pearson',
    '/projects/lms-electrical',
    '/projects/diamond-air',
  ];

  const legalPages = [
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
  ];

  const allPages = [...staticPages, ...servicePages, ...projectPages, ...legalPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allPages
       .map((page) => {
         const path = page === '' ? '' : page;
         let priority = '0.7';
         let changefreq = 'monthly';

         if (page === '') {
           priority = '1.0';
           changefreq = 'weekly';
         } else if (servicePages.includes(page)) {
           priority = '0.9';
           changefreq = 'weekly';
         } else if (page.includes('/projects/')) {
           priority = '0.8';
           changefreq = 'monthly';
         } else if (legalPages.includes(page)) {
           priority = '0.5';
           changefreq = 'yearly';
         }

         return `
       <url>
           <loc>${`${WEBSITE_URL}${path}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>${changefreq}</changefreq>
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
