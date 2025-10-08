import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import replicaideData from "@/data/caseStudies/replicaide";
import Head from "next/head";
import { useState } from "react";


const Replicaide = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title>ReplicAIDE Case Study – AI SaaS Platform | Joseign</title>
        <meta
          name="description"
          content="Discover how Joseign designed and developed ReplicAIDE, a B2B SaaS platform for AI agents, from concept to production in 6 weeks. Full-stack development, UI/UX design, and branding."
        />
        <link rel="canonical" href="https://joseign.com/projects/replicaide" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="ReplicAIDE Case Study – AI SaaS Platform by Joseign" />
        <meta property="og:description" content="Complete SaaS delivery: branding, UI/UX design, and full-stack development for an AI agents platform." />
        <meta property="og:url" content="https://joseign.com/projects/replicaide" />
        <meta property="og:image" content="https://joseign.com/projects/replicaide/rep.gif" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ReplicAIDE Case Study – AI SaaS Platform" />
        <meta name="twitter:description" content="From concept to production in 6 weeks. Complete SaaS development by Joseign." />
        <meta name="twitter:image" content="https://joseign.com/projects/replicaide/rep.gif" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={replicaideData}/>
    </>
  );
};
export default Replicaide;
