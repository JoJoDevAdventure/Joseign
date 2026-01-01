import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import diamondAirData from "@/data/caseStudies/diamond-air";
import Head from "next/head";

const DiamondAirPage = () => {
  return (
    <>
      <Head>
        <title>Diamond Air Case Study – Premium HVAC Landing Page | Joseign</title>
        <meta
          name="description"
          content="See how Joseign built a premium landing page for Diamond Air HVAC, delivering 320% ROI increase and 4.2x more qualified service requests."
        />
        <link rel="canonical" href="https://joseign.com/projects/diamond-air" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Diamond Air Case Study – HVAC Landing Page by Joseign" />
        <meta property="og:description" content="Premium landing page with 320% ROI increase for HVAC services." />
        <meta property="og:url" content="https://joseign.com/projects/diamond-air" />
        <meta property="og:image" content="https://joseign.com/projects/diamond-air/landing.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diamond Air Case Study – Premium Landing Page" />
        <meta name="twitter:description" content="High-converting HVAC landing page with 4.2x more leads." />
        <meta name="twitter:image" content="https://joseign.com/projects/diamond-air/landing.png" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={diamondAirData}/>
    </>
  );
};

export default DiamondAirPage;
