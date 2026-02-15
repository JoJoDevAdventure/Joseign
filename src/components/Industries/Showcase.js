import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow       - e.g. "Our Work"
 * @param {string} data.headline      - e.g. "Websites That Make\nYour Competitors Nervous"
 * @param {string} data.subheadline   - e.g. "Real results for real businesses in your industry."
 * @param {Array}  data.projects      - [{ title: "...", description: "...", image: "/placeholder.png", tags: ["Landing Page", "SEO"], link: "#" }]
 * @param {string} data.accentColor   - e.g. "#16A34A"
 */
const Showcase = ({ data }) => {
  return (
    <section
      className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-28 md:py-20 sm:py-16 overflow-hidden"
      style={{ backgroundColor: `${data.accentColor}06` }}
    >
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

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[350px] md:h-[250px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.link && (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: data.accentColor }}
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold border border-dark/10 text-dark/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-dark/70 transition-colors">
                {project.title}
              </h3>
              <p className="text-dark/50 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
