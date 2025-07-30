import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import vendraiData from "@/data/caseStudies/vendrai";
import Head from "next/head";
import { useState } from "react";


const VendrAI = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title> Joseign | VendrAI</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={vendraiData}/>
    </>
  );
};
export default VendrAI;
