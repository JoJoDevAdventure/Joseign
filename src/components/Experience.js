import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between sm:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:mt-8">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:mb-8 dark:text-light md:text-6xl xs:text-4xl">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Video Editor"
              company="Youtube"
              companyLink=""
              time="2016 - 2018"
              address="Remote"
              work="Worked as a video editor for multiple Youtubers and edited over 100 video using Vegas Pro & Final Cut Pro."
            />

            <Details
              position="Graphic Designer"
              company="E-sport teams"
              companyLink=""
              time="2018 - 2019"
              address="Remote"
              work="Designed logos, banners, brand identities and twitch stream decoration for multiple e-sport teams using Photoshop & Illustrator."
            />

            <Details
              position="Logo designer"
              company="Fiverr"
              companyLink=""
              time="2019 - 2020"
              address="Remote"
              work="Worked with multiple small business owners to help them design the ideal logo, using illustrator and Procreate"
            />

            <Details
              position="Product designer & Design team lead"
              company="Upwork"
              companyLink=""
              time="2020-Present"
              address="Remote"
              work="Led the creation of visually appealing and user-centered product designs, fostered a collaborative environment and delivered innovative solutions that enhanced the company's design capabilities and drove its success."
            />

            <Details
              position="UI/UX Team Lead"
              company="Blonk"
              companyLink=""
              time="2020-2021"
              address="France, Paris"
              work="Led the recreation of Blonk's UI/UX, changing the overall structure, Enhancing the UI, adding mobile friendly features and multiple animations."
            />
            <Details
              position="Branding & Web designer"
              company="PROFHIMA"
              companyLink=""
              time="2021-2022"
              address="France, Nice"
              work="PROFHIMA is a construction company based in France, I helped the owner to design his logo, then furniture such as business card, envelope, shirts... Then I designed his website and the mobile version of it."
            />
            <Details
              position="Graphic designer | Video editor"
              company="Venn Telecom"
              companyLink=""
              time="2022-present"
              address="Belgium, Brussels"
              work="In Venn I helped a lot in creating graphic elements for external use by marketing teams, such as banners, posts, marketing videos, Also designing internal documents."
            />
            <Details
              position="Founder | Branding designer"
              company="Air Force Artisans"
              companyLink=""
              time="2023-present"
              address="France, Paris"
              work="I founded a team of sneakers artisans to launch a company of sneakers customization, my role was to create a branding guide-lines, design a website with Figma, collaborate with developers team and Design social media posts"
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
