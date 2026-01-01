import BackendTab from "@/components/MVPTabs/BackendTab";
import DeploymentTab from "@/components/MVPTabs/DeploymentTab";
import DiscoveryTab from "@/components/MVPTabs/DiscoveryTab";
import FrontendTab from "@/components/MVPTabs/FrontendTab";
import UIUXTab from "@/components/MVPTabs/UIUXTab";
import TransitionEffect from "@/components/TransitionEffect";
import { getCalApi } from "@calcom/embed-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBolt, FaChartLine, FaCheckCircle, FaCloud, FaCode, FaCog, FaDatabase, FaLightbulb, FaMagic, FaPencilRuler, FaRocket, FaServer, FaShieldAlt, FaUsers } from "react-icons/fa";

const MVPDesignDevelopment = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = useRef(null);
  const safariRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: safariProgress } = useScroll({
    target: safariRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Safari browser scaling - starts small and grows as we scroll
  const safariScale = useTransform(scrollYProgress, [0, 0.3], [0.75, 1]);
  const safariRotateX = useTransform(scrollYProgress, [0, 0.3], [20, 0]);

  // Parallax effects for floating stats
  const statsLeftY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const statsLeftX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const statsRightY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const statsRightX = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const isSafariInView = useInView(safariRef, { once: true, margin: "-200px" });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "mvp-strategy-call" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // Trigger tab glow animation when Safari comes into view
  useEffect(() => {
    if (isSafariInView) {
      const glowSequence = async () => {
        for (let i = 0; i < safariTabs.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 400));
          // Glow effect will be handled by CSS animation triggered by data attribute
        }
      };
      glowSequence();
    }
  }, [isSafariInView]);

  const safariTabs = [
    {
      title: "Discovery & UX Flows",
      icon: FaLightbulb,
      duration: "Week 1",
      color: "from-blue-500 to-cyan-500",
      content: {
        description: "We start by understanding your vision, users, and business goals. Then we map out the entire user journey and create detailed flow diagrams.",
        deliverables: [
          "Product discovery workshop",
          "User persona creation",
          "Complete user flow diagrams",
          "Feature prioritization (MoSCoW)",
          "Information architecture",
          "Wireframe sketches"
        ],
        outcome: "Clear roadmap and validated user flows ready for design"
      }
    },
    {
      title: "UI/UX Design & Prototype",
      icon: FaPencilRuler,
      duration: "Week 2-3",
      color: "from-purple-500 to-pink-500",
      content: {
        description: "We design every screen with pixel-perfect detail, create an interactive prototype, and validate it with real users before writing a single line of code.",
        deliverables: [
          "Design system (colors, fonts, components)",
          "High-fidelity UI for all screens",
          "Interactive Figma prototype",
          "Responsive breakpoint designs",
          "User testing with 5-10 people",
          "Refined final designs"
        ],
        outcome: "Battle-tested designs validated by real users"
      }
    },
    {
      title: "Frontend Development",
      icon: FaCode,
      duration: "Week 3-4",
      color: "from-green-500 to-emerald-500",
      content: {
        description: "We transform the designs into a blazing-fast, responsive web app using Next.js and React. Every interaction is smooth, accessible, and optimized.",
        deliverables: [
          "Next.js setup with TypeScript",
          "Component library implementation",
          "Authentication UI (login, signup)",
          "Dashboard and core features",
          "Form validation and error handling",
          "Animations and micro-interactions"
        ],
        outcome: "Fully functional frontend connected to backend APIs"
      }
    },
    {
      title: "Backend & Integrations",
      icon: FaServer,
      duration: "Week 4-5",
      color: "from-orange-500 to-red-500",
      content: {
        description: "We build a scalable backend with database, APIs, authentication, and integrate all third-party services like payments, email, and analytics.",
        deliverables: [
          "RESTful API with Node.js",
          "Database schema (PostgreSQL/MongoDB)",
          "JWT authentication system",
          "Stripe payment integration",
          "Email service (SendGrid/Resend)",
          "File upload (AWS S3/Cloudinary)"
        ],
        outcome: "Production-ready backend with all integrations working"
      }
    },
    {
      title: "Deployment & Testing",
      icon: FaRocket,
      duration: "Week 5-6",
      color: "from-indigo-500 to-blue-500",
      content: {
        description: "We test everything, fix bugs, optimize performance, and deploy to production with CI/CD pipelines. Your MVP goes live with monitoring and analytics.",
        deliverables: [
          "End-to-end testing (Playwright)",
          "Bug fixes and optimization",
          "Security audit and fixes",
          "CI/CD pipeline setup",
          "Production deployment (Vercel + Railway)",
          "Analytics and error tracking"
        ],
        outcome: "Live MVP with real users and feedback loop active"
      }
    }
  ];

  const mvpPhases = [
    {
      phase: "Week 1-2",
      title: "Product Strategy & Design Sprint",
      icon: FaLightbulb,
      activities: [
        "Product discovery workshop with stakeholders",
        "User persona and journey mapping",
        "Competitive analysis and market research",
        "Feature prioritization using MoSCoW method",
        "Information architecture and user flows",
        "Low-fidelity wireframes for core flows",
        "Technical architecture planning"
      ],
      deliverable: "Product roadmap, wireframes, and technical specs document"
    },
    {
      phase: "Week 2-3",
      title: "UI/UX Design & Prototyping",
      icon: FaMagic,
      activities: [
        "Design system creation (colors, typography, components)",
        "High-fidelity UI mockups for all screens",
        "Interactive Figma prototype",
        "Responsive design for mobile and desktop",
        "User testing with clickable prototype",
        "Design iterations based on feedback",
        "Developer handoff documentation"
      ],
      deliverable: "Complete Figma design file with interactive prototype"
    },
    {
      phase: "Week 3-5",
      title: "Frontend Development",
      icon: FaCode,
      activities: [
        "Next.js app setup with TypeScript",
        "Component library implementation",
        "Authentication UI (login, signup, password reset)",
        "Dashboard and core feature screens",
        "Responsive design implementation",
        "Form validation and error handling",
        "API integration with backend",
        "Animation and micro-interactions"
      ],
      deliverable: "Fully functional frontend application"
    },
    {
      phase: "Week 4-6",
      title: "Backend Development & Database",
      icon: FaDatabase,
      activities: [
        "Node.js/Express API setup",
        "PostgreSQL/MongoDB database schema",
        "RESTful API endpoints for core features",
        "User authentication and authorization (JWT)",
        "Email service integration (SendGrid/Mailgun)",
        "Payment gateway integration (Stripe)",
        "File upload and storage (AWS S3/Cloudinary)",
        "API documentation with Swagger"
      ],
      deliverable: "Complete backend API with database"
    },
    {
      phase: "Week 5-6",
      title: "Testing & Deployment",
      icon: FaCloud,
      activities: [
        "Unit and integration testing",
        "End-to-end testing with Playwright/Cypress",
        "Bug fixes and performance optimization",
        "Security audit and penetration testing",
        "CI/CD pipeline setup (GitHub Actions)",
        "Deployment to Vercel (frontend) and Railway (backend)",
        "Domain setup and SSL configuration",
        "Analytics and monitoring setup (Sentry, Mixpanel)"
      ],
      deliverable: "Production-ready MVP deployed and live"
    },
    {
      phase: "Week 6+",
      title: "Launch & Iteration",
      icon: FaRocket,
      activities: [
        "Soft launch with beta users",
        "User feedback collection and analysis",
        "Performance monitoring and bug fixes",
        "Feature iteration based on real usage",
        "Onboarding flow optimization",
        "Growth experiments and A/B testing",
        "Knowledge transfer and documentation"
      ],
      deliverable: "Live MVP with active users and feedback loop"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: FaCode,
      technologies: [
        "Next.js 14 with App Router",
        "React 18 with TypeScript",
        "Tailwind CSS for styling",
        "Framer Motion for animations",
        "React Hook Form for forms",
        "Zustand/Redux for state management",
        "React Query for API caching"
      ]
    },
    {
      category: "Backend",
      icon: FaDatabase,
      technologies: [
        "Node.js with Express or NestJS",
        "PostgreSQL or MongoDB database",
        "Prisma ORM for type-safe queries",
        "JWT authentication",
        "AWS S3 for file storage",
        "Redis for caching",
        "WebSocket support for real-time features"
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: FaCloud,
      technologies: [
        "Vercel for frontend hosting",
        "Railway/Render for backend hosting",
        "GitHub Actions for CI/CD",
        "Docker for containerization",
        "Cloudflare for CDN and security",
        "Sentry for error tracking",
        "Mixpanel/PostHog for analytics"
      ]
    },
    {
      category: "Integrations",
      icon: FaCog,
      technologies: [
        "Stripe for payments",
        "SendGrid/Resend for emails",
        "Clerk/NextAuth for authentication",
        "OpenAI API for AI features",
        "Twilio for SMS",
        "Google Maps API",
        "Any custom API you need"
      ]
    }
  ];

  const whyMVP = [
    {
      icon: FaBolt,
      title: "Ship Fast, Learn Faster",
      description: "Don't waste 6 months building features nobody wants. Launch in 4-6 weeks, get real user feedback, and iterate based on data—not assumptions."
    },
    {
      icon: FaChartLine,
      title: "Validate Before You Scale",
      description: "An MVP proves product-market fit before you invest in a full build. Test your core value proposition with real users at a fraction of the cost."
    },
    {
      icon: FaShieldAlt,
      title: "Production-Ready Code",
      description: "This isn't a throwaway prototype. We build MVPs with clean, scalable code that can grow into your full product. No technical debt."
    },
    {
      icon: FaUsers,
      title: "User-Centered from Day One",
      description: "We don't just build what you ask for—we validate it with user research, usability testing, and real-world feedback loops."
    }
  ];

  const whatYouGet = [
    "Complete product strategy and roadmap",
    "High-fidelity UI/UX design in Figma",
    "Interactive prototype for user testing",
    "Fully functional web application",
    "Mobile-responsive design (works on all devices)",
    "User authentication (login, signup, password reset)",
    "Database schema and backend API",
    "Payment integration (Stripe)",
    "Email notifications (transactional + marketing)",
    "Admin dashboard for management",
    "Analytics and user tracking setup",
    "SEO optimization (meta tags, sitemap, schema markup)",
    "Security best practices (HTTPS, CORS, rate limiting)",
    "CI/CD pipeline for automated deployments",
    "Production deployment on Vercel + Railway",
    "Complete source code on GitHub",
    "Technical documentation",
    "API documentation (Swagger/Postman)",
    "30 days of post-launch support",
    "Knowledge transfer and training session"
  ];

  const idealFor = [
    {
      title: "First-Time Founders",
      description: "You have an idea but need help validating it and bringing it to life. We guide you from concept to launch."
    },
    {
      title: "Funded Startups",
      description: "You raised pre-seed/seed funding and need to ship fast to prove traction before the next round."
    },
    {
      title: "Corporate Innovation Teams",
      description: "You need to build and test a new product idea quickly without disrupting your core business."
    },
    {
      title: "Technical Co-Founders",
      description: "You can code but need design, strategy, and speed. We become your extended product team."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between an MVP and a full product?",
      answer: "An MVP (Minimum Viable Product) includes only the core features needed to solve your users' primary problem and validate product-market fit. A full product has all the bells and whistles. MVPs are designed to ship fast (4-6 weeks), gather feedback, and iterate. We build MVPs with production-quality code so you can scale later."
    },
    {
      question: "How much does an end-to-end MVP cost?",
      answer: "MVPs typically range from $15,000 to $40,000 depending on complexity, features, and integrations. A simple SaaS dashboard with auth and CRUD operations is on the lower end. A marketplace with payments, messaging, and AI features is on the higher end. We provide a detailed quote after our discovery call."
    },
    {
      question: "Can you build mobile apps (iOS/Android)?",
      answer: "Yes! We build cross-platform mobile apps using React Native or progressive web apps (PWAs) that work like native apps. For complex native features (AR, camera, etc.), we can recommend trusted mobile dev partners."
    },
    {
      question: "Do I need to have the design ready?",
      answer: "Nope! Our end-to-end MVP service includes product strategy, UX research, UI design, and development. We start from your idea and deliver a fully designed and developed product."
    },
    {
      question: "What if I need changes after launch?",
      answer: "All MVPs include 30 days of post-launch support for bug fixes and minor tweaks. After that, we offer monthly retainers ($3,000-$10,000/month) for ongoing feature development, A/B testing, and growth experiments."
    },
    {
      question: "Can you work with my existing team?",
      answer: "Absolutely! We integrate seamlessly with your in-house developers, designers, and product managers. We can handle the full build or fill specific gaps (design-only, frontend-only, etc.)."
    },
    {
      question: "What happens if the MVP doesn't get traction?",
      answer: "That's the point of an MVP—to fail fast and learn. You'll own all the code and designs, so you can pivot, iterate, or shut down without wasting years of development. We also provide analytics and user research to help you understand why and what to do next."
    }
  ];

  const successMetrics = [
    { metric: "4-6 weeks", label: "Average delivery time" },
    { metric: "15+", label: "MVPs shipped" },
    { metric: "$2M+", label: "Raised by our clients post-MVP" },
    { metric: "100%", label: "Production-ready code" }
  ];

  return (
    <>
      <Head>
        <title>End-to-End MVP Development | Full-Stack Product Design & Dev in 4-6 Weeks | Joseign</title>
        <meta
          name="description"
          content="Ship your SaaS MVP in 4-6 weeks. Full-stack development from idea to production: product strategy, UI/UX design, frontend, backend, deployment. Validate fast, iterate faster."
        />
        <meta
          name="keywords"
          content="MVP development, minimum viable product, SaaS development, full-stack developer, product development, startup development, MVP builder, Next.js developer, React developer, product design and development"
        />
        <link rel="canonical" href="https://joseign.com/mvp-design-development" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="End-to-End MVP Development | Joseign" />
        <meta property="og:description" content="From idea to production in 4-6 weeks. Full-stack MVP development for startups and innovators." />
        <meta property="og:url" content="https://joseign.com/mvp-design-development" />
        <meta property="og:image" content="https://joseign.com/services/proto.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="End-to-End MVP Development | Joseign" />
        <meta name="twitter:description" content="Ship your SaaS MVP in 4-6 weeks. Strategy, design, development, deployment." />
        <meta name="twitter:image" content="https://joseign.com/services/proto.jpeg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "MVP Development",
              "provider": {
                "@type": "Organization",
                "name": "Joseign",
                "url": "https://joseign.com"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "MVP Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "End-to-End MVP Development",
                      "description": "Full-stack product development from concept to production"
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
      <section ref={heroRef} className="relative flex flex-col items-center overflow-visible bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-dark px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 pt-24 pb-22">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          {/* Floating Glassmorphic Stats - Top of Headline */}
          <div className="relative mt-8">
            {/* Top Left Stats */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              style={{ y: statsLeftY, x: statsLeftX }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -top-16 -left-22 xl:-left-16 lg:hidden z-20"
            >
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 shadow-2xl">
                <div className="text-5xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  4-6
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Weeks to Launch</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              style={{ y: statsLeftY, x: statsLeftX }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-24 -left-40 xl:-left-20 lg:hidden z-20"
            >
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 shadow-2xl">
                <div className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  $2M+
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Raised by Clients</div>
              </div>
            </motion.div>

            {/* Top Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              style={{ y: statsRightY, x: statsRightX }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-16 -right-4  xl:-right-16 lg:hidden z-20"
            >
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 shadow-2xl">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">MVPs Shipped</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              style={{ y: statsRightY, x: statsRightX }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute top-24 -right-40 xl:-right-20 lg:hidden z-20"
            >
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 shadow-2xl">
                <div className="text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Production Ready</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                🚀 From Idea to Production in 4-6 Weeks
              </motion.div>

              <h1 className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-black mb-4 leading-tight">
                Ship Your SaaS MVP in <br />
                <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Weeks, Not Months
                </span>
              </h1>

              <p className="text-2xl md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Don't waste 6 months building the wrong thing. We design, develop, and deploy your full-stack MVP in 4-6 weeks so you can validate with real users and iterate fast.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all"
                  data-cal-namespace="mvp-strategy-call"
                  data-cal-link="joseign/mvp-strategy-call"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Strategy Call
                </motion.button>
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-gray-800 border-2 border-primary text-primary px-10 py-5 rounded-lg font-bold text-xl hover:bg-primary hover:text-white transition-all"
                  >
                    See MVPs We've Built
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Safari Browser Component - Inside Hero, No Title */}
          <div ref={safariRef} className="w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                scale: safariScale,
                rotateX: safariRotateX,
                transformPerspective: 1200
              }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-700">
                {/* Safari Top Bar */}
                <div className="bg-gray-200 dark:bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-300 dark:border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 ml-4 bg-white dark:bg-gray-700 rounded-lg px-4 py-1.5 text-sm text-gray-600 dark:text-gray-400">
                    https://joseign.com/exceptional-process/{safariTabs[activeTab].title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                  </div>
                </div>

                {/* Safari Tabs */}
                <div className="bg-gray-100 dark:bg-gray-900 px-2 pt-2 flex gap-1 overflow-x-auto scrollbar-hide">
                  {safariTabs.map((tab, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`relative px-6 py-3 rounded-t-lg text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                        activeTab === index
                          ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                      whileHover={{ y: -2 }}
                      animate={
                        isSafariInView && index === 0
                          ? {
                              boxShadow: [
                                '0 0 0px rgba(201, 70, 148, 0)',
                                '0 0 20px rgba(201, 70, 148, 0.6)',
                                '0 0 0px rgba(201, 70, 148, 0)'
                              ]
                            }
                          : isSafariInView && index === 1
                          ? {
                              boxShadow: [
                                '0 0 0px rgba(201, 70, 148, 0)',
                                '0 0 20px rgba(201, 70, 148, 0.6)',
                                '0 0 0px rgba(201, 70, 148, 0)'
                              ]
                            }
                          : isSafariInView && index === 2
                          ? {
                              boxShadow: [
                                '0 0 0px rgba(201, 70, 148, 0)',
                                '0 0 20px rgba(201, 70, 148, 0.6)',
                                '0 0 0px rgba(201, 70, 148, 0)'
                              ]
                            }
                          : isSafariInView && index === 3
                          ? {
                              boxShadow: [
                                '0 0 0px rgba(201, 70, 148, 0)',
                                '0 0 20px rgba(201, 70, 148, 0.6)',
                                '0 0 0px rgba(201, 70, 148, 0)'
                              ]
                            }
                          : isSafariInView && index === 4
                          ? {
                              boxShadow: [
                                '0 0 0px rgba(201, 70, 148, 0)',
                                '0 0 20px rgba(201, 70, 148, 0.6)',
                                '0 0 0px rgba(201, 70, 148, 0)'
                              ]
                            }
                          : {}
                      }
                      transition={{
                        delay: index * 0.4,
                        duration: 0.6,
                        repeat: 0
                      }}
                    >
                      <tab.icon className="text-lg" />
                      <span className="sm:hidden">{tab.title}</span>
                      <span className="hidden sm:inline">{tab.duration}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white dark:bg-gray-800 p-16 md:p-8 min-h-[600px]">
                  {activeTab === 0 && <DiscoveryTab />}
                  {activeTab === 1 && <UIUXTab />}
                  {activeTab === 2 && <FrontendTab />}
                  {activeTab === 3 && <BackendTab />}
                  {activeTab === 4 && <DeploymentTab />}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why MVP First */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Why Start with an MVP?</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Validate Your Idea with <span className="text-primary">Real Users, Fast</span>
            </h2>
            <p className="text-xl md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Startups don't fail because of bad ideas—they fail because they build the wrong thing for too long. An MVP lets you test, learn, and pivot before you run out of runway.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            {whyMVP.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 6-Week Process */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Our Process</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              From Idea to Launch in <span className="text-primary">6 Weeks</span>
            </h2>
            <p className="text-xl md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here's exactly how we take your SaaS idea from concept to a production-ready MVP with real users.
            </p>
          </motion.div>

          <div className="space-y-6">
            {mvpPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-dark rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary transition-all shadow-lg"
              >
                <div className="flex items-start gap-6 md:flex-col">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <phase.icon className="text-primary text-3xl" />
                    </div>
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold text-center">
                      {phase.phase}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl md:text-2xl font-black mb-6">{phase.title}</h3>

                    <ul className="grid grid-cols-2 md:grid-cols-1 gap-3 mb-6">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary mb-1">✨ Deliverable:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{phase.deliverable}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Technology Stack</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Built with <span className="text-primary">Modern, Production-Ready Tech</span>
            </h2>
            <p className="text-xl md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We use battle-tested technologies that scale. No experimental frameworks—just proven stacks that top startups use.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <stack.icon className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">{stack.category}</h3>
                </div>

                <ul className="space-y-3">
                  {stack.technologies.map((tech, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Everything Included</p>
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
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 bg-white dark:bg-dark rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-24 md:py-20 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-white dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">Who This Is For</p>
            <h2 className="text-5xl lg:text-4xl md:text-3xl font-black mb-6">
              Ideal for <span className="text-primary">Founders & Innovators</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {idealFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-purple-50/50 dark:from-primary/10 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="py-32 md:py-24 px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl lg:text-5xl md:text-4xl font-black mb-6">
              Ready to Ship Your MVP <br />
              in 4-6 Weeks?
            </h2>
            <p className="text-2xl md:text-xl mb-10 opacity-90">
              Let's turn your idea into a production-ready product. Book a free strategy call to discuss your vision.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-12 py-6 rounded-lg font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all"
              data-cal-namespace="mvp-strategy-call"
              data-cal-link="joseign/mvp-strategy-call"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Your Strategy Call
            </motion.button>
            <p className="mt-6 text-sm opacity-75">
              Free 45-minute call. No pressure. No obligation. Just honest advice about your product.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MVPDesignDevelopment;
