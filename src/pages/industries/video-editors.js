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

const ACCENT = "#E11D48";

const heroData = {
  eyebrow: "Websites for Video Editors",
  headline: "You Create Stunning Visuals.\nYour Portfolio Site Should Too.",
  subheadline: "We build premium, high-converting landing pages for video editors and videographers in 3-7 days. You stay focused on editing — we handle everything else.",
  ctaText: "Claim Your Spot",
  ctaLink: "https://joseign.com/bookme",
  heroImage: "/placeholder.png",
  badge: "Only 3 Spots This Week",
  accentColor: ACCENT,
};

const painPointsData = {
  eyebrow: "Sound Familiar?",
  headline: "You're Too Busy Cutting Timelines\nTo Worry About Your Website",
  subheadline: "We hear this from video editors and videographers every single day.",
  pains: [
    {
      title: "Your best work is buried on YouTube and Vimeo",
      description: "You've produced incredible videos, but they're scattered across platforms where nobody connects them back to you. Potential clients can't find your full body of work.",
    },
    {
      title: "Leads go to the editor with the better website",
      description: "Your competitor doesn't do better work — they just have a website that makes them look professional and established. That's the only difference.",
    },
    {
      title: "Social media alone isn't landing premium clients",
      description: "Instagram reels and TikTok clips are great for exposure, but high-budget clients want to see a polished portfolio site before they sign a contract.",
    },
    {
      title: "The last designer couldn't showcase video work properly",
      description: "They gave you a static site with tiny thumbnails. No embedded reels, no smooth playback, no way to actually experience your work the way it deserves.",
    },
  ],
  closingText: "What if someone just handled it all for you?",
  accentColor: ACCENT,
};

