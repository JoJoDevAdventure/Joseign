import Head from "next/head";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Joseign - Landing Page Development & UI/UX Design</title>
        <meta
          name="description"
          content="Joseign's Terms and Conditions. Read our service agreement for landing page development, UI/UX design, and MVP development services."
        />
        <link rel="canonical" href="https://joseign.com/terms-and-conditions" />
        <meta name="robots" content="noindex,follow" />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: December 28, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By accessing or using Joseign's services ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these Terms, you may not use our Services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms apply to all users of the Services, including visitors, customers, and clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">2. Services Offered</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Joseign provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Landing Page Development:</strong> Design and development of high-converting landing pages for SaaS companies</li>
                <li><strong>UI/UX Design:</strong> User interface and user experience design for web and mobile applications</li>
                <li><strong>End-to-End MVP Development:</strong> Full-stack product design and development from concept to launch</li>
                <li><strong>UX Prototyping:</strong> Interactive prototypes and wireframes for user testing</li>
                <li><strong>Design Systems:</strong> Component libraries and design standards for scalable products</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">3. Service Engagement Process</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">3.1 Project Proposal</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                All projects begin with a discovery call to understand your requirements. We will then provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Detailed project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Terms specific to your project</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">3.2 Project Agreement</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Once you accept the proposal, we will send a formal project agreement. Work begins only after you sign the agreement and make the initial payment (typically 50% upfront for projects over $5,000).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">4. Payment Terms</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Pricing</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                All prices are quoted in USD unless otherwise specified. Prices are subject to change but will be honored for signed agreements.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Payment Schedule</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Projects under $5,000:</strong> 100% upfront payment required</li>
                <li><strong>Projects $5,000 - $15,000:</strong> 50% upfront, 50% upon completion</li>
                <li><strong>Projects over $15,000:</strong> Custom payment milestones defined in project agreement</li>
                <li><strong>Monthly Retainers:</strong> Payment due on the 1st of each month</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.3 Late Payments</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Invoices are due within 7 days of issuance. Late payments may incur a 5% late fee and result in project suspension until payment is received.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">4.4 Payment Methods</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We accept payments via Stripe, PayPal, bank transfer, and cryptocurrency (Bitcoin, USDT). Payment processing fees may apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">5. Project Timeline & Deliverables</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">5.1 Timeline</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Project timelines are estimates based on scope and client responsiveness. Delays caused by client feedback, scope changes, or third-party dependencies may extend deadlines.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.2 Client Responsibilities</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To meet deadlines, clients must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide timely feedback (within 3 business days for design reviews)</li>
                <li>Supply all required assets (logos, content, images)</li>
                <li>Grant necessary access (hosting, domains, APIs)</li>
                <li>Assign a single point of contact for decisions</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">5.3 Revisions</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Each project includes a specified number of revision rounds (typically 2-3). Additional revisions beyond the agreed scope will be billed at our hourly rate ($150/hour).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">6. Intellectual Property Rights</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">6.1 Client Ownership</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Upon full payment, you own the final deliverables created specifically for your project, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Design files (Figma, Sketch, Adobe XD)</li>
                <li>Source code (HTML, CSS, JavaScript, React, etc.)</li>
                <li>Custom graphics and illustrations</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">6.2 Joseign Ownership</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We retain ownership of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Pre-existing code libraries, frameworks, and tools</li>
                <li>Design templates and components used across multiple clients</li>
                <li>Portfolio rights (see Section 6.3)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">6.3 Portfolio Use</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to showcase your project in our portfolio, case studies, and marketing materials unless you explicitly request confidentiality in writing.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">6.4 Third-Party Assets</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are responsible for obtaining licenses for any third-party assets (fonts, stock photos, plugins) used in your project unless otherwise agreed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">7. Confidentiality</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We treat all client information as confidential and will not disclose it to third parties except:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>With your written consent</li>
                <li>To service providers necessary for project delivery (hosting, payment processors)</li>
                <li>As required by law or legal process</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                For additional confidentiality, we can sign a mutual NDA upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">8. Warranties & Disclaimers</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">8.1 Quality Guarantee</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We guarantee our work will be of professional quality and meet the specifications outlined in the project agreement. We will fix any defects or errors in deliverables within 30 days of delivery at no additional cost.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">8.2 No Warranty on Results</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                While we design for optimal performance and conversion, we do not guarantee specific business results, traffic, revenue, or user acquisition outcomes.
              </p>

              <h3 className="text-2xl font-semibold mb-3 mt-6">8.3 Third-Party Services</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are not responsible for third-party services (hosting, domains, APIs, payment processors) and their availability, security, or performance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To the fullest extent permitted by law, Joseign's total liability shall not exceed the amount paid by the client for the specific project in question.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are not liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">10. Termination</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">10.1 Termination by Client</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You may terminate the project at any time with 7 days' written notice. You will be billed for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>All work completed to date</li>
                <li>Non-refundable upfront deposit</li>
                <li>Any third-party costs incurred</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">10.2 Termination by Joseign</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may terminate the agreement if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Client fails to make payment within 14 days of the due date</li>
                <li>Client breaches these Terms</li>
                <li>Client is unresponsive for more than 30 days</li>
                <li>Project requirements violate laws or ethical standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">11. Refund Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Please refer to our separate{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>{" "}
                for detailed information on refunds and cancellations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">12. Dispute Resolution</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In the event of a dispute, both parties agree to:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>First attempt to resolve the issue through good-faith negotiation</li>
                <li>If unresolved, engage in mediation before pursuing legal action</li>
                <li>Any legal proceedings shall be governed by the laws of the United Kingdom</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of our Services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For questions about these Terms, contact us:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300"><strong>Joseign</strong></p>
                <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:hello@joseign.com" className="text-primary hover:underline">hello@joseign.com</a></p>
                <p className="text-gray-700 dark:text-gray-300">Phone: <a href="tel:+447783517481" className="text-primary hover:underline">+44 778 351 7481</a></p>
                <p className="text-gray-700 dark:text-gray-300">Website: <Link href="/" className="text-primary hover:underline">joseign.com</Link></p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsAndConditions;
