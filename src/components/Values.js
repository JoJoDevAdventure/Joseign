import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const values = [
  {
    title: "Fast Turnaround",
    description:
      "Based on our call, we build a clear action plan and creative direction tailored to your brand — no fluff, just strategy that works.",
    image: "/fast.svg"
  },
  {
    title: "Concept Development",
    description:
      "Here’s where the magic starts. We explore visuals, directions, and vibes until we hit that spark — the concept that feels just right.",
    image: "/convert.svg"
  },
  {
    title: "Collaborative Process",
    description:
      "You’re part of the journey, not just the destination. We blend your insights with our expertise to create design solutions that truly reflect your brand and your goals.",
    image: "/collab.svg"
  },
{
  title: "End-to-End Service",
  description:
    "From the first sketch to final delivery, we handle every step. Our seamless workflow ensures consistency, quality, and care—so you can focus on what you do best while we bring your vision to life.",
  image: "/end.svg"
}
];

const fadeVariants = [
  { hidden: { opacity: 0, x: -50, y: -50 }, visible: { opacity: 1, x: 0, y: 0 } },
  { hidden: { opacity: 0, x: 50, y: -50 }, visible: { opacity: 1, x: 0, y: 0 } },
  { hidden: { opacity: 0, x: -50, y: 50 }, visible: { opacity: 1, x: 0, y: 0 } },
  { hidden: { opacity: 0, x: 50, y: 50 }, visible: { opacity: 1, x: 0, y: 0 } },
];

const Values = () => {
  const [expanded, setExpanded] = useState({ 0: 1, 1: 2 });

  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (index) => {
    const isTopRow = index < 2;
    setExpanded((prev) => ({
      ...prev,
      [isTopRow ? 0 : 1]: index
    }));
  };

  return (
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 xs:py-12 bg-[#F5F5F5] text-center">
      <p className="text-primary font-semibold text-sm uppercase mb-2">Tired of the Endless Back-and-Forth?</p>
      <h2 className="text-4xl xl:text-[34px] lg:text-[30px] md:text-[28px] sm:text-[24px] xs:text-[22px] font-extrabold mb-16">No More Design Headaches</h2>

      <motion.div
        className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-5 sm:gap-4 xs:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {values.map((val, i) => {
          const isTopRow = i < 2;
          const isExpanded = isSmallScreen || expanded[isTopRow ? 0 : 1] === i;

          return (
            <motion.div
              key={i}
              layout
              variants={fadeVariants[i]}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => handleToggle(i)}
              className={`cursor-pointer border-2 border-primary rounded-xl p-6 text-left bg-white flex h-[230px] sm:h-auto items-center hover:bg-primary/5 transition-all duration-500 ${
                isExpanded ? "flex-row items-center justify-normal" : "flex-col items-center justify-center"
              } md:flex-col xs:flex-col gap-4`}
              style={{
                gridColumn: isSmallScreen ? "span 3" : isExpanded ? "span 2" : "span 1"
              }}
            >
              <img
                src={val.image}
                alt={val.title}
                className={`w-32 h-32 ${isExpanded ? "self-center" : "self-start mx-auto"} md:self-center md:mx-0 md:w-40 md:h-40 transition-all duration-300`}
                style={{ order: isExpanded ? 0 : 1 }}
              />
              <div className="">
                <h3 className="text-2xl font-bold mb-2">{val.title}</h3>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-lg leading-relaxed"
                    >
                      {val.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Values;
