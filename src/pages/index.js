import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";

import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightProfilePic from "../../public/images/profile/developer-pic-1.png";
import darkProfilePic from "../../public/images/profile/developer-pic-3.png";
import lightBulb from "../../public/images/svgs/badge.png";
import Layout from "../components/Layout";

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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 md:!pt-0 lg:!pt-0 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={lightProfilePic}
                alt="JB"
                className="w-full h-auto lg:hidden md:inline-block md:w-80 dark:hidden"
                priority
                sizes="{max-width:768px} 100vw, {max-width:1200px} 50vw, 50vw"
              ></Image>
              <Image
                src={darkProfilePic}
                alt="JB"
                className="hidden w-full h-auto lg:hidden dark:md:inline-block md:w-80 dark:inline"
                priority
                sizes="{max-width:768px} 100vw, {max-width:1200px} 50vw, 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              ></AnimatedText>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled Graphic design and UI/UX Designer, I am dedicated to turning
                ideas into innovative digital products. Explore my latest
                projects and articles, showcasing my expertise in Graphic design, Branding and UI/UX.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="projects"
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 h-12
                 rounded-lg text-lg font-semibold hover:text-dark dark:hover:text-light hover:bg-light dark:hover:bg-dark
                border-2 border-solid border-transparent hover:border-dark dark:hover:border-light w-100 md:text-base"
                >
                  My projects
                </Link>

                <Link
                  href="mailto:jojos.b.dev@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="JB" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
