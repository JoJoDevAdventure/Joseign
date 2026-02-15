import { motion } from "framer-motion";
import Image from "next/image";
import { Gift, Search, HardDrive, FileCode, Paintbrush, Siren } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow         - e.g. "Included Free"
 * @param {string} data.headline        - e.g. "Bonuses Worth $2,400+\nIncluded With Every Project"
 * @param {string} data.subheadline     - e.g. "We don't nickel-and-dime. These are all included."
 * @param {Array}  data.bonuses         - [{ icon: "gift", title: "...", description: "...", value: "$400" }]
 * @param {string} data.totalValue      - e.g. "$2,400+"
 * @param {string} data.image           - "/placeholder.png"
 * @param {string} data.accentColor     - e.g. "#16A34A"
 */
const iconMap = {
  gift: Gift,
  search: Search,
  hardDrive: HardDrive,
  fileCode: FileCode,
  paintbrush: Paintbrush,
  siren: Siren,
};

const Bonuses = ({ data }) => {
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

        <div className="flex flex-row md:flex-col gap-12">
          {/* Bonuses List */}
          <div className="flex-1 space-y-4">
            {data.bonuses.map((bonus, index) => {
              const Icon = iconMap[bonus.icon] || Gift;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-dark/5 hover:border-dark/10 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${data.accentColor}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: data.accentColor }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className="text-lg font-bold text-dark">{bonus.title}</h3>
                      <span
                        className="text-sm font-extrabold px-3 py-1 rounded-full flex-shrink-0"
                        style={{ color: data.accentColor, backgroundColor: `${data.accentColor}10` }}
                      >
                        {bonus.value}
                      </span>
                    </div>
                    <p className="text-dark/50 leading-relaxed">{bonus.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Side Image + Total Value */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-[380px] lg:w-[320px] md:w-full flex-shrink-0"
          >
            <div className="sticky top-32 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-dark/10">
                <Image
                  src={data.image}
                  alt="Bonuses"
                  width={380}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Total Value Card */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: `${data.accentColor}10` }}
              >
                <p className="text-dark/50 text-sm font-medium mb-1">Total Bonus Value</p>
                <p className="text-4xl font-extrabold" style={{ color: data.accentColor }}>
                  {data.totalValue}
                </p>
                <p className="text-dark/30 text-sm mt-1">Included free with every project</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
