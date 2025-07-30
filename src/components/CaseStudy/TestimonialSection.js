// Ensure Framer imports
// Ensure Framer imports
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { useRef } from "react";
import ScrollReveal from '../ScrollReveal';

const TestimonialSection = ({ testimonial }) => {
  // Framer scroll hooks
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Compute flourished line length
  const flourishLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Icon scroll speeds: adjust the end values (e.g., 100, 200) to change how far they move
  const icon1Y = useTransform(scrollYProgress, [0, 1], [0, 700]);  // Speed/offset for top-left icon
  const icon2Y = useTransform(scrollYProgress, [0, 1], [0, 1200]);  // Speed/offset for bottom-right icon
  return (
    <section
      ref={ref}
      className="relative flex my-[20vh] px-40 md:px-8 h-full items-center align-center justify-center"
    >
      {/* top-left quote with scroll-based parallax */}
      <motion.div
        style={{ y: icon1Y }}
        className="absolute w-36 h-36 -top-24 left-24 md:-top-8 md:left-8 md:w-16 md:h-16"
      >
        <QuoteIcon className="w-full h-full text-black rotate-180" />
      </motion.div>

      {/* bottom-right quote with scroll-based parallax */}
      <motion.div
        style={{ y: icon2Y }}
        className="absolute w-36 h-36 top-48 right-24 md:right-8 md:w-16 md:h-16"
      >
      <QuoteIcon className="w-full h-full text-black rotate-0" />
      </motion.div>
      <div className='h-[800px] md:h-[150vh]'/>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={20}
        containerClassName="max-w-5xl h-full md:w-full"
        textClassName='text-5xl md:text-2xl md:w-full'
      >
        {testimonial.text}
      </ScrollReveal>
    </section>
  );
};

export default TestimonialSection;