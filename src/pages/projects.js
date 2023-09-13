import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CM from "../../public/images/projects/CM.jpg";
import HF from "../../public/images/projects/HF.jpg";
import afa from "../../public/images/projects/afa.jpg";
import blonk from "../../public/images/projects/blonk.jpg";
import estate from "../../public/images/projects/estate.jpg";
import kiki from "../../public/images/projects/kiki.jpg";

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light  dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="{max-:768px} 100vw, {max-width:1200px} 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title> Joseign | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Blonk : Executive Search "
                img={blonk}
                summary="Blonk is a new way to recruit, combining cutting-edge digital marketing and best headhunting techniques. 
                I redesigned Blonk's UI/UX, changing the overall structure, Enhancing the UI and Adding animations."
                link="https://blonk.co"
                type="UI/UX Redesign"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="High Fit: Workout plans"
                img={HF}
                link="/home"
                type="UI/UX Design"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="KiKi: Luxury beach accessories"
                img={kiki}
                link="/home"
                type="Branding | Logo Design"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Air Force Artisans"
                img={afa}
                summary="lorem lorem"
                link="/"
                type="Branding | UI/UX Design | Web Dev"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="E-state: Real estate company"
                img={estate}
                link="/home"
                type="UI/UX Design"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Crypto Marketplace"
                img={CM}
                link="/home"
                type="Branding | UI/UX Design"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Projects;
