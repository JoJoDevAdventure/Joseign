import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import blonkData from "@/data/caseStudies/blonk";
import Head from "next/head";
import { useState } from "react";


const Blonk = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title> Joseign | Blonk</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={blonkData}/>
    </>
  );
};
export default Blonk;
