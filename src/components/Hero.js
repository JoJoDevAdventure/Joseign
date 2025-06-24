import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { FaExclamationCircle, FaWhatsapp } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import chartAnimation from "../../public/chart-up.json";
import Comparison from "./Comparison";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => {
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
    <section className="relative py-8 px-32 md:py-0 lg:px-20 md:px-12 sm:px-8 xs:px-4 flex flex-row md:flex-col justify-between items-center gap-8 md:gap-14 sm:gap-0 bg-[#F9F8FA] min-h-[70vh] overflow-hidden">
      {/* Left Side Background */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 lg:w-1/2 md:w-full sm:hidden h-full bg-[#F7EAF4] border-t-8 border-r-8 z-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      />

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
          UI/UX & Branding for High-Converting Startups
        </motion.p>

        <motion.h1
          className="text-[58px] xl:text-[52px] lg:text-[46px] md:text-[40px] sm:text-[40px] xs:text-[40px] font-bold leading-[1.08] text-gray-900 text-left tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true }}
        >
          Design That Converts,
          <br />
          Brands That{" "}
          <span className="text-primary relative inline-block font-black">
            Stick.
            <span className="absolute -top-52 left-8 md:left-20 w-[290px] h-[150px] pointer-events-none select-none">
              <Lottie animationData={chartAnimation} loop={true} autoplay />
            </span>
          </span>
        </motion.h1>
        <motion.p
          className="text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[14px] mt-6 md:mt-2 text-gray-700 max-w-[90%] md:max-w-full leading-relaxed text-left font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25 }}
          viewport={{ once: true }}
        >
          We craft UI/UX, branding & graphics that make people fall in love with
          your product.
          <br />
Book your FREE call — let’s elevate your visuals and brand clarity.
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
              data-cal-namespace="joseign-free-call"
              data-cal-link="joseph-bouhlel/joseign-free-call"
              data-cal-config='{"layout":"month_view","theme":"light"}'
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
          <Comparison />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
