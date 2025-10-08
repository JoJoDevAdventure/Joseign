
import AIPopUp from "@/components/AIPopUp";
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Process from "@/components/Process";
import ProjectsSection from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TransitionEffect from "@/components/TransitionEffect";
import Trust from "@/components/Trust";
import Values from "@/components/Values";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* — Primary SEO — */}
        <title>Joseign – Landing Page Optimization & SaaS Development | UI/UX Design</title>
        <meta
          name="description"
          content="Joseign is a tech company specializing in landing page optimization and SaaS platform development. Expert UI/UX design, development, deployment, and monitoring services for high-converting digital products."
        />
        <link rel="canonical" href="https://joseign.com/" />

        {/* — Open Graph / Facebook — */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Joseign" />
        <meta property="og:title" content="Joseign – Landing Page Optimization & SaaS Development" />
        <meta property="og:description" content="Tech company specializing in landing page optimization and SaaS platforms. Expert UI/UX design, development, and deployment." />
        <meta property="og:url" content="https://joseign.com/" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* — Twitter Card — */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joseign_brand" />
        <meta name="twitter:title" content="Joseign – Landing Page Optimization & SaaS Development" />
        <meta name="twitter:description" content="Tech company delivering high-converting landing pages, SaaS platforms, and expert UI/UX design." />
        <meta name="twitter:image" content="https://joseign.com/og-cover.jpg" />

        {/* — Favicons & theme — */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#B63E96" />
        <meta name="theme-color" content="#B63E96" />

        {/* — Robots (index + follow) — */}
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        {/* — Structured data — */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <TransitionEffect />

      <main className="w-screen overflow-hidden">
        <AIPopUp/>
        <Hero/>
        <Trust/>
        <Services/>
        <ProjectsSection/>
        <Values/>
        <Testimonials/>
        <Process/>
        <Blogs/>
        <Newsletter/>
      </main>
    </>
  );
}


/** ---------- 2 · JSON-LD ---------- **/
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Joseign",
  "alternateName": "Joseign Agency",
  "url": "https://joseign.com",
  "logo": "https://joseign.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/joseign",
    "https://www.instagram.com/joseign.brand",
    "https://x.com/joseign_brand",
    "https://www.threads.net/@joseign.brand"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+447783517481",
    "contactType": "sales",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "French", "Arabic", "Portuguese"]
  }],
  "foundingDate": "2022",
  "founders": [{ "@type": "Person", "name": "Joseph Bouhlel" }],
  "numberOfEmployees": "1-10"
};
/* Recommended Organization properties  [oai_citation:2‡developers.google.com](https://developers.google.com/search/docs/appearance/structured-data/organization?utm_source=chatgpt.com) */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Joseign",
  "description": "Tech company specializing in landing page optimization and SaaS platform development with expert UI/UX design services",
  "url": "https://joseign.com",
  "logo": "https://joseign.com/logo.png",
  "priceRange": "$$",
  "areaServed": "Worldwide",
  "serviceType": ["UI/UX Design", "Landing Page Optimization", "SaaS Development", "Brand Identity Design", "Web Development", "Deployment & Monitoring"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Joseign Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "User-centered digital experiences and interface design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Page Optimization",
          "description": "High-converting landing pages designed to maximize user engagement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SaaS Platform Development",
          "description": "Complete SaaS platform development from design to deployment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Identity Design",
          "description": "Comprehensive brand guidelines and visual identity creation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deployment & Monitoring",
          "description": "Professional deployment and continuous monitoring services"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Joseign offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Joseign specializes in landing page optimization, SaaS platform development, UI/UX design, development, deployment, and monitoring services."
      }
    },
    {
      "@type": "Question",
      "name": "Who do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with SaaS companies, startups, small businesses, and corporations looking for high-converting digital products and optimized user experiences."
      }
    }
  ]
};