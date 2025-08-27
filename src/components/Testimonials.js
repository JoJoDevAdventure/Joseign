import { testimonialsData } from "@/data/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

function TestimonialCard({ type, title, summary, link, imageLink }) {
  return (
    <article className="w-full flex gap-8 md:gap-6 items-stretch justify-between rounded-2xl border border-black/10 bg-white dark:bg-dark p-6 relative lg:flex-col lg:p-6 xs:p-4 group overflow-hidden">
      {/* Card glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[1.5rem]" />

      {/* Media */}
      <div className="relative w-[46%] lg:w-full">
        {/* aspect keeps it from collapsing */}
        <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-lg overflow-hidden">
          {/* Hover GIF overlay */}
          <Image
            className="absolute inset-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            src={`${imageLink}.gif`}
            alt={title}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
            priority={false}
          />
          {/* Static JPG */}
          <Image
            className="absolute inset-0 object-cover"
            src={`${imageLink}.jpg`}
            alt={title}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-start justify-between mt-0 lg:mt-2">
        <div>
          {type && (
            <span className="text-primary font-medium text-base md:text-sm">
              {type}
            </span>
          )}
          <a href={link} target="_blank" rel="noreferrer" className="block">
            <h3 className="my-2 text-left text-2xl md:text-xl font-bold dark:text-light">
              {title}
            </h3>
          </a>
          <p className="my-2 text-sm md:text-[13px] leading-relaxed text-dark/80 dark:text-light">
            {summary}
          </p>
        </div>
        {link && (
          <a href={link} className="mt-4 inline-flex self-end lg:self-start">
            <button className="animated-gradient text-white text-base md:text-sm font-medium px-5 py-2 rounded-md hover:scale-105 transition">
              Visit Project
            </button>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // sync active dot with scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const slideW = el.firstElementChild?.getBoundingClientRect().width || 1;
      const idx = Math.round(el.scrollLeft / (slideW + 32)); // 32 ~ gap-8
      setActive(clamp(idx, 0, (testimonialsData?.length || 1) - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children);
    const target = children[idx];
    target?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const onPrev = () =>
    scrollTo(clamp(active - 1, 0, testimonialsData.length - 1));
  const onNext = () =>
    scrollTo(clamp(active + 1, 0, testimonialsData.length - 1));

  return (<>
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 xs:py-12 bg-[#F5F5F5]">
      <div className="flex flex-col gap-12 items-center">
        {/* Left: headline (1/4) */}
        <motion.div
          className="w-full text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="text-primary font-semibold text-xs tracking-wider uppercase mb-3">
            100% satisfaction guaranteed
          </p>
          <h2 className="text-[34px] lg:text-[40px] md:text-[32px] sm:text-[28px] xs:text-[24px] font-extrabold leading-tight">
            <span className="text-primary">Zero</span> Dispointed Clients,
            <br/>
            <span className="text-primary">Flawless</span> Execution.
          </h2>
        </motion.div>

        {/* Right: list (3/4) */}
        <div className="w-full overflow-visible">
          <motion.div
            className="relative over"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="flex overflow-x-scroll snap-x snap-mandatory gap-8 no-scrollbar pb-2 pr-2 overflow-visible h-full"
            >
              {testimonialsData && testimonialsData.length > 0 ? (
                testimonialsData.map((t, i) => (
                  <article
                    key={`${t.title}-${i}`}
                    className="snap-center shrink-0 w-full h-full overflow-visible"
                  >
                    {/* Slide Card */}
                    <div className="rounded-[28px] overflow-hidden bg-white dark:bg-neutral-900 border-2 border-primary/50 ring-1 ring-primary/5 p-12 md:p-2">
                      <div className="flex flex-row w-full md:flex-col">
                        {/* Left visual */}
                        <div className="relative flex w-full bg-black md:w-full min-w-[800px] min-h-[450px] md:min-w-full md:min-h-[250px] rounded-xl md:rounded-3xl overflow-hidden">
                            <Image
                              className="object-cover md:object-cover"
                              src={`${t.img}.jpg`}
                              alt={t.title}
                              fill
                              priority={i === 0}
                            />
                        </div>
                        {/* Right content */}
                        <div className="relative flex">
                          <div className="relative md:p-2 p-10 lg:p-12 dark:bg-neutral-800 flex flex-col">
                            <p className="text-xs font-semibold tracking-wide text-neutral-500 mb-2 uppercase">
                              {t.type}
                            </p>
                            <h3 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4 text-neutral-900 dark:text-white">
                              {t.title}
                            </h3>
                            <div
                              className="flex items-center gap-1 text-[#F5A524] mb-3"
                              aria-hidden
                            >
                              <span>★★★★★</span>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-200 text-sm md:text-base leading-relaxed md:max-h-36 md:overflow-hidden">
                              “{t.summary}”
                            </p>
                            {t.link && (
                              <a
                                href={t.link}
                                className="mt-6 inline-flex items-center text-primary font-medium hover:underline md:hidden"
                              >
                                View project →
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="shrink-0 w-full rounded-xl border border-black/10 bg-white/60 p-8 text-center text-sm text-muted-foreground">
                  No testimonials found.
                </div>
              )}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    active === i
                      ? "w-12 bg-primary dark:bg-white"
                      : "w-6 bg-primary/20 dark:bg-white/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="absolute -bottom-0 md:right-0 md:left-0 md:-bottom-2 right-0 flex items-center gap-3 md:justify-between md:w-full">
              <button
                onClick={onPrev}
                className="h-12 w-12 text-2xl border-1 border-primary rounded-full bg-white dark:bg-neutral-800 border shadow hover:scale-105 transition grid place-items-center"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={onNext}
                className="h-12 w-12 text-2xl border-1 border-primary rounded-full bg-white dark:bg-neutral-800 border  shadow hover:scale-105 transition grid place-items-center"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <style jsx global>{`
      /* Hide scrollbars cross-browser for elements using .no-scrollbar */
      .no-scrollbar {
        -ms-overflow-style: none; /* IE/Edge */
        scrollbar-width: none;    /* Firefox */
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;            /* Chrome/Safari */
        width: 0;
        height: 0;
        background: transparent;
      }
    `}</style>
  </>);
}
