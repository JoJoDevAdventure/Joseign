import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Blog title lorem ispum over 2 lines limited",
    image: "/blogs/blog1.jpg"
  },
  {
    id: 2,
    title: "Blog title lorem ispum over 2 lines limited",
    image: "/blogs/blog2.jpg"
  },
  {
    id: 3,
    title: "Blog title lorem ispum over 2 lines limited",
    image: "/blogs/blog3.jpg"
  },
  {
    id: 4,
    title: "Blog title lorem ispum over 2 lines limited",
    image: "/blogs/blog4.jpg"
  }
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
              staggerChildren: 0.15
            }
          }
        }}
        viewport={{ once: true }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-[300px] md:h-[260px] sm:h-[220px] xs:h-[180px] bg-gray-100 rounded-md overflow-hidden mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium leading-snug line-clamp-2">
              {blog.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="bg-primary text-white px-6 md:px-5 sm:px-5 xs:px-4 py-3 md:py-2.5 sm:py-2 xs:py-2 rounded-md text-sm md:text-[15px] sm:text-[14px] xs:text-[13px] font-medium hover:opacity-90 transition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        View our Blogs
      </motion.button>
    </section>
  );
};

export default Blogs;