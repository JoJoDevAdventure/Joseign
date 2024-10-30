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
            company="Solary e-sport"
            companyLink=""
            time="2018 - 2019"
            address="Remote"
            work="Designed logos, banners, brand identities, and Twitch stream decorations for Solary, a top e-sports organization. Solary has a massive following with over 695,000 followers on Twitch and 2.2 million followers across various platforms, regularly drawing thousands of viewers to their streams/"
          />

          <Details
            position="Product & UI/UX Designer"
            company="Joseign"
            companyLink=""
            time="August 2019 - Present"
            address="Remote / Worldwide"
            work="Founded a design agency during the pandemic, helping over 50 businesses scale through optimized conversions, trend-aligned UI updates, and enhanced user experiences."
          />

          <Details
            position="UI/UX Team Lead"
            company="Blonk Group"
            companyLink=""
            time="February 2020 - March 2021"
            address="France"
            work="Led the UI/UX Design team to revamp the company's website and mobile app, collaborating closely with developers to elevate the platform's user experience and interface."
          />

          <Details
            position="Graphic & UI/UX Designer"
            company="Venn Telecom"
            companyLink=""
            time="April 2021 - July 2022"
            address="Belgium"
            work="Enhanced the digital presence of Venn Telecom, a leader in the communication industry. My work focused on elevating their branding and visuals, contributing to their innovative reputation in sectors such as SD-WAN and remote connectivity."
          />

          <Details
            position="Senior UI/UX Product Designer"
            company="Enterprise name"
            companyLink=""
            time="August 2022 - August 2024"
            address="Paris"
            work="Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
