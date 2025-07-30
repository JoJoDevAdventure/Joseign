import CaseStudy from "@/components/CaseStudy/CaseStudy";
import TransitionEffect from "@/components/TransitionEffect";
import replicaideData from "@/data/caseStudies/replicaide.data";
import Head from "next/head";
import { useState } from "react";


const Replicaide = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Head>
        <title> Joseign | ReplicAIDE</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect/>
      <CaseStudy caseStudy={replicaideData}/>
    </>
  );
};
export default Replicaide;
