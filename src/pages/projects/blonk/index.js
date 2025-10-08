import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import blonkData from "@/data/caseStudies/blonk";
import Head from "next/head";


const BlonkPage = () => {
  return (
    <>
      <Head>
        <title>Blonk Case Study – Social Platform UI/UX | Joseign</title>
        <meta
          name="description"
          content="See how Joseign crafted the UI/UX design for Blonk, a modern social platform. Complete branding and interface design for engaging user experiences."
        />
        <link rel="canonical" href="https://joseign.com/projects/blonk" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blonk Case Study – Social Platform UI/UX by Joseign" />
        <meta property="og:description" content="Modern social platform design with engaging UI/UX and complete branding." />
        <meta property="og:url" content="https://joseign.com/projects/blonk" />
        <meta property="og:image" content="https://joseign.com/projects/blonk/blonk.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blonk Case Study – Social Platform UI/UX" />
        <meta name="twitter:description" content="Complete UI/UX design and branding for a modern social platform." />
        <meta name="twitter:image" content="https://joseign.com/projects/blonk/blonk.jpg" />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={blonkData}/>
    </>
  );
};
export default BlonkPage;
