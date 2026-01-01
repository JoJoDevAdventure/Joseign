import TransitionEffect from "@/components/TransitionEffect";
import { getCalApi } from "@calcom/embed-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBullseye, FaChartLine, FaCheckCircle, FaClock, FaCode, FaPalette, FaRocket, FaUsers } from "react-icons/fa";

const LandingPageDesign = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heroTimeline = [
    {
      step: "Audit & Strategy",
      duration: "1-2 days",
      image: "/services/landing-step-1.png",
      description: "Deep dive into your current page, competitors, and conversion opportunities"
    },
    {
      step: "3 Hero Variations",
      duration: "2-3 days",
      image: "/services/landing-step-2.png",
      description: "Three unique hero concepts designed for maximum impact and conversion"
    },
    {
      step: "Full Page Design",
      duration: "2-3 days",
      image: "/services/landing-step-3.png",
      description: "Complete landing page with all sections optimized for your goals"
    },
    {
      step: "Development & Launch",
      duration: "3-4 days",
      image: "/services/landing-step-4.png",
      description: "Pixel-perfect development, testing, and deployment to production"
    }
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "landing-development" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // Auto-rotate accordions
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenAccordion((prev) => (prev + 1) % 4); // 4 timeline items
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Landing Page Audit",
      description: "We start by analyzing your current landing page (if you have one) or studying your competitors. We'll identify conversion leaks, UX friction points, and SEO weaknesses that are costing you customers.",
      icon: FaBullseye,
      deliverable: "Comprehensive audit report with actionable insights",
      image: "/services/landing-step-1.png"
    },
    {
      number: "02",
      title: "3 Hero Design Variations",
      description: "Your hero section makes or breaks conversions. We design 3 different hero concepts with unique value propositions, CTAs, and visual hierarchies. You pick the winner—or we combine the best elements.",
      icon: FaPalette,
      deliverable: "3 high-fidelity hero mockups in Figma",
      image: "/services/landing-step-2.png"
    },
    {
      number: "03",
      title: "Complete Page Design",
      description: "Once we nail the hero, we design the full landing page flow: features, benefits, social proof, pricing, FAQs, and CTA sections. Every pixel optimized for conversion and trust.",
      icon: FaCode,
      deliverable: "Full Figma design file with responsive breakpoints",
      image: "/services/landing-step-3.png"
    },
    {
      number: "04",
      title: "Development & Launch",
      description: "We transform the designs into a blazing-fast, SEO-optimized landing page using Next.js and Tailwind CSS. Mobile-first, accessible, and integrated with your analytics and CRM.",
      icon: FaRocket,
      deliverable: "Production-ready landing page deployed on Vercel",
      image: "/services/landing-step-4.png"
    }
  ];

  const benefits = [
    {
      icon: FaChartLine,
      title: "Conversion-Optimized Design",
      description: "Every element is strategically placed to guide visitors toward taking action. From attention-grabbing headlines to irresistible CTAs, we engineer for results."
    },
    {
      icon: FaClock,
      title: "Delivered in 7-10 Days",
      description: "No months-long timelines. Get a stunning, high-converting landing page in 1-2 weeks. Perfect for product launches, campaigns, or rapid testing."
    },
    {
      icon: FaUsers,
      title: "User-Centric Approach",
      description: "We don't design for ourselves—we design for your users. Clear messaging, intuitive navigation, and trust-building social proof that resonates with your audience."
    },
    {
      icon: FaCode,
      title: "SEO & Performance First",
      description: "Built with Next.js for lightning-fast load times, perfect Lighthouse scores, and search engine visibility. Your landing page will rank and convert."
    }
  ];

  const features = [
    "Mobile-first responsive design (looks perfect on all devices)",
    "Conversion-focused copywriting support",
    "A/B testing-ready structure",
    "Integrated analytics (Google Analytics, Hotjar, etc.)",
    "CRM integration (HubSpot, Salesforce, etc.)",
    "Custom animations and micro-interactions",
    "SEO optimization (meta tags, schema markup, sitemap)",
    "Accessibility compliance (WCAG 2.1 AA)",
    "Form validation and error handling",
    "Email marketing integration (Mailchimp, ConvertKit)",
    "Social proof widgets (testimonials, trust badges)",
    "Free 30-day bug fixes and support"
  ];

  const faqs = [
    {
      question: "How long does it take to build a landing page?",
      answer: "Typically 7-10 business days from kickoff to launch. This includes: 1-2 days for audit and strategy, 2-3 days for design iterations, 3-4 days for development, and 1 day for testing and deployment."
    },
    {
      question: "What if I don't have content or copywriting?",
      answer: "No problem! We provide copywriting guidance and can recommend professional copywriters. We'll also help you craft compelling headlines and CTAs based on conversion best practices."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Absolutely. We integrate with all major platforms: Stripe for payments, HubSpot/Salesforce for CRM, Mailchimp for email, Google Analytics for tracking, and any custom APIs you need."
    },
    {
      question: "Do I own the design and code?",
      answer: "Yes! Upon full payment, you receive all design files (Figma), source code (GitHub), and full ownership rights. You're free to modify, extend, or hand off to another developer."
    },
    {
      question: "What's the difference between a landing page and a full website?",
      answer: "A landing page is a single, focused page designed for one specific goal (sign-ups, sales, etc.). A full website has multiple pages and broader purposes. Landing pages are perfect for campaigns, product launches, and lead generation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! All projects include 30 days of free bug fixes and minor tweaks. After that, we offer monthly retainers for ongoing updates, A/B testing, and conversion optimization."
    }
  ];

  return (
    <>
      <Head>
        <title>Landing Page Development for SaaS Startups | High-Converting Design & Dev | Joseign</title>
        <meta
          name="description"
          content="Get a stunning, high-converting landing page in 7-10 days. Expert landing page design and development for SaaS startups. Mobile-first, SEO-optimized, conversion-focused. See our proven process."
        />
        <meta
          name="keywords"
          content="landing page design, landing page development, SaaS landing page, high-converting landing page, landing page designer, Next.js landing page, conversion optimization, landing page builder, startup landing page, product launch landing page"
        />
        <link rel="canonical" href="https://joseign.com/landing-page-design" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Landing Page Development for SaaS | Joseign" />
        <meta property="og:description" content="Conversion-optimized landing pages delivered in 7-10 days. Mobile-first design, SEO-optimized code, and results you can measure." />
        <meta property="og:url" content="https://joseign.com/landing-page-design" />
        <meta property="og:image" content="https://joseign.com/services/landing.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Landing Page Development for SaaS | Joseign" />
        <meta name="twitter:description" content="High-converting landing pages in 7-10 days. Expert design + development." />
        <meta name="twitter:image" content="https://joseign.com/services/landing.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Landing Page Development",
              "provider": {
                "@type": "Organization",
                "name": "Joseign",
                "url": "https://joseign.com"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Landing Page Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SaaS Landing Page Design & Development",
                      "description": "High-converting landing pages for SaaS startups"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <TransitionEffect />

      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-pink-50 to-purple-50 dark:from-dark dark:via-gray-900 dark:to-gray-800 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,70,148,0.1),transparent_50%)]"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-1 gap-12 md:gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🚀 Delivered in 7-10 Days
            </motion.div>

            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-black mb-6 leading-tight">
              Landing Pages That <br />
              <span className="text-primary">Actually Convert</span>
            </h1>

            <p className="text-xl md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Stop losing customers to confusing landing pages. Get a data-driven, conversion-optimized page that turns visitors into paying users—guaranteed.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                data-cal-namespace="landing-development"
                data-cal-link="joseign/landing-development"
                data-cal-config='{"layout":"month_view"}'
              >
                Book a Free Call
              </motion.button>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-gray-800 border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center gap-8 md:gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>30-day support included</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-4 border-primary">
              <div className="absolute -top-5 -right-5 bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg z-10">
                7-10D
              </div>
              <div className="space-y-2 p-4">
                {heroTimeline.map((item, index) => (
                  <div key={index} className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenAccordion(index)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="font-semibold text-left">{item.step}</span>
                      <span className="text-primary font-bold text-sm">{item.duration}</span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openAccordion === index ? "auto" : 0,
                        opacity: openAccordion === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700">
                        <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={item.image}
                            alt={item.step}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Our Process</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              How We Build Landing Pages <br />
              <span className="text-primary">That Convert Like Crazy</span>
            </h2>
            <p className="text-xl md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From audit to launch, here's exactly how we transform your landing page into a conversion machine in just 7-10 days.
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="grid grid-cols-12 gap-8 md:grid-cols-1">
                    <div className="col-span-2 md:col-span-1 flex md:flex-row md:items-center md:gap-4">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center relative">
                          <step.icon className="text-primary text-3xl md:text-2xl" />
                          <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full w-10 h-10 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-xs shadow-lg">
                            {step.number}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-10 md:col-span-1 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-primary transition-all">
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-6 mb-6">
                        <div>
                          <h3 className="text-2xl md:text-xl font-bold mb-4">{step.title}</h3>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <div className="relative w-full h-48 md:h-40 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary">
                        <p className="text-sm font-semibold text-primary mb-1">✨ Deliverable:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Why Choose Us</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Built for Speed, <span className="text-primary">Optimized for Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Everything You Need</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              What's <span className="text-primary">Included</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4"
              >
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">FAQ</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark rounded-xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden group"
              >
                <summary className="px-6 py-5 cursor-pointer font-bold text-lg flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {faq.question}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-4">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-24 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gradient-to-br from-primary to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Ready to Build a Landing Page <br />
              That Actually Converts?
            </h2>
            <p className="text-xl md:text-lg mb-8 opacity-90">
              Let's turn your traffic into paying customers. Book a free 30-minute call to discuss your project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-12 py-5 rounded-lg font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
              data-cal-namespace="landing-development"
              data-cal-link="joseign/landing-development"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Your Free Call Now
            </motion.button>
            <p className="mt-6 text-sm opacity-75">
              No pressure. No obligation. Just honest advice about your landing page.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LandingPageDesign;
