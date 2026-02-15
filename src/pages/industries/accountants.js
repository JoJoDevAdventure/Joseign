import TransitionEffect from "@/components/TransitionEffect";
import IndustryHero from "@/components/Industries/IndustryHero";
import PainPoints from "@/components/Industries/PainPoints";
import HowItWorks from "@/components/Industries/HowItWorks";
import Showcase from "@/components/Industries/Showcase";
import Speed from "@/components/Industries/Speed";
import Exclusivity from "@/components/Industries/Exclusivity";
import Bonuses from "@/components/Industries/Bonuses";
import IndustryTestimonials from "@/components/Industries/IndustryTestimonials";
import IndustryPricing from "@/components/Industries/IndustryPricing";
import IndustryFAQ from "@/components/Industries/IndustryFAQ";
import FinalCTA from "@/components/Industries/FinalCTA";
import Head from "next/head";

const ACCENT = "#0D9488";

const heroData = {
  eyebrow: "Websites for Accountants",
  headline: "Your Numbers Are Precise.\nYour Website Should Be Too.",
  subheadline: "We build premium, high-converting landing pages for accounting firms and CPAs in 3-7 days. You stay focused on your clients — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy Balancing Books\nTo Worry About Your Website",
  subheadline: "We hear this from accounting firm owners every single day.",
  pains: [
    {
      title: "Your site doesn't convey trustworthiness",
      description: "Clients are handing you their most sensitive financial data. If your website looks outdated or unprofessional, they'll question your competence before you ever meet.",
    },
    {
      title: "You're losing clients to firms with a modern presence",
      description: "The firm down the street doesn't do better work — they just have a website that makes them look established and credible. That's the only difference.",
    },
    {
      title: "You're too busy during tax season to deal with a redesign",
      description: "Between January and April you barely have time to eat. The last thing you need is a web designer asking you to review mockups during your busiest months.",
    },
    {
      title: "Your current site doesn't generate leads",
      description: "You have a website, but it's basically a digital business card. No one fills out the contact form, no one books a consultation. It just sits there collecting dust.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Serving Your Clients.",
  subheadline: "Our 3-step process is designed for busy accountants who'd rather be advising clients than reviewing wireframes.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your services, your ideal clients, and what sets your firm apart. Tell us about your specialties and we'll take it from there.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "Just tell us about your firm",
        "We handle the rest",
      ],
    },
    {
      number: "02",
      title: "We Build, You Work",
      description: "Our team designs and develops your entire website while you're advising clients. We handle the copy, the layout, the service pages, the lead forms — everything.",
      image: "/placeholder.png",
      highlights: [
        "We write all the content for you",
        "Professional service page layouts",
        "Mobile-first so clients find you on the go",
      ],
    },
    {
      number: "03",
      title: "Review & Launch",
      description: "We send you the finished product. You tell us what to tweak (if anything). We make changes same-day and launch. Your new site starts generating leads immediately.",
      image: "/placeholder.png",
      highlights: [
        "Unlimited revisions included",
        "Same-day changes",
        "Live in 3-7 days total",
      ],
    },
  ],
  accentColor: ACCENT,
};

const showcaseData = {
  eyebrow: "Our Work",
  headline: "Accounting Websites That\nGenerate Leads While You Work",
  subheadline: "Real results for real accounting firms. These sites work 24/7 so you don't have to.",
  projects: [
    {
      title: "Summit CPA Group",
      description: "Full landing page with client portal integration that increased consultation bookings by 180% in the first month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "Client Portal", "Lead Gen"],
      link: "#",
    },
    {
      title: "Clearview Accounting",
      description: "Premium website for a multi-partner firm offering tax, audit, and advisory services. Positioned them as the trusted choice in their market.",
      image: "/placeholder.png",
      tags: ["Full Website", "Premium Design"],
      link: "#",
    },
    {
      title: "Precision Tax Advisors",
      description: "Conversion-focused landing page with online booking and tax season promotions. Generates 40+ leads monthly from Google.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Booking"],
      link: "#",
    },
    {
      title: "Ledger & Associates",
      description: "Professional firm website showcasing their advisory and compliance services. Doubled their new client consultations within 60 days.",
      image: "/placeholder.png",
      tags: ["Firm Website", "Branding", "Lead Gen"],
      link: "#",
    },
  ],
  accentColor: ACCENT,
};

