import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

export default function IndustriesPage() {
  return (
    <>
      <Head>
        <title>Industries We Serve | Joseign</title>
        <meta name="description" content="Joseign builds high-converting landing pages and websites for landscaping, HVAC, dental, legal, accounting, plumbing, roofing, construction, and video editing businesses." />
        <link rel="canonical" href="https://joseign.com/industries" />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen bg-light">
        <div className="px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-32">
          <h1 className="text-5xl md:text-3xl font-bold text-dark">Industries</h1>
          <p className="text-lg text-dark/60 mt-4">Coming soon.</p>
        </div>
      </main>
    </>
  );
}
