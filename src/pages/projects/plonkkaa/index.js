import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import plonkkaaData from "@/data/caseStudies/plonkkaa";
import Head from "next/head";
import { useState } from "react";


const Plonkkaa = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title>Plonkkaa Case Study – Fintech App Design | Joseign</title>
        <meta
          name="description"
          content="Explore Joseign's UI/UX design work for Plonkkaa, a fintech application. Clean interfaces, intuitive flows, and modern branding for financial services."
        />
        <link rel="canonical" href="https://joseign.com/projects/plonkkaa" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Plonkkaa Case Study – Fintech App Design by Joseign" />
        <meta property="og:description" content="Fintech application design with clean UI/UX and modern branding for seamless financial experiences." />
        <meta property="og:url" content="https://joseign.com/projects/plonkkaa" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plonkkaa Case Study – Fintech App Design" />
        <meta name="twitter:description" content="Clean UI/UX design for modern fintech application." />
        <meta name="twitter:image" content="https://joseign.com/og-cover.jpg" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={plonkkaaData}/>
    </>
  );
};
export default Plonkkaa;
