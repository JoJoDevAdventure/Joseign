import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duratoin: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return (
    <span className="dark:text-light" ref={ref}>
      {" "}
      +{" "}
    </span>
  );
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Joseign – Tech Company Specializing in UI/UX & SaaS Development</title>
        <meta
          name="description"
          content="Discover Joseign: A tech company specializing in landing page optimization and SaaS platform development. We offer UI/UX design, development, deployment, and monitoring services with 7+ years of experience."
        />
        <link rel="canonical" href="https://joseign.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Joseign – Tech Company Specializing in UI/UX & SaaS" />
        <meta property="og:description" content="Tech company specializing in landing page optimization and SaaS platforms. UI/UX Design, Development, Deployment, and Monitoring." />
        <meta property="og:url" content="https://joseign.com/about" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Joseign – Tech Company Specializing in UI/UX & SaaS" />
        <meta name="twitter:description" content="Tech company specializing in landing page optimization and SaaS platforms. 7+ years experience in UI/UX design and development." />
        <meta name="twitter:image" content="https://joseign.com/og-cover.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium dark:text-light/75">
                Hi, I&apos;m Joseph, Graphic designer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 7 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="my-4 font-medium dark:text-light/75">
                I believe that design is about more than just making things look
                pretty. it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium dark:text-light/75">
                Whether I&apos;m working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Joseph Bouhlel - Founder of Joseign, UI/UX Designer and Graphic Designer with 7+ years of experience"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="{max-width:768px} 100vw, {max-width:1200px} 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:flex-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={65} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Person",
    "name": "Joseph Bouhlel",
    "jobTitle": "Founder & UI/UX Designer",
    "description": "Graphic designer and UI/UX designer with 7 years of experience in creating beautiful, functional, and user-centered digital experiences.",
    "worksFor": {
      "@type": "Organization",
      "name": "Joseign"
    },
    "knowsAbout": ["UI/UX Design", "Graphic Design", "Web Development", "SaaS Development", "Landing Page Optimization"],
    "alumniOf": "Design & Development",
    "award": "50+ Satisfied Clients, 65+ Projects Completed"
  }
};

export default about;
