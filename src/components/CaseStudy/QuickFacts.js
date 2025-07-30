import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CountUp from "../CountUp";

/* ---------- variants ---------- */
const bgLine = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};
const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

/* ---------- component ---------- */
export default function QuickFactsSection({ quickFacts }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });

  const accent = quickFacts.color ?? "#000000";

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-offwhite">
      {/* === animated line background === */}
      <motion.svg
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="pointer-events-none absolute left-1/2 md:top-72 top-1/2 -z-10 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rotate-6"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <motion.path
          variants={bgLine}
          d="M100 650C300 500 380 140 680 240C930 320 820 720 1100 560"
          stroke={accent}
          strokeWidth="140"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* === PROCESS === */}
      <div className="mx-auto px-6 pt-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold"
        >
          Process
        </motion.h2>

        {/* placeholder process image / timeline (replace as needed) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-24 flex justify-center bg-muted/40 w-full h-[400px]"
        >
          <Image src={quickFacts.banner} className="w-full h-full bg-white/80 object-cover rounded-2xl" />
        </motion.div>

        {/* services / timeline / tools */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-row md:flex-col justify-between gap-y-16 md:gap-y-4 text-center w-[90%] md:w-full place-self-center mx-auto md:h-full"
        >
          <motion.div
            variants={fadeUp}
            className="relative bg-white min-h-[200px] md:h-full md:py-4 w-1/4 md:w-full flex flex-col items-center py-8 rounded-lg hover:translate-y-4 hover:bg-white/80 transition-all duration-500"
          >
            <h3 className="mb-3 text-3xl font-semibold" style={{ color: accent}}>Services</h3>
            <ul className="mx-auto max-w-xs text-muted-foreground list-none space-y-1 text-left">
              {quickFacts.services.map(service => (
                <li key={service}>- {service}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative bg-white min-h-[240px] md:h-full md:py-4  w-1/4 md:w-full flex flex-col items-center py-8 rounded-lg hover:translate-y-4 hover:bg-white/80 transition-all duration-500"
          >
            <h3 className="mb-3 text-3xl font-semibold" style={{ color: accent}}>Timeline</h3>
            <ul className="mx-auto max-w-xs text-muted-foreground list-none space-y-1 text-left">
              {quickFacts.timelines.map((time, idx) => (
                <li key={idx}>- {time}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative bg-white min-h-[200px] md:h-full  w-1/4 md:w-full flex flex-col items-center py-8 rounded-lg hover:translate-y-4 hover:bg-white/80 transition-all duration-500"
          >
            <h3 className="mb-3 text-3xl font-semibold" style={{ color: accent}}>Tools</h3>
            <ul className="mx-auto max-w-xs text-muted-foreground list-none space-y-1 text-left">
              {quickFacts.tools.map(tool => (
                <li key={tool}>- {tool}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* === RESULTS === */}
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center font-display text-[clamp(2rem,5vw,4rem)] font-semibold"
        >
          Results
        </motion.h2>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-y-12 text-center grid-cols-3"
        >
          <motion.div variants={fadeUp}>
            <CountUp
              from={0}
              to={quickFacts.results.conversionRate}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text h1 text-6xl font-black font-adorable"
              inlineStyle={{ color: accent}}
            />
            
            <p className="text-muted-foreground mt-1 text-sm">
              Conversion Rate
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <CountUp
              from={0}
              to={quickFacts.results.pageSpeed}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text h1 text-6xl font-black font-adorable"
              inlineStyle={{ color: accent}}

            />
            <p className="text-muted-foreground mt-1 text-sm">Page Speed</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <CountUp
              from={0}
              to={quickFacts.results.bounceRate}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text h1 text-6xl font-black font-adorable"
              inlineStyle={{ color: accent}}
            />
            <p className="text-muted-foreground mt-1 text-sm">Bounce Rate</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
