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

const ACCENT = "#16A34A";

const heroData = {
  eyebrow: "Websites for Landscapers",
  headline: "Your Work Is Stunning.\nYour Website Should Be Too.",
  subheadline: "We build premium, high-converting landing pages for landscaping companies in 3-7 days. You stay focused on jobs — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy Transforming Yards\nTo Worry About Your Website",
  subheadline: "We hear this from landscaping business owners every single day.",
  pains: [
    {
      title: "Your best work is invisible online",
      description: "You do incredible transformations, but your website doesn't show them off. Potential clients can't see what you're capable of.",
    },
    {
      title: "Leads go to the guy with the better site",
      description: "Your competitor doesn't do better work — they just have a website that makes them look professional. That's the only difference.",
    },
    {
      title: "You've been relying on word-of-mouth alone",
      description: "Referrals are great, but they don't scale. You're leaving thousands on the table every month without an online presence.",
    },
    {
      title: "The last web guy ghosted you halfway through",
      description: "Paid a deposit, waited weeks, got a half-finished template. You don't have time to babysit a designer.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Transforming Yards.",
  subheadline: "Our 3-step process is designed for busy landscapers who'd rather be outside than in front of a computer.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your services, your ideal customers, and what sets you apart. Send us your best project photos and we'll take it from there.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "Just send us your project photos",
        "We handle the rest",
      ],
    },
    {
      number: "02",
      title: "We Build, You Work",
      description: "Our team designs and develops your entire website while you're out on jobs. We handle the copy, the layout, the before/after galleries — everything.",
      image: "/placeholder.png",
      highlights: [
        "We write all the content for you",
        "Stunning before/after project galleries",
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
  headline: "Landscaping Websites That\nGenerate Leads While You Work",
  subheadline: "Real results for real landscaping businesses. These sites work 24/7 so you don't have to.",
  projects: [
    {
      title: "GreenScape Pro",
      description: "Full landing page with before/after gallery that increased quote requests by 220% in the first month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "Gallery", "Lead Gen"],
      link: "#",
    },
    {
      title: "Elite Outdoor Living",
      description: "Premium website for high-end hardscaping and outdoor kitchen company. Positioned them as the luxury option in their market.",
      image: "/placeholder.png",
      tags: ["Full Website", "Premium Design"],
      link: "#",
    },
    {
      title: "Fresh Cut Lawns",
      description: "Simple, conversion-focused landing page with online booking. Generates 50+ leads monthly from Google.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Booking"],
      link: "#",
    },
    {
      title: "Bloom Landscape Design",
      description: "Portfolio-style site showcasing residential design work. Tripled their design consultation bookings.",
      image: "/placeholder.png",
      tags: ["Portfolio", "Design", "Branding"],
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
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call. Send us your best project photos." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design with stunning project galleries." },
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
  reason: "Because premium means we actually care about your project. We don't mass-produce websites — we craft them. Every photo, every word, every detail is intentional.",
  points: [
    {
      icon: "shield",
      title: "Dedicated Attention",
      description: "Your project gets our full focus. No juggling 20 clients at once.",
    },
    {
      icon: "award",
      title: "Premium Quality Guaranteed",
      description: "Fewer projects = higher standards. Your site will look as good as your work.",
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
  headline: "Landscaping Business Owners\nLove Working With Us",
  testimonials: [
    {
      name: "Jason Mitchell",
      role: "Owner",
      company: "GreenScape Pro Landscaping",
      text: "I went from zero online presence to getting 15+ quote requests per week. The before/after gallery on my site does all the selling for me. Best money I've ever spent.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Maria Santos",
      role: "Co-Owner",
      company: "Bloom Landscape Design",
      text: "They understood exactly what we needed without us having to explain every detail. One call, sent our photos, and 5 days later we had a website that looks like a $10K build.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Tyler Brooks",
      role: "Owner",
      company: "Fresh Cut Lawn Care",
      text: "I was doing everything through Facebook before. Now I have a real website that ranks on Google and clients can book directly. My revenue went up 35% in 2 months.",
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
      name: "Landscaping Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start generating leads fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized for local searches",
        "Before/after project gallery",
        "Lead capture forms & call tracking",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
    },
    {
      name: "Landscaping Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that dominates your local market.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Google Business integration",
        "Service area targeting pages",
        "Seasonal service sections",
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
      question: "Do I need to provide content and images?",
      answer: "If you have photos of your best projects, send them over — they're gold for your site. If not, no worries. We handle all the copy, source professional images, and create the entire design. Just show up to one call and we do the rest.",
    },
    {
      question: "Will it show my before/after work?",
      answer: "Absolutely. We build stunning before/after galleries that let your work sell itself. Clients can see the transformation and immediately trust your quality. It's the single most powerful feature for landscaping websites.",
    },
    {
      question: "What if I only do certain services?",
      answer: "Every site is tailored to YOUR specific services — lawn care, hardscaping, landscape design, irrigation, tree removal, snow removal, whatever your mix is. Nothing generic.",
    },
    {
      question: "Will it help me rank on Google locally?",
      answer: "Yes. We set up local SEO from day one — Google Business integration, service area targeting, proper schema markup, and optimized content for your city and surrounding areas.",
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
  headline: "Ready to Get a Website\nAs Beautiful As Your Work?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your landscaping business and how we can help.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function LandscapingPage() {
  return (
    <>
      <Head>
        <title>Landscaping Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for landscaping companies. Built in 3-7 days. We handle everything — design, copy, SEO, project galleries. Only 3 spots per week." />
        <link rel="canonical" href="https://joseign.com/industries/landscaping" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Landscaping Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for landscaping companies. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/landscaping" />
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
