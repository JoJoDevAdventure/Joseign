import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaPencilRuler } from "react-icons/fa";

const UIUXTab = () => {
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    // Start assembly after 1 second
    const timer = setTimeout(() => {
      setIsAssembled(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Component pieces that will assemble into a dashboard
  const components = [
    { id: 1, type: "sidebar", initialX: -200, initialY: -100, finalX: 0, finalY: 0, width: 60, height: 200 },
    { id: 2, type: "header", initialX: 200, initialY: -150, finalX: 70, finalY: 0, width: 230, height: 40 },
    { id: 3, type: "card1", initialX: -150, initialY: 200, finalX: 70, finalY: 50, width: 110, height: 70 },
    { id: 4, type: "card2", initialX: 250, initialY: 180, finalX: 190, finalY: 50, width: 110, height: 70 },
    { id: 5, type: "chart", initialX: 100, initialY: -200, finalX: 70, finalY: 130, width: 230, height: 90 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-6 mb-8 md:flex-col">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
          <FaPencilRuler className="text-white text-3xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-3xl md:text-2xl font-black">UI/UX Design & Prototype</h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
              Week 2-3
            </span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-left">
            Watch components transform from grayscale wireframes to a polished dashboard
          </p>
        </div>
      </div>

      {/* Interactive Assembly Demo */}
      <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
        {/* Column 1: Scattered Components */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">1</div>
            <h4 className="font-bold text-sm">Wireframes</h4>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 h-[300px] relative overflow-hidden flex items-center justify-center">
            {!isAssembled ? (
              <div className="relative w-full h-full">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 absolute top-0 left-0">Low-fidelity components</p>
                <svg viewBox="0 0 300 220" className="w-full h-full">
                  {components.map((comp) => (
                    <rect
                      key={comp.id}
                      x={comp.initialX + 150}
                      y={comp.initialY + 110}
                      width={comp.width}
                      height={comp.height}
                      rx="8"
                      fill="#9CA3AF"
                      opacity="0.6"
                    />
                  ))}
                </svg>
              </div>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500 text-center">
                Components assembled →
              </p>
            )}
          </div>
        </div>

        {/* Column 2: Assembly Process */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="font-bold text-sm">Assembly</h4>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700 h-[300px] relative overflow-hidden">
            <svg viewBox="0 0 300 220" className="w-full h-full">
              {components.map((comp, index) => (
                <motion.rect
                  key={comp.id}
                  initial={{
                    x: isAssembled ? comp.initialX + 150 : comp.finalX,
                    y: isAssembled ? comp.initialY + 110 : comp.finalY,
                    opacity: 0.3
                  }}
                  animate={{
                    x: comp.finalX,
                    y: comp.finalY,
                    opacity: 1
                  }}
                  transition={{
                    delay: isAssembled ? index * 0.2 : 0,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  width={comp.width}
                  height={comp.height}
                  rx="8"
                  fill="#9CA3AF"
                  className="dark:fill-gray-600"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Column 3: Final Polished UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isAssembled ? 1 : 0.3, scale: isAssembled ? 1 : 0.9 }}
          transition={{ delay: isAssembled ? 1.2 : 0, duration: 0.6 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
            <h4 className="font-bold text-sm">High-Fidelity UI</h4>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 border-2 border-primary/30 h-[300px] relative overflow-hidden">
            <svg viewBox="0 0 300 220" className="w-full h-full">
              {/* Sidebar with gradient */}
              <defs>
                <linearGradient id="sidebarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>

              {/* Sidebar */}
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
                x="0" y="0" width="60" height="220" rx="8"
                fill="url(#sidebarGrad)"
              />
              <motion.circle
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.3 }}
                cx="30" cy="30" r="8" fill="white" opacity="0.9"
              />
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.35 }}
                x="20" y="50" width="20" height="3" rx="1.5" fill="white" opacity="0.7"
              />
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.4 }}
                x="20" y="60" width="20" height="3" rx="1.5" fill="white" opacity="0.7"
              />

              {/* Header */}
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.45 }}
                x="70" y="0" width="230" height="40" rx="8"
                fill="#F3F4F6"
                className="dark:fill-gray-700"
              />
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.5 }}
                x="80" y="25" fontSize="14" fontWeight="bold" fill="#1F2937"
                className="dark:fill-white"
              >
                Dashboard
              </motion.text>

              {/* Card 1 */}
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.55 }}
                x="70" y="50" width="110" height="70" rx="8"
                fill="url(#cardGrad1)"
              />
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.6 }}
                x="80" y="70" fontSize="10" fill="white" opacity="0.9"
              >
                Total Users
              </motion.text>
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.65 }}
                x="80" y="95" fontSize="20" fontWeight="bold" fill="white"
              >
                2,547
              </motion.text>

              {/* Card 2 */}
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.7 }}
                x="190" y="50" width="110" height="70" rx="8"
                fill="url(#cardGrad2)"
              />
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.75 }}
                x="200" y="70" fontSize="10" fill="white" opacity="0.9"
              >
                Revenue
              </motion.text>
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.8 }}
                x="200" y="95" fontSize="20" fontWeight="bold" fill="white"
              >
                $12.4K
              </motion.text>

              {/* Chart */}
              <motion.rect
                initial={{ opacity: 0 }}
                animate={{ opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.85 }}
                x="70" y="130" width="230" height="90" rx="8"
                fill="url(#chartGrad)"
                opacity="0.1"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: isAssembled ? 1 : 0, opacity: isAssembled ? 1 : 0 }}
                transition={{ delay: 1.9, duration: 0.8 }}
                d="M 80 200 L 120 180 L 160 190 L 200 160 L 240 170 L 280 150"
                stroke="url(#chartGrad)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UIUXTab;
