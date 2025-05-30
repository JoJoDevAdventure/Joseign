
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Process from "@/components/Process";
import ProjectsSection from "@/components/Projects";
import Services from "@/components/Services";
import TransitionEffect from "@/components/TransitionEffect";
import Trust from "@/components/Trust";
import Values from "@/components/Values";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
      <title> Joseign | Home</title>
        <meta name="description" content="Joseph I'm Graphic designer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 7 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life." />
      </Head>
      <TransitionEffect />

      <main className="w-screen overflow-hidden">
        <Hero/>
        <Trust/>
        <Services/>
        <ProjectsSection/>
        <Values/>
        <Process/>
        <Blogs/>
        <Newsletter/>
      </main>
    </>
  );
}
