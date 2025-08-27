
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
        <title>Joseign – Branding & CRO Agency | Design That Converts</title>
        {/* 42-46 chars = sweet-spot for full SERP display  [oai_citation:0‡searchengineland.com](https://searchengineland.com/title-tag-length-388468?utm_source=chatgpt.com) */}
        <meta
          name="description"
          content="Joseign is a conversion-obsessed branding agency helping SaaS & DTC brands 10× revenue through punchy UI/UX, CRO experiments & full-stack creative."
        /> {/* 150-160 chars  [oai_citation:1‡searchengineland.com](https://searchengineland.com/seo-meta-descriptions-everything-to-know-447910?utm_source=chatgpt.com) */}
        <link rel="canonical" href="https://joseign.com/" />

        {/* — Open Graph / Facebook — */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Joseign" />
        <meta property="og:title" content="Joseign – Branding & CRO Agency" />
        <meta property="og:description" content="Design that converts. Book your free call." />
        <meta property="og:url" content="https://joseign.com/" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* — Twitter Card — */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joseign_brand" />
        <meta name="twitter:title" content="Joseign – Branding & CRO Agency" />
        <meta name="twitter:description" content="Conversion-driven design from a senior UI/UX team." />
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Joseign offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full-stack branding, UI/UX design, and CRO sprints that 10× your conversions."
      }
    },
    {
      "@type": "Question",
      "name": "Who do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Growth-stage SaaS & DTC brands looking for design that sells, small businesses and big corporations."
      }
    }
  ]
};