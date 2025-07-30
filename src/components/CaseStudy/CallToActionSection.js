import { motion } from 'framer-motion';

const CallToActionSection = ({ callToAction }) => {
  return (
    <section className="py-36 text-primary-foreground relative overflow-hidden">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="ms:text-3xl text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Got a bold idea ? <br/>Let's bring it to life.
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {callToAction.subheading}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="/bookme"
              className="inline-flex items-center px-12 py-6 bg-primary-foreground text-primary rounded-xl text-lg hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl border-primary border-2"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {callToAction.button.label}
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/5 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-0 w-24 h-24 bg-primary-foreground/5 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
};

export default CallToActionSection;