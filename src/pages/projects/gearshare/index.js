import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import gearshareData from "@/data/caseStudies/gearshare";
import Head from "next/head";

const GearsharePage = () => {
  return (
    <>
      <Head>
        <title>Gearshare Case Study – Peer-to-Peer Marketplace MVP | Joseign</title>
        <meta
          name="description"
          content="See how Joseign built Gearshare, a complete peer-to-peer marketplace MVP for outdoor gear rental. Full-stack development with payments, reviews, and real-time availability."
        />
        <link rel="canonical" href="https://joseign.com/projects/gearshare" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gearshare Case Study – MVP Marketplace Development by Joseign" />
        <meta property="og:description" content="Complete marketplace MVP with payments, reviews, and real-time booking system." />
        <meta property="og:url" content="https://joseign.com/projects/gearshare" />
        <meta property="og:image" content="https://joseign.com/projects/gearshare/hero.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gearshare Case Study – Marketplace MVP Development" />
        <meta name="twitter:description" content="Full-stack MVP development for peer-to-peer gear rental marketplace." />
        <meta name="twitter:image" content="https://joseign.com/projects/gearshare/hero.png" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={gearshareData}/>
    </>
  );
};

export default GearsharePage;
