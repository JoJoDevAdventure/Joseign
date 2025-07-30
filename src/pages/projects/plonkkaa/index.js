import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import plonkkaaData from "@/data/caseStudies/plonkkaa.data";
import Head from "next/head";
import { useState } from "react";


const Plonkkaa = () => {
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
