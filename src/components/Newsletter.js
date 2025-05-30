import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import animationData from "../../public/newsletter.json";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Newsletter = () => {
  return (
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-20 md:py-16 sm:py-14 xs:py-12 bg-[#F5F5F5]">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-primary font-semibold text-sm uppercase mb-2">
          Stay Inspired & Informed
        </p>
        <h2 className="text-4xl lg:text-[34px] md:text-[30px] sm:text-[26px] xs:text-[24px] font-extrabold">Get Design Insights Monthly</h2>
      </motion.div>

      <div className="flex items-center lg:flex-row sm:flex-col justify-between gap-20 lg:items-center">
        {/* Lottie Animation */}
        <motion.div
          className="w-[480px] md:w-[400px] md:h-[450px] sm:w-[320px] sm:h-[200px] xs:w-full xs:h-[180px] rounded-md overflow-hidden items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-xl lg:text-left text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl lg:text-[36px] md:text-[32px] sm:text-[28px] xs:text-[26px] font-light mb-6">Newsletter Signup</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Sign up to get exclusive design insights, creative inspiration, and practical resources delivered to your inbox—no spam, just value.
          </p>
          <motion.div
            className="flex items-center gap-4 sm:flex-col sm:items-stretch"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-full px-5 py-3 border border-primary text-base rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white text-base font-medium px-6 md:px-5 sm:px-5 xs:px-4 py-3 md:py-2.5 sm:py-2 xs:py-2 rounded-md sm:w-full">
              Join
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;