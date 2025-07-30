import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const scribbleVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const parentStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const StrategySection = ({ strategy }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-25% 0px" });
  const accent = strategy.color ?? "#FF511C";

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-offwhite py-32 md:py-0">
      {/* === yellow scribble background === */}
      <motion.svg
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="pointer-events-none absolute left-0 -bottom-48 md:top-12 -z-10 h-[140%] w-[200%] -translate-x-1/4 translate-y-1/4 rotate-6"
        viewBox="0 0 1600 900"
        fill="none"
      >
        <motion.path
          variants={scribbleVariants}
          d="M0 650C300 500 500 200 900 350C1200 450 1400 200 1600 350"
          stroke={accent}
          strokeWidth="180"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* === decorative flourish top-right === */}
      <motion.svg
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
        className="pointer-events-none absolute -right-8 top-[18%] -z-10 w-[25%] md:hidden"
        viewBox="0 0 400 120"
        fill="none"
      >
        <path
          d="M20 100C120 10 300 10 380 60"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>

      <div className="mx-auto px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 flex flex-row w-full justify-between md:flex-col-reverse">
        {/* Steps grid */}
        <motion.div
          variants={parentStagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-row md:flex-col gap-8"
        >
          {strategy.steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col relative">

              {/* headline & description */}
              <h3 className="mb-4 md:mb-2 text-3xl font-semibold">Step {idx + 1}</h3>
              <p className="mb-10 md:mb-4 text-muted-foreground max-w-xs">{step.description}</p>

              {/* image */}
              <div className="relative h-[540px] w-full bg-muted/40">
                {step.img && (
                  <Image
                    src={step.img}
                    alt=""
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
              {/* Section title bottom‑right */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="pointer-events-none mt-24 text-right font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold md:mt-8 md:mb-12 md:text-center"
      >
        The&nbsp;
        <br className="md:hidden" />
        <span className="font-bold" style={{color: accent}}>3</span>&nbsp;Steps <br className="md:hidden" />
        Process
      </motion.h2>
      </div>
    </section>
  );
};

export default StrategySection;