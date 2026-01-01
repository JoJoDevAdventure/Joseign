'use client';

import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

export default function ExecutionSection({ execution }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const ctx = useRef(null);
  const calcHeight = `calc(80vh + ${execution.phases.length * 10}vw)`;

  useLayoutEffect(() => {
    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // Wait for a brief moment to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 0));

        ctx.current = gsap.context(() => {
          const panels = gsap.utils.toArray(".phaseSlide", trackRef.current);

          gsap.to(panels, {
            xPercent: -150, // Slide to show all panels fully
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              pin: sectionRef.current,   // pin the section itself
              scrub: 1,
              invalidateOnRefresh: true,
              onEnter: () => {
                sectionRef.current.style.height = calcHeight;
              },
              onEnterBack: () => {
                sectionRef.current.style.height = calcHeight;
              },
              onLeave: () => {
                // Drop out of pinning and position at the very bottom of its container
                Object.assign(sectionRef.current.style, {
                  position: "absolute",
                  left:"0",
                  top: "auto",
                  bottom: "0",
                  transform: "none",
                });
              },
              onLeaveBack: () => {
                // Restore normal flow when the section comes back into view
                Object.assign(sectionRef.current.style, {
                  position: "",
                  top: "",
                  bottom: "",
                  transform: "",
                });
              },
              end: () =>
                "+=" +
                (trackRef.current.scrollWidth - window.innerWidth), // horizontal distance
              onUpdate: () => {
                if (sectionRef.current) {
                  sectionRef.current.style.transform = "translate3d(0,0,0)";
                }
              },
              onRefresh: () => {
                if (sectionRef.current) {
                  sectionRef.current.style.transform = "translate3d(0,0,0)";
                }
              },
            },
          });

          ScrollTrigger.refresh(); // Force recalculation after initialization
        }, sectionRef);
      }
    })();

    return () => ctx.current?.revert();
  }, [execution.phases]);

  return (
    <>
    {/* Mobile version */}
    <section className="hidden md:block px-6 py-12">
      <h2 className="mb-6 text-2xl font-display font-semibold">
        {execution.title}
      </h2>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        {execution.description}
      </p>
      <div className="space-y-8">
        {execution.phases.map((phase, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, margin: "-10% 0px" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold">{phase.name}</h3>
            <p className="text-muted-foreground text-sm">{phase.details}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Desktop version */}
    <section
      ref={sectionRef}
      className="flex flex-col h-screen w-screen isolate py-12 relative z-10 bg-background bg-white/50 backdrop-blur-2xl transition-all duration-500 md:hidden"
    >
      <header className="top-0 z-20 bg-offwhite py-24 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-row md:flex-col gap-10 px-6 md:gap-20 justify-between">
          <h2 className="md:w-1/2 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold">
            {execution.title}
          </h2>
          <p className="md:w-1/2 max-w-md text-lg leading-relaxed text-muted-foreground">
            {execution.description}
          </p>
        </div>
      </header>

      <div ref={trackRef} className="flex flex-row md:flex-col overflow-x gap-12">

        {execution.phases.map((p, i) => (
          <div key={i} className="phaseSlide flex flex-col h-[80%] w-[35vw] md:w-full items-center justify-center px-8">
            <div className="relative mb-4 h-[400px] bg-muted/40 w-[35vw] md:w-full">
              {p.img && <img src={p.img} alt={p.name} className="object-cover w-full h-full" />}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{p.name}</h3>
            <p className="text-center text-muted-foreground text-sm">{p.details}</p>
          </div>
        ))}

      </div>
    </section>
    </>
  );
}