import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Why Good UX = More Revenue",
    image:
      "https://145968764.fs1.hubspotusercontent-eu1.net/hubfs/145968764/alvaro-reyes-KxVlKiqQObU-unsplash.jpg",
    link: "https://blog.joseign.com/why-good-ux-more-revenue",
  },
  {
    id: 2,
    title: "Why Most landing pages don't convert?",
    image:
      "https://145968764.fs1.hubspotusercontent-eu1.net/hubfs/145968764/Pasted%20image%2020250604225608.png",
    link: "https://blog.joseign.com/most-landing-pages-dont-convert-because-they-werent-designed-to",
  },
  {
    id: 3,
    title: "How to solve brand indecisiveness ?",
    image:
      "https://145968764.fs1.hubspotusercontent-eu1.net/hubfs/145968764/5E7248CF-04EB-441A-B52C-53209551B19D.png",
    link: "https://blog.joseign.com/how-to-solve-brand-indecisiveness",
  },
  {
    id: 4,
    title: "Personalization isn't slapping a first name tag.",
    image:
      "https://145968764.fs1.hubspotusercontent-eu1.net/hubfs/145968764/Pasted%20image%2020250605014516.png",
    link: "https://blog.joseign.com/if-you-think-personalization-means-slapping-a-first-name-tag-youre-doing-it-wrong",
  },
];

const Blogs = () => {
  return (
    <section className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16 xs:py-12 bg-[#F5F5F5] text-center">
      <motion.p
        className="text-primary font-semibold text-sm uppercase mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tips, Trends & Tangents
      </motion.p>
      <motion.h2
        className="text-4xl lg:text-[34px] md:text-[30px] sm:text-[26px] xs:text-[24px] font-extrabold mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Read What Fuels Our Work
      </motion.h2>

      <motion.div
        className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-6 sm:gap-5 xs:gap-4 mb-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {blogs.map((blog) => (
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            key={blog.id}
          >
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] bg-gray-100 rounded-md overflow-hidden mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium leading-snug line-clamp-2">
                {blog.title}
              </h3>
            </motion.div>
          </a>
        ))}
      </motion.div>

      <a href="https://blog.joseign.com">
        <motion.button
          className="bg-primary text-white px-6 md:px-5 sm:px-5 xs:px-4 py-3 md:py-2.5 sm:py-2 xs:py-2 rounded-md text-sm md:text-[15px] sm:text-[14px] xs:text-[13px] font-medium hover:opacity-90 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          View our Blogs
        </motion.button>
      </a>
    </section>
  );
};

export default Blogs;
