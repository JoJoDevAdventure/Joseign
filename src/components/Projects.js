import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PDFViewer from "./PDFViewer";

const tabs = ["UI/UX Design", "Landing Page", "Brand Identity", "Case Studies"];
const projectData = {
  "UI/UX Design": [

    { image: "/projects/debook/debook.jpg", title: "DeBook", link: "https://debook.app" },
    { image: "/projects/replicaide/rep.jpg", title: "Replicaide", link: "/replicaide" },
    { image: "/projects/blonk/blonk.jpg", title: "Blonk", link: "/blonk" },
    { image: "/projects/venn/venn.jpg", title: "Venn", link: "https://venn.com" },
    { image: "/projects/ad/ad.jpg", title: "Addict Nutrition", link: "https://addictsportnutrition.com" },

  ],
    "Landing Page": [
    {
      title: "Instagram Campaign",
      link: "https://www.instagram.com/joseign",
      iframe: "https://instagram.com/gymrat.tn/embed"
    },
  ],
  "Brand Identity": [
    { pdf: "/ad.pdf", title: "Addict Nutrition Sport", link: "" },
    { pdf: "/mychoc.pdf", title: "My Chocolate Shop", link: "" },
    { pdf: "/rehmat.pdf", title: "Rehmat", link: "" },
    { pdf: "/venn.pdf", title: "Venn Telecom", link: "" },
    { pdf: "/rep.pdf", title: "Replicaide", link: "" },
    { pdf: "/deepcal.pdf", title: "Deepcal", link: "" },
  ],
  "Case Studies": [
    { pdf: "/ReplicCase.pdf", title: "Merch Drop A", link: "" },
  ],
};

const ProjectsSection = () => {
  const [selectedTab, setSelectedTab] = useState("UI/UX Design");
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
              staggerChildren: 1
            }
          }
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className={`absolute top-2 h-[44px] md:h-[40px] sm:h-[38px] bg-primary/10 rounded-lg border border-primary/30 z-0 transition-all duration-500 ${tabs.indexOf(selectedTab) == 0 ? 'translate-x-2': ''} sm:hidden`}
          style={{
            width: "160px",
            left: `${tabs.indexOf(selectedTab) * 170}px`
          }}
        />
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setCurrentSlide(0);
            }}
            className={`relative z-10 px-6 py-3 text-sm font-medium transition-colors duration-300 w-[160px] md:w-[140px] sm:w-full ${tab == selectedTab ? "text-primary" : "text-black"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Title */}
      <motion.h3
        className="text-2xl lg:text-xl md:text-lg sm:text-[17px] xs:text-[16px] font-semibold underline mb-6"
        initial={{ opacity: 1, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </motion.h3>

      {/* Slideshow */}
      <div className="relative overflow-x-hidden touch-auto w-full max-w-[900px] md:max-w-[700px] sm:max-w-full xs:max-w-full mx-auto rounded-2xl border-4 border-primary">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.iframe ? project.iframe : project.pdf ? project.pdf : project.image}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="w-full h-[500px] md:h-[480px] flex items-center justify-center"
          >
            {project.iframe ? (
              <iframe
                src={project.iframe}
                title={project.title}
                width="100%"
                height="100%"
                className="rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : project.pdf ? (
              <PDFViewer fileUrl={project.pdf} />
            ) : (
              <img
                src={project.image}
                alt="Project slide"
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
        <div className="absolute bottom-6 md:bottom-5 sm:bottom-4 xs:bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
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