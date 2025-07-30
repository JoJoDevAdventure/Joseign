import { motion } from 'framer-motion';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const BeforeAfterSection = ({ beforeAfter }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section className="py-20 bg-muted/30"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Before &amp; After
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card border border-border">
            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              {/* Before Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={beforeAfter.before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  Before
                </div>
              </div>
              
              {/* After Image */}
              <motion.div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src={beforeAfter.after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  After
                </div>
              </motion.div>
              
              {/* Slider Line */}
              <motion.div
                className="absolute top-0 bottom-0 w-1 bg-primary-foreground shadow-lg"
                style={{ left: `${sliderPosition}%` }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-primary-foreground rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
              </motion.div>
            </div>
            
            {/* Slider Control */}
            <div className="p-8">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between mt-2 text-muted-foreground">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;