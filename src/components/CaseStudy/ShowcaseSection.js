import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const ShowcaseSection = ({ showcase }) => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const x = useTransform(scrollXProgress, [0, 1], [0, -100]);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Project Showcase
          </h2>
        </motion.div>

        {showcase.video && (
          <motion.div
            className="mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-video bg-primary/10 rounded-xl overflow-hidden">
              <video
                src={showcase.video}
                controls
                className="w-full h-full object-cover"
                poster={showcase.images[0]}
              />
            </div>
          </motion.div>
        )}

        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ x }}
          >
            {showcase.images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 sm:w-96"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2 
                }}
              >
                <div className="bg-muted/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                  <ImageWithFallback
                    src={image}
                    alt={`Showcase ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-muted-foreground">← Scroll to explore more →</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;