const speedData = {
  eyebrow: "Lightning Fast",
  headline: "From Zero to Launch\nIn 3-7 Days. Not Months.",
  subheadline: "While other agencies take months and endless meetings, we deliver a premium product in days.",
  us: {
    label: "Joseign",
    time: "3-7 Days",
    items: [
      "One 15-min call, then we handle everything",
      "Premium custom design, not a template",
      "Unlimited revisions included",
      "Same-day changes on feedback",
      "SEO-optimized for local searches",
    ],
  },
  them: {
    label: "Other Agencies",
    time: "2-6 Months",
    items: [
      "Weeks of meetings and questionnaires",
      "Generic WordPress templates",
      "Extra charges for every revision",
      "Slow response times",
      "SEO costs extra",
    ],
  },
  timeline: [
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call. Tell us about your firm and services." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design with professional service layouts." },
    { day: "Day 4-5", title: "Development", description: "We build your site with blazing-fast performance and local SEO." },
    { day: "Day 6-7", title: "Review & Launch", description: "You review, we tweak, and your new site goes live." },
  ],
  image: "/placeholder.png",
  accentColor: ACCENT,
};

const exclusivityData = {
  eyebrow: "Limited Availability",
  headline: "We Only Take 3 Projects\nPer Week. Period.",
  subheadline: "This isn't a marketing gimmick. It's how we deliver premium quality every single time.",
  reason: "Because premium means we actually care about your project. We don't mass-produce websites — we craft them. Every section, every word, every detail is intentional.",
  points: [
    {
      icon: "shield",
      title: "Dedicated Attention",
      description: "Your project gets our full focus. No juggling 20 clients at once.",
    },
    {
      icon: "award",
      title: "Premium Quality Guaranteed",
      description: "Fewer projects = higher standards. Your site will look as polished as your financials.",
    },
    {
      icon: "users",
      title: "Direct Communication",
      description: "You talk to the people building your site. No account managers in between.",
    },
    {
      icon: "lock",
      title: "First Come, First Served",
      description: "Once spots are filled, the next available slot is the following week.",
    },
  ],
  slots: { total: 3, taken: 2 },
  slotsLabel: "Spots remaining this week",
  accentColor: ACCENT,
};

const bonusesData = {
  eyebrow: "Included Free",
  headline: "Bonuses Worth $2,400+\nIncluded With Every Project",
  subheadline: "We don't nickel-and-dime. These are all included at no extra cost.",
  bonuses: [
    {
      icon: "search",
      title: "Free Quarterly SEO Audit",
      description: "Every 3 months we audit your site's SEO performance and send you a report with recommendations to rank higher in local searches.",
      value: "$600/yr",
    },
    {
      icon: "hardDrive",
      title: "3 Months Free Hosting",
      description: "Premium, blazing-fast hosting on our infrastructure. No setup fees, no hidden costs for 3 full months.",
      value: "$450",
    },
    {
      icon: "siren",
      title: "911 Urgent Support",
      description: "Site down? Something broken? We treat it like an emergency. Response within 1 hour, fix within 4 hours.",
      value: "$500",
    },
    {
      icon: "search",
      title: "Full SEO Setup",
      description: "Meta tags, schema markup, sitemap, Google Business optimization, and local SEO targeting for your service area.",
      value: "$400",
    },
    {
      icon: "fileCode",
      title: "Lifetime Source Files",
      description: "You own everything. Figma designs, all source code, assets — it's yours forever. No lock-in.",
      value: "$300",
    },
    {
      icon: "paintbrush",
      title: "Free Brand Touch-Up",
      description: "We'll refine your logo, color palette, and brand consistency to match your new premium web presence.",
      value: "$250",
    },
  ],
  totalValue: "$2,500+",
  image: "/placeholder.png",
  accentColor: ACCENT,
};

const testimonialsData = {
  eyebrow: "What They Say",
  headline: "Accounting Firm Partners\nLove Working With Us",
  testimonials: [
    {
      name: "Robert Callahan",
      role: "Managing Partner",
      company: "Summit CPA Group",
      text: "We went from a website that looked like it was built in 2010 to a modern, professional presence that actually converts visitors into clients. Our consultation requests tripled in the first quarter.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Diana Nguyen",
      role: "Founder & CPA",
      company: "Clearview Accounting",
      text: "They delivered right before tax season and I barely had to lift a finger. One short call, and a week later I had a site that makes my firm look like a top-tier operation. My clients keep complimenting it.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Marcus Webb",
      role: "Senior Partner",
      company: "Ledger & Associates",
      text: "I was skeptical that anyone could build a quality website in under a week. They proved me wrong. The site is clean, professional, and most importantly — it generates real leads every single week.",
      image: "/placeholder.png",
      stars: 5,
    },
  ],
  accentColor: ACCENT,
};

