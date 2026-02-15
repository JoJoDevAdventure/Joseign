import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow       - e.g. "Websites for Landscapers"
 * @param {string} data.headline      - e.g. "Your Work Is Stunning.\nYour Website Should Be Too."
 * @param {string} data.subheadline   - e.g. "We build premium landing pages for landscaping companies in 3-7 days..."
 * @param {string} data.ctaText       - e.g. "Claim Your Spot"
 * @param {string} data.ctaLink       - e.g. "/bookme"
 * @param {string} data.heroImage     - e.g. "/placeholder.png"
 * @param {string} data.badge         - e.g. "Only 3 Spots This Week"
 * @param {string} data.accentColor   - e.g. "#16A34A"
 */
const IndustryHero = ({ data }) => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[auto] bg-light overflow-hidden">
      {/* Gradient Accent Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07]"
        style={{ backgroundColor: data.accentColor }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.05]"
        style={{ backgroundColor: data.accentColor }}
      />

      <div className="relative z-10 flex items-center min-h-[90vh] md:min-h-[auto] px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-16">
        <div className="w-full flex flex-row md:flex-col items-center gap-16 md:gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-[600px] md:max-w-full"
          >
            {/* Badge */}
            {data.badge && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark/10 mb-8"
                style={{ backgroundColor: `${data.accentColor}08` }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: data.accentColor }}
                />
                <span className="text-sm font-medium text-dark/70">{data.badge}</span>
              </motion.div>
            )}

            {/* Eyebrow */}
            <p
              className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: data.accentColor }}
            >
              {data.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-extrabold text-dark leading-[1.1] mb-6 whitespace-pre-line">
              {data.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-lg text-dark/50 leading-relaxed mb-10 max-w-[520px]">
              {data.subheadline}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 sm:flex-col sm:items-start">
              <a
                href={data.ctaLink}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: data.accentColor }}
              >
                {data.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-dark/40 text-sm">No commitment required</span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative md:w-full"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-10 blur-sm"
                style={{ backgroundColor: data.accentColor }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark/10">
                <Image
                  src={data.heroImage}
                  alt={data.eyebrow}
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 md:bottom-4 md:left-4 bg-white rounded-xl px-6 py-4 shadow-2xl"
              >
                <p className="text-3xl font-extrabold text-dark">3-7</p>
                <p className="text-sm text-dark/60 font-medium">Days Delivery</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
