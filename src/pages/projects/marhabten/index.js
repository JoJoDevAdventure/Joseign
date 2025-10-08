import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import marhabtenData from "@/data/caseStudies/marhabten";
import Head from "next/head";
import { useState } from "react";


const Marhabten = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title>Marhabten Case Study – E-commerce Platform | Joseign</title>
        <meta
          name="description"
          content="Explore Joseign's work on Marhabten, a modern e-commerce platform. Complete UI/UX design, branding, and development for a seamless shopping experience."
        />
        <link rel="canonical" href="https://joseign.com/projects/marhabten" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Marhabten Case Study – E-commerce Platform by Joseign" />
        <meta property="og:description" content="Modern e-commerce design and development with optimized user experience and conversion flows." />
        <meta property="og:url" content="https://joseign.com/projects/marhabten" />
        <meta property="og:image" content="https://joseign.com/projects/marhabten/marhabten.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marhabten Case Study – E-commerce Platform" />
        <meta name="twitter:description" content="Modern e-commerce platform designed and developed by Joseign." />
        <meta name="twitter:image" content="https://joseign.com/projects/marhabten/marhabten.png" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={marhabtenData}/>
    </>
  );
};
export default Marhabten;
