import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import vendraiData from "@/data/caseStudies/vendrai";
import Head from "next/head";
import { useState } from "react";


const VendrAI = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title>Vendr AI Case Study – AI-Powered SaaS Platform | Joseign</title>
        <meta
          name="description"
          content="Discover Joseign's design and development of Vendr AI, an AI-powered SaaS platform. Complete branding, UI/UX design, and full-stack development for intelligent automation."
        />
        <link rel="canonical" href="https://joseign.com/projects/vendr-ai" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vendr AI Case Study – AI-Powered SaaS by Joseign" />
        <meta property="og:description" content="AI-powered SaaS platform with complete branding, UI/UX design, and development." />
        <meta property="og:url" content="https://joseign.com/projects/vendr-ai" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vendr AI Case Study – AI-Powered SaaS Platform" />
        <meta name="twitter:description" content="Complete SaaS development with AI-powered features and modern design." />
        <meta name="twitter:image" content="https://joseign.com/og-cover.jpg" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={vendraiData}/>
    </>
  );
};
export default VendrAI;
