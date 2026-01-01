import { getCalApi } from "@calcom/embed-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaCheckCircle, FaLightbulb, FaPencilRuler, FaUserCheck, FaSync, FaMobile, FaAccessibleIcon, FaChartBar, FaBrain, FaHeart } from "react-icons/fa";
import TransitionEffect from "@/components/TransitionEffect";

const UIUXDesignSaaS = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "ui-ux-design" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const uxProblems = [
    {
      icon: "😵",
      problem: "Users don't understand how to use your product",
      solution: "We create intuitive interfaces with clear visual hierarchy and user flows"
    },
    {
      icon: "⏰",
      problem: "High bounce rates and low engagement",
      solution: "We design experiences that hook users in the first 5 seconds"
    },
    {
      icon: "💸",
      problem: "Users abandon during onboarding or checkout",
      solution: "We optimize critical user journeys with friction-free UX patterns"
    },
    {
      icon: "😠",
      problem: "Customers complain your app is confusing",
      solution: "We conduct user research and usability testing to find and fix pain points"
    }
  ];

  const designProcess = [
    {
      phase: "Phase 1",
      title: "Discovery & Research",
      duration: "3-5 days",
      icon: FaBrain,
      activities: [
        "Stakeholder interviews to understand business goals",
        "Competitive analysis of 5-10 similar SaaS products",
        "User persona creation based on your target audience",
        "User journey mapping for key workflows",
        "Heuristic evaluation of current product (if applicable)"
      ],
      deliverable: "Research report with actionable insights and design strategy"
    },
    {
      phase: "Phase 2",
      title: "Information Architecture",
      duration: "2-3 days",
      icon: FaLightbulb,
      activities: [
        "Sitemap creation for product structure",
        "User flow diagrams for critical paths",
        "Content inventory and prioritization",
        "Navigation design and taxonomy",
        "Card sorting exercises (if needed)"
      ],
      deliverable: "Complete IA documentation with user flows"
    },
    {
      phase: "Phase 3",
      title: "Wireframing & Prototyping",
      duration: "5-7 days",
      icon: FaPencilRuler,
      activities: [
        "Low-fidelity wireframes for all key screens",
        "Interactive clickable prototype in Figma",
        "Micro-interaction design for key actions",
        "Responsive breakpoint wireframes",
        "Internal team review and iterations"
      ],
      deliverable: "Interactive Figma prototype ready for user testing"
    },
    {
      phase: "Phase 4",
      title: "Visual Design & UI",
      duration: "7-10 days",
      icon: FaHeart,
      activities: [
        "Design system creation (colors, typography, components)",
        "High-fidelity UI mockups for all screens",
        "Icon set and illustration style",
        "Motion design and animation specs",
        "Accessibility audit (WCAG 2.1 AA compliance)"
      ],
      deliverable: "Complete UI design file with design system and components"
    },
    {
      phase: "Phase 5",
      title: "User Testing & Iteration",
      duration: "3-5 days",
      icon: FaSync,
      activities: [
        "Usability testing with 5-10 target users",
        "Heatmap and click tracking analysis",
        "Design refinements based on user feedback",
        "Final polish and edge case design",
        "Developer handoff preparation"
      ],
      deliverable: "Validated final designs ready for development"
    }
  ];

  const services = [
    {
      icon: FaMobile,
      title: "Mobile App UI/UX Design",
      description: "Native iOS and Android app design that users love. From onboarding to core features, we craft delightful mobile experiences."
    },
    {
      icon: FaChartBar,
      title: "SaaS Dashboard Design",
      description: "Complex data made simple. We design dashboards that help users make decisions fast—no information overload."
    },
    {
      icon: FaUserCheck,
      title: "User Onboarding Design",
      description: "First impressions matter. We design onboarding flows that activate users quickly and reduce time-to-value."
    },
    {
      icon: FaAccessibleIcon,
      title: "Accessibility Optimization",
      description: "Inclusive design for everyone. We ensure your product is WCAG 2.1 AA compliant and usable by all audiences."
    },
    {
      icon: FaSync,
      title: "UX Audit & Redesign",
      description: "Already have a product? We'll audit the UX, identify friction points, and redesign for better conversion and retention."
    },
    {
      icon: FaLightbulb,
      title: "Design System Creation",
      description: "Scale your product design. We build comprehensive design systems with reusable components, patterns, and guidelines."
    }
  ];

  const whatYouGet = [
    "Complete Figma design files with full edit access",
    "Design system with reusable components",
    "Interactive prototypes for user testing",
    "Responsive designs (mobile, tablet, desktop)",
    "Icon set and custom illustrations",
    "Accessibility compliance documentation",
    "Style guide and design specifications",
    "Developer handoff documentation",
    "Usability testing reports",
    "2 rounds of revisions included",
    "Source files (SVG, PNG exports)",
    "30 days of design support post-delivery"
  ];

  const designPrinciples = [
    {
      title: "User-First Thinking",
      description: "We don't design for ourselves. Every decision is backed by user research, usability testing, and data."
    },
    {
      title: "Simplicity Over Complexity",
      description: "The best UX is invisible. We remove friction, reduce cognitive load, and make complex things feel simple."
    },
    {
      title: "Consistency Builds Trust",
      description: "From typography to button styles, we create design systems that ensure consistency across your entire product."
    },
    {
      title: "Accessibility for All",
      description: "Great design works for everyone. We design for screen readers, keyboard navigation, and diverse abilities."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between UI and UX design?",
      answer: "UX (User Experience) is about how your product works—user flows, research, wireframes, and functionality. UI (User Interface) is about how it looks—colors, typography, visual design. We do both to create products that are beautiful AND functional."
    },
    {
      question: "How long does a typical UI/UX project take?",
      answer: "It depends on scope. A simple landing page redesign takes 1-2 weeks. A full SaaS product UI/UX from scratch takes 4-8 weeks. We'll provide an exact timeline after our discovery call."
    },
    {
      question: "Do you do user research and testing?",
      answer: "Absolutely! We conduct user interviews, competitive analysis, usability testing, and A/B testing. Research-driven design always outperforms guesswork."
    },
    {
      question: "Can you work with our existing design system?",
      answer: "Yes! We can extend your current design system, refine it, or build a new one from scratch if needed. We're flexible and adapt to your existing tools and workflows."
    },
    {
      question: "What design tools do you use?",
      answer: "Figma is our primary tool for UI/UX design, prototyping, and collaboration. We also use Adobe Creative Suite for custom illustrations, FigJam for workshops, and Maze/Hotjar for user testing."
    },
    {
      question: "Do you provide design-to-code handoff?",
      answer: "Yes! We provide detailed design specs, annotated mockups, and developer-friendly documentation. We can also work directly with your dev team during implementation to ensure pixel-perfect results."
    },
    {
      question: "What if we need changes after the project is done?",
      answer: "All projects include 2 rounds of revisions and 30 days of free support. After that, we offer monthly retainers for ongoing design support, updates, and new features."
    }
  ];

  return (
    <>
      <Head>
        <title>SaaS UI/UX Design Services | User-Centered Product Design | Joseign</title>
        <meta
          name="description"
          content="Expert UI/UX design for SaaS products. We create intuitive, conversion-focused interfaces that users love. From research to prototyping to visual design—get designs that drive results."
        />
        <meta
          name="keywords"
          content="UI UX design, SaaS UI design, product design, user experience design, UX designer, mobile app design, dashboard design, design system, user research, usability testing, Figma designer"
        />
        <link rel="canonical" href="https://joseign.com/ui-ux-design-saas" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="SaaS UI/UX Design Services | Joseign" />
        <meta property="og:description" content="User-centered design that reduces churn and increases engagement. Expert UI/UX for SaaS products." />
        <meta property="og:url" content="https://joseign.com/ui-ux-design-saas" />
        <meta property="og:image" content="https://joseign.com/services/ui.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SaaS UI/UX Design Services | Joseign" />
        <meta name="twitter:description" content="Intuitive UI/UX design for SaaS products that users actually love." />
        <meta name="twitter:image" content="https://joseign.com/services/ui.jpeg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "UI/UX Design for SaaS",
              "provider": {
                "@type": "Organization",
                "name": "Joseign",
                "url": "https://joseign.com"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "UI/UX Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SaaS Product UI/UX Design",
                      "description": "User-centered design for SaaS products"
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-dark px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-20 md:py-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,70,148,0.15),transparent_50%)]"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-8 items-center relative z-10">
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
              ✨ Research-Driven Design
            </motion.div>

            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-black mb-6 leading-tight">
              UI/UX Design That <br />
              <span className="text-primary">Users Actually Love</span>
            </h1>

            <p className="text-xl md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Confusing interfaces kill retention. We create intuitive, conversion-focused designs that users understand instantly—so they stay, engage, and convert.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                data-cal-namespace="ui-ux-design"
                data-cal-link="joseign/ui-ux-design"
                data-cal-config='{"layout":"month_view"}'
              >
                Get a Free UX Audit
              </motion.button>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-gray-800 border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all"
                >
                  View Design Work
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center gap-8 md:gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>Figma & design systems</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>User testing included</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {uxProblems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {item.problem}
                  </p>
                  <p className="text-xs text-primary font-semibold">
                    ✓ We fix that
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Our Services</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Comprehensive UI/UX Design <br />
              <span className="text-primary">For SaaS Products</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Timeline */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Our Process</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              From Research to <span className="text-primary">Pixel-Perfect Design</span>
            </h2>
            <p className="text-xl md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our battle-tested design process combines user research, rapid prototyping, and iterative testing to create products users love.
            </p>
          </motion.div>

          <div className="space-y-8">
            {designProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary transition-all shadow-lg">
                  <div className="flex items-start gap-6 md:flex-col">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <phase.icon className="text-primary text-3xl" />
                      </div>
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold text-center">
                        {phase.duration}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                          {phase.phase}
                        </span>
                        <h3 className="text-2xl md:text-xl font-black">{phase.title}</h3>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                        <p className="text-sm font-semibold text-primary mb-1">Deliverable:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{phase.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Our Philosophy</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Design Principles <span className="text-primary">We Live By</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">{principle.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Everything You Need</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              What You <span className="text-primary">Receive</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {whatYouGet.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white dark:bg-dark rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
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
                className="bg-gray-50 dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden group"
              >
                <summary className="px-6 py-5 cursor-pointer font-bold text-lg flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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

      {/* CTA */}
      <section className="py-32 md:py-24 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gradient-to-br from-purple-600 via-primary to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Ready to Design a Product <br />
              That Users Love?
            </h2>
            <p className="text-xl md:text-lg mb-8 opacity-90">
              Let's create an intuitive, beautiful experience that drives engagement and retention.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-12 py-5 rounded-lg font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
              data-cal-namespace="ui-ux-design"
              data-cal-link="joseign/ui-ux-design"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Your Free UX Audit
            </motion.button>
            <p className="mt-6 text-sm opacity-75">
              Get a free 15-minute UX audit of your current product during our call.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default UIUXDesignSaaS;
