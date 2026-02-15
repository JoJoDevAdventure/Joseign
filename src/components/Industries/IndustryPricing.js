import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow         - e.g. "Simple Pricing"
 * @param {string} data.headline        - e.g. "Three Plans. Everything Included.\nNo Surprises."
 * @param {string} data.subheadline     - e.g. "Transparent pricing. No hidden fees. No scope creep."
 * @param {Array}  data.plans           - [{ name, price, period, description, features: [], ctaText, ctaLink, highlighted }]
 * @param {Array}  data.guarantees      - ["Money-back guarantee", "Free revisions", ...]
 * @param {string} data.accentColor     - e.g. "#16A34A"
 */
const IndustryPricing = ({ data }) => {
  const plans = data.plans || (data.plan ? [data.plan] : []);

  return (
    <section className="w-full bg-white px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-28 md:py-20 sm:py-16">
      <div className="max-w-6xl mx-auto">
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

        {/* Pricing Cards */}
        <div className={`grid ${plans.length > 1 ? "grid-cols-3 md:grid-cols-1" : "grid-cols-1 max-w-2xl mx-auto"} gap-6`}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden border-2 p-8 md:p-6 flex flex-col ${
                plan.highlighted ? "scale-105 md:scale-100" : ""
              }`}
              style={{ borderColor: plan.highlighted ? data.accentColor : `${data.accentColor}20` }}
            >
              {/* Accent glow on highlighted */}
              {plan.highlighted && (
                <div
                  className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[100px] opacity-10"
                  style={{ backgroundColor: data.accentColor }}
                />
              )}

              <div className="relative flex flex-col flex-1">
                {/* Plan Name Badge */}
                <span
                  className={`inline-block self-start px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                    plan.highlighted ? "text-white" : ""
                  }`}
                  style={{
                    backgroundColor: plan.highlighted ? data.accentColor : `${data.accentColor}10`,
                    color: plan.highlighted ? undefined : data.accentColor,
                  }}
                >
                  {plan.name}
                </span>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl lg:text-3xl font-extrabold text-dark">{plan.price}</span>
                  {plan.period && (
                    <span className="text-dark/30 font-medium text-sm">{plan.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-dark/50 text-sm mb-6">{plan.description}</p>

                {/* Divider */}
                <div className="h-px bg-dark/10 mb-6" />

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${data.accentColor}15` }}
                      >
                        <Check className="w-3 h-3" style={{ color: data.accentColor }} />
                      </div>
                      <span className="text-dark/70 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <button
                    data-cal-namespace="discovery"
                    data-cal-link="joseign/discovery"
                    data-cal-config='{"layout":"month_view"}'
                    className={`group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer text-white`}
                    style={{ backgroundColor: data.accentColor }}
                  >
                    {plan.ctaText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {plan.paymentLink && (
                    <a
                      href={plan.paymentLink}
                      className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] border-2"
                      style={{ borderColor: `${data.accentColor}30`, color: data.accentColor }}
                    >
                      Get Started — No Call
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        {data.guarantees && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-8 md:gap-4 mt-10 flex-wrap"
          >
            {data.guarantees.map((guarantee, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4" style={{ color: data.accentColor }} />
                <span className="text-sm text-dark/40 font-medium">{guarantee}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IndustryPricing;
