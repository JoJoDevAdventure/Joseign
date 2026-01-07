import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import PixelCard from "@/components/PixelCard";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState } from "react";
import ParticlesCont from "../../components/ParticlesContainer";

import TargetCursor from "@/components/TargetCursor";

import { projectsData } from "@/data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (category) => setSelectedCategory(category);

  return (
    <>
      <Head>
        <title>Projects Portfolio – Joseign | Landing Pages, SaaS & UI/UX Design</title>
        <meta
          name="description"
          content="Explore Joseign's portfolio of successful projects: landing page optimization, SaaS platforms, UI/UX design, and brand identity. View our work across diverse industries and technologies."
        />
        <link rel="canonical" href="https://joseign.com/projects" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects Portfolio – Joseign" />
        <meta property="og:description" content="Browse our portfolio of landing pages, SaaS platforms, and UI/UX design projects delivered for clients worldwide." />
        <meta property="og:url" content="https://joseign.com/projects" />
        <meta property="og:image" content="https://joseign.com/og-cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects Portfolio – Joseign" />
        <meta name="twitter:description" content="Explore our portfolio: landing pages, SaaS platforms, UI/UX design & brand identity projects." />
        <meta name="twitter:image" content="https://joseign.com/og-cover.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-12 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl z-10"
          />
          <TargetCursor hideDefaultCursor={true} spinDuration={5}/>
          <div className="relative mt-2 flex justify-center flex-wrap gap-3 w-full z-50 mb-12">
            {["All", "End-to-end", "UI/UX Design", "MVP"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`py-4 border border-black text-sm rounded transition-all duration-500 ease-in-out cursor-target cursor-none ${
                  selectedCategory === cat
                    ? "bg-[#C94694] text-white font-medium w-[200px] px-6 "
                    : "bg-[#F0F0F0] w-[140px] px-3"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <ParticlesCont />

          {/* Interleaved featured/non-featured sections */}
          {(() => {
            const sections = [];
            const filteredData = projectsData.filter((p) => {
              if (selectedCategory === "All") return true;
              return p.type
                ?.toLowerCase()
                .includes(selectedCategory.toLowerCase());
            });
            const nonFeatured = filteredData.filter((p) => !p.featured);
            const featured = filteredData.filter((p) => p.featured);
            let nfIndex = 0;
            let fIndex = 0;

            while (fIndex < featured.length || nfIndex < nonFeatured.length) {
              if (fIndex < featured.length) {
                sections.push(
                  <div key={`featured-${fIndex}`} className="w-full mb-10">
                    <PixelCard
                      featured
                      vid={featured[fIndex].vid}
                      thumbnail={featured[fIndex].thumbnail}
                      title={featured[fIndex].title}
                      img={featured[fIndex].img}
                      link={featured[fIndex].link}
                      description={featured[fIndex].summary}
                    />
                  </div>
                );
                fIndex++;
              }

              const nonPair = [];
              for (
                let j = 0;
                j < 2 && nfIndex < nonFeatured.length;
                j++, nfIndex++
              ) {
                nonPair.push(
                  <div key={`regular-${nfIndex}`} className=" w-[100%]">
                    <PixelCard
                      featured={false}
                      vid={nonFeatured[nfIndex].vid}
                      thumbnail={nonFeatured[nfIndex].thumbnail}
                      title={nonFeatured[nfIndex].title}
                      img={nonFeatured[nfIndex].img}
                      link={nonFeatured[nfIndex].link}
                      description={nonFeatured[nfIndex].summary}
                    />
                  </div>
                );
              }
              if (nonPair.length > 0) {
                sections.push(
                  <div
                    key={`nonpair-${nfIndex}`}
                    className="grid md:grid-cols-1 grid-cols-2 gap-12 mb-10"
                  >
                    {nonPair}
                  </div>
                );
              }
            }
            return sections;
          })()}
        </Layout>
      </main>
    </>
  );
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Joseign Projects Portfolio",
  "description": "Portfolio showcasing landing page optimization, SaaS platform development, UI/UX design, and brand identity projects",
  "url": "https://joseign.com/projects",
  "provider": {
    "@type": "Organization",
    "name": "Joseign",
    "url": "https://joseign.com"
  }
};

export default Projects;
