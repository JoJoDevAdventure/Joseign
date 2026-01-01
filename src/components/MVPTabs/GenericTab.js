import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const GenericTab = ({ tab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-6 mb-8 md:flex-col">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tab.color} flex items-center justify-center flex-shrink-0`}>
          <tab.icon className="text-white text-3xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-3xl md:text-2xl font-black">{tab.title}</h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
              {tab.duration}
            </span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {tab.content.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4 text-primary">Deliverables</h4>
          <ul className="space-y-3">
            {tab.content.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-purple-50/50 dark:from-primary/10 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-primary/20">
          <h4 className="text-lg font-bold mb-4 text-primary">Outcome</h4>
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
            {tab.content.outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GenericTab;
