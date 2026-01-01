import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import pearsonData from "@/data/caseStudies/pearson";
import Head from "next/head";

const PearsonPage = () => {
  return (
    <>
      <Head>
        <title>PEARSON Case Study – EdTech Landing Page | Joseign</title>
        <meta
          name="description"
          content="See how Joseign designed a high-converting landing page for PEARSON's EdTech platform, driving 165% increase in free trial sign-ups."
        />
        <link rel="canonical" href="https://joseign.com/projects/pearson" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="PEARSON Case Study – EdTech Landing Page by Joseign" />
        <meta property="og:description" content="EdTech landing page with 165% increase in trial sign-ups." />
        <meta property="og:url" content="https://joseign.com/projects/pearson" />
        <meta property="og:image" content="https://joseign.com/projects/pearson/landing.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PEARSON Case Study – Online Learning Platform" />
        <meta name="twitter:description" content="Landing page design that converted 165% more students." />
        <meta name="twitter:image" content="https://joseign.com/projects/pearson/landing.png" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={pearsonData}/>
    </>
  );
};

export default PearsonPage;
