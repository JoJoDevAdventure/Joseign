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

const ACCENT = "#EA580C";

const heroData = {
  eyebrow: "Websites for Roofing Companies",
  headline: "Your Roofs Are Built to Last.\nYour Website Should Be Too.",
  subheadline: "We build premium, high-converting landing pages for roofing companies in 3-7 days. You stay focused on protecting homes — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy on Rooftops\nTo Worry About Your Website",
  subheadline: "We hear this from roofing business owners every single day.",
  pains: [
    {
      title: "Storm chasers are stealing your leads",
      description: "After every storm, out-of-town companies flood your area with slick websites and paid ads. They grab the leads while you — the trusted local roofer — get overlooked.",
    },
    {
      title: "You have no online presence when storms hit",
      description: "Homeowners search for roofers right after a storm. If you don't show up on Google with a professional site, those emergency jobs go to someone else.",
    },
    {
      title: "You've been relying on door-knocking alone",
      description: "Canvassing neighborhoods works, but it doesn't scale. You're leaving thousands on the table every month without a website that generates leads 24/7.",
    },
    {
      title: "The last web guy disappeared on you",
      description: "Paid a deposit, waited weeks, got a half-finished template — or nothing at all. You don't have time to chase down a designer while you're running crews.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Protecting Homes.",
  subheadline: "Our 3-step process is designed for busy roofers who'd rather be on a roof than in front of a computer.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your services, your ideal customers, and what sets you apart. Send us your best project photos, storm damage work, and we'll take it from there.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "Just send us your project photos",
        "We handle the rest",
      ],
    },
    {
      number: "02",
      title: "We Build, You Roof",
      description: "Our team designs and develops your entire website while you're up on roofs. We handle the copy, the layout, the storm damage galleries, the service area pages — everything.",
      image: "/placeholder.png",
      highlights: [
        "We write all the content for you",
        "Stunning storm damage & project galleries",
        "Mobile-first so homeowners find you fast",
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
  headline: "Roofing Websites That\nGenerate Leads While You Work",
  subheadline: "Real results for real roofing businesses. These sites work 24/7 so you don't have to.",
  projects: [
    {
      title: "Summit Roofing",
      description: "Full landing page with storm damage gallery that increased inspection requests by 240% in the first month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "Gallery", "Lead Gen"],
      link: "#",
    },
    {
      title: "StormShield Roofing",
      description: "Premium website for a full-service roofing company. Positioned them as the go-to roofer after every major storm in their area.",
      image: "/placeholder.png",
      tags: ["Full Website", "Premium Design"],
      link: "#",
    },
    {
      title: "Apex Roofing Solutions",
      description: "Conversion-focused landing page with emergency service callout and online scheduling. Generates 60+ leads monthly from Google.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Booking"],
      link: "#",
    },
    {
      title: "TrueTop Roofing",
      description: "Portfolio-style site showcasing residential and commercial projects. Doubled their roof replacement bookings in 6 weeks.",
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
      "SEO-optimized for local roofing searches",
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
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call. Send us your best project and storm damage photos." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design with stunning roofing project galleries." },
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
      description: "Fewer projects = higher standards. Your site will look as solid as the roofs you build.",
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
  headline: "Roofing Business Owners\nLove Working With Us",
  testimonials: [
    {
      name: "Derek Hammond",
      role: "Owner",
      company: "Summit Roofing Co.",
      text: "After the last hailstorm, my phone wouldn't stop ringing. The storm damage gallery on my site does all the convincing — homeowners see the work and book an inspection right away. Best investment I've made in my business.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Rachel Nguyen",
      role: "Co-Owner",
      company: "StormShield Roofing",
      text: "We were losing leads to storm chasers with flashy websites. Joseign built us a site in 5 days that made us look like the premium option in our market. Our close rate jumped 40% because clients trust us before we even show up.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Owner",
      company: "TrueTop Roofing LLC",
      text: "I used to rely 100% on door-knocking and yard signs. Now my website brings in 20+ inspection requests a week on its own. I wish I'd done this years ago.",
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
      name: "Roofing Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start generating leads fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized for local searches",
        "Storm damage project gallery",
        "Lead capture forms & call tracking",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/roofing/landing-page",
    },
    {
      name: "Roofing Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that dominates your local market.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Google Business integration",
        "Service area targeting pages",
        "Emergency service callout section",
        "Advanced local SEO optimization",
        "Blog/content section ready",
        "Analytics & conversion tracking",
      ],
      ctaText: "Claim Your Spot",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/roofing/full-website",
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
      paymentLink: "https://joseign.com/pay/roofing/ai-agentic",
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
      answer: "If you have photos of your completed roofing projects and storm damage work, send them over — they're incredibly powerful for your site. If not, no worries. We handle all the copy, source professional images, and create the entire design. Just show up to one call and we do the rest.",
    },
    {
      question: "Will it showcase my storm damage and repair work?",
      answer: "Absolutely. We build stunning project galleries that highlight your storm damage repairs, full replacements, and before/after transformations. Homeowners can see the quality of your work and immediately trust you over the competition.",
    },
    {
      question: "What if I specialize in certain roofing types?",
      answer: "Every site is tailored to YOUR specific services — shingle roofing, metal roofing, flat roofs, tile, storm damage repair, commercial roofing, gutter installation, whatever your mix is. Nothing generic.",
    },
    {
      question: "Will it help me rank on Google when storms hit my area?",
      answer: "Yes. We set up local SEO from day one — Google Business integration, service area targeting, proper schema markup, and optimized content for your city and surrounding areas. When homeowners search for roofers after a storm, you'll be the one they find.",
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
  headline: "Ready to Get a Website\nAs Strong As the Roofs You Build?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your roofing business and how we can help you dominate your local market.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function RoofingPage() {
  return (
    <>
      <Head>
        <title>Roofing Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for roofing companies. Built in 3-7 days. We handle everything — design, copy, SEO, storm damage galleries. Only 3 spots per week." />
        <link rel="canonical" href="https://joseign.com/industries/roofing" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Roofing Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for roofing companies. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/roofing" />
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