const pricingData = {
  eyebrow: "Simple Pricing",
  headline: "Three Plans. One Goal.\nMore Leads For You.",
  subheadline: "Transparent pricing. No hidden fees. No scope creep. No \"that'll cost extra.\"",
  plans: [
    {
      name: "Accounting Firm Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start generating leads fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized for local searches",
        "Service pages for tax, audit & advisory",
        "Lead capture forms & call tracking",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/accountants/landing-page",
    },
    {
      name: "Accounting Firm Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that dominates your local market.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Google Business integration",
        "Client portal integration ready",
        "Tax season landing page sections",
        "Advanced local SEO optimization",
        "Blog/content section ready",
        "Analytics & conversion tracking",
      ],
      ctaText: "Claim Your Spot",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/accountants/full-website",
    },
    {
      name: "AI Agentic Website",
      price: "$2,950",
      period: "one-time",
      description: "AI-powered lead generation machine that works 24/7.",
      features: [
        "Everything in Full Website, plus:",
        "AI-powered lead capture workflow",
        "AI chatbot for visitor engagement",
        "Automated call booking system",
        "Smart lead qualification & routing",
        "AI-generated content sections",
        "CRM integration (HubSpot/Salesforce)",
        "AI analytics & insights dashboard",
      ],
      ctaText: "Request Demo",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/accountants/ai-agentic",
    },
  ],
  guarantees: [
    "Money-back guarantee",
    "Unlimited revisions",
    "3-7 day delivery",
    "You own everything",
  ],
  accentColor: ACCENT,
};

const faqData = {
  eyebrow: "Questions?",
  headline: "Everything You Need\nTo Know",
  faqs: [
    {
      question: "How can you build a website in just 3-7 days?",
      answer: "We've built 75+ websites and have a refined process that eliminates wasted time. No endless meetings, no committee approvals. One discovery call, then our team of designers and developers works in parallel to deliver fast without cutting corners.",
    },
    {
      question: "Can you integrate a client portal into the site?",
      answer: "Yes. We can set up links and integrations with popular client portal solutions like Canopy, Karbon, or your existing portal system. Clients will be able to access their documents and communicate securely directly from your website.",
    },
    {
      question: "Can you build tax season landing pages?",
      answer: "Absolutely. We create dedicated sections and pages for tax season that you can promote via ads or email. These are designed to capture leads fast with clear calls-to-action, deadline urgency, and service breakdowns for individual and business filings.",
    },
    {
      question: "Will it have separate pages for my different services?",
      answer: "Every site is tailored to YOUR specific service mix — tax preparation, audit & assurance, advisory, bookkeeping, payroll, estate planning, whatever you offer. Each service gets proper visibility so clients can find exactly what they need.",
    },
    {
      question: "Will the site meet compliance and privacy standards?",
      answer: "Yes. We build with privacy in mind — SSL encryption, secure contact forms, proper privacy policy and terms pages, and cookie consent. We also ensure your site doesn't make claims that could run afoul of professional regulations.",
    },
    {
      question: "What happens after the website is live?",
      answer: "You get 3 months of free hosting, quarterly SEO audits, and 911 urgent support. After 3 months, hosting is $150/year. We're always here if you need updates or changes.",
    },
    {
      question: "Do I own the website?",
      answer: "100%. You own everything — the design files, the code, the content. No lock-in contracts, no proprietary platforms. If you ever want to move, you can take everything with you.",
    },
  ],
  accentColor: ACCENT,
};

const finalCTAData = {
  headline: "Ready to Get a Website\nAs Precise As Your Work?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your accounting firm and how we can help.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function AccountantsPage() {
  return (
    <>
      <Head>
        <title>Accounting Firm Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for accounting firms and CPAs. Built in 3-7 days. We handle everything — design, copy, SEO, lead generation. Only 3 spots per week." />
        <link rel="canonical" href="https://joseign.com/industries/accountants" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Accounting Firm Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for accounting firms and CPAs. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/accountants" />
      </Head>
      <TransitionEffect />

      <main className="w-full overflow-hidden">
        <IndustryHero data={heroData} />
        <PainPoints data={painPointsData} />
        <HowItWorks data={howItWorksData} />
        <Showcase data={showcaseData} />
        <Speed data={speedData} />
        <Exclusivity data={exclusivityData} />
        <Bonuses data={bonusesData} />
        <IndustryTestimonials data={testimonialsData} />
        <IndustryPricing data={pricingData} />
        <IndustryFAQ data={faqData} />
        <FinalCTA data={finalCTAData} />
      </main>
    </>
  );
}
