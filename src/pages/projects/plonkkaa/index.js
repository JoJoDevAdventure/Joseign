import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState } from "react";
import plonkkaaData from "../../../data/caseStudies/plonkkaa.data";


const Replicaide = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title> Joseign | Plonkkaa</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={plonkkaaData}/>
    </>
  );
};
export default Plonkkaa;
