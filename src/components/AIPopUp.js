import { AnimatePresence, motion } from 'framer-motion'; // ← NEW
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import StarsContainer from './StarsContainer';

export default function AIPopUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        /* FADE-IN BACKDROP */
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 md:px-2 py-16 md:py-4 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}          // fades to 100 % of bg-black/80
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <StarsContainer />

          {/* CARD: FADE-UP + GLOW */}
          <motion.div className="glow-gradient">
            <motion.div
              className="relative max-w-xl w-auto overflow rounded-3xl md:px-4 md:py-6
                         bg-cover bg-center p-10 py-12 shadow-2xl text-white
                         md:bg-[url('/bg.png')] bg-[url('/bg-mobile.png')]"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.45, type: 'spring', stiffness: 60 }}
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 rounded-3xl backdrop-blur-md bg-black/60" />

              {/* Close button */}
              <button
                aria-label="Close popup"
                onClick={() => setVisible(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition w-4 h-4"
              >
                <FiX/>
              </button>

              {/* Main copy */}
              <div className="relative z-10 space-y-6 flex flex-col w-auto md:text-center">
                <h2 className="text-3xl font-bold md:text-2xl">
                  Is Your Site <br className="hidden sm:block" /><span className='md:hidden'>...</span>
                  <br className='md:hidden'/>
                  <span className="whitespace">Leaving Money on the Table?</span>
                </h2>

                <p className="text-lg">
                  Run our <strong>free 60-second AI audit</strong> and discover the tweaks
                  that can <strong>3× your conversions</strong>—no email required.
                </p>

                <Link
                  href="https://ai.joseign.com"
                  className="
                    inline-block rounded-full px-8 py-3 font-semibold text-black
                    animate-button animate-gradient-x hover:scale-105
                    transition-transform duration-200 border-2
                  "
                >
                  Run My Audit →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}