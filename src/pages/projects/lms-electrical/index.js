import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import lmsElectricalData from "@/data/caseStudies/lms-electrical";
import Head from "next/head";

const LMSElectricalPage = () => {
  return (
    <>
      <Head>
        <title>LMS Electrical Case Study – High-Converting Landing Page | Joseign</title>
        <meta
          name="description"
          content="See how Joseign created a high-converting landing page for LMS Electrical, generating 245% more leads and ranking #1 for commercial electrical services."
        />
        <link rel="canonical" href="https://joseign.com/projects/lms-electrical" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="LMS Electrical Case Study – Landing Page Design by Joseign" />
        <meta property="og:description" content="High-converting landing page with 245% lead increase and #1 SEO ranking." />
        <meta property="og:url" content="https://joseign.com/projects/lms-electrical" />
        <meta property="og:image" content="https://joseign.com/projects/lms-electrical/landing.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LMS Electrical Case Study – Landing Page Development" />
        <meta name="twitter:description" content="Landing page design that drove 245% more qualified leads." />
        <meta name="twitter:image" content="https://joseign.com/projects/lms-electrical/landing.png" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={lmsElectricalData}/>
    </>
  );
};

export default LMSElectricalPage;
