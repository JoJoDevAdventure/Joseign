import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow         - e.g. "What They Say"
 * @param {string} data.headline        - e.g. "Business Owners Like You\nLove Working With Us"
 * @param {Array}  data.testimonials    - [{ name: "...", role: "...", company: "...", text: "...", image: "/placeholder.png", stars: 5 }]
 * @param {string} data.accentColor     - e.g. "#16A34A"
 */
const IndustryTestimonials = ({ data }) => {
  return (
    <section className="w-full bg-light px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-28 md:py-20 sm:py-16">
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
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-dark/5 flex flex-col"
            >
              {/* Quote Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${data.accentColor}10` }}
              >
                <Quote className="w-5 h-5" style={{ color: data.accentColor }} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-dark/60 leading-relaxed flex-grow mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-dark/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-dark/5 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">{testimonial.name}</p>
                  <p className="text-dark/40 text-xs">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryTestimonials;
