import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCloud } from "react-icons/fa";

const DeploymentTab = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setActiveStage(0);
    setLogs([]);

    const stages = [
      { delay: 500, stage: 0, log: "→ Running test suite..." },
      { delay: 1200, stage: 0, log: "✓ 47 tests passed" },
      { delay: 1800, stage: 1, log: "→ Building production bundle..." },
      { delay: 2500, stage: 1, log: "✓ Build completed (2.3s)" },
      { delay: 3000, stage: 2, log: "→ Deploying to Vercel..." },
      { delay: 3700, stage: 2, log: "✓ Deployment successful" },
      { delay: 4200, stage: 3, log: "🚀 Live at https://your-mvp.com" },
    ];

    const timers = stages.map(({ delay, stage, log }) =>
      setTimeout(() => {
        setActiveStage(stage);
        setLogs(prev => [...prev, { text: log, stage }]);
      }, delay)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const stages = [
    { id: 0, label: "Testing", icon: "🧪", color: "#3B82F6", x: 40 },
    { id: 1, label: "Building", icon: "⚙️", color: "#8B5CF6", x: 120 },
    { id: 2, label: "Deploying", icon: "🚀", color: "#EC4899", x: 200 },
    { id: 3, label: "Live", icon: "✨", color: "#10B981", x: 280 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-6 mb-8 md:flex-col">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
          <FaCloud className="text-white text-3xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-3xl md:text-2xl font-black">Deployment & Testing</h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
              Week 6
            </span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-left mb-6">
            Watch your MVP go from code to live production in automated stages
          </p>
        </div>
      </div>

      {/* Interactive Deployment Pipeline */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
        {/* Column 1: Pipeline Diagram */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">1</div>
            <h4 className="font-bold text-sm">CI/CD Pipeline</h4>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border-2 border-blue-500/30 h-[400px] flex items-center justify-center">
            <svg viewBox="0 0 320 200" className="w-full h-auto">
              {/* Connection Lines */}
              {stages.slice(0, -1).map((stage, index) => (
                <motion.line
                  key={`line-${stage.id}`}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStage > index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  x1={stage.x + 30}
                  y1="100"
                  x2={stages[index + 1].x - 30}
                  y2="100"
                  stroke={activeStage > index ? stage.color : "#E5E7EB"}
                  strokeWidth="4"
                />
              ))}

              {/* Stage Nodes */}
              {stages.map((stage, index) => (
                <motion.g key={stage.id}>
                  {/* Circle */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{
                      scale: activeStage >= index ? 1 : 0.8,
                      opacity: activeStage >= index ? 1 : 0.4
                    }}
                    transition={{ duration: 0.4, delay: index * 0.3 }}
                    cx={stage.x}
                    cy="100"
                    r="28"
                    fill={activeStage >= index ? stage.color : "#E5E7EB"}
                  />

                  {/* Icon */}
                  <text
                    x={stage.x}
                    y="108"
                    textAnchor="middle"
                    fontSize="24"
                    opacity={activeStage >= index ? 1 : 0.5}
                  >
                    {stage.icon}
                  </text>

                  {/* Label */}
                  <text
                    x={stage.x}
                    y="145"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill={activeStage >= index ? stage.color : "#9CA3AF"}
                    className="dark:fill-white"
                  >
                    {stage.label}
                  </text>

                  {/* Checkmark when completed */}
                  {activeStage > index && (
                    <motion.text
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      x={stage.x + 18}
                      y="85"
                      fontSize="16"
                    >
                      ✓
                    </motion.text>
                  )}

                  {/* Loading spinner on active */}
                  {activeStage === index && index < 3 && (
                    <motion.circle
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      cx={stage.x}
                      cy="100"
                      r="35"
                      fill="none"
                      stroke={stage.color}
                      strokeWidth="3"
                      strokeDasharray="20 60"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  )}
                </motion.g>
              ))}
            </svg>
          </div>
        </div>

        {/* Column 2: Terminal Logs */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="font-bold text-sm">Deployment Logs</h4>
          </div>
          <div className="bg-gray-900 dark:bg-black rounded-xl border-2 border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 ml-2">Terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 h-[352px] overflow-y-auto font-mono text-sm">
              <div className="text-gray-500 text-xs mb-3">
                $ npm run deploy
              </div>

              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 ${
                    log.text.includes('✓')
                      ? 'text-green-400'
                      : log.text.includes('→')
                      ? 'text-blue-400'
                      : log.text.includes('🚀')
                      ? 'text-purple-400 font-bold'
                      : 'text-gray-400'
                  }`}
                >
                  {log.text}
                </motion.div>
              ))}

              {logs.length > 0 && logs.length < 7 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-green-400"
                />
              )}

              {activeStage === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg"
                >
                  <div className="text-green-400 font-bold mb-2">✓ Deployment Complete</div>
                  <div className="text-xs text-gray-400 mb-2">Your MVP is now live:</div>
                  <a
                    href="#"
                    className="text-blue-400 underline text-sm break-all"
                    onClick={(e) => e.preventDefault()}
                  >
                    https://your-mvp.vercel.app
                  </a>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="text-gray-500">
                      Region: <span className="text-white">US-East</span>
                    </div>
                    <div className="text-gray-500">
                      Uptime: <span className="text-green-400">100%</span>
                    </div>
                    <div className="text-gray-500">
                      Build: <span className="text-white">2.3s</span>
                    </div>
                    <div className="text-gray-500">
                      Tests: <span className="text-green-400">47/47</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeploymentTab;
