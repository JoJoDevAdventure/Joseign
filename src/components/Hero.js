import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import chartAnimation from "../../public/chart-up.json";
import Comparison from "./Comparison";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Hero = () => {
  return (
    <section className="relative py-20 px-32 md:py-0 lg:px-20 md:px-12 sm:px-8 xs:px-4 flex flex-row md:flex-col justify-between items-center gap-8 md:gap-14 sm:gap-10 xs:gap-8 bg-[#F9F8FA] min-h-[75vh] overflow-hidden">
      {/* Left Side Background */}
      <div className="absolute top-0 right-0 w-1/3 lg:w-1/2 md:w-full sm:hidden h-full bg-[#F7EAF4] border-t-8 border-r-8 border-primary z-0"></div>

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
          className="text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px] xs:text-[14px] mt-7 text-gray-700 max-w-[90%] md:max-w-full leading-relaxed text-left font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25 }}
          viewport={{ once: true }}
        >
          We craft UI/UX, branding & graphics that make people fall in love with
          your product.
          <br />
          You can request a FREE Call and we’ll push your visuals to the next
          level.
        </motion.p>
        <motion.button
          className="text-[20px] xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[14px] mt-7 px-8 lg:px-8 md:px-7 sm:px-6 xs:px-6 py-4 md:py-3 sm:py-3 xs:py-3 bg-primary text-white rounded-md shadow hover:opacity-90 transition font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Let’s Talk
        </motion.button>
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
