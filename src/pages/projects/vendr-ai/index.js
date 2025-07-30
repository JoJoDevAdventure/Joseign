import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState } from "react";
import { caseStudy } from "./vendrai";


const Replicaide = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title> Joseign | Projects | VendrAI</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={caseStudy}/>
    </>
  );
};
export default Replicaide;
