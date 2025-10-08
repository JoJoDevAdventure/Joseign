import { motion } from "framer-motion";
import Image from "next/image";
import adobeLogo from "../../public/adobe.png";
import figmaLogo from "../../public/figma.png";
import fiverrLogo from "../../public/fiverr.png";
import toptalLogo from "../../public/toptal.png";
import upworkLogo from "../../public/upwork.png";
import AnimatedNumbers from "./AnimatedNumbers";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Trust = () => {
  return (
    <section className="relative w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-12 md:py-10 sm:py-8 xs:py-8 bg-gradient-to-b from-[#F7EAF4] to-[#F5F5F5] text-center">
      {/* Header */}
      <motion.p
        className="text-primary font-semibold uppercase mb-2 text-sm lg:text-[13px] md:text-[13px] sm:text-[12px] xs:text-[12px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Small or Huge Projects
      </motion.p>
      <motion.h2
        className="text-4xl lg:text-[34px] md:text-[30px] sm:text-[26px] xs:text-[24px] font-extrabold mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        We’re Trusted
      </motion.h2>

      {/* Numbers */}
      <div className="flex justify-between items-start text-left mb-20 lg:flex-wrap lg:justify-center lg:gap-10 md:grid-cols-2 md:items-center md:gap-12">
        {[{ value: 50, label: "Satisfied<br />Clients" },
          { value: 75, label: "Successful<br />Projects" },
          { value: 8, label: "Years Of<br />Experience" },
          { value: 800, label: "Total Generated<br />Revenues", prefix: "$", suffix: "K+" }
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i + 2}
            viewport={{ once: true }}
          >
            <h3 className="text-[72px] lg:text-[60px] md:text-[48px] sm:text-[42px] xs:text-[38px] font-extrabold text-black leading-[1]">
              {item.prefix || ""}<AnimatedNumbers value={item.value} />{item.suffix || "+"}
            </h3>
            <p
              className="text-lg lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[14px] mt-2 md:text-center"
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          </motion.div>
        ))}
      </div>

      {/* Logos */}
      <motion.div
        className="w-full overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={6}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between gap-16 animate-marquee whitespace-nowrap opacity-50">
          <Image src={figmaLogo} alt="Figma - Professional design tool used by Joseign for UI/UX design and prototyping" className="h-12 lg:h-10 md:h-9 sm:h-8 xs:h-7 w-auto object-contain" sizes="(min-width: 1024px) 200px, 120px" />
          <Image src={upworkLogo} alt="Upwork - Trusted freelance platform where Joseign delivers projects to global clients" className="h-12 lg:h-10 md:h-9 sm:h-8 xs:h-7 w-auto object-contain" sizes="(min-width: 1024px) 200px, 120px" />
          <Image src={fiverrLogo} alt="Fiverr - Platform where Joseign provides design and development services" className="h-12 lg:h-10 md:h-9 sm:h-8 xs:h-7 w-auto object-contain" sizes="(min-width: 1024px) 200px, 120px" />
          <Image src={toptalLogo} alt="Toptal - Elite freelance network featuring Joseign's premium services" className="h-12 lg:h-10 md:h-9 sm:h-8 xs:h-7 w-auto object-contain" sizes="(min-width: 1024px) 200px, 120px" />
          <Image src={adobeLogo} alt="Adobe Creative Suite - Industry-standard design tools used by Joseign" className="h-12 lg:h-10 md:h-9 sm:h-8 xs:h-7 w-auto object-contain" sizes="(min-width: 1024px) 200px, 120px" />
        </div>
      </motion.div>
    </section>
  );
};

export default Trust;