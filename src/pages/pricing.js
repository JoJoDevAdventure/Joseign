import React from "react";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import Pricing from "@/components/Pricing";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing - Website & MVP Development | Joseign</title>
        <meta
          name="description"
          content="Transparent pricing for landing pages, premium websites, AI-powered websites, and MVP development. Plans starting at $950. No hidden fees."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://joseign.com/pricing" />

        {/* Open Graph */}
        <meta property="og:title" content="Pricing - Website & MVP Development | Joseign" />
        <meta property="og:description" content="Transparent pricing for landing pages, premium websites, AI-powered websites, and MVP development. Plans starting at $950." />
        <meta property="og:url" content="https://joseign.com/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Website & MVP Development | Joseign" />
        <meta name="twitter:description" content="Transparent pricing for landing pages, premium websites, AI-powered websites, and MVP development." />
        <meta name="twitter:image" content="https://joseign.com/og-cover.jpg" />
      </Head>

      <main className="w-full min-h-screen bg-light">
        {/* Hero Section */}
        <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 pt-32 pb-16 md:pt-24 md:pb-12 sm:pt-20 sm:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <AnimatedText
              text="Simple, Transparent Pricing"
              className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold mb-6 text-center"
            />
            <p className="text-xl md:text-lg sm:text-base text-dark/70 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your business. Whether you need a high-converting landing page, a premium website, or a full MVP — we&apos;ve got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-dark/60">
              <span className="flex items-center gap-2">
                ✓ No hidden fees
              </span>
              <span className="flex items-center gap-2">
                ✓ Transparent pricing
              </span>
              <span className="flex items-center gap-2">
                ✓ Cancel anytime
              </span>
            </div>
          </motion.div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* FAQ Section */}
        <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-b border-dark/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What&apos;s included in maintenance?</h3>
                <p className="text-dark/70">
                  Annual maintenance includes hosting, SSL certificate, security updates, plugin updates, backup management, uptime monitoring, and minor content updates (up to 2 hours per year).
                </p>
              </div>

              <div className="border-b border-dark/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer monthly payment plans?</h3>
                <p className="text-dark/70">
                  Yes! For projects over $2,000, we offer flexible milestone-based payments: 50% upfront, 25% at midpoint, 25% at completion. Contact us for custom payment arrangements.
                </p>
              </div>

              <div className="border-b border-dark/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What if I need something custom?</h3>
                <p className="text-dark/70">
                  We love custom projects! If none of our packages fit your needs, contact us at hello@joseign.com or book a free consultation. We&apos;ll create a tailored proposal based on your specific requirements.
                </p>
              </div>

              <div className="border-b border-dark/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to get started?</h3>
                <p className="text-dark/70">
                  Once payment is received, we typically start within 1-3 business days. Landing pages take 7-10 days, premium websites take 2-3 weeks, and MVPs take 4-6 weeks from kickoff to launch.
                </p>
              </div>

              <div className="border-b border-dark/10 pb-6">
                <h3 className="text-xl font-semibold mb-3">What&apos;s your refund policy?</h3>
                <p className="text-dark/70">
                  We offer a full refund if the project is cancelled before work begins. During the design phase, prorated refunds are available. After development starts, we don&apos;t offer refunds but guarantee bug fixes for 30 days. Full policy at{" "}
                  <Link href="/refund-policy" className="text-primary hover:underline">
                    joseign.com/refund-policy
                  </Link>
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide ongoing support?</h3>
                <p className="text-dark/70">
                  Yes! All projects include 30 days of bug fixes and support. For ongoing support, we offer monthly retainers starting at $299/month for updates, new features, and technical assistance.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 bg-dark text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-lg text-white/70 mb-8">
              Book a free 30-minute consultation to discuss your project and get a detailed proposal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://joseign.com/bookme"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Free Consultation
              </a>
              <a
                href="mailto:hello@joseign.com"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
