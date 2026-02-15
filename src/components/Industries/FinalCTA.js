import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import useAvailability from "@/hooks/useAvailability";

/**
 * @param {Object} data
 * @param {string} data.headline        - e.g. "Ready to Get a Website\nThat Actually Works?"
 * @param {string} data.subheadline     - e.g. "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation."
 * @param {string} data.ctaText         - e.g. "Claim Your Spot Now"
 * @param {string} data.ctaLink         - e.g. "/bookme"
 * @param {string} data.secondaryText   - e.g. "or WhatsApp us"
 * @param {string} data.secondaryLink   - e.g. "https://wa.me/..."
 * @param {string} data.urgencyText     - e.g. "Only 1 spot left this week"
 * @param {string} data.image           - "/placeholder.png"
 * @param {Array}  data.trustBadges     - ["50+ Happy Clients", "3-7 Day Delivery", "Money-back Guarantee"]
 * @param {string} data.accentColor     - e.g. "#16A34A"
 */
const FinalCTA = ({ data }) => {
  const { spotsLeft, isSunday } = useAvailability();
  const urgencyText = isSunday
    ? "Fully booked this week — book for next week"
    : `Only ${spotsLeft} spot${spotsLeft !== 1 ? "s" : ""} left this week`;
  const ctaText = isSunday ? "Book for Next Week" : data.ctaText;

  return (
    <section className="w-full relative overflow-hidden">
      {/* Background - subtle accent tint */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `${data.accentColor}08` }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-[0.06]"
        style={{ backgroundColor: data.accentColor }}
      />

      <div className="relative z-10 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-28 md:py-20 sm:py-16">
        <div className="max-w-6xl mx-auto flex flex-row md:flex-col items-center gap-16 md:gap-10">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            {/* Urgency Badge */}
            {data.urgencyText && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-bold text-red-500">{urgencyText}</span>
              </motion.div>
            )}

            <h2 className="text-5xl lg:text-4xl md:text-3xl font-extrabold text-dark leading-tight whitespace-pre-line mb-6">
              {data.headline}
            </h2>
            <p className="text-xl md:text-lg text-dark/50 leading-relaxed mb-10 max-w-lg">
              {data.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 sm:flex-col sm:items-start mb-10">
              <a
                href={data.ctaLink}
                className="group inline-flex items-center gap-3 px-8 py-5 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: data.accentColor }}
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {data.secondaryLink && (
                <a
                  href={data.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-dark/10 text-dark/50 font-medium hover:border-dark/20 hover:text-dark/70 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {data.secondaryText}
                </a>
              )}
            </div>

            {/* Trust Badges */}
            {data.trustBadges && (
              <div className="flex items-center gap-6 md:gap-4 flex-wrap">
                {data.trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: data.accentColor }}
                    />
                    <span className="text-sm text-dark/30 font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 md:w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark/10">
              <Image
                src={data.image}
                alt="Get started"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{ background: `linear-gradient(135deg, ${data.accentColor}, transparent)` }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
