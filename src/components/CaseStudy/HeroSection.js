// components/HeroSection.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection({ hero }) {
  const accentColor = hero.color ?? '#000000';
  const titleVariants = {
    hidden: { x: -120, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { x: 120, opacity: 0, rotate: 0 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 8, // tilt once it appears
      transition: { duration: 0.9, ease: 'easeOut', delay: 0.2 },
    },
  };

  const scribbleVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1.6, ease: 'easeInOut', delay: 0.1 } },
  };

  const { scrollYProgress } = useScroll();
  const cardParallax = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <div className="relative isolate bg-offwhite py-28 md:py-8 w-full">
      {/* 👇 decorative scribble */}
      <motion.svg
        variants={titleVariants} /* keeps same fade‑in timing as the left title */
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="pointer-events-none absolute -left-1/3 md:-left-32 -top-1/4 md:-top-1/3 h-[140%] w-[140%] md:w-[180%] -translate-x-1/2 -translate-y-1/2 rotate-6 md:rotate-12 -z-10 bg-opacity-50"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <motion.path
          variants={scribbleVariants}
          d="M160 650C320 500 380 180 620 260C820 320 780 680 1040 540"
          stroke={accentColor}
          strokeWidth="140"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.3}
        />
      </motion.svg>

      <div className="container mx-auto flex flex-row md:flex-col justify-between items-start px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8">
        {/* LEFT – big title + copy */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col w-1/2 md:w-full"
        >
          <h1 className="font-display text-[min(18vw,11rem)] leading-[0.85] tracking-tight text-black">
            {hero.title}
          </h1>

          <p className="mt-10 max-w-md text-lg">{hero.slogan}</p>
          <p className="mt-4 max-w-md text-base text-muted-foreground">{hero.subtitle}</p>
        </motion.div>

        {/* RIGHT – tilted device card */}
        <motion.div
          style={{ y: cardParallax }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="relative w-[500px] md:w-full h-full md:mt-12"
        >
          <div className="rounded-2xl p-6 shadow-xl" style={{ backgroundColor: accentColor }}>
            {/* window dots */}
            <div className="mb-4 flex justify-end space-x-2">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#ffffff' }} />
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#ffffff' }} />
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "#ffffff" }} />
            </div>

            {/* “screen” + CTA */}
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gray-200/70">
                <Image
                  src={hero.image}
                  alt="FitFuel redesign hero"
                  className="h-full w-full rounded-xl object-cover"
                  width={640}
                  height={400}
                />
              </div>

              {/* CTA button */}
              <button
                className="absolute top-3 right-3 rounded-md px-3 py-1 text-xs font-semibold text-black shadow-md"
                style={{ backgroundColor: accentColor }}
              >
                Visit
              </button>
            </div>

            {/* list */}
            <ul className="mt-6 divide-y divide-white/10 text-lg font-medium text-white">
              {hero.scopes_of_work.map((scope, idx) => (
                <li key={scope} className="flex items-center justify-between py-3">
                  <span className="underline underline-offset-4">{scope}</span>
                  <span className="text-right text-xl font-bold tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </li>
              ))}
            </ul>

            {/* footnote */}
            <p className="mt-6 text-sm leading-snug text-white/50">{hero.scopes_description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}