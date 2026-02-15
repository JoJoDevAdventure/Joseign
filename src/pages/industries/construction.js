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

const ACCENT = "#78716C";

const heroData = {
  eyebrow: "Websites for Construction Companies",
  headline: "You Build Quality.\nYour Website Should Reflect It.",
  subheadline: "We build premium, high-converting landing pages for contractors and builders in 3-7 days. You stay focused on the jobsite — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy Building Projects\nTo Worry About Your Website",
  subheadline: "We hear this from construction business owners every single day.",
  pains: [
    {
      title: "Your best projects aren't shown online",
      description: "You've completed incredible builds, but your website doesn't showcase them. Potential clients have no idea what you're capable of.",
    },
    {
      title: "You're losing bids to companies with better websites",
      description: "Your competitor doesn't do better work — they just have a website that makes them look more professional and established. That's the only difference.",
    },
    {
      title: "You've been relying on word-of-mouth and referrals only",
      description: "Referrals are great, but they don't scale. You're leaving thousands on the table every month without a strong online presence.",
    },
    {
      title: "Your last web designer didn't understand construction",
      description: "They gave you a generic template that could be for any business. No project portfolios, no service breakdowns, nothing that speaks to your clients.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Building.",
  subheadline: "Our 3-step process is designed for busy contractors who'd rather be on-site than in front of a computer.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your services, your ideal clients, and what sets you apart. Send us your best project photos and blueprints and we'll take it from there.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "Just send us your project photos & blueprints",
        "We handle the rest",
      ],
    },
    {
      number: "02",
      title: "We Build, You're On-Site",
      description: "Our team designs and develops your entire website while you're on the jobsite. We handle the copy, the layout, the project portfolio — everything.",
      image: "/placeholder.png",
      highlights: [
        "We write all the content for you",
        "Stunning project portfolio galleries",
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
  headline: "Construction Websites That\nGenerate Leads While You Build",
  subheadline: "Real results for real construction businesses. These sites work 24/7 so you don't have to.",
  projects: [
    {
      title: "Ironside Construction",
      description: "Full landing page with project portfolio gallery that increased bid requests by 185% in the first month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "Portfolio", "Lead Gen"],
      link: "#",
    },
    {
      title: "Pinnacle Builders",
      description: "Premium website for a high-end custom home builder. Positioned them as the luxury option in their market.",
      image: "/placeholder.png",
      tags: ["Full Website", "Premium Design"],
      link: "#",
    },
    {
      title: "Granite Construction Co.",
      description: "Conversion-focused landing page with project timeline gallery. Generates 40+ quote requests monthly from Google.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Lead Gen"],
      link: "#",
    },
    {
      title: "BlueLine General Contractors",
      description: "Portfolio-style site showcasing commercial and residential projects. Doubled their consultation bookings in 6 weeks.",
      image: "/placeholder.png",
      tags: ["Portfolio", "Commercial", "Residential"],
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
      "SEO-optimized for local contractor searches",
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
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call. Send us your best project photos and blueprints." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design with stunning project portfolio galleries." },
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
  reason: "Because premium means we actually care about your project. We don't mass-produce websites — we craft them. Every project photo, every detail of your work, every word is intentional.",
  points: [
    {
      icon: "shield",
      title: "Dedicated Attention",
      description: "Your project gets our full focus. No juggling 20 clients at once.",
    },
    {
      icon: "award",
      title: "Premium Quality Guaranteed",
      description: "Fewer projects = higher standards. Your site will look as solid as your builds.",
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
  headline: "Construction Business Owners\nLove Working With Us",
  testimonials: [
    {
      name: "Mike Harrington",
      role: "Owner",
      company: "Ironside Construction",
      text: "I went from a one-page Facebook profile to getting 20+ bid requests per week. The project portfolio on my site does all the selling for me. Clients see the quality before we even talk.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Sarah Caldwell",
      role: "Co-Owner",
      company: "Pinnacle Builders",
      text: "They understood construction without us having to explain everything. One call, sent our project photos, and 4 days later we had a website that looks like a $15K build. Our competitors are jealous.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "David Romero",
      role: "Owner",
      company: "BlueLine General Contractors",
      text: "We were getting all our work through referrals. Now we rank on Google for 'general contractor' in our area and the phone doesn't stop ringing. Revenue is up 40% in 3 months.",
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
      name: "Construction Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start generating leads fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized for local searches",
        "Project portfolio gallery",
        "Lead capture forms & call tracking",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/construction/landing-page",
    },
    {
      name: "Construction Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that dominates your local market.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Google Business integration",
        "Commercial & residential sections",
        "Service area pages",
        "Advanced local SEO optimization",
        "Blog/content section ready",
        "Analytics & conversion tracking",
      ],
      ctaText: "Claim Your Spot",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/construction/full-website",
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
      paymentLink: "https://joseign.com/pay/construction/ai-agentic",
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
      question: "Do I need to provide content and project photos?",
      answer: "If you have photos of your best projects — completed builds, renovations, commercial work — send them over. They're gold for your site. If not, no worries. We handle all the copy, source professional images, and create the entire design. Just show up to one call and we do the rest.",
    },
    {
      question: "Will it showcase my commercial and residential projects?",
      answer: "Absolutely. We build dedicated sections for both commercial and residential work so potential clients can see exactly the type of projects you handle. The project portfolio is the most powerful feature for construction websites.",
    },
    {
      question: "What if I specialize in certain types of construction?",
      answer: "Every site is tailored to YOUR specific services — general contracting, custom homes, renovations, commercial builds, concrete work, roofing, framing, whatever your specialty is. Nothing generic.",
    },
    {
      question: "Will it help me rank on Google in my area?",
      answer: "Yes. We set up local SEO from day one — Google Business integration, service area targeting, proper schema markup, and optimized content for your city and surrounding areas. Contractors who rank locally win the most bids.",
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
  headline: "Ready to Get a Website\nAs Solid As Your Builds?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your construction business and how we can help.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function ConstructionPage() {
  return (
    <>
      <Head>
        <title>Construction Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for construction companies. Built in 3-7 days. We handle everything — design, copy, SEO, project galleries. Only 3 spots per week." />
        <link rel="canonical" href="https://joseign.com/industries/construction" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Construction Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for construction companies. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/construction" />
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
