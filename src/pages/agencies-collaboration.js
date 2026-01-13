import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { getCalApi } from "@calcom/embed-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaCrown,
  FaGem,
  FaGift,
  FaHeadset,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaUsers
} from "react-icons/fa";

const AgenciesCollaboration = () => {
  const [activeTier, setActiveTier] = useState("silver");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"agencies-collaboration"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "agencies" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const benefits = [
    {
      icon: FaRocket,
      title: "Project Management Hub",
      description: "Get exclusive access to hub.joseign.com — your centralized command center for all projects, with real-time progress tracking, file sharing, and client communication tools.",
      image: "/landing/PMT.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaPalette,
      title: "Free White-Label Demos",
      description: "Free access to demo.joseign.com with custom domains (demo.youragency.com). Showcase work under your brand with fully white-labeled presentations and client demos.",
      image: "/services/landing-step-2.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaClock,
      title: "Fast Turnaround Guarantee",
      description: "7-10 days for landing pages, 4-6 weeks for MVPs. If we miss the deadline or your client isn't satisfied, the project is free — no questions asked.",
      image: "/services/landing-step-3.png",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaGift,
      title: "Free Mockups & Discounted Case Studies",
      description: "Get unlimited free mockups for client pitches, plus 50% off professional case studies to showcase your portfolio and win more clients.",
      image: "/services/ui.png",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaHeadset,
      title: "24/7 Priority Support",
      description: "Dedicated support channel with 2-hour response guarantee. Never leave your clients waiting — we're always here when you need us.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaShieldAlt,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all projects. Unlimited revisions until your client is happy. If we don't deliver on time or meet expectations, it's free.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const tiers = [
    {
      name: "Purple",
      badge: "Getting Started",
      icon: FaStar,
      projects: "0-9 Projects",
      color: "from-purple-600 to-pink-600",
      ringColor: "ring-purple-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      pricing: {
        basic: "$680", // 20% off
        premium: "$1,160", // 20% off
        aiAgentic: "$2,360", // 20% off
        starterMVP: "$10,000", // 20% off
        scaleMVP: "$19,600" // 20% off
      },
      discount: "20% OFF",
      features: [
        "Access to Project Hub",
        "Free White-Label Demos",
        "7-10 Day Turnaround",
        "Email Support (24h response)",
        "Free Mockups"
      ]
    },
    {
      name: "Silver",
      badge: "Most Popular",
      icon: FaAward,
      projects: "10-99 Projects",
      color: "from-gray-300 to-gray-400",
      ringColor: "ring-gray-300",
      bgGradient: "bg-gradient-to-br from-gray-50 to-slate-100",
      pricing: {
        basic: "$595", // 30% off
        premium: "$1,015", // 30% off
        aiAgentic: "$2,065", // 30% off
        starterMVP: "$8,750", // 30% off
        scaleMVP: "$17,150" // 30% off
      },
      discount: "30% OFF",
      features: [
        "Everything in Purple, plus:",
        "Priority Support (12h response)",
        "Quarterly Strategy Calls",
        "Early Access to New Features",
        "25% Off Case Studies"
      ],
      highlighted: true
    },
    {
      name: "Golden",
      badge: "Preferred Partner",
      icon: FaCrown,
      projects: "100-499 Projects",
      color: "from-yellow-500 to-yellow-600",
      ringColor: "ring-yellow-400",
      bgGradient: "bg-gradient-to-br from-yellow-50 to-amber-50",
      pricing: {
        basic: "$510", // 40% off
        premium: "$870", // 40% off
        aiAgentic: "$1,770", // 40% off
        starterMVP: "$7,500", // 40% off
        scaleMVP: "$14,700" // 40% off
      },
      discount: "40% OFF",
      features: [
        "Everything in Silver, plus:",
        "24/7 Priority Support Channel",
        "Free Rush Delivery (48h)",
        "50% Off Case Studies",
        "Dedicated Account Rep",
        "Co-Marketing Opportunities"
      ]
    },
    {
      name: "Platinum",
      badge: "Elite Partner",
      icon: FaGem,
      projects: "500+ Projects",
      color: "from-gray-800 to-black",
      ringColor: "ring-black",
      bgGradient: "bg-gradient-to-br from-gray-100 to-gray-200",
      textColor: "text-dark",
      pricing: {
        basic: "$425", // 50% off
        premium: "$725", // 50% off
        aiAgentic: "$1,475", // 50% off
        starterMVP: "$6,250", // 50% off
        scaleMVP: "$12,250" // 50% off
      },
      discount: "50% OFF",
      features: [
        "Everything in Golden, plus:",
        "Dedicated Account Manager",
        "Unlimited Rush Delivery",
        "Free Case Studies",
        "Joint Venture Opportunities",
        "Custom White-Label Solutions",
        "Priority Feature Requests"
      ],
      isElite: true
    }
  ];

  const process = [
    {
      number: "01",
      title: "Partnership Onboarding",
      description: "Schedule a 30-minute call where we'll discuss your agency's needs, client base, and collaboration goals. We'll set up your hub.joseign.com account and custom white-label domain.",
      icon: FaUsers,
      deliverable: "Partnership agreement + Hub access"
    },
    {
      number: "02",
      title: "Client Intake & Briefing",
      description: "Submit projects through our hub with your client's requirements. We'll review within 2 hours and provide a detailed timeline, pricing, and any clarifying questions.",
      icon: FaCheckCircle,
      deliverable: "Project timeline + Pricing confirmation"
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We handle everything from design to development while you stay in the loop. Review milestones through the hub, request revisions, and keep your client updated with white-labeled progress reports.",
      icon: FaCode,
      deliverable: "Milestone updates + Design files"
    },
    {
      number: "04",
      title: "Delivery & Handoff",
      description: "Receive the completed project with full documentation, source files, and deployment guide. Present it to your client under your agency's brand with our white-label delivery kit.",
      icon: FaRocket,
      deliverable: "Complete project + White-label assets"
    }
  ];

  const faqs = [
    {
      question: "How does white-labeling work?",
      answer: "All deliverables (designs, documentation, demos) can be branded with your agency's logo and colors. We never mention Joseign to your clients unless you want us to. You present the work as your own, and we stay invisible."
    },
    {
      question: "What happens if my client isn't satisfied?",
      answer: "We offer unlimited revisions until your client is happy. If we miss a deadline or fail to meet expectations after revisions, the project is free. Your client relationship is our priority."
    },
    {
      question: "Can I mark up the pricing?",
      answer: "Absolutely! Our discounted rates are your cost. Add whatever margin makes sense for your agency. Many partners mark up 50-100% and still offer competitive pricing to their clients."
    },
    {
      question: "How do project credits work for tier progression?",
      answer: "Every completed project counts toward your tier progression. Landing pages, MVPs, and design projects all count equally. Track your progress in real-time through the hub dashboard."
    },
    {
      question: "What's included in the Project Management Hub?",
      answer: "hub.joseign.com includes: Real-time project tracking, file sharing & version control, client communication threads, milestone approvals, invoice management, analytics dashboard, and team collaboration tools."
    },
    {
      question: "Can I mix and match services in one project?",
      answer: "Yes! Many agencies bundle landing pages + MVP development, or UI/UX design + development. We'll create custom packages based on your client's needs with combined discounts."
    },
    {
      question: "What if I need faster than 7-10 days?",
      answer: "Golden and Platinum partners get free rush delivery (48-72 hours for landing pages). Purple and Silver partners can request rush delivery for a 30% premium."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we sign mutual NDAs and work-for-hire agreements. Your clients' confidentiality is protected, and you retain all ownership rights to the delivered work."
    },
    {
      question: "How do I get started?",
      answer: "Book a partnership call using the button below. We'll discuss your agency's needs, set up your accounts, and you can submit your first project within 24 hours. No long-term contracts or commitments required."
    }
  ];

  return (
    <>
      <Head>
        <title>Agency Partnership Program | White-Label Development | Joseign</title>
        <meta
          name="description"
          content="Partner with Joseign for white-label web development. Get 20-50% discounts, project management hub, and 24/7 support. Perfect for agencies scaling their services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://joseign.com/agencies-collaboration" />

        {/* Open Graph */}
        <meta property="og:title" content="Agency Partnership Program | White-Label Development" />
        <meta property="og:description" content="Partner with Joseign for white-label web development. Get 20-50% discounts, project management hub, and priority support." />
        <meta property="og:url" content="https://joseign.com/agencies-collaboration" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agency Partnership Program | Joseign" />
        <meta name="twitter:description" content="White-label web development for agencies. Scale without hiring." />
        <meta name="twitter:image" content="https://joseign.com/og-cover.jpg" />
      </Head>

      <TransitionEffect />

      <main className="w-full min-h-screen bg-light overflow-hidden">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[90vh] flex items-center justify-center px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 pt-32 pb-16 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <motion.div style={{ y, opacity }} className="w-full max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-semibold text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Partner Program
            </motion.div>

            <AnimatedText
              text="Scale Your Agency Without Hiring"
              className="text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-bold mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-lg text-dark/70 max-w-3xl mx-auto mb-8"
            >
              White-label web development for agencies. Get 20-50% discounts, dedicated project hub, and priority support. Deliver premium work under your brand while we handle the heavy lifting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <button
                className="animated-gradient text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                data-cal-namespace="agencies-collaboration"
                data-cal-link="joseign/agencies-collaboration"
                data-cal-config='{"layout":"month_view"}'
              >
                Book Partnership Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="#pricing"
                className="bg-white text-dark px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 border-2 border-dark/10"
              >
                View Pricing
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 md:grid-cols-1 gap-8 max-w-3xl mx-auto"
            >
              {[
                { value: "20-50%", label: "Volume Discounts" },
                { value: "2 Hours", label: "Response Time" },
                { value: "100%", label: "White-Label" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-dark/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">
              Partner Benefits
            </p>
            <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              From white-label tools to revenue sharing, we&apos;ve built the ultimate partnership program for agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-3xl text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-dark/70 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Visual Demo */}
                  {benefit.image && (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-200 group-hover:border-primary transition-colors">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tier Pricing Section */}
        <section id="pricing" className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 bg-light">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">
              Partnership Tiers
            </p>
            <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4">
              Volume-Based Pricing
            </h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              The more projects we complete together, the better your rates get. Start at 20% off and scale up to 50% off.
            </p>
          </motion.div>

          {/* Tier Cards */}
          <div className="grid grid-cols-4 md:grid-cols-1 gap-6 mb-16 max-w-7xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveTier(tier.name.toLowerCase())}
                className={`relative cursor-pointer group ${tier.bgGradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.highlighted ? `ring-4 ${tier.ringColor} scale-105 md:scale-100` : ""
                } ${tier.isElite ? `ring-4 ${tier.ringColor}` : ""} ${tier.textColor || ""}`}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 bg-gradient-to-r ${tier.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {tier.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 mt-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                  <tier.icon className="text-2xl text-white" />
                </div>

                {/* Tier Name */}
                <h3 className={`text-2xl font-bold text-center mb-2 ${tier.textColor || ""}`}>{tier.name}</h3>

                {/* Projects Range */}
                <p className={`text-center text-sm mb-4 ${tier.textColor ? "text-white/70" : "text-dark/60"}`}>{tier.projects}</p>

                {/* Discount Badge */}
                <div className={`bg-gradient-to-r ${tier.color} text-white px-4 py-2 rounded-lg text-center font-bold mb-4`}>
                  {tier.discount}
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {tier.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 ${tier.textColor === "text-dark" ? "text-primary" : tier.textColor ? "text-white" : "text-primary"} flex-shrink-0 mt-0.5`} />
                      <span className={tier.textColor === "text-dark" ? "text-dark/80" : tier.textColor ? "text-white/90" : "text-dark/80"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Detailed Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 overflow-x-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Partner Pricing Breakdown</h3>

            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Service</th>
                  <th className="text-center py-4 px-4 font-semibold">Regular Price</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="text-center py-4 px-4 font-semibold">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Basic Landing Page</td>
                  <td className="text-center py-4 px-4 text-dark/60">$850</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="text-center py-4 px-4 font-semibold text-primary">
                      {tier.pricing.basic}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Premium Website</td>
                  <td className="text-center py-4 px-4 text-dark/60">$1,450</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="text-center py-4 px-4 font-semibold text-primary">
                      {tier.pricing.premium}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">AI-Agentic Website</td>
                  <td className="text-center py-4 px-4 text-dark/60">$2,950</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="text-center py-4 px-4 font-semibold text-primary">
                      {tier.pricing.aiAgentic}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Starter MVP</td>
                  <td className="text-center py-4 px-4 text-dark/60">$12,500</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="text-center py-4 px-4 font-semibold text-primary">
                      {tier.pricing.starterMVP}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">Scale MVP</td>
                  <td className="text-center py-4 px-4 text-dark/60">$24,500</td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="text-center py-4 px-4 font-semibold text-primary">
                      {tier.pricing.scaleMVP}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <p className="text-sm text-dark/60 text-center mt-6">
              * Prices shown are partner rates. You can add your own margin when billing clients.
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">
              How It Works
            </p>
            <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              From partnership setup to project delivery, we&apos;ve streamlined everything for seamless collaboration.
            </p>
          </motion.div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-12 gap-8 md:grid-cols-1">
                  <div className="col-span-2 md:col-span-1 flex md:flex-row md:items-center md:gap-4">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center relative shadow-xl">
                        <step.icon className="text-white text-3xl md:text-2xl" />
                        <div className="absolute -bottom-1 -right-1 bg-white text-primary rounded-full w-10 h-10 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-xs shadow-lg border-2 border-primary">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-10 md:col-span-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-6 border-2 border-gray-200 hover:border-primary transition-all shadow-lg">
                    <h3 className="text-2xl md:text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-dark/70 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm font-semibold text-primary mb-1">✨ You Get:</p>
                      <p className="text-sm text-dark/70">{step.deliverable}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 bg-light">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase mb-2">
              FAQ
            </p>
            <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                    <ArrowRight className="w-5 h-5 text-primary group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-dark/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-6">
              Ready to Scale Your Agency?
            </h2>
            <p className="text-xl md:text-lg mb-8 opacity-90">
              Join 50+ agencies already partnering with Joseign. Book a 30-minute call and start your first project this week.
            </p>
            <button
              className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
              data-cal-namespace="agencies-collaboration"
              data-cal-link="joseign/agencies-collaboration"
              data-cal-config='{"layout":"month_view"}'
            >
              <Zap className="w-6 h-6" />
              Book Partnership Call
              <ArrowRight className="w-6 h-6" />
            </button>

            <p className="text-sm mt-6 opacity-75">
              No long-term contracts • Start with one project • Cancel anytime
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default AgenciesCollaboration;
