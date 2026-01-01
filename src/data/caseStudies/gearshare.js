const gearshareData = {
  id: "gearshare",
  color: "#10B981",
  client: {
    color: "#059669",
    info: {
      name: "Gearshare",
      description: "Gearshare is a peer-to-peer marketplace enabling outdoor enthusiasts to rent and share high-quality gear, making adventure accessible and sustainable.",
      logo: "/projects/gearshare/logo.png",
    },
    industry: {
      title: "Peer-to-Peer Marketplace & Outdoor Recreation",
      description: "Built for adventurers who want access without ownership. Gearshare brings trust, convenience, and sustainability to gear rental.",
      img: "/projects/gearshare/industry.png",
    },
    values: {
      title: "Adventure Made Accessible",
      description: "Gearshare believes everyone should experience the outdoors — without the upfront cost of expensive equipment. Rent what you need, share what you own.",
      img: "/projects/gearshare/values.png",
    },
    vision: {
      title: "The Future of Outdoor Access",
      description: "Gearshare envisions a world where quality outdoor gear is shared, not stored. A circular economy for adventure seekers.",
      img: "/projects/gearshare/vision.png",
    },
    final_img: "/projects/gearshare/final.png",
  },
  hero: {
    title: "Gearshare",
    slogan: "Rent Gear. Share Adventure.",
    subtitle: "We built Gearshare from the ground up — a full-stack MVP and SaaS platform that connects gear owners with renters, featuring payments, reviews, and real-time availability.",
    scopes_of_work: ["MVP Development", "SaaS Platform", "UI/UX Design", "Payment Integration"],
    scopes_description: "Complete platform build with Next.js, PostgreSQL, Stripe payments, and user management.",
    image: "/projects/gearshare/hero.png",
    color: "#10B981",
  },
  quickFacts: {
    color: "#059669",
    banner: "/projects/gearshare/banner.png",
    services: ["Full-Stack Development", "Payment Integration", "Review System", "Real-Time Availability"],
    timelines: ["Planning & Research - 1 Week", "MVP Build - 4 Weeks", "Beta Testing - 2 Weeks", "Launch - 1 Week"],
    tools: ["Next.js", "React", "PostgreSQL", "Stripe", "Tailwind CSS"],
    results: {
      conversionRate: 185,
      pageSpeed: 93,
      bounceRate: 18,
    },
  },
  problem: {
    color: "#047857",
    title: "The Challenge",
    text: `Outdoor gear is expensive and often sits unused for months. Renters struggle to find quality equipment, and owners have no easy way to monetize their gear. The market needed a trusted, seamless platform.`,
    quote: {
      text: "We needed to solve trust, logistics, and payments — all while making the experience feel as simple as ordering online.",
      author: "Youssef B., Full-Stack Developer & Designer",
    },
    image_1: "/projects/gearshare/problem-1.png",
    image_2: "/projects/gearshare/problem-2.png",
    image_3: "/projects/gearshare/problem-3.png",
  },
  strategy: {
    color: "#10B981",
    title: "Our Strategy",
    steps: [
      {
        description: "Build a dual-sided marketplace with separate flows for renters and owners, with integrated calendar availability and booking logic.",
        img: "/projects/gearshare/strategy-1.png",
      },
      {
        description: "Integrate Stripe for secure payments, deposits, and instant payouts — ensuring trust on both sides of every transaction.",
        img: "/projects/gearshare/strategy-2.png",
      },
      {
        description: "Design a mobile-first UI with photo uploads, review systems, and transparent pricing to build credibility and engagement.",
        img: "/projects/gearshare/strategy-3.png",
      },
    ],
  },
  execution: {
    color: "#059669",
    description:
      "We developed the complete platform — from user authentication to payment processing — creating a trusted marketplace that simplifies gear rental.",
    title: "What We Did",
    phases: [
      {
        name: "01. Platform Architecture",
        details:
          "Designed database schema, user flows, and API structure. Built authentication, role-based access, and listing management.",
        img: "/projects/gearshare/exec-1.png",
      },
      {
        name: "02. Booking & Calendar System",
        details:
          "Created real-time availability calendar, booking requests, and automated notifications for owners and renters.",
        img: "/projects/gearshare/exec-2.png",
      },
      {
        name: "03. Payment & Trust Features",
        details:
          "Integrated Stripe Connect for split payments, security deposits, and instant transfers. Added review and rating system.",
        img: "/projects/gearshare/exec-3.png",
      },
      {
        name: "04. Launch & Optimization",
        details:
          "Beta tested with real users, optimized for mobile performance, and launched with marketing integrations and SEO.",
        img: "/projects/gearshare/exec-4.png",
      },
    ],
  },
  results: {
    color: "#10B981",
    title: "The Results",
    iframes: [
      {
        title: "Gearshare Platform",
        link: "#",
      },
    ]
  },
  testimonial: {
    color: "#047857",
    text: "Gearshare proves that the sharing economy can work for physical goods. We built a platform that's trusted, profitable, and genuinely useful.",
  },
  callToAction: {
    heading: "Ready to build your marketplace MVP?",
    subheading:
      "We help founders go from idea to launch — with full-stack development, payments, and a user experience people trust.",
    button: {
      label: "Start Your MVP",
      link: "/contact",
    },
  },
};

export default gearshareData;
