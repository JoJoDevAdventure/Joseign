import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import conceptAnimation from "../../public/concept.json";
import designAnimation from "../../public/design.json";
import discoveryAnimation from "../../public/discovery.json";
import launchAnimation from "../../public/launch.json";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const steps = [
  {
    title: "Discovery Call",
    description:
      "We start by listening — to your goals, your audience, and what’s been keeping you up at night. This sets the stage for everything to come.",
    animation: discoveryAnimation,
    buttonText: "Schedule Call"
  },
  {
    title: "Concept",
    description:
      "We explore concepts, directions, and early design thinking that lays the creative foundation for everything that follows.",
    animation: conceptAnimation,
    buttonText: "View Concepts"
  },
  {
    title: "Design",
    description:
      "We design intentionally — polished, strategic, and beautiful. Every pixel aligned to your goals and audience.",
    animation: designAnimation,
    buttonText: "See Design"
  },
  {
    title: "Launch",
    description:
      "Time to launch. We hand off assets, prep deliverables, and give you all the tools you need to go live with confidence.",
    animation: launchAnimation,
    buttonText: "Launch It"
  }
];

const Process = () => {
  const [selected, setSelected] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth <= 767
  );

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "joseign-free-call" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 xs:py-12 bg-[#F5F5F5] flex flex-col items-center">
      <motion.p
        className="text-primary font-semibold text-sm uppercase mb-2 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tired of the Endless Back-and-Forth?
      </motion.p>
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our 4-Step No-Stress Design Journey
      </motion.h2>
      {!isSmallScreen && (
        <div className="flex gap-16">
          {/* Step List */}
          <motion.div
            className="relative flex flex-col gap-0 w-[240px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              layout
              layoutId="stepHighlight"
              className="absolute left-0 w-full h-[72px] bg-white rounded-2xl shadow z-0"
              style={{
                top: `${selected * 72}px`
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`relative z-10 text-left px-6 py-5 rounded-2xl border border-transparent text-black transition-all duration-300 text-xl h-[72px]`}
              >
                {step.title.split(" ")[0]}
              </button>
            ))}
          </motion.div>

          {/* Main Display */}
          <motion.div
            className="flex gap-16 items-start justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Lottie Animation */}
            <Lottie
              key={selected} // force re-render on change
              animationData={steps[selected].animation}
              autoplay
              loop={false}
              style={{ width: 300, height: 300 }}
            />

            {/* Content */}
            <div className="max-w-md">
              <motion.h3
                key={steps[selected].title}
                className="text-[48px] font-light mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {steps[selected].title}
              </motion.h3>
              <motion.p
                key={steps[selected].description}
                className="text-lg text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {steps[selected].description}
              </motion.p>
              <button
                className="bg-primary text-white text-lg font-medium px-6 py-3 rounded-md"
                data-cal-namespace="joseign-free-call"
                data-cal-link="joseph-bouhlel/joseign-free-call"
                data-cal-config='{"layout":"month_view","theme":"light"}'
              >
                {steps[selected].buttonText}
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {isSmallScreen && (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-white border-2 border-primary rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Lottie
                animationData={step.animation}
                autoplay
                loop={false}
                style={{ width: 220, height: 220, maxWidth: "80vw" }}
              />
              <h3 className="text-[28px] font-semibold mb-3">{step.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                {step.description}
              </p>
              <button
                className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-md"
                data-cal-namespace="joseign-free-call"
                data-cal-link="joseph-bouhlel/joseign-free-call"
                data-cal-config='{"layout":"month_view","theme":"light"}'
              >
                {step.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Process;
 