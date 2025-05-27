import { motion } from "framer-motion";

const fade = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } },
  down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }
};

const Services = () => {
  return (
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 xs:py-12 bg-[#F5F5F5]">
      <div className="text-center mb-20">
        <motion.p
          className="text-primary font-semibold text-sm uppercase mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade.up}
        >
          Need to Elevate Your Visuals?
        </motion.p>
        <motion.h2
          className="text-4xl lg:text-[34px] md:text-[30px] sm:text-[26px] xs:text-[24px] font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade.up}
        >
          We Cover It All—From A to Z.
        </motion.h2>
      </div>

      <div className="grid grid-cols-8 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-6 md:gap-5 sm:gap-4 xs:gap-4 h-[600px] md:h-auto">
        {/* Top Row */}
        <motion.div className="col-span-4 md:col-span-4 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary" variants={fade.left} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src="https://via.placeholder.com/400x300" className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover" alt="Service 1" />
        </motion.div>

        <motion.div className="col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary" variants={fade.down} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src="https://via.placeholder.com/400x300" className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover" alt="Service 2" />
        </motion.div>

        <motion.div className="col-span-2 md:col-span-4 sm:col-span-2 xs:col-span-1 row-span-2 md:row-span-2 sm:row-span-1 xs:row-span-1 rounded-xl overflow-hidden border-4 border-primary" variants={fade.right} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src="https://via.placeholder.com/400x690" className="w-full h-[690px] md:h-[520px] sm:h-[440px] xs:h-[360px] object-cover" alt="Service 3" />
        </motion.div>

        {/* Bottom Row */}
        <motion.div className="col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary" variants={fade.left} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src="https://via.placeholder.com/400x300" className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover" alt="Service 4" />
        </motion.div>
        
        <motion.div className="col-span-4 md:col-span-4 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary" variants={fade.up} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src="https://via.placeholder.com/400x300" className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover" alt="Service 5" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;