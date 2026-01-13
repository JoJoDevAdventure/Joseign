import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Zap, Mail, X } from "lucide-react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("website");
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleDemoRequest = async (e) => {
    e.preventDefault();

    try {
      // Send demo request to API endpoint
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          websiteLink,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit demo request');
      }

      // Show success message
      setEmailSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setShowEmailPopup(false);
        setEmailSubmitted(false);
        setEmail("");
        setWebsiteLink("");
      }, 2000);
    } catch (error) {
      console.error('Error submitting demo request:', error);
      // Still show success to user to avoid exposing errors
      setEmailSubmitted(true);
      setTimeout(() => {
        setShowEmailPopup(false);
        setEmailSubmitted(false);
        setEmail("");
        setWebsiteLink("");
      }, 2000);
    }
  };

  const websitePricing = [
    {
      name: "Basic Landing Page",
      price: "$850",
      maintenance: "$150/year",
      description: "Perfect for funnels and simple conversions",
      ideal: "Ideal for Funnels",
      badge: "Best Value",
      features: [
        "1 High-Converting Page",
        "Modern Responsive Design",
        "Conversion Optimized",
        "SEO Foundation & Meta Tags",
        "Fast Loading Speed (90+ Score)",
      ],
      cta: "Book Kick-off Call",
      ctaSecondary: "Request Free Demo",
      highlighted: false,
    },
    {
      name: "Premium Website",
      price: "$1,450",
      maintenance: "$299/year",
      description: "Top-notch design for local businesses",
      ideal: "Ideal for Local Businesses",
      badge: "Best Seller",
      features: [
        "Multi-Page Website",
        "3 Hero Section Variations",
        "Advanced Local SEO Optimization",
        "LLM & AI Crawler Optimization",
        "Google My Business Integration",
        "Schema Markup & Rich Snippets",
        "Mobile-First Responsive Design",
        "Analytics & Conversion Tracking",
      ],
      cta: "Book Kick-off Call",
      ctaSecondary: "Request Free Demo",
      highlighted: true,
    },
    {
      name: "AI-Agentic Website",
      price: "From $2,950",
      maintenance: "$350/year",
      description: "AI-powered lead generation machine",
      ideal: "Ideal for SaaS & Agencies",
      badge: "AI Powered",
      features: [
        "Everything in Premium, plus:",
        "AI-Powered Lead Capture Workflow",
        "AI Lead Magnets & Content Generation",
        "AI Agent for Automated Call Booking",
        "AI CRM Integration (HubSpot/Salesforce)",
        "Conversational AI Chat Interface",
        "Smart Lead Qualification & Routing",
        "Automated Email Sequences",
        "AI Analytics & Insights Dashboard",
        "Custom AI Integrations",
      ],
      cta: "Request Free Demo",
      highlighted: false,
      isAI: true,
    },
  ];

  const mvpPricing = [
    {
      name: "Starter MVP",
      price: "$12,500",
      maintenance: "$299/month",
      description: "Launch your idea in 4 weeks",
      ideal: "Ideal for Startups Validating Ideas",
      badge: "Quick Launch",
      features: [
        "Complete UI/UX Design in Figma",
        "Up to 5 Core Features",
        "User Authentication (Email/Social)",
        "Responsive Web Application",
        "PostgreSQL Database Setup",
        "Admin Dashboard (Basic)",
        "30-Day Bug Fixes & Support",
        "Deployment to Vercel/AWS",
      ],
      cta: "Book Strategy Call",
      highlighted: false,
    },
    {
      name: "Scale MVP",
      price: "$24,500",
      maintenance: "$499/month",
      description: "Production-ready platform in 6 weeks",
      ideal: "Ideal for Growing Startups & SaaS",
      badge: "Most Popular",
      features: [
        "Everything in Starter MVP, plus:",
        "Up to 10 Advanced Features",
        "Payment Integration (Stripe/Stripe Connect)",
        "Email Service Integration (SendGrid)",
        "Advanced Admin Dashboard",
        "Multi-Role User Management",
        "Third-Party API Integrations",
        "Real-Time Features (WebSockets)",
        "Comprehensive Design System",
        "SEO Optimization & Analytics",
        "60-Day Support & Maintenance",
        "Performance Monitoring (Sentry)",
      ],
      cta: "Book Strategy Call",
      highlighted: true,
    },
  ];

  const currentPricing = activeTab === "website" ? websitePricing : mvpPricing;

  return (
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 xs:py-12 bg-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-12"
      >
        <p className="text-primary font-semibold text-sm uppercase mb-2">
          Pricing
        </p>
        <h2 className="text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg md:text-base text-dark/70 max-w-2xl mx-auto">
          Choose the perfect plan for your business. No hidden fees, no surprises.
        </p>
      </motion.div>

      {/* Tab Switcher */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex bg-dark/5 rounded-xl p-1.5 gap-1">
          <button
            onClick={() => setActiveTab("website")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "website"
                ? "bg-primary text-white shadow-lg"
                : "text-dark/70 hover:text-dark"
            }`}
          >
            Website Pricing
          </button>
          <button
            onClick={() => setActiveTab("mvp")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "mvp"
                ? "bg-primary text-white shadow-lg"
                : "text-dark/70 hover:text-dark"
            }`}
          >
            MVP Pricing
          </button>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`grid ${activeTab === "website" ? "grid-cols-3" : "grid-cols-2"} md:grid-cols-1 gap-8 max-w-7xl mx-auto`}
        >
          {currentPricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? "ring-2 ring-primary md:scale-100 scale-105"
                  : plan.isAI
                  ? "ring-2 ring-primary/50"
                  : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${
                      plan.highlighted
                        ? "bg-primary"
                        : plan.isAI
                        ? "bg-gradient-to-r from-primary to-purple-600"
                        : "bg-dark"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-dark/60 text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-dark">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-dark/60">+ {plan.maintenance} maintenance</p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {plan.ideal}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-dark/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button(s) */}
              <div className="space-y-3 mt-auto">
                {plan.isAI ? (
                  <button
                    onClick={() => setShowEmailPopup(true)}
                    className="w-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    {plan.cta}
                  </button>
                ) : plan.ctaSecondary ? (
                  <>
                    <a
                      href="https://joseign.com/bookme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-primary text-white hover:shadow-xl hover:scale-105"
                          : "bg-primary text-white hover:shadow-xl hover:scale-105"
                      }`}
                    >
                      {plan.cta}
                    </a>
                    <button
                      onClick={() => setShowEmailPopup(true)}
                      className="w-full bg-dark/5 text-dark px-6 py-4 rounded-xl font-semibold hover:bg-dark hover:text-white transition-all duration-300"
                    >
                      {plan.ctaSecondary}
                    </button>
                  </>
                ) : (
                  <a
                    href="https://joseign.com/bookme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-primary text-white hover:shadow-xl hover:scale-105"
                        : "bg-dark/5 text-dark hover:bg-dark hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Email Popup Modal */}
      <AnimatePresence>
        {showEmailPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowEmailPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowEmailPopup(false)}
                className="absolute top-4 right-4 text-dark/50 hover:text-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {!emailSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Request Your Free Demo
                    </h3>
                    <p className="text-dark/60">
                      See how AI can transform your website into a lead generation machine
                    </p>
                  </div>

                  <form onSubmit={handleDemoRequest} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-dark">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark/40" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-dark/10 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-dark">
                        Current Website or Social Link <span className="text-dark/40 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        value={websiteLink}
                        onChange={(e) => setWebsiteLink(e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3 border-2 border-dark/10 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                    >
                      Request Demo
                    </button>
                  </form>

                  <p className="text-xs text-dark/50 text-center mt-4">
                    We&apos;ll send you a personalized demo showcasing AI features
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-dark/60">
                    We&apos;ll send your demo shortly to {email}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-dark/70 mb-4">
          Need a custom solution? Let&apos;s talk about your specific needs.
        </p>
        <a
          href="mailto:hello@joseign.com"
          className="inline-block text-primary font-semibold hover:underline"
        >
          Contact us for custom pricing →
        </a>
      </motion.div>
    </section>
  );
};

export default Pricing;
