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

const ACCENT = "#2563EB";

const heroData = {
  eyebrow: "Websites for Plumbers",
  headline: "You Fix Leaks Fast.\nYour Website Should Work Just As Hard.",
  subheadline: "We build premium, high-converting landing pages for plumbing companies in 3-7 days. You stay focused on jobs — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy Fixing Emergencies\nTo Worry About Your Website",
  subheadline: "We hear this from plumbing business owners every single day.",
  pains: [
    {
      title: "Your outdated site doesn't rank for emergency searches",
      description: "When someone searches 'emergency plumber near me' at 2 AM, they're not finding you. Your old website is buried on page three while competitors grab every call.",
    },
    {
      title: "You're losing emergency calls to competitors with better sites",
      description: "Your competitor doesn't do better work — they just have a website that looks trustworthy and loads fast. That's the only difference between you and the guy getting all the calls.",
    },
    {
      title: "You have no time between jobs to deal with web stuff",
      description: "You're crawling under houses and running between service calls all day. The last thing you want to do is sit at a computer figuring out website builders.",
    },
    {
      title: "Your current site looks unprofessional",
      description: "You know it. Your customers know it. A dated, clunky website makes a $10K plumbing company look like a one-man side hustle. It's costing you jobs every single day.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Fixing Pipes.",
  subheadline: "Our 3-step process is designed for busy plumbers who'd rather be on a job than in front of a computer.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your services, your ideal customers, and what sets you apart. Tell us about your specialties and service areas and we'll take it from there.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "Just tell us your services and areas",
        "We handle the rest",
      ],
    },
    {
      number: "02",
      title: "We Build, You Work",
      description: "Our team designs and develops your entire website while you're out on service calls. We handle the copy, the layout, the service pages, emergency call-to-actions — everything.",
      image: "/placeholder.png",
      highlights: [
        "We write all the content for you",
        "Emergency service pages that convert",
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
  headline: "Plumbing Websites That\nGenerate Leads While You Work",
  subheadline: "Real results for real plumbing businesses. These sites work 24/7 so you don't have to.",
  projects: [
    {
      title: "RapidFlow Plumbing",
      description: "Full landing page with emergency service focus that increased after-hours call volume by 185% in the first month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "Emergency CTA", "Lead Gen"],
      link: "#",
    },
    {
      title: "PipeMaster Pro",
      description: "Premium website for a residential and commercial plumbing company. Positioned them as the go-to expert in their metro area.",
      image: "/placeholder.png",
      tags: ["Full Website", "Premium Design"],
      link: "#",
    },
    {
      title: "AquaGuard Plumbing Co.",
      description: "Simple, conversion-focused landing page with online booking for estimates. Generates 40+ leads monthly from Google.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Booking"],
      link: "#",
    },
    {
      title: "ClearDrain Solutions",
      description: "Service-area optimized site covering 12 zip codes. Tripled their organic search traffic and doubled booked appointments.",
      image: "/placeholder.png",
      tags: ["Multi-Area", "SEO", "Lead Gen"],
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
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call. Tell us your services and service areas." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design with emergency-focused CTAs and service pages." },
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
  headline: "Plumbing Business Owners\nLove Working With Us",
  testimonials: [
    {
      name: "Mike Reardon",
      role: "Owner",
      company: "RapidFlow Plumbing",
      text: "I used to get maybe 2-3 calls a week from online. Now I'm getting 15+ and most of them are emergency jobs — the high-ticket ones. The site pays for itself every single week.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Sarah Chen",
      role: "Co-Owner",
      company: "AquaGuard Plumbing Co.",
      text: "They built us a site that actually looks like a real company, not some guy with a van. Customers tell us all the time that our website is why they called us over the other guys.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Derek Williams",
      role: "Owner",
      company: "ClearDrain Solutions",
      text: "One call, sent them our info, and five days later we had a website that ranks on the first page for 'plumber near me' in three cities. Our booking calendar is full every week now.",
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
      name: "Plumbing Company Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start generating leads fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized for local searches",
        "Emergency service call-to-actions",
        "Lead capture forms & call tracking",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/plumbing/landing-page",
    },
    {
      name: "Plumbing Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that dominates your local market.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Google Business integration",
        "Service area targeting pages",
        "Online booking for estimates",
        "Advanced local SEO optimization",
        "Blog/content section ready",
        "Analytics & conversion tracking",
      ],
      ctaText: "Claim Your Spot",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/plumbing/full-website",
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
      paymentLink: "https://joseign.com/pay/plumbing/ai-agentic",
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
      question: "Will my site have dedicated emergency service pages?",
      answer: "Absolutely. We build prominent emergency call-to-actions and dedicated pages for urgent services like burst pipes, water heater failures, and sewer backups. When someone has a plumbing emergency at 2 AM, your site makes it dead simple to call you immediately.",
    },
    {
      question: "Can you target multiple service areas on my site?",
      answer: "Yes. We create SEO-optimized service area pages for every city and zip code you cover. This helps you rank in local searches across your entire service region — not just your home base.",
    },
    {
      question: "Will customers be able to book estimates online?",
      answer: "Yes. We integrate an online booking system so customers can schedule estimates or service appointments directly from your site — 24/7. No more missed calls or back-and-forth phone tag.",
    },
    {
      question: "Do I need to provide content and images?",
      answer: "If you have photos of your team, your trucks, or completed jobs, send them over — they build trust fast. If not, no worries. We handle all the copy, source professional images, and create the entire design. Just show up to one call and we do the rest.",
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
  headline: "Ready to Get a Website\nThat Works As Hard As You Do?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your plumbing business and how we can help.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function PlumbingPage() {
  return (
    <>
      <Head>
        <title>Plumbing Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for plumbing companies. Built in 3-7 days. We handle everything — design, copy, SEO, emergency service pages. Only 3 spots per week." />
        <link rel="canonical" href="https://joseign.com/industries/plumbing" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plumbing Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for plumbing companies. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/plumbing" />
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
