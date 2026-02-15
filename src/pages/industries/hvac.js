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

const ACCENT = "#0EA5E9";

const heroData = {
  eyebrow: "Websites for HVAC Companies",
  headline: "Your Installs Are Flawless.\nYour Website Should Be Too.",
  subheadline: "We build premium, high-converting landing pages for HVAC companies in 3-7 days. You stay focused on jobs — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy Running Calls\nTo Worry About Your Website",
  subheadline: "We hear this from HVAC business owners every single day.",
  pains: [
    {
      title: "Your website looks like it's from 2012",
      description: "Customers judge your business in 3 seconds. An outdated site makes them call your competitor instead.",
    },
    {
      title: "You've been \"meaning to update it\" for months",
      description: "Between emergency calls, installs, and managing your crew — the website keeps getting pushed down the list.",
    },
    {
      title: "The last agency took forever and overcharged",
      description: "Months of back-and-forth, endless revisions, and a result that still didn't feel right. Never again.",
    },
    {
      title: "Your competitors are getting the leads you deserve",
      description: "They don't do better work — they just have a better website. That's the only difference.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Running Your Business.",
  subheadline: "Our 3-step process is designed for busy HVAC owners who don't have time for endless meetings.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your business, your ideal customers, and what makes you different. That's it — no homework for you.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "We ask the right questions",
        "No design jargon, just plain talk",
      ],
    },
    {
      number: "02",
      title: "We Build, You Relax",
      description: "Our team designs and develops your entire website. We handle copy, images, layout, mobile optimization — everything. You don't lift a finger.",
      image: "/placeholder.png",
      highlights: [
        "We write the copy for you",
        "Mobile-first responsive design",
        "SEO-optimized from day one",
      ],
    },
    {
      number: "03",
      title: "Review & Launch",
      description: "We send you the finished product. You tell us what to tweak (if anything). We make changes same-day and launch. Done.",
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
  headline: "HVAC Websites That Make\nYour Competitors Nervous",
  subheadline: "Real results for real HVAC businesses. These sites generate leads 24/7.",
  projects: [
    {
      title: "Diamond Air Conditioning",
      description: "Complete website redesign that increased service calls by 180% in the first quarter.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Lead Gen"],
      link: "#",
    },
    {
      title: "CoolBreeze HVAC",
      description: "Modern landing page with online booking that reduced phone tag by 60%.",
      image: "/placeholder.png",
      tags: ["Website Design", "Booking System"],
      link: "#",
    },
    {
      title: "ProTemp Solutions",
      description: "Premium multi-page site positioning them as the #1 commercial HVAC provider in their region.",
      image: "/placeholder.png",
      tags: ["Full Website", "Branding"],
      link: "#",
    },
    {
      title: "Arctic Air Services",
      description: "Emergency service-focused landing page that generates 40+ leads per month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "PPC Ready"],
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
      "Premium design delivered in days",
      "Unlimited revisions included",
      "Same-day changes on feedback",
      "SEO-optimized and mobile-first",
    ],
  },
  them: {
    label: "Other Agencies",
    time: "2-6 Months",
    items: [
      "Weeks of meetings and questionnaires",
      "Template-based generic designs",
      "Extra charges for every revision",
      "Slow response times",
      "SEO costs extra",
    ],
  },
  timeline: [
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call to understand your business and goals." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design and write all the content." },
    { day: "Day 4-5", title: "Development", description: "We build your site with blazing-fast performance and SEO." },
    { day: "Day 6-7", title: "Review & Launch", description: "You review, we tweak, and your new site goes live." },
  ],
  image: "/placeholder.png",
  accentColor: ACCENT,
};

const exclusivityData = {
  eyebrow: "Limited Availability",
  headline: "We Only Take 3 Projects\nPer Week. Period.",
  subheadline: "This isn't a marketing gimmick. It's how we deliver premium quality every single time.",
  reason: "Because premium means we actually care about your project. We don't mass-produce websites — we craft them. Every detail matters, and that takes focus.",
  points: [
    {
      icon: "shield",
      title: "Dedicated Attention",
      description: "Your project gets our full focus. No juggling 20 clients at once.",
    },
    {
      icon: "award",
      title: "Premium Quality Guaranteed",
      description: "Fewer projects = higher standards. Every pixel is intentional.",
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
      description: "Every 3 months we audit your site's SEO performance and send you a report with actionable recommendations.",
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
  headline: "HVAC Business Owners\nLove Working With Us",
  testimonials: [
    {
      name: "Mike Thompson",
      role: "Owner",
      company: "Thompson Heating & Air",
      text: "I was skeptical about the 7-day timeline, but they delivered a site that looks better than anything I've seen from competitors who spent 10x more. Our service calls are up 40% since launch.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      company: "CoolBreeze HVAC",
      text: "The process was exactly as described — one quick call, then they handled everything. I didn't have to think about the website at all while running our busiest season.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "David Rodriguez",
      role: "Owner",
      company: "ProTemp Solutions",
      text: "Best investment I've made for my business. The site pays for itself every month in new leads. And the 911 support? Used it once at 11pm — they had it fixed by midnight.",
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
      name: "HVAC Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start generating leads fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized content & structure",
        "Emergency service callout section",
        "Lead capture forms & call tracking",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/hvac/landing-page",
    },
    {
      name: "HVAC Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that dominates your local market.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Google Business integration",
        "Service area targeting pages",
        "Before/after project gallery",
        "Advanced local SEO optimization",
        "Blog/content section ready",
        "Analytics & conversion tracking",
      ],
      ctaText: "Claim Your Spot",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/hvac/full-website",
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
      paymentLink: "https://joseign.com/pay/hvac/ai-agentic",
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
      question: "Do I need to provide content and images?",
      answer: "Nope. We handle everything — we write all the copy, source professional images, and create the entire design. If you have specific photos of your work, great — we'll use those. If not, we've got you covered.",
    },
    {
      question: "What if I don't like the design?",
      answer: "Unlimited revisions are included. We'll make changes until you're 100% happy. In practice, most clients love the first version because we nail the discovery call and understand your business before we start.",
    },
    {
      question: "Will this work for my specific HVAC services?",
      answer: "Yes. We tailor every page to your specific services — whether that's residential AC, commercial HVAC, emergency repairs, installations, or maintenance contracts. The design and copy reflect YOUR business, not a generic template.",
    },
    {
      question: "What happens after the website is live?",
      answer: "You get 3 months of free hosting, quarterly SEO audits, and 911 urgent support. After 3 months, hosting is $150/year. We're always here if you need updates or changes.",
    },
    {
      question: "Do I own the website?",
      answer: "100%. You own everything — the design files, the code, the content. No lock-in contracts, no proprietary platforms. If you ever want to move, you can take everything with you.",
    },
    {
      question: "What if I need more than a landing page?",
      answer: "We also build multi-page websites and full web applications. After the initial landing page, we can discuss expanding to a full site with service pages, blog, careers page, or anything else you need.",
    },
  ],
  accentColor: ACCENT,
};

const finalCTAData = {
  headline: "Ready to Get a Website\nThat Actually Generates Leads?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your HVAC business and how we can help.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function HvacPage() {
  return (
    <>
      <Head>
        <title>HVAC Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for HVAC companies. Built in 3-7 days. We handle everything — design, copy, SEO. Only 3 spots per week. Book your free call." />
        <link rel="canonical" href="https://joseign.com/industries/hvac" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="HVAC Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for HVAC companies. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/hvac" />
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
