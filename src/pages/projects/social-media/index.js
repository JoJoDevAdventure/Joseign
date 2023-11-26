import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import afa from "../../../../public/images/projects/afa.jpg";
import gymrat from "../../../../public/images/projects/gymrat.jpg";
import kiki from "../../../../public/images/projects/kiki.jpg";

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
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Projects;
