import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";

const DiscoveryTab = () => {
  const [discoveryInput, setDiscoveryInput] = useState("");
  const [showSubmitCursor, setShowSubmitCursor] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showUserFlow, setShowUserFlow] = useState(false);
  const [userFlowText, setUserFlowText] = useState("");
  const [showDiagram, setShowDiagram] = useState(false);

  useEffect(() => {
    // Reset all states
    setDiscoveryInput("");
    setShowSubmitCursor(false);
    setIsSubmitting(false);
    setShowUserFlow(false);
    setUserFlowText("");
    setShowDiagram(false);

    const inputText = "I want my MVP to process AI-powered invoice extraction and auto-match payments to customer accounts in real-time...";
    const userFlowContent = `USER FLOW: AI Invoice Processing

1. UPLOAD & DETECTION
   - User uploads invoice (PDF/Image)
   - AI extracts: vendor, amount, date, line items
   - Confidence score displayed (95%+)

2. SMART MATCHING
   - System searches customer database
   - Matches by: email, company name, reference #
   - Shows top 3 potential matches with %

3. PAYMENT PROCESSING
   - User confirms match or selects manually
   - Stripe processes payment instantly
   - Real-time balance update

4. CONFIRMATION & TRACKING
   - Email sent to customer with receipt
   - Invoice marked as "Paid" in dashboard
   - Audit trail created for accounting`;

    // Step 1: Type the input text
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= inputText.length) {
        setDiscoveryInput(inputText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Step 2: Show cursor on submit button
        setTimeout(() => {
          setShowSubmitCursor(true);
          // Step 3: Click submit button
          setTimeout(() => {
            setShowSubmitCursor(false);
            setIsSubmitting(true);
            // Step 4: Show user flow after loading
            setTimeout(() => {
              setIsSubmitting(false);
              setShowUserFlow(true);
              // Step 5: Type user flow text
              let flowIndex = 0;
              const flowTyping = setInterval(() => {
                if (flowIndex <= userFlowContent.length) {
                  setUserFlowText(userFlowContent.slice(0, flowIndex));
                  flowIndex += 2; // Type faster for code
                } else {
                  clearInterval(flowTyping);
                  // Step 6: Show diagram
                  setTimeout(() => {
                    setShowDiagram(true);
                  }, 500);
                }
              }, 20);
            }, 1500);
          }, 1000);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-6 mb-8 md:flex-col">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <FaLightbulb className="text-white text-3xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-3xl md:text-2xl font-black">Discovery & UX Flows</h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
              Week 1
            </span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-left mb-6">
            Watch how we transform your idea into a detailed user flow in real-time
          </p>
        </div>
      </div>

      {/* 3-Column Interactive Demo */}
      <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
        {/* Column 1: Input */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">1</div>
            <h4 className="font-bold text-sm">Your Idea</h4>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border-2 border-gray-200 dark:border-gray-700">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Describe your MVP concept
            </label>
            <textarea
              readOnly
              value={discoveryInput}
              className="w-full bg-white dark:bg-gray-800 rounded-lg p-3 text-sm border border-gray-300 dark:border-gray-600 min-h-[120px] resize-none font-mono"
              placeholder="Type your idea here..."
            />
            <div className="relative mt-3">
              <button
                disabled
                className={`w-full py-2 rounded-lg font-semibold text-sm transition-all ${
                  isSubmitting
                    ? 'bg-primary/50 text-white'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Analyzing...
                  </span>
                ) : (
                  'Generate Flow'
                )}
              </button>
              {showSubmitCursor && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <MousePointer2 className="w-6 h-6 text-gray-800 dark:text-white" />
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Column 2: User Flow Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: showUserFlow ? 1 : 0, x: showUserFlow ? 0 : 20 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">2</div>
            <h4 className="font-bold text-sm">Detailed Flow</h4>
          </div>
          <div className="bg-gray-900 dark:bg-black rounded-xl p-4 border-2 border-gray-700 h-[300px] overflow-y-auto">
            <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap leading-relaxed">
              {userFlowText}
              {showUserFlow && userFlowText.length < 400 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-green-400 ml-1"
                />
              )}
            </pre>
          </div>
        </motion.div>

        {/* Column 3: Mermaid Diagram */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: showDiagram ? 1 : 0, x: showDiagram ? 0 : 20 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-sm">3</div>
            <h4 className="font-bold text-sm">Visual Diagram</h4>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 border-2 border-primary/30 min-h-[300px] flex items-center justify-center">
            {showDiagram && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <svg viewBox="0 0 300 400" className="w-full h-auto">
                  {/* Upload Node */}
                  <motion.g
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <rect x="75" y="10" width="150" height="50" rx="8" fill="#3B82F6" />
                    <text x="150" y="40" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Upload Invoice</text>
                  </motion.g>

                  {/* Arrow 1 */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    d="M 150 60 L 150 90"
                    stroke="#C94694"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />

                  {/* AI Extract Node */}
                  <motion.g
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <rect x="75" y="90" width="150" height="50" rx="8" fill="#8B5CF6" />
                    <text x="150" y="120" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AI Extraction</text>
                  </motion.g>

                  {/* Arrow 2 */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    d="M 150 140 L 150 170"
                    stroke="#C94694"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Smart Match Node */}
                  <motion.g
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <rect x="75" y="170" width="150" height="50" rx="8" fill="#EC4899" />
                    <text x="150" y="200" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Smart Matching</text>
                  </motion.g>

                  {/* Arrow 3 */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                    d="M 150 220 L 150 250"
                    stroke="#C94694"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Payment Node */}
                  <motion.g
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <rect x="75" y="250" width="150" height="50" rx="8" fill="#10B981" />
                    <text x="150" y="280" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Process Payment</text>
                  </motion.g>

                  {/* Arrow 4 */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.3 }}
                    d="M 150 300 L 150 330"
                    stroke="#C94694"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Confirmation Node */}
                  <motion.g
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                  >
                    <rect x="75" y="330" width="150" height="50" rx="8" fill="#F59E0B" />
                    <text x="150" y="360" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Confirmation</text>
                  </motion.g>

                  {/* Arrow marker definition */}
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="6"
                      markerHeight="6"
                      refX="3"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 6 3, 0 6" fill="#C94694" />
                    </marker>
                  </defs>
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DiscoveryTab;
