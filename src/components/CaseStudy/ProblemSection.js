import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const scribbleVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.6, ease: "easeInOut" },
  },
};

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ProblemSection = ({ problem }) => {

  const accentColor = problem.color ?? '#000000';

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px", once: false });

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-offwhite py-32 md:py-20"
    >
      {/* background scribble */}
      <motion.svg
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="pointer-events-none absolute right-32 top-52 -z-10 h-[70%] w-[50%] translate-x-1/4 -translate-y-1/4 rotate-12 md:hidden"
        viewBox="0 0 1200 900"
        fill="none"
      >
        <motion.path
          variants={scribbleVariants}
          d="M150 800C400 650 450 200 750 300C1030 390 930 780 1180 580"
          stroke={accentColor}
          strokeWidth="170"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* black flourish line bottom‑left */}
      <motion.svg
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        className="pointer-events-none absolute left-0 bottom-1/2 -z-10 w-[50%] md:top-24 md:w-full md:right-0 md:bottom-64"
        viewBox="0 0 600 200"
        fill="none"
      >
        <path
          d="M10 100C150 180 300 20 580 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>

      <div className="mx-auto gap-16 flex flex-col px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8">
        {/* left title & images */}
        <div className="relative flex flex-row gap-12 md:flex-col md:items-center">
          {/* big title */}
          <motion.h2
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-display text-[clamp(2rem,7vw,6rem)] font-semibold leading-none"
          >
            The <br/> Challenge
          </motion.h2>

            {/* top small image */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative h-72 w-72 md:w-full bg-muted/40 rounded-xl"
            >
              {problem.image_1 && (
                <Image
                  src={problem.image_1}
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              )}
            </motion.div>
        </div>

        {/* right description & CTA */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-row w-full items-end justify-end gap-12"
        >
                      {/* bottom small */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative bottom-0 h-52 w-52 bg-muted/40 md:ml-0 md:hidden"
            >
              {problem.image_3 && (
                <Image
                  src={problem.image_3}
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              )}
            </motion.div>

            {/* bottom small */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative bottom-0 ml-12 h-[420px] w-[420px] bg-muted/40 md:ml-0 md:hidden"
            >
              {problem.image_3 && (
                <Image
                  src={problem.image_2}
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              )}
            </motion.div>
            <div>

          <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
            {problem.text}
          </p>

          <button className="w-max rounded bg-black px-8 py-3 text-base font-medium text-white transition hover:scale-105" style={{backgroundColor: accentColor}}>
            The solution
          </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;