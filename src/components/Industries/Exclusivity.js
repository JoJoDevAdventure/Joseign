import { motion } from "framer-motion";
import { Shield, Users, Award, Lock } from "lucide-react";
import useAvailability from "@/hooks/useAvailability";

/**
 * @param {Object} data
 * @param {string} data.eyebrow         - e.g. "Limited Availability"
 * @param {string} data.headline        - e.g. "We Only Take 3 Projects\nPer Week. Period."
 * @param {string} data.subheadline     - e.g. "This isn't a marketing gimmick..."
 * @param {string} data.reason          - e.g. "Because premium means we actually care..."
 * @param {Array}  data.points          - [{ icon: "shield", title: "...", description: "..." }]
 * @param {Object} data.slots           - { total: 3, taken: 2 }
 * @param {string} data.slotsLabel      - e.g. "Spots remaining this week"
 * @param {string} data.accentColor     - e.g. "#16A34A"
 */
const iconMap = {
  shield: Shield,
  users: Users,
  award: Award,
  lock: Lock,
};

const Exclusivity = ({ data }) => {
  const { spotsLeft, taken, total, isSunday } = useAvailability();
  const remaining = spotsLeft;

  return (
    <section className="w-full bg-white px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-28 md:py-20 sm:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* Slots Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border-2 p-10 md:p-6 mb-16 text-center"
          style={{ borderColor: data.accentColor, backgroundColor: `${data.accentColor}05` }}
        >
          {/* Slot Indicators */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {Array.from({ length: total }).map((_, i) => {
              const isTaken = i < taken;
              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
                  className={`w-20 h-20 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border-2 transition-all ${
                    isTaken
                      ? "bg-dark/10 border-dark/10"
                      : "border-dashed shadow-lg"
                  }`}
                  style={!isTaken ? { borderColor: data.accentColor, backgroundColor: `${data.accentColor}10` } : {}}
                >
                  {isTaken ? (
                    <Lock className="w-6 h-6 md:w-4 md:h-4 text-dark/20" />
                  ) : (
                    <span
                      className="text-2xl md:text-lg font-extrabold animate-pulse"
                      style={{ color: data.accentColor }}
                    >
                      ?
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <p className="text-dark/40 text-sm font-medium mb-2">
            {isSunday ? "Booking for next week" : data.slotsLabel}
          </p>
          <p className="text-4xl md:text-3xl font-extrabold" style={{ color: data.accentColor }}>
            {isSunday ? "Fully Booked" : `${remaining} of ${total} Available`}
          </p>
        </motion.div>

        {/* Reason */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-lg text-dark/60 text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          {data.reason}
        </motion.p>

        {/* Why We Limit */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {data.points.map((point, index) => {
            const Icon = iconMap[point.icon] || Shield;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-light"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${data.accentColor}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: data.accentColor }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">{point.title}</h3>
                  <p className="text-dark/50 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
