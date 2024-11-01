import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ad from "../../../public/images/projects/ad.jpg";
import afa from "../../../public/images/projects/afa.jpg";
import blonk from "../../../public/images/projects/blonk.jpg";
import debook from "../../../public/images/projects/debook.jpg";
import estate from "../../../public/images/projects/estate.jpg";
import Controller from "../../../public/images/projects/gaming.jpg";
import HF from "../../../public/images/projects/HF.jpg";
import icookpad from "../../../public/images/projects/iCookPad.gif";
import letskate from "../../../public/images/projects/LetsSkate.gif";
import mychoc from "../../../public/images/projects/mychoc.jpg";
import pf from "../../../public/images/projects/PF.jpg";
import plonkkaa from "../../../public/images/projects/Plonkkaa.jpg";
import rep from "../../../public/images/projects/ReplicAIDE.jpg";
import rps from "../../../public/images/projects/rps.gif";
import spec from "../../../public/images/projects/spec.jpg";
import venn from "../../../public/images/projects/Venn.jpg";

import { useState } from "react"; // Import useState
import ParticlesCont from "../../components/ParticlesContainer";

const FeaturedProject = ({ type, title, summary, img, link }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <article
      className={`w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light  dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ${
        isHovered ? "hover-zoom" : ""
      }`}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl sm:-right-2 sm:h-[102%] sm:w-ful sm:rounded-[1,5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform transform-gpu duration-1000"
          priority
          sizes="{max-:768px} 100vw, {max-width:1200px} 50vw, 50vw"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }} // Apply zoom effect
          onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
          onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <article
      className={`w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4 ${
        isHovered ? "hover-zoom" : ""
      }`}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform transform-gpu duration-1000"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }} // Apply zoom effect
          onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
          onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg d:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title> Joseign | Projects</title>
        <meta
          name="description"
          content="A large catalogue displaying my latest projects, from Branding to Graphic design, UI/UX Design and even social media posts design."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <ParticlesCont />
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl z-10"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm::gap-y-0">
            <div className="col-span-12">
              <FeaturedProject
                title="ReplicAIDE"
                img={rep}
                summary="ReplicAIDE help agencies and businesses automate customer interactions, cut costs, and convert more leads with our human-like AI voice assistants, My role was conducting research to improve the user experience and interface for their landing page and CRM dashboard."
                link="https://replicaide.com"
                type="Product Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Venn Telecom"
                img={venn}
                link="https://www.venntelecom.com"
                type="Product Design || Graphic Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="DEBOOK: WEB3 Library"
                img={debook}
                link="https://www.figma.com/file/I9d7Ibm6Lz7CfsAZrkHgYe/Debook-WEB3?type=design&node-id=0-1&mode=design&t=pwOo41sAZAb546oh-0"
                type="Web UI/UX Design || Web Dev"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Plonkkaa Ltd."
                img={plonkkaa}
                summary="Plonkkaa is the revolution of greeting cards, I led a team of designers in creating mockups and detailed UI designs for the entire Plonkaa platform. This included the landing page, customer-facing interface, and the designer dashboard. My responsibilities ranged from conceptualizing the initial designs to delivering a full, polished UI for both the customer side and the designers’ portal. I also collaborated on refining the user experience and ensuring a cohesive visual identity across the platform."
                link="https://www.figma.com/design/P89X8TKDry4aRAs6MDUlsC/Plonkaa-UI?node-id=424-961&node-type=frame&t=Fp6lcsLUPAkoXzjO-11"
                type="Branding || Product Team Lead Designer"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="E-state: Real estate company"
                img={estate}
                link="https://www.figma.com/file/anzu6Wb4mE0uDlHVu92HKj/E-state?type=design&node-id=192-2455&mode=design&t=fRyXUy2kSaYa4UJ8-11"
                type="Web UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Blonk : Executive Search"
                img={blonk}
                link="https://blonk.co"
                type="Web & Mobile App Design Team Lead"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Addict Nutrition Sport"
                img={ad}
                summary="AD Is a french company specialized in supplements, My role was to create a detailed branding guideline from scratch, including logo style, colours, imagery and more..."
                link="https://addictsportnutrition.com"
                type="Branding || UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="My Chocolate Shop"
                img={mychoc}
                link="https://drive.google.com/file/d/1pQ9T9lToDH8bNdlqAEK4-IsBX2-uxwFb/view?usp=sharing"
                type="Branding"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Spectatio"
                img={spec}
                link="https://drive.google.com/file/d/1VyzUe0c1oV_WBXUziiaJAe9H4sj1XYPY/view?usp=sharing"
                type="Branding"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Air Force Artisans"
                img={afa}
                summary="I collaborated with a team of sneakers artisans to launch a company of sneakers customization, my role was to create a branding guide-lines, design a website with Figma and Fullstack develope it using Vue.js and Django, Deploy the website and Design social media posts"
                link="https://www.figma.com/file/bPN2xSCKaU4AsDOrmDLCqo/Air-Force-Artisans?type=design&node-id=0-1&mode=design&t=dkV2qc4vX8UqI1OQ-11"
                type="Branding || Social Media Design || UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="High Fit: Workout plans"
                img={HF}
                link="https://www.figma.com/file/anzu6Wb4mE0uDlHVu92HKj/E-state?type=design&node-id=192-2455&mode=design&t=fRyXUy2kSaYa4UJ8-11"
                type="Web UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Controller Shop"
                img={Controller}
                link="https://www.figma.com/file/yi1lqFHFj0soAWLeZrHGJc/Controller-shop-(Sold)?type=design&node-id=63-6930&mode=design&t=vXcy69U5zvcyUj6j-11"
                type="Product UI/UX Design"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="PROFHIMA"
                img={pf}
                summary="PROFHIMA is a construction company based in France, I helped the owner to design his logo, then furniture such as business card, envelope, shirts... Then I designed his website, built it and deployed online, a satisfied client happy with the service I provided."
                link="https://profhima.fr"
                type="Branding || Graphic design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Let's Skate: Social Media"
                img={letskate}
                link="https://github.com/JoJoDevAdventure/Let-s-Skate"
                type="Mobile App UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="iCookPad"
                img={icookpad}
                link="https://github.com/JoJoDevAdventure/iCookPad"
                type="Mobile App UI/UX Design"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="RPS Multiplayer"
                img={rps}
                summary="Modern Rock Paper Scissors game design, made using Figma and Illustrator for the game components and illustrations, Designed for iPhone respecting apple's HIG (Human Interface Guidelines)."
                link="https://www.figma.com/file/Vq6osRrEemkROeWGVcpVhE/RPS-Multiplayer?type=design&mode=design"
                type="Mobile App UI/UX Design"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Projects;
