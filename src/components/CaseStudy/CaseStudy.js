import { motion } from 'framer-motion';
import CallToActionSection from './CallToActionSection';
import ClientInfo from './ClientInfo';
import ExecutionSection from './ExecutionSection';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import QuickFacts from './QuickFacts';
import ResultsSection from './ResultsSection';
import StrategySection from './StrategySection';
import TestimonialSection from './TestimonialSection';

const CaseStudy = ({ caseStudy }) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative scrollbar-hide">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full overflow-y-scroll scrollbar-hide overflow-hidden"
      >
        <HeroSection hero={caseStudy.hero} />
        <ClientInfo client={caseStudy.client} />
        <QuickFacts quickFacts={caseStudy.quickFacts} />
        <ProblemSection problem={caseStudy.problem} />
        <StrategySection strategy={caseStudy.strategy} />
        <ExecutionSection execution={caseStudy.execution} />
        <ResultsSection results={caseStudy.results} />
        <TestimonialSection testimonial={caseStudy.testimonial} />
        <CallToActionSection callToAction={caseStudy.callToAction} />
      </motion.div>
    </div>
  );
};

export default CaseStudy;