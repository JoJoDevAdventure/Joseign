import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import landingImg from "../../public/services/landing.png";
import mvpImg from "../../public/services/mvp.png";
import protoImg from "../../public/services/proto.jpeg";
import uiuxImg from "../../public/services/ui-ux.png";
import uiImg from "../../public/services/ui.png";


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
          What We Do
        </motion.p>
        <motion.h2
          className="text-4xl lg:text-[34px] md:text-[30px] sm:text-[26px] xs:text-[24px] font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade.up}
        >
          Landing Pages, UI/UX Design & MVPs for SaaS Startups
        </motion.h2>
      </div>

      <div className="grid grid-cols-8 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-6 md:gap-5 sm:gap-4 xs:gap-4 h-[600px] md:h-auto">
        {/* Top Row */}
        <Link href="/mvp-design-development" className="relative col-span-4 md:col-span-4 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary group cursor-pointer">
          <motion.div
            className="w-full h-full"
            variants={fade.left}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Image
              src={mvpImg}
              className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
              alt="End-to-End MVP Development for SaaS Startups - Full-stack product design and development from idea to launch in weeks"
            />
            <motion.div
              className="absolute bottom-4 left-0 h-10 bg-primary text-white pl-4 pr-0 flex items-center font-bold text-sm overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "auto", paddingRight: "1rem" }}
              transition={{ duration: 0.5, delay: 0 * 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xl">End-to-End MVP</p>
            </motion.div>
          </motion.div>
        </Link>

        <Link href="/ui-ux-design-saas" className="relative col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary group cursor-pointer">
          <motion.div
            className="w-full h-full"
            variants={fade.down}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Image
              src={protoImg}
              className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
              alt="UX Prototyping for SaaS - Interactive clickable prototypes with user flows and animations for real-world testing and stakeholder approval"
            />
            <motion.div
              className="absolute bottom-4 left-0 h-10 bg-primary text-white pl-4 pr-0 flex items-center font-bold text-sm overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "auto", paddingRight: "1rem" }}
              transition={{ duration: 0.5, delay: 1 * 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xl">UX Prototyping</p>
            </motion.div>
          </motion.div>
        </Link>

        <Link href="/ui-ux-design-saas" className="relative col-span-2 md:col-span-4 sm:col-span-2 xs:col-span-1 row-span-2 md:row-span-2 sm:row-span-1 xs:row-span-1 rounded-xl overflow-hidden border-4 border-primary group cursor-pointer">
          <motion.div
            className="w-full h-full"
            variants={fade.right}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Image
              src={uiuxImg}
              className="w-full h-[690px] md:h-[520px] sm:h-[440px] xs:h-[360px] object-cover group-hover:scale-105 transition-transform duration-300 bg-cover object-center"
              alt="SaaS UI/UX Design Services - Intuitive user interface and experience design that reduces churn and increases user engagement for SaaS products"
            />
            <motion.div
              className="absolute bottom-4 left-0 h-10 bg-primary text-white pl-4 pr-0 flex items-center font-bold text-sm overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "auto", paddingRight: "1rem" }}
              transition={{ duration: 0.5, delay: 2 * 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xl">UI/UX Design</p>
            </motion.div>
          </motion.div>
        </Link>

        {/* Bottom Row */}
        <Link href="/landing-page-design" className="relative col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary group cursor-pointer">
          <motion.div
            className="w-full h-full"
            variants={fade.left}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Image
              src={landingImg}
              className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Landing Page Development for SaaS - Full-stack landing page design and development with conversion optimization and A/B testing capabilities"
            />
            <motion.div
              className="absolute bottom-4 left-0 h-10 bg-primary text-white pl-4 pr-0 flex items-center font-bold text-sm overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "auto", paddingRight: "1rem" }}
              transition={{ duration: 0.5, delay: 3 * 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xl">Landing Page Development</p>
            </motion.div>
          </motion.div>
        </Link>

        <Link href="/ui-ux-design-saas" className="relative col-span-4 md:col-span-4 sm:col-span-2 xs:col-span-1 rounded-xl overflow-hidden border-4 border-primary group cursor-pointer">
          <motion.div
            className="w-full h-full"
            variants={fade.up}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Image
              src={uiImg}
              className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Product Design for SaaS Startups - Complete design system creation including UI components, design tokens, and style guides for scalable SaaS products"
            />
            <motion.div
              className="absolute bottom-4 left-0 h-10 bg-primary text-white pl-4 pr-0 flex items-center font-bold text-sm overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              whileInView={{ width: "auto", paddingRight: "1rem" }}
              transition={{ duration: 0.5, delay: 4 * 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xl">Design Systems</p>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Services;