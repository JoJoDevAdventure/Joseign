import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CM from "../../public/images/projects/CM.jpg";
import HF from "../../public/images/projects/HF.jpg";
import letskate from "../../public/images/projects/LetsSkate.gif";
import pf from "../../public/images/projects/PF.jpg";
import venn from "../../public/images/projects/Venn.jpg";
import afa from "../../public/images/projects/afa.jpg";
import blonk from "../../public/images/projects/blonk.jpg";
import estate from "../../public/images/projects/estate.jpg";
import gymrat from "../../public/images/projects/gymrat.jpg";
import icookpad from "../../public/images/projects/iCookPad.gif";
import kiki from "../../public/images/projects/kiki.jpg";
import rps from "../../public/images/projects/rps.gif";

import { useState } from 'react'; // Import useState

const FeaturedProject = ({ type, title, summary, img, link }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <article
      className={`w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light  dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ${isHovered ? 'hover-zoom' : ''}`}>
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
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} // Apply zoom effect
          onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
          onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
      </div>
    </article>
  );
};



const Project = ({ type, title, img, link }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <article
      className={`w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4 ${isHovered ? 'hover-zoom' : ''}`}
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
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} // Apply zoom effect
          onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
          onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg d:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl">{title}</h2>
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
        <meta name="description" content="A large catalogue displaying my latest projects, from Branding to Graphic design, UI/UX Design and even social media posts design." />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm::gap-y-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Blonk : Executive Search "
                img={blonk}
                summary="Blonk is a new way to recruit, combining cutting-edge digital marketing and best headhunting techniques. 
                I redesigned Blonk's UI/UX, changing the overall structure, Enhancing the UI and Adding animations."
                link="https://blonk.co"
                type="Web & Mobile App UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Venn Telecom"
                img={venn}
                link="https://www.venntelecom.com"
                type="UI Redesign"
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
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Air Force Artisans"
                img={afa}
                summary="I collaborated with a team of sneakers artisans to launch a company of sneakers customization, my role was to create a branding guide-lines, design a website with Figma and Fullstack develope it using Vue.js and Django, Deploy the website and Design social media posts"
                link="https://airfa.shop"
                type="UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Gymrat"
                img={gymrat}
                link="https://www.instagram.com/gymrat.tn/"
                type="Clothing Design || Social Media Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="KiKi: Luxury beach accessories"
                img={kiki}
                link="https://www.instagram.com/kikibeach_conceptstore/"
                type="Branding || Social Media Design"
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
                title="High Fit: Workout plans"
                img={HF}
                link="https://www.figma.com/file/anzu6Wb4mE0uDlHVu92HKj/E-state?type=design&node-id=192-2455&mode=design&t=fRyXUy2kSaYa4UJ8-11"
                type="Web UI/UX Design"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Crypto Marketplace"
                img={CM}
                link="https://www.figma.com/file/OtTYhZcSQq4R2i1n0Yug4O/Crypto-Market-(work-in-progress)?type=design&mode=design&t=J0lcGQNI8nuWoKLZ-11"
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
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Projects;
