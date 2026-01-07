import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PDFViewer from "./PDFViewer";

const tabs = ["SaaS & MVP", "Landing Page", "UI/UX Design", "Case Studies"];
const projectData = {
  "UI/UX Design": [
    {
      iframe: "https://embed.figma.com/design/P89X8TKDry4aRAs6MDUlsC/Plonkaa-UI?node-id=0-1&embed-host=share",
      title: "Plonkkaa",
      description: "Gifting platform combining personalized messages with artisan chocolate — reinventing the traditional gift card with design and emotion.",
      caseStudy: "/projects/plonkkaa",
    },
    {
      iframe: "https://embed.figma.com/design/foYaOdRbBNlDoW6IHmcS5Z/Marhabteen--Work-in-Progress-?node-id=0-1&embed-host=share",
      title: "Marhabten",
      description: "Libya's #1 hosting app with native flows, dark/light mode, and role switching for hosts and guests. Full design system in Flutter.",
      link: "https://marhabten.net",
      caseStudy: "/projects/marhabten",
    },
    {
      iframe: "https://embed.figma.com/design/7DMiUzCdHMfZiiWpop88xa/LMS?node-id=0-1&embed-host=share",
      title: "LMS Electrical",
      description: "Love My Solar — Brisbane solar & electrical company. Presented 3 design variants, elevated their outdated website to modern standards.",
      caseStudy: "/projects/LMS",
    },
    {
      iframe: "https://embed.figma.com/design/cyWDiiKc2Mu911FJiIkP4N/DIAMOND?node-id=0-1&embed-host=share",
      title: "DIAMOND AIR",
      description: "Premium HVAC services redesign. Multiple design concepts delivered, transforming their digital presence to match service quality.",
      caseStudy: "/projects/DIAMOND",
    },
    {
      iframe: "https://embed.figma.com/design/0qVWQxQqFd3ljXdFEMsjbY/PEARSON?node-id=0-1&embed-host=share",
      title: "PEARSON",
      description: "Pearson Automotive — 20 years of premium car service in Milton, Brisbane. Modern website redesign for established automotive repair business.",
      caseStudy: "/projects/PEARSON",
    },
    {
      image: "/projects/replicaide/replicaide-ui.png",
      title: "Replicaide",
      description: "B2B SaaS for AI agents. Complete branding, UI/UX design, and full-stack development — from vision to scalable SaaS in 6 weeks.",
      link: "/replicaide",
      caseStudy: "/projects/replicaide",
    },
    {
      image: "/projects/blonk/blonk-ui.png",
      title: "Blonk",
      description: "Job-matching platform blending behavioral science, gamification, and AI. Dashboard redesign and mobile app UX for smarter hiring.",
      link: "/blonk",
      caseStudy: "/projects/blonk",
    },
  ],
  "Landing Page": [
    {
      title: "LMS Electrical",
      description: "Love My Solar — Brisbane solar & electrical company. High-converting landing page with 3 design variants presented.",
      link: "#",
      image: "/projects/LMS/landing.png",
      caseStudy: "/projects/lms-electrical",
    },
    {
      title: "Marhabten",
      description: "High-converting landing page for Libya's premier real estate marketplace platform.",
      link: "https://marhabten.net",
      image: "/projects/marhabten/landing.png",
      caseStudy: "/projects/marhabten",
    },
    {
      title: "DIAMOND Air",
      description: "Premium HVAC services in Brisbane. Multiple design concepts delivered, transforming their digital presence.",
      link: "#",
      image: "/projects/DIAMOND/landing.png",
      caseStudy: "/projects/diamond-air",
    },
    {
      title: "GEARSHARE",
      description: "Equipment rental marketplace landing page. Clean, conversion-focused design for peer-to-peer rental platform.",
      link: "http://gearshare.co",
      image: "/projects/GEARSHARE/landing.png",
      caseStudy: "/projects/gearshare",
    },
    {
      title: "PEARSON",
      description: "Pearson Automotive — 20 years of premium car service in Milton, Brisbane. Modern landing page redesign.",
      link: "/projects/pearson",
      image: "/projects/PEARSON/landing.png",
      caseStudy: "/projects/pearson",
    },
    {
      title: "Robyn fit",
      description: "Fitness-focused landing page designed to drive sign-ups and engagement.",
      link: "https://fitxrobyn.joseign.com",
      image: "/projects/rob/landing.png",
    },
    {
      title: "VendrAI",
      description: "Conversion-optimized landing page for AI-powered sales automation platform.",
      link: "https://vendrai.com",
      image: "/projects/vendrai/landing.png",
      caseStudy: "/projects/vendr-ai",
    },
    {
      title: "Plonkkaa",
      description: "Gifting platform landing page. Emotional, creative design for personalized chocolate message wraps.",
      image: "/projects/plonkkaa/landing.png",
      caseStudy: "/projects/plonkkaa",
    },
    {
      title: "ReplicAIDE",
      description: "B2B SaaS landing page for AI agents. Lead generation focused with clear messaging and conversion flows.",
      link: "https://replicaide.com",
      image: "/projects/replicaide/landing.png",
      caseStudy: "/projects/replicaide",
    },
  ],
  "SaaS & MVP": [
    {
      image: "/projects/GEARSHARE/mvp.png",
      title: "Gearshare",
      description: "Equipment rental marketplace MVP built in 6 weeks. From idea to production-ready platform with payments, bookings, and reviews.",
      link: "http://gearshare.co",
      caseStudy: "/projects/gearshare",
    },
    {
      image: "/projects/replicaide/mvp.png",
      title: "ReplicAIDE",
      description: "B2B SaaS for AI agents. Complete branding, UI/UX, and full-stack dev — from vision to scalable SaaS in 6 weeks.",
      link: "#",
      caseStudy: "/projects/replicaide",
    },
    {
      image: "/projects/blonk/mvp.png",
      title: "Blonk",
      description: "Job-matching platform with behavioral science and AI. Dashboard redesign, mobile app UX, and smooth animations.",
      link: "#",
      caseStudy: "/projects/blonk",
    },
  ],
  "Case Studies": [
    { iframe: "/projects/gearshare", title: "Gearshare", description: "Equipment rental marketplace MVP with 500+ listings and $50K GMV in first 3 months.", link: "/projects/gearshare", caseStudy: "/projects/gearshare" },
    { iframe: "/projects/lms-electrical", title: "LMS Electrical", description: "Landing page redesign that increased leads by 245% and achieved #1 local SEO ranking.", link: "/projects/lms-electrical", caseStudy: "/projects/lms-electrical" },
    { iframe: "/projects/diamond-air", title: "Diamond Air", description: "Premium HVAC landing page with 320% ROI increase and 55% higher average deal value.", link: "/projects/diamond-air", caseStudy: "/projects/diamond-air" },
    { iframe: "/projects/pearson", title: "PEARSON", description: "EdTech platform landing page that grew free trial sign-ups by 165% and doubled conversion rates.", link: "/projects/pearson", caseStudy: "/projects/pearson" },
    { iframe: "/projects/replicaide", title: "ReplicAIDE", description: "AI SaaS platform that reached 500 users in 3 months with our end-to-end design & development.", link: "/projects/replicaide", caseStudy: "/projects/replicaide" },
    { iframe: "/projects/vendr-ai", title: "VendrAI", description: "Sales automation platform with conversion-optimized landing page and intuitive dashboard.", link: "/projects/vendr-ai", caseStudy: "/projects/vendr-ai" },
    { iframe: "/projects/marhabten", title: "Marhabten", description: "Real estate marketplace connecting thousands of property seekers across Libya.", link: "/projects/marhabten", caseStudy: "/projects/marhabten" },
    { iframe: "/projects/plonkkaa", title: "Plonkkaa", description: "Social platform with engaging UX that drives daily user retention.", link: "/projects/plonkkaa", caseStudy: "/projects/plonkkaa" },
    { iframe: "/projects/blonk", title: "Blonk", description: "Community-focused social network with seamless onboarding experience.", link: "/projects/blonk", caseStudy: "/projects/blonk" },
  ],
};

