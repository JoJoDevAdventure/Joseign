import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDatabase } from "react-icons/fa";

const BackendTab = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);

    const timers = [
      setTimeout(() => setStep(1), 800),   // API Request
      setTimeout(() => setStep(2), 1600),  // Authentication
      setTimeout(() => setStep(3), 2400),  // Database Query
      setTimeout(() => setStep(4), 3200),  // Processing
      setTimeout(() => setStep(5), 4000),  // Response
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const steps = [
    { id: 0, label: "Client Request", color: "#3B82F6", y: 20 },
    { id: 1, label: "API Gateway", color: "#8B5CF6", y: 100 },
    { id: 2, label: "Auth Middleware", color: "#EC4899", y: 180 },
    { id: 3, label: "Database", color: "#10B981", y: 260 },
    { id: 4, label: "Response", color: "#F59E0B", y: 340 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-6 mb-8 md:flex-col">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
          <FaDatabase className="text-white text-3xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-3xl md:text-2xl font-black">Backend & Integrations</h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
              Week 4-5
            </span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-left mb-6">
            Visualize data flowing through your API, authentication, and database layers
          </p>
        </div>
      </div>

      {/* Interactive Data Flow Demo */}
      <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
        {/* Column 1: Request */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">1</div>
            <h4 className="font-bold text-sm">API Request</h4>
          </div>
          <div className="bg-gray-900 dark:bg-black rounded-xl p-4 border-2 border-gray-700 h-[400px] overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-xs text-gray-500 mb-2">POST /api/users</div>
              <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
{`{
  "method": "POST",
  "endpoint": "/api/users",
  "headers": {
    "Authorization": "Bearer eyJh...",
    "Content-Type": "application/json"
  },
  "body": {
    "email": "user@example.com",
    "name": "John Doe"
  }
}`}
              </pre>
            </motion.div>

            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 pt-4 border-t border-gray-700"
              >
                <div className="text-xs text-yellow-400 mb-1">⚡ Validating token...</div>
                <div className="text-xs text-green-400">✓ Authenticated</div>
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 pt-4 border-t border-gray-700"
              >
                <div className="text-xs text-purple-400 mb-1">🗄️ Querying database...</div>
                <div className="text-xs text-gray-500 font-mono">
                  SELECT * FROM users WHERE email = ?
                </div>
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 pt-4 border-t border-gray-700"
              >
                <div className="text-xs text-blue-400 mb-1">⚙️ Processing data...</div>
                <div className="text-xs text-green-400">✓ User created</div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Column 2: Flow Diagram */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="font-bold text-sm">Data Flow</h4>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 border-2 border-purple-500/30 h-[400px] flex items-center justify-center">
            <svg viewBox="0 0 200 380" className="w-full h-full">
              {/* Connections */}
              {step >= 1 && (
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                  x1="100" y1="60" x2="100" y2="90"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                />
              )}
              {step >= 2 && (
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                  x1="100" y1="140" x2="100" y2="170"
                  stroke="#EC4899"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                />
              )}
              {step >= 3 && (
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                  x1="100" y1="220" x2="100" y2="250"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                />
              )}
              {step >= 4 && (
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                  x1="100" y1="300" x2="100" y2="330"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                />
              )}

              {/* Nodes */}
              {steps.map((s, index) => (
                <motion.g
                  key={s.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: step >= index ? 1 : 0.3,
                    scale: step >= index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <circle
                    cx="100"
                    cy={s.y}
                    r="30"
                    fill={s.color}
                    opacity={step >= index ? "1" : "0.3"}
                  />
                  <text
                    x="100"
                    y={s.label.split(' ')[1] ? s.y + 1 : s.y + 4}
                    textAnchor="middle"
                    fill="white"
                    fontSize="9"
                    fontWeight="normal"
                  >
                    {s.label.split(' ')[0]}
                  </text>
                  {s.label.split(' ')[1] && (
                    <text
                      x="100"
                      y={s.y + 12}
                      textAnchor="middle"
                      fill="white"
                      fontSize="9"
                      fontWeight="normal"
                    >
                      {s.label.split(' ')[1]}
                    </text>
                  )}
                </motion.g>
              ))}

              {/* Data packet animation */}
              {step >= 1 && step < 5 && (
                <motion.circle
                  initial={{ cy: 60 }}
                  animate={{ cy: steps[step].y }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  cx="100"
                  r="8"
                  fill="#3B82F6"
                  opacity="0.8"
                />
              )}
            </svg>
          </div>
        </div>

        {/* Column 3: Response */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">3</div>
            <h4 className="font-bold text-sm">API Response</h4>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: step >= 5 ? 1 : 0.3, scale: step >= 5 ? 1 : 0.95 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 dark:bg-black rounded-xl p-4 border-2 border-green-500/50 h-[400px] overflow-hidden"
          >
            <div className="text-xs text-gray-500 mb-2">200 OK</div>
            <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
{`{
  "success": true,
  "status": 200,
  "data": {
    "id": "usr_7xk9mP2q",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2025-12-28T10:30:00Z",
    "verified": true
  },
  "meta": {
    "requestId": "req_abc123",
    "timestamp": 1735382400,
    "processingTime": "45ms"
  }
}`}
            </pre>

            {step >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 pt-4 border-t border-gray-700"
              >
                <div className="text-xs text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Response sent successfully
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BackendTab;
