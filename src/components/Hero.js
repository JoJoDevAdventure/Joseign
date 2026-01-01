import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FaExclamationCircle, FaWhatsapp } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import Comparison from "./Comparison";
import LightRays from "./LightRays";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => {
  const [selectedService, setSelectedService] = useState("UI/UX Design");

  const serviceContent = {
    "Landing Page": {
      headline: "Your Traffic Isn't Converting.",
      highlight: "We Fix That.",
      subheadline: "Stop losing customers to confusing landing pages. Get data-driven designs that turn visitors into paying users—guaranteed."
    },
    "UI/UX Design": {
      headline: "Users Don't Get Your Product.",
      highlight: "We Simplify It.",
      subheadline: "Confusing interfaces kill retention. We create intuitive UI/UX that users love—so they stay, engage, and convert."
    },
    "MVP": {
      headline: "Your Idea Still Needs Validation.",
      highlight: "We Build It.",
      subheadline: "Don't waste months building the wrong thing. Ship a market-ready MVP in weeks, gather real feedback, and iterate fast."
    }
  };

  const currentContent = serviceContent[selectedService];
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section className="relative py-8 px-32 md:py-0 lg:px-20 md:px-12 sm:px-8 xs:px-4 flex flex-row md:flex-col justify-between items-center gap-8 md:gap-14 sm:gap-0 bg-[#F9F8FA] min-h-[70vh] overflow-hidden">
      {/* LightRays Background */}
      <LightRays lightSpread={10} className="absolute top-0 right-0 translate-x-1/2 opacity-40"/>

      {/* Left Side Content */}
      <motion.div
        className="w-[55%] lg:w-[60%] md:w-full sm:w-full flex flex-col items-start gap-2 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        <motion.p
          className="mb-2 text-sm text-primary font-bold md:text-xs"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Landing Pages, UI/UX & MVP Development for SaaS Startups
        </motion.p>

        <motion.h1
          key={selectedService}
          className="text-[58px] xl:text-[52px] lg:text-[46px] md:text-[40px] sm:text-[40px] xs:text-[40px] font-bold leading-[1.08] text-gray-900 text-left tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentContent.headline}
          <br />
          <span className="text-primary relative inline-block font-black">
            {currentContent.highlight}
          </span>
        </motion.h1>
        <motion.p
          key={selectedService + "-sub"}
          className="text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[14px] mt-6 md:mt-2 text-gray-700 max-w-[90%] md:max-w-full leading-relaxed text-left font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {currentContent.subheadline}
        </motion.p>
        <motion.div
          className="flex gap-4 mt-7 items-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-start gap-1">
            <button
              className="flex items-center gap-2 text-[20px] xl:text-[18px] lg:text-[17px] md:text-[12px] px-8 lg:px-8 md:px-7 sm:px-6 xs:px-6 py-4 md:py-3 sm:py-3 xs:py-3 bg-primary text-white rounded-md shadow hover:opacity-90 transition font-semibold"
              data-cal-namespace="discovery"
              data-cal-link="joseign/discovery"
              data-cal-config='{"layout":"month_view"}'
            >
              <FiCalendar className="w-5 h-5" />
              Book Free Call
            </button>
            <div className="text-red-600 text-sm flex items-center gap-1 mt-2 pl-1 animate-bounce">
              <FaExclamationCircle className="w-4 h-4" />
              <span>Limited Spots Left</span>
            </div>
          </div>
          <a
            href="https://wa.me/447783517481"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[20px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[14px] px-8 lg:px-8 md:px-7 sm:px-6 xs:px-6 py-4 md:py-3 sm:py-3 xs:py-3 bg-[#25D366] text-white rounded-md shadow hover:opacity-90 transition font-semibold"
          >
            <FaWhatsapp className="w-5 h-5" />
            Message Us
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <div className="w-full flex flex-1 justify-end md:mt-12 sm:mt-10 xs:mt-8">
        <motion.div
          className="relative z-10 md:w-full"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <Comparison onCategoryChange={setSelectedService} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
