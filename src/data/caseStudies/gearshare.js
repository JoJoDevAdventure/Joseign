const gearshareData = {
  id: "gearshare",
  color: "#F48626",
  client: {
    color: "#3D4143",
    info: {
      name: "GearShare",
      description: "GearShare is a comprehensive equipment rental marketplace connecting small businesses offering commercial equipment (trailers, skid steers, mini-excavators, trucks) with renters — democratizing access to equipment while helping small businesses monetize underutilized assets.",
      logo: "/projects/GEARSHARE/logo.png",
    },
    industry: {
      title: "Commercial Equipment Rental Marketplace",
      description: "Built for small businesses and contractors who need affordable access to quality commercial equipment. GearShare brings trust, efficiency, and transparency to the equipment rental market.",
      img: "/projects/GEARSHARE/industry.png",
    },
    values: {
      title: "Democratizing Equipment Access",
      description: "GearShare believes commercial equipment rental shouldn't be dominated by large companies with high prices. Small businesses should be able to monetize idle equipment while renters get affordable local access.",
      img: "/projects/GEARSHARE/values.png",
    },
    vision: {
      title: "The RVShare Model for Commercial Equipment",
      description: "GearShare envisions a trusted marketplace where equipment owners earn revenue from idle assets while renters find affordable, verified equipment locally — creating a circular economy for commercial equipment.",
      img: "/projects/GEARSHARE/vision.png",
    },
    final_img: "/projects/GEARSHARE/final.png",
  },
  hero: {
    title: "GearShare",
    slogan: "Rent Equipment. Earn Revenue.",
    subtitle: "We built GearShare from the ground up in just 6 weeks — a comprehensive equipment rental marketplace connecting small businesses with commercial equipment renters, featuring dual portals, payment processing, GPS tracking, and admin management.",
    scopes_of_work: ["MVP Development", "Marketplace Platform", "UI/UX Design", "Payment Integration", "GPS Tracking"],
    scopes_description: "Complete marketplace build: Owner portal, Renter marketplace, Admin dashboard with Next.js 15, PostgreSQL, Stripe Connect, and GPS integration.",
    image: "/projects/GEARSHARE/mvp.png",
    color: "#F48626",
  },
  quickFacts: {
    color: "#3D4143",
    banner: "/projects/GEARSHARE/banner.png",
    services: ["Owner Portal", "Renter Marketplace", "Admin Dashboard", "Payment Processing", "GPS Tracking", "Messaging System"],
    timelines: ["Design & Architecture - 1 Week", "Development Sprint - 4 Weeks", "Testing & Launch - 1 Week"],
    tools: ["Next.js 15", "React 18", "TypeScript", "PostgreSQL", "Prisma ORM", "Stripe Connect", "Tailwind CSS", "Shadcn UI", "Zustand", "Stytch Auth", "SendGrid", "Google Maps API", "Vercel", "Sentry"],
    results: {
      conversionRate: 185,
      pageSpeed: 93,
      bounceRate: 18,
    },
  },
  problem: {
    color: "#F48626",
    title: "The Challenge",
    text: `The commercial equipment rental market is dominated by large companies with high prices and limited inventory. Small businesses have equipment sitting idle with no easy way to monetize it. Renters struggle to find affordable, local equipment. The market needed a trusted marketplace that connects small equipment owners with renters — similar to RVShare's model but for commercial equipment like trailers, skid steers, mini-excavators, and trucks.`,
    quote: {
      text: "We needed to build trust, solve logistics, integrate payments, GPS tracking, and create separate experiences for owners and renters — all within a 6-week timeline to launch a production-ready MVP.",
      author: "Paul Dowling, GearShare Founder",
    },
    image_1: "/projects/GEARSHARE/problem-1.png",
    image_2: "/projects/GEARSHARE/problem-2.png",
    image_3: "/projects/GEARSHARE/problem-3.png",
  },
  strategy: {
    color: "#3D4143",
    title: "Our Strategy",
    steps: [
      {
        description: "Week 1: Complete UI/UX design in Figma with interactive prototypes for all user flows (owner, renter, admin), database architecture with ERD and schema design, and comprehensive brand identity system.",
        img: "/projects/GEARSHARE/strategy-1.png",
      },
      {
        description: "Weeks 2-5: Build three distinct portals - Equipment Owner portal for listing management and bookings, Renter Marketplace with search and booking flows, and Admin Dashboard for platform oversight and content moderation.",
        img: "/projects/GEARSHARE/strategy-2.png",
      },
      {
        description: "Week 6: Production deployment on Ubuntu server, comprehensive testing, Stripe Connect integration for marketplace payments, GPS tracking integration, monitoring setup with Sentry and analytics, and official platform launch.",
        img: "/projects/GEARSHARE/strategy-3.png",
      },
    ],
  },
  execution: {
    color: "#F48626",
    description:
      "We delivered a complete marketplace platform in 6 weeks — from UI/UX design to production deployment — with three distinct portals, payment processing, GPS tracking, and comprehensive admin tools.",
    title: "What We Did",
    phases: [
      {
        name: "01. Design Sprint & Architecture (Week 1)",
        details:
          "Created complete design system in Figma with 40+ screens, interactive prototypes for owner/renter/admin flows, brand identity (logo, colors, typography), database ERD with PostgreSQL schema, API endpoint specifications, and authentication structure. Deliverables: Figma design system, user flow diagrams, database schema documentation.",
        img: "/projects/GEARSHARE/exec-1.png",
      },
      {
        name: "02. Owner Portal & Core Infrastructure (Weeks 2-3)",
        details:
          "Built equipment owner portal with listing creation wizard, multi-image upload, pricing and availability management, calendar system preventing double-bookings, booking approval workflow, earnings dashboard with analytics, messaging inbox, and payout history. Tech: Next.js 15 App Router, TypeScript, Prisma ORM, Stytch authentication, Vercel image storage.",
        img: "/projects/GEARSHARE/exec-2.png",
      },
      {
        name: "03. Renter Marketplace & Admin Dashboard (Weeks 4-5)",
        details:
          "Developed renter marketplace with advanced search/filters (category, location, price, availability), equipment detail pages with image galleries, real-time availability calendar, Stripe Connect checkout flow, booking confirmation emails via SendGrid, review and rating system. Built admin dashboard with user management, listing approval workflow, platform analytics, content moderation, transaction monitoring, and audit logs.",
        img: "/projects/GEARSHARE/exec-3.png",
      },
      {
        name: "04. Integration & Launch (Week 6)",
        details:
          "Integrated Stripe Connect for marketplace payments with webhooks, GPS tracking API for equipment monitoring, Google Maps API for location services. Production deployment on Ubuntu server, SSL/HTTPS setup, environment configuration, database migration, SEO optimization (meta tags, sitemap, Schema.org), monitoring with Sentry and Uptime Robot, Google Analytics 4, comprehensive testing, and official platform launch.",
        img: "/projects/GEARSHARE/exec-4.png",
      },
    ],
  },
  results: {
    color: "#3D4143",
    title: "The Results",
    iframes: [
      {
        title: "GearShare Platform",
        link: "http://gearshare.co",
      },
    ]
  },
  testimonial: {
    color: "#F48626",
    text: "From concept to production-ready marketplace in just 6 weeks — GearShare now connects small businesses with equipment renters through a trusted, scalable platform. Complete with owner portal, renter marketplace, admin dashboard, Stripe payments, GPS tracking, and all the features needed to compete in the commercial equipment rental space.",
  },
  callToAction: {
    heading: "Ready to build your marketplace MVP in 6 weeks?",
    subheading:
      "We help founders go from idea to launch — with full-stack development, dual portals, payments, and a user experience that builds trust.",
    button: {
      label: "Start Your MVP",
      link: "/contact",
    },
  },
};

export default gearshareData;