const ProjectsSection = () => {
  const [selectedTab, setSelectedTab] = useState("Landing Page");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = projectData[selectedTab] || [];
  const project = projects[currentSlide] || { image: "", title: "", link: "#" };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Slide animation variants
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 50 : -50, opacity: 0.8 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 50 : -50, opacity: 0.8 }),
  };

  return (
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 xs:py-12 bg-[#F5F5F5] text-center relative">
      {/* Header */}
      <motion.p
        className="text-primary font-semibold text-sm uppercase mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Need to Elevate Your Visuals?
      </motion.p>
      <motion.h2
        className="text-4xl lg:text-[34px] md:text-[30px] sm:text-[26px] xs:text-[24px] font-extrabold mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Live Projects—All Over The World
      </motion.h2>

      {/* Tabs */}
      <motion.div
        className="relative w-fit lg:w-fit md:w-full sm:w-full mx-auto mb-16 md:mb-8 px-2 py-2 border-2 border-primary rounded-xl flex gap-2 overflow-x-auto sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className={`absolute top-2 h-[44px] md:h-[40px] sm:h-[38px] bg-primary/10 rounded-lg border border-primary/30 z-0 transition-all duration-500 ${
            tabs.indexOf(selectedTab) == 0 ? "translate-x-2" : ""
          } sm:hidden`}
          style={{
            width: "160px",
            left: `${tabs.indexOf(selectedTab) * 170}px`,
          }}
        />
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setCurrentSlide(0);
            }}
            className={`relative z-10 px-6 py-3 text-sm font-medium transition-colors duration-300 w-[160px] md:w-[140px] sm:w-full ${
              tab == selectedTab ? "text-primary" : "text-black"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Slideshow with Info Panel */}
      <div className="relative w-full max-w-[1200px] mx-auto flex lg:flex-col gap-8 lg:gap-0 items-start">
        {/* Main Project Display */}
        <div className="relative overflow-x-hidden touch-auto w-full lg:w-full flex-1 rounded-2xl border-4 border-primary">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={
              project.iframe
                ? project.iframe
                : project.pdf
                ? project.pdf
                : project.image
            }
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="relative w-full h-[500px] md:h-[480px] flex items-center justify-center"
          >
            {project.iframe ? (
              <div className="flex w-full h-full relative">
                <iframe
                  src={project.iframe}
                  title={project.title}
                  style={{
                    transform: "scale(0.5)",
                    transformOrigin: "top left",
                    width: "200%",
                    /*  …then expand the frame so the shrunken page still fills the hole */
                    height: "200%",
                  }}
                  className="absolute inset-0 border-0 rounded-xl bg-white"
                  allow="autoplay; encrypted-media"
                />
              </div>
            ) : project.pdf ? (
              <PDFViewer fileUrl={project.pdf} />
            ) : (
              <img
                src={project.image}
                alt={`${project.title} - ${selectedTab} project by Joseign`}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-[20px] md:left-[15px] sm:left-[10px] top-1/2 -translate-y-1/2 z-10 bg-primary text-white w-10 h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[20px] md:right-[15px] sm:right-[10px] top-1/2 -translate-y-1/2 z-10 bg-primary text-white w-10 h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 md:bottom-5 sm:bottom-4 xs:bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center z-20">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/50"
              }`}
            />
          ))}
        </div>
        </div>

        {/* Animated Info Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: -100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 100, opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              opacity: { duration: 0.3 }
            }}
            className="w-[380px] lg:w-full lg:mt-8 flex-shrink-0"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-4 border-primary p-8 lg:p-6 shadow-2xl h-[500px] md:h-[480px] flex flex-col justify-center">
              {/* Title */}
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-2xl font-black mb-6 text-gray-900 dark:text-white text-left"
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              {project.description && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-base text-left"
                >
                  {project.description}
                </motion.p>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2.5"
              >
                {project.caseStudy && (
                  <Link href={project.caseStudy}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary text-white px-5 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </Link>
                )}

                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white dark:bg-gray-800 text-primary border-2 border-primary px-5 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Visit Live Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Link href="/projects">
        <motion.button
          className="mt-12 md:mt-10 sm:mt-8 bg-primary text-white px-6 md:px-5 sm:px-5 xs:px-4 py-3 md:py-2.5 sm:py-2 xs:py-2 rounded-md text-sm md:text-[15px] sm:text-[14px] xs:text-[13px] font-medium hover:opacity-90 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          View all projects
        </motion.button>
      </Link>
    </section>
  );
};

export default ProjectsSection;
