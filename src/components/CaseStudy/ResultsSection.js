"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const ResultsSection = ({ results }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  // title grows from 1 → 1.8 as user scrolls this section
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);

  // Black flourish line grows as you scroll through this section
  const lineLength = useTransform(scrollYProgress, [0, 8], [0, 20]);

  const [idx, setIdx] = useState(0);
  const accent = results.color ?? "#FF511C";

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex flex-col items-center bg-offwhite py-32 md:py-20 z-0"
    >
      {/* === accent brush background (waves) === */}
      <motion.svg
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 -top-1/2 -z-10 h-[150%] w-[220%] -translate-x-1/4 rotate-2"
        viewBox="0 0 1800 900"
        fill="none"
      >
        <motion.path
          d="M0 600 C300 500 600 700 900 600 C1200 500 1500 700 1800 600"
          stroke={accent}
          strokeWidth="180"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.25"
        />
      </motion.svg>

      {/* BIG title that scales with scroll */}
      <motion.h2
        style={{ scale }}
        className="mb-24 text-center font-display text-[clamp(3rem,8vw,6rem)] font-semibold"
      >
        {results.title}
      </motion.h2>

      {/* viewport for iframe with laptop overlay */}
      <div className="relative mx-auto aspect-[16/10] w-full md:max-w-sm max-w-5xl md:h-[50vh] md:px-2 items-center h-full">
        {/* 80 % zoom OUT, but keep the same visible window */}
        <div className="relative h-full w-full overflow-hidden md:h-[725px] md:-mt-7 md:w-[340px] place-self-center self-center mx-auto md:rounded-[40px]">
          <iframe
            src={results.iframes[idx].link}
            title={results.iframes[idx].title}
            /*  ↓ shrink what’s inside …  */
            style={{
              transform: "scale(0.7)",
              transformOrigin: "top left",
              /*  …then expand the frame so the shrunken page still fills the hole */
              width: "143%", // 1 / 0.8  ≈ 1.25
              height: "143%",
            }}
            className="absolute inset-0 border-0 rounded-xl bg-white"
          />
        </div>

        {/* laptop frame overlay */}
        <Image
          src="/laptop-frame.png" // ← ensure this asset exists in /public
          alt="Laptop frame"
          fill
          className="pointer-events-none select-none object-contain mt-10 scale-125 md:hidden"
        />

        {/* laptop frame overlay */}
        <Image
          src="/phone.png" // ← ensure this asset exists in /public
          alt="Laptop frame"
          fill
          className="pointer-events-none select-none object-contain mt-24 scale-[158%] hidden md:block"
        />
      </div>

      {/* navigation buttons */}
      <div className="relative flex gap-4 -mt-16 md:mt-0 md:absolute md:-bottom-40">
        {results.iframes.map((frame, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`rounded-xl border border-black/20 text-sm font-medium transition-all duration-500 hover:-translate-y-2 ${
              i === idx
                ? "text-white"
                : "text-black bg-white/50 backdrop-blur-xl"
            }`}
            style={{
              backgroundColor: i === idx ? accent : "",
              padding: i === idx ? "0.5rem 1.5rem" : "0.5rem 1rem",
            }}
          >
            {frame.title}
          </button>
        ))}
      </div>

      {/* === black flourish line that draws with scroll === */}
      <motion.svg
        className="pointer-events-none absolute left-30 top-[20%] -z-10 w-[60%]"
        viewBox="0 0 600 120"
        fill="none"
      >
        <motion.path
          d="M20 60 C120 20 300 20 580 60"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength: lineLength }}
        />
      </motion.svg>
    </section>
  );
};

export default ResultsSection;