const howItWorksData = {
  eyebrow: "Zero Headaches",
  headline: "We Handle Everything.\nYou Keep Editing.",
  subheadline: "Our 3-step process is designed for busy video editors who'd rather be in the timeline than stressing over a website.",
  steps: [
    {
      number: "01",
      title: "Quick Discovery Call",
      description: "A 15-minute call where we learn about your editing style, your ideal clients, and what sets you apart. Send us your showreel and top portfolio pieces and we'll take it from there.",
      image: "/placeholder.png",
      highlights: [
        "15 minutes, not 15 meetings",
        "Just send us your showreel & portfolio links",
        "We handle the rest",
      ],
    },
    {
      number: "02",
      title: "We Build, You Edit",
      description: "Our team designs and develops your entire website while you're deep in your next project. We handle the copy, the layout, the video embeds and portfolio galleries — everything.",
      image: "/placeholder.png",
      highlights: [
        "We write all the content for you",
        "Stunning video portfolio with smooth playback",
        "Mobile-first so clients find you anywhere",
      ],
    },
    {
      number: "03",
      title: "Review & Launch",
      description: "We send you the finished product. You tell us what to tweak (if anything). We make changes same-day and launch. Your new site starts attracting premium clients immediately.",
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
  headline: "Video Editor Websites That\nAttract Premium Clients",
  subheadline: "Real results for real video professionals. These sites work 24/7 so you don't have to.",
  projects: [
    {
      title: "FrameCut Studios",
      description: "Full landing page with embedded showreel and portfolio grid that increased booking requests by 180% in the first month.",
      image: "/placeholder.png",
      tags: ["Landing Page", "Showreel", "Lead Gen"],
      link: "#",
    },
    {
      title: "Reel Vision Media",
      description: "Premium website for a commercial video production company. Positioned them as the go-to team for brand content in their city.",
      image: "/placeholder.png",
      tags: ["Full Website", "Premium Design"],
      link: "#",
    },
    {
      title: "CutAbove Editing",
      description: "Clean, conversion-focused landing page with categorized video portfolio. Generates 40+ inquiries monthly from Google.",
      image: "/placeholder.png",
      tags: ["Landing Page", "SEO", "Portfolio"],
      link: "#",
    },
    {
      title: "Lens & Light Productions",
      description: "Cinematic portfolio site showcasing wedding and event videography. Doubled their consultation bookings within 6 weeks.",
      image: "/placeholder.png",
      tags: ["Portfolio", "Video", "Branding"],
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
      "Optimized video embeds for fast loading",
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
      "Videos that lag and buffer on every page",
    ],
  },
  timeline: [
    { day: "Day 1", title: "Discovery Call", description: "Quick 15-min call. Send us your showreel and top video links." },
    { day: "Day 2-3", title: "Design & Copy", description: "We create your custom design with cinematic portfolio sections." },
    { day: "Day 4-5", title: "Development", description: "We build your site with smooth video playback and fast performance." },
    { day: "Day 6-7", title: "Review & Launch", description: "You review, we tweak, and your new site goes live." },
  ],
  image: "/placeholder.png",
  accentColor: ACCENT,
};

const exclusivityData = {
  eyebrow: "Limited Availability",
  headline: "We Only Take 3 Projects\nPer Week. Period.",
  subheadline: "This isn't a marketing gimmick. It's how we deliver premium quality every single time.",
  reason: "Because premium means we actually care about your project. We don't mass-produce websites — we craft them. Every video embed, every transition, every detail is intentional.",
  points: [
    {
      icon: "shield",
      title: "Dedicated Attention",
      description: "Your project gets our full focus. No juggling 20 clients at once.",
    },
    {
      icon: "award",
      title: "Premium Quality Guaranteed",
      description: "Fewer projects = higher standards. Your site will look as cinematic as your edits.",
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
      description: "Every 3 months we audit your site's SEO performance and send you a report with recommendations to rank higher for video editing searches.",
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
      description: "Meta tags, schema markup, sitemap, Google Business optimization, and keyword targeting for video editing and videography services.",
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
  headline: "Video Editors & Videographers\nLove Working With Us",
  testimonials: [
    {
      name: "Marcus Rivera",
      role: "Founder",
      company: "FrameCut Studios",
      text: "I went from a basic Wix page to a site that actually feels like my work. Clients now tell me the website alone convinced them to reach out. I've booked 12 new projects since launching.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "Sarah Chen",
      role: "Lead Editor",
      company: "Reel Vision Media",
      text: "They nailed the video embeds perfectly — my showreel plays smooth, loads fast, and looks cinematic. One call, sent my portfolio links, and 5 days later I had a site that looks like a $10K build.",
      image: "/placeholder.png",
      stars: 5,
    },
    {
      name: "David Okafor",
      role: "Owner",
      company: "Lens & Light Productions",
      text: "I was relying on Instagram and word-of-mouth. Now I have a real website that ranks on Google and clients can watch my demo reel and book directly. My revenue went up 40% in two months.",
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
      name: "Video Editor Landing Page",
      price: "$950",
      period: "one-time",
      description: "A high-converting landing page to start attracting premium clients fast.",
      features: [
        "Custom premium design (not a template)",
        "Mobile-first responsive layout",
        "SEO-optimized for video editing searches",
        "Showreel & demo reel integration",
        "Lead capture forms & booking integration",
        "Fast loading speed (90+ score)",
        "All 6 bonuses included ($2,500+ value)",
      ],
      ctaText: "Get Started",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/video-editors/landing-page",
    },
    {
      name: "Video Editor Full Website",
      price: "$1,950",
      period: "one-time",
      description: "A complete multi-page website that attracts premium clients.",
      highlighted: true,
      features: [
        "Everything in Landing Page, plus:",
        "Multi-page website (up to 7 pages)",
        "Video portfolio gallery with smooth playback",
        "Service category pages (wedding, commercial, etc.)",
        "Client testimonial video sections",
        "Advanced SEO optimization",
        "Blog/content section ready",
        "Analytics & conversion tracking",
      ],
      ctaText: "Claim Your Spot",
      ctaLink: "https://joseign.com/bookme",
      paymentLink: "https://joseign.com/pay/video-editors/full-website",
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
      paymentLink: "https://joseign.com/pay/video-editors/ai-agentic",
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
      question: "How do you handle video embedding on the site?",
      answer: "We use optimized, lazy-loaded video embeds from YouTube, Vimeo, or self-hosted sources. Your showreel and portfolio videos load fast without slowing down the site. We ensure smooth playback on both desktop and mobile with cinematic presentation.",
    },
    {
      question: "Can I display my showreel front and center?",
      answer: "Absolutely. Your showreel or demo reel gets hero placement on the site with autoplay options, custom thumbnails, and full-screen capability. It's the first thing visitors see — exactly how it should be.",
    },
    {
      question: "Do I need to provide content and images?",
      answer: "If you have your showreel, portfolio video links, and behind-the-scenes photos, send them over — they're gold for your site. If not, no worries. We handle all the copy, source professional images, and create the entire design. Just show up to one call and we do the rest.",
    },
    {
      question: "Can I organize videos by category (wedding, commercial, music videos)?",
      answer: "Yes. We build filterable portfolio sections so visitors can browse your work by category. Whether you specialize in wedding films, brand content, music videos, or documentaries — each category gets its own showcase.",
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
  headline: "Ready to Get a Website\nAs Cinematic As Your Edits?",
  subheadline: "Book a free 15-minute call. No pressure. No pitch deck. Just a conversation about your video editing business and how we can help.",
  ctaText: "Claim Your Spot Now",
  ctaLink: "https://joseign.com/bookme",
  secondaryText: "WhatsApp Us",
  secondaryLink: "https://wa.me/message/FMWAQDMHBNBEP1",
  urgencyText: "Only 1 spot left this week",
  image: "/placeholder.png",
  trustBadges: ["50+ Happy Clients", "3-7 Day Delivery", "Money-Back Guarantee"],
  accentColor: ACCENT,
};

export default function VideoEditorsPage() {
  return (
    <>
      <Head>
        <title>Video Editor Websites & Landing Pages in 3-7 Days | Joseign</title>
        <meta name="description" content="Premium, high-converting websites for video editors and videographers. Built in 3-7 days. We handle everything — design, copy, SEO, showreel integration. Only 3 spots per week." />
        <link rel="canonical" href="https://joseign.com/industries/video-editors" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Video Editor Websites & Landing Pages in 3-7 Days | Joseign" />
        <meta property="og:description" content="Premium landing pages for video editors and videographers. 3-7 day delivery. We handle everything." />
        <meta property="og:url" content="https://joseign.com/industries/video-editors" />
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
