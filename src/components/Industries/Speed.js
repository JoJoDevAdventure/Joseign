import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Clock, Rocket, CalendarCheck } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow         - e.g. "Lightning Fast"
 * @param {string} data.headline        - e.g. "From Zero to Launch\nIn 3-7 Days. Not Months."
 * @param {string} data.subheadline     - e.g. "While other agencies take months, we deliver a premium product in days."
 * @param {string} data.comparisonTitle - e.g. "The Joseign Difference"
 * @param {Object} data.us              - { label: "Joseign", time: "3-7 Days", items: ["...", "..."] }
 * @param {Object} data.them            - { label: "Other Agencies", time: "2-6 Months", items: ["...", "..."] }
 * @param {Array}  data.timeline        - [{ day: "Day 1", title: "...", description: "..." }, ...]
 * @param {string} data.image           - "/placeholder.png"
 * @param {string} data.accentColor     - e.g. "#16A34A"
 */
const Speed = ({ data }) => {
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
          <p className="text-lg text-dark/50 mt-6 max-w-xl mx-auto">
            {data.subheadline}
          </p>
        </motion.div>

        {/* Us vs Them Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-1 gap-6 mb-20"
        >
          {/* Us */}
          <div
            className="relative rounded-2xl p-8 border-2 overflow-hidden"
            style={{ borderColor: data.accentColor, backgroundColor: `${data.accentColor}08` }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-20" style={{ backgroundColor: data.accentColor }} />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6" style={{ color: data.accentColor }} />
                  <span className="text-lg font-bold text-dark">{data.us.label}</span>
                </div>
                <span
                  className="px-4 py-2 rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: data.accentColor }}
                >
                  {data.us.time}
                </span>
              </div>
              <ul className="space-y-4">
                {data.us.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-green-100">
                      <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-dark/70 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Them */}
          <div className="rounded-2xl p-8 bg-white border border-dark/5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-dark/30" />
                <span className="text-lg font-bold text-dark/40">{data.them.label}</span>
              </div>
              <span className="px-4 py-2 rounded-full text-sm font-extrabold text-dark/40 bg-dark/5">
                {data.them.time}
              </span>
            </div>
            <ul className="space-y-4">
              {data.them.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-red-50">
                    <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-dark/40 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Visual Timeline */}
        <div className="flex flex-row md:flex-col items-start gap-16 md:gap-10">
          {/* Timeline */}
          <div className="flex-1 md:w-full">
            <h3 className="text-2xl font-extrabold text-dark mb-8">Your Timeline</h3>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5 opacity-20"
                style={{ backgroundColor: data.accentColor }}
              />
              <div className="space-y-8">
                {data.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6 relative"
                  >
                    {/* Dot */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg z-10"
                      style={{ backgroundColor: data.accentColor }}
                    >
                      {item.day.replace("Day ", "")}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: data.accentColor }}>
                        {item.day}
                      </p>
                      <h4 className="text-lg font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-dark/50">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 md:w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl sticky top-32">
              <Image
                src={data.image}
                alt="Speed delivery"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Speed;
