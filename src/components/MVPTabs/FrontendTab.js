import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

const FrontendTab = () => {
  const [codeText, setCodeText] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [previewOpacity, setPreviewOpacity] = useState(0);

  useEffect(() => {
    // Reset states
    setCodeText("");
    setShowPreview(false);
    setPreviewOpacity(0);

    const codeContent = `import React from 'react';
import { LineChart } from 'recharts';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Card title="Users" value="2,547" />
        <Card title="Revenue" value="$12.4K" />
      </div>
      <Chart data={analytics} />
    </div>
  );
};`;

    // Step 1: Type code
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= codeContent.length) {
        setCodeText(codeContent.slice(0, currentIndex));
        currentIndex += 5; // Type 5 chars at a time (faster)
      } else {
        clearInterval(typingInterval);
        // Step 2: Show preview after 500ms
        setTimeout(() => {
          setShowPreview(true);
          // Step 3: Fade in preview
          let opacity = 0;
          const fadeInterval = setInterval(() => {
            opacity += 0.08;
            setPreviewOpacity(opacity);
            if (opacity >= 1) {
              clearInterval(fadeInterval);
            }
          }, 25);
        }, 500);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-6 mb-8 md:flex-col">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
          <FaCode className="text-white text-3xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-3xl md:text-2xl font-black">Frontend Development</h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
              Week 4
            </span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-left mb-6">
            Watch code transform into a live, interactive interface in real-time
          </p>
        </div>
      </div>

      {/* Interactive Code-to-UI Demo */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
        {/* Column 1: Code Editor */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">1</div>
            <h4 className="font-bold text-sm">Code Editor</h4>
          </div>
          <div className="bg-gray-900 dark:bg-black rounded-xl border-2 border-gray-700 overflow-hidden">
            {/* Editor Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 ml-2">Dashboard.jsx</span>
            </div>
            {/* Code Content */}
            <div className="p-4 h-[300px] overflow-y-auto">
              <pre className="text-xs font-mono leading-relaxed">
                <code>
                  <span className="text-purple-400">{codeText.includes('import') ? 'import' : ''}</span>
                  <span className="text-blue-300">{codeText.includes('React') ? ' React ' : ''}</span>
                  <span className="text-purple-400">{codeText.includes('from') ? 'from ' : ''}</span>
                  <span className="text-green-400">{codeText.includes("'react'") ? "'react'" : ''}</span>
                  <span className="text-gray-400">{codeText.includes(';') ? ';' : ''}</span>
                  {'\n\n'}
                  <span className="text-purple-400">{codeText.includes('const Dashboard') ? 'const ' : ''}</span>
                  <span className="text-yellow-300">{codeText.includes('Dashboard') ? 'Dashboard ' : ''}</span>
                  <span className="text-gray-400">{codeText.includes('= ()') ? '= () ' : ''}</span>
                  <span className="text-purple-400">{codeText.includes('=>') ? '=> ' : ''}</span>
                  <span className="text-gray-400">{codeText.includes('{\n  return') ? '{' : ''}</span>
                  {codeText.includes('return') ? '\n  ' : ''}
                  <span className="text-purple-400">{codeText.includes('return') ? 'return ' : ''}</span>
                  <span className="text-gray-400">{codeText.includes('return (') ? '(' : ''}</span>
                  {codeText.includes('<div') ? '\n    ' : ''}
                  <span className="text-green-300">{codeText.includes('<div className="p-6">') ? '<div ' : ''}</span>
                  <span className="text-blue-300">{codeText.includes('className=') ? 'className' : ''}</span>
                  <span className="text-gray-400">{codeText.includes('className=') ? '=' : ''}</span>
                  <span className="text-orange-300">{codeText.includes('"p-6"') ? '"p-6"' : ''}</span>
                  <span className="text-green-300">{codeText.includes('<div className="p-6">') ? '>' : ''}</span>
                  {codeText.includes('<h1') ? '\n      ' : ''}
                  <span className="text-green-300">{codeText.includes('<h1') ? '<h1 ' : ''}</span>
                  <span className="text-blue-300">{codeText.includes('<h1 className') ? 'className' : ''}</span>
                  <span className="text-gray-400">{codeText.includes('<h1 className') ? '=' : ''}</span>
                  <span className="text-orange-300">{codeText.includes('"text-2xl font-bold"') ? '"text-2xl font-bold"' : ''}</span>
                  <span className="text-green-300">{codeText.includes('<h1 className="text-2xl font-bold">') ? '>' : ''}</span>
                  {codeText.includes('Dashboard\n') ? '\n        Dashboard' : ''}
                  {codeText.includes('</h1>') ? '\n      ' : ''}
                  <span className="text-green-300">{codeText.includes('</h1>') ? '</h1>' : ''}</span>
                  {codeText.includes('<div className="grid') ? '\n      <div className="grid grid-cols-2 gap-4 mt-4">' : ''}
                  {codeText.includes('<Card') ? '\n        <Card title="Users" value="2,547" />' : ''}
                  {codeText.includes('Revenue') ? '\n        <Card title="Revenue" value="$12.4K" />' : ''}
                  {codeText.includes('</div>\n    </div>\n  );\n};') ? '\n      </div>\n    </div>\n  );\n};' : ''}
                </code>
                {codeText.length < 250 && codeText.length > 0 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-blue-400 ml-1"
                  />
                )}
              </pre>
            </div>
          </div>
        </div>

        {/* Column 2: Live Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: showPreview ? 1 : 0, scale: showPreview ? 1 : 0.95 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="font-bold text-sm">Live Preview</h4>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-xl border-2 border-teal-500/30 overflow-hidden">
            {/* Browser Header */}
            <div className="bg-white dark:bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 ml-4 bg-gray-100 dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-600 dark:text-gray-400">
                localhost:3000
              </div>
            </div>
            {/* Preview Content */}
            <div className="p-6 h-[300px] overflow-hidden" style={{ opacity: previewOpacity }}>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: showPreview ? 1 : 0, y: showPreview ? 0 : -10 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-gray-800 dark:text-white mb-3"
              >
                Dashboard
              </motion.h1>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: showPreview ? 1 : 0, scale: showPreview ? 1 : 0.8 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-3 text-white"
                >
                  <div className="text-xs opacity-90 mb-1">Users</div>
                  <div className="text-2xl font-bold">2,547</div>
                  <div className="text-xs opacity-75 mt-1">↑ 12.5%</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: showPreview ? 1 : 0, scale: showPreview ? 1 : 0.8 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg p-3 text-white"
                >
                  <div className="text-xs opacity-90 mb-1">Revenue</div>
                  <div className="text-2xl font-bold">$12.4K</div>
                  <div className="text-xs opacity-75 mt-1">↑ 8.3%</div>
                </motion.div>
              </div>

              {/* Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showPreview ? 1 : 0, y: showPreview ? 0 : 20 }}
                transition={{ delay: 0.7 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600"
              >
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2">Analytics</div>
                <svg viewBox="0 0 200 80" className="w-full">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="200" y2="20" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.5" />
                  <line x1="0" y1="40" x2="200" y2="40" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.5" />
                  <line x1="0" y1="60" x2="200" y2="60" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.5" />

                  {/* Area gradient */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: showPreview ? 1 : 0 }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                    d="M 0 70 L 20 65 L 40 55 L 60 60 L 80 45 L 100 50 L 120 35 L 140 40 L 160 25 L 180 30 L 200 20 L 200 80 L 0 80 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: showPreview ? 1 : 0 }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                    d="M 0 70 L 20 65 L 40 55 L 60 60 L 80 45 L 100 50 L 120 35 L 140 40 L 160 25 L 180 30 L 200 20"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {[
                    { x: 0, y: 70 }, { x: 20, y: 65 }, { x: 40, y: 55 }, { x: 60, y: 60 },
                    { x: 80, y: 45 }, { x: 100, y: 50 }, { x: 120, y: 35 }, { x: 140, y: 40 },
                    { x: 160, y: 25 }, { x: 180, y: 30 }, { x: 200, y: 20 }
                  ].map((point, i) => (
                    <motion.circle
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: showPreview ? 1 : 0 }}
                      transition={{ delay: 0.9 + (i * 0.1), duration: 0.3 }}
                      cx={point.x}
                      cy={point.y}
                      r="3"
                      fill="#3B82F6"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FrontendTab;
