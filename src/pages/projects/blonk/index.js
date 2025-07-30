import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState } from "react";
import blonkData from "../../../data/caseStudies/blonk.data";


const Replicaide = () => {
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
