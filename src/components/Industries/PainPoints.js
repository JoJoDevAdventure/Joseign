import { motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow       - e.g. "Sound Familiar?"
 * @param {string} data.headline      - e.g. "You're Too Busy Running Your Business\nTo Worry About Your Website"
 * @param {string} data.subheadline   - e.g. "We hear this from landscaping business owners every single day..."
 * @param {Array}  data.pains         - e.g. [{ title: "...", description: "..." }, ...]
 * @param {string} data.closingText   - e.g. "What if someone just... handled it all for you?"
 * @param {string} data.accentColor   - e.g. "#16A34A"
 */
const PainPoints = ({ data }) => {
  return (
    <section className="w-full bg-light px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-28 md:py-20 sm:py-16">
      <div className="max-w-5xl mx-auto">
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

        {/* Pain Cards */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {data.pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-dark/5 hover:border-red-200 transition-all duration-300 hover:shadow-lg"
            >
              {/* Red X Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                <X className="w-6 h-6 text-red-400" />
              </div>

              <h3 className="text-xl font-bold text-dark mb-3">
                {pain.title}
              </h3>
              <p className="text-dark/50 leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-xl font-bold text-dark italic">
            &ldquo;{data.closingText}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
