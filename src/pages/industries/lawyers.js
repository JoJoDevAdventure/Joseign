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

const ACCENT = "#1E3A5F";

const heroData = {
  eyebrow: "Websites for Law Firms",
  headline: "Win Cases. Not Website Battles.\nWe'll Handle That Part.",
  subheadline: "We build premium, high-converting landing pages for law firms and attorneys in 3-7 days. You stay focused on your clients — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy Winning Cases\nTo Worry About Your Website",
  subheadline: "We hear this from attorneys and managing partners every single day.",
  pains: [
    {
      title: "Your website doesn't convey the authority you've earned",
      description: "You've spent years building your reputation in the courtroom, but your outdated website makes your firm look like it just passed the bar. Prospective clients judge your competence by your online presence.",
    },
    {
      title: "You're losing clients to firms with a better online presence",
      description: "The firm down the street doesn't win more cases — they just have a website that looks credible and professional. That's the only reason clients call them first.",
    },
    {
      title: "You don't have time between cases to deal with a web redesign",
      description: "Between depositions, court appearances, and client consultations, the last thing you need is a 3-month website project with endless revision meetings.",
    },
    {
      title: "The last agency didn't understand the legal industry",
      description: "They used stock photos of gavels, wrote generic copy that could apply to any firm, and had no idea about compliance, ethics rules, or what actually matters to legal clients.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Winning Cases.",
  subheadline: "Our 3-step process is designed for busy attorneys who'd rather be in the courtroom than in front of a computer.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your practice areas, your ideal clients, and what sets your firm apart. Share your credentials and case highlights and we'll take it from there.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "Just tell us about your practice",
        "We handle the rest",
      ],
    },
    {
      number: "02",
      title: "We Build, You Litigate",
      description: "Our team designs and develops your entire website while you're preparing cases. We handle the copy, the layout, the attorney profiles, practice area pages — everything.",
      image: "/placeholder.png",
      highlights: [
        "We write all the content for you",
        "Professional attorney profiles & bios",
        "Mobile-first so clients find you on the go",
      ],
    },
    {
      number: "03",
      title: "Review & Launch",
      description: "We send you the finished product. You tell us what to tweak (if anything). We make changes same-day and launch. Your new site starts generating consultations immediately.",
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
  headline: "Law Firm Websites That\nGenerate Consultations While You Work",
  subheadline: "Real results for real law firms. These sites work 24/7 so you don't have to.",
  projects: [
    {
      title: "Sterling & Associates",
      description: "Full landing page with attorney profiles and practice area pages that increased consultation requests by 185% in the first month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "Attorney Profiles", "Lead Gen"],
      link: "#",
    },
    {
      title: "Barrett Law Group",
      description: "Premium website for a multi-practice litigation firm. Positioned them as the top-tier choice for complex civil cases in their market.",
      image: "/placeholder.png",
      tags: ["Full Website", "Premium Design"],
      link: "#",
    },
    {
      title: "Caldwell Defense Law",
      description: "Conversion-focused landing page with case evaluation forms and direct booking. Generates 40+ consultation requests monthly from Google.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Consultations"],
      link: "#",
    },
    {
      title: "Monroe & Whitfield LLP",
      description: "Authoritative firm site showcasing practice areas and landmark case results. Doubled their qualified lead volume within 60 days.",
      image: "/placeholder.png",
      tags: ["Firm Website", "Case Results", "Branding"],
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
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call. Tell us about your firm and practice areas." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design with compelling attorney profiles and practice pages." },
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
  reason: "Because premium means we actually care about your project. We don't mass-produce websites — we craft them. Every detail, every word, every element is intentional.",
  points: [
    {
      icon: "shield",
      title: "Dedicated Attention",
      description: "Your project gets our full focus. No juggling 20 clients at once.",
    },
    {
      icon: "award",
      title: "Premium Quality Guaranteed",
      description: "Fewer projects = higher standards. Your site will convey the authority your firm deserves.",
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
  headline: "Attorneys & Managing Partners\nLove Working With Us",
  testimonials: [
    {
      name: "David Harrington",
      role: "Managing Partner",
      company: "Sterling & Associates",
      text: "We went from an embarrassing template site to a professional online presence that actually reflects the caliber of our firm. Consultation requests tripled in the first month. Worth every penny.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Rebecca Thornton",
      role: "Senior Attorney",
      company: "Barrett Law Group",
      text: "They understood the legal industry without us having to explain every nuance. One call, shared our firm's background, and 5 days later we had a website that looks like a $15K build. Our clients constantly compliment it.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Marcus Coleman",
      role: "Founding Partner",
      company: "Caldwell Defense Law",
      text: "I was skeptical about the timeline, but they delivered a polished, authoritative site in under a week. Now potential clients find us on Google and book consultations directly. Our intake doubled within 60 days.",
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
      name: "Law Firm Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start generating consultations fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized for local searches",
        "Attorney profiles & credentials section",
        "Consultation request forms & call tracking",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
    },
    {
      name: "Law Firm Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that dominates your local market.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Google Business integration",
        "Practice area pages with detailed copy",
        "Case results & testimonials section",
        "Advanced local SEO optimization",
        "Blog/content section ready",
        "Analytics & conversion tracking",
      ],
      ctaText: "Claim Your Spot",
      ctaLink: "https://joseign.com/bookme",
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
      question: "How do you handle confidentiality and sensitive information?",
      answer: "We take confidentiality seriously. We never publish case details, client names, or sensitive information without your explicit written approval. All content is reviewed by you before going live, and we follow best practices to ensure your site complies with attorney advertising rules.",
    },
    {
      question: "Can you create individual practice area pages?",
      answer: "Absolutely. Whether your firm handles personal injury, criminal defense, family law, corporate litigation, estate planning, or any other practice area, we create dedicated pages with targeted copy that speaks directly to clients searching for those specific services.",
    },
    {
      question: "Will you build individual attorney profile pages?",
      answer: "Yes. Each attorney gets a professional profile page featuring their credentials, education, bar admissions, notable cases, practice areas, and a professional photo. These pages build trust and help potential clients feel confident choosing your firm.",
    },
    {
      question: "Is the website compliant with bar association advertising rules?",
      answer: "We're familiar with the common requirements around attorney advertising and disclaimers. We include proper disclaimers, avoid prohibited language, and ensure no content implies guaranteed results. That said, we always recommend your firm review the final content to ensure compliance with your specific state bar rules.",
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
  headline: "Ready to Get a Website\nAs Authoritative As Your Firm?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your law firm and how we can help.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function LawyersPage() {
  return (
    <>
      <Head>
        <title>Law Firm Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for law firms and attorneys. Built in 3-7 days. We handle everything — design, copy, SEO, attorney profiles, practice area pages. Only 3 spots per week." />
        <link rel="canonical" href="https://joseign.com/industries/lawyers" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Law Firm Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for law firms and attorneys. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/lawyers" />
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
