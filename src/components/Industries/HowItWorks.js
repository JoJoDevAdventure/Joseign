import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow       - e.g. "Zero Headaches"
 * @param {string} data.headline      - e.g. "We Handle Everything.\nYou Keep Running Your Business."
 * @param {string} data.subheadline   - e.g. "Our 3-step process is designed for busy business owners..."
 * @param {Array}  data.steps         - [{ number: "01", title: "...", description: "...", image: "/placeholder.png", highlights: ["...", "..."] }]
 * @param {string} data.accentColor   - e.g. "#16A34A"
 */
const HowItWorks = ({ data }) => {
  return (
    <section className="w-full bg-white px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-28 md:py-20 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-14"
        >
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: data.accentColor }}
          >
            {data.eyebrow}
          </p>
          <h2 className="text-5xl lg:text-4xl md:text-3xl font-extrabold text-dark leading-tight whitespace-pre-line">
            {data.headline}
          </h2>
          <p className="text-lg text-dark/50 mt-6 max-w-xl mx-auto">
            {data.subheadline}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24 md:space-y-16">
          {data.steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex items-center gap-16 lg:gap-10 md:flex-col ${isEven ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Image Side */}
                <div className="flex-1 relative md:w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    {/* Step Number Overlay */}
                    <div
                      className="absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg"
                      style={{ backgroundColor: data.accentColor }}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 md:w-full">
                  <div
                    className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white mb-4"
                    style={{ backgroundColor: data.accentColor }}
                  >
                    Step {step.number}
                  </div>
                  <h3 className="text-3xl md:text-2xl font-extrabold text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-dark/50 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  {step.highlights && (
                    <ul className="space-y-3">
                      {step.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: `${data.accentColor}15` }}
                          >
                            <Check className="w-3.5 h-3.5" style={{ color: data.accentColor }} />
                          </div>
                          <span className="text-dark/70 font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
