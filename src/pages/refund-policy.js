import Head from "next/head";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const RefundPolicy = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | Joseign - Landing Page Development & UI/UX Design</title>
        <meta
          name="description"
          content="Joseign's Refund Policy. Learn about our refund and cancellation terms for landing page development, UI/UX design, and MVP development services."
        />
        <link rel="canonical" href="https://joseign.com/refund-policy" />
        <meta name="robots" content="noindex,follow" />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4">Refund Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: December 28, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">1. Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At Joseign, we are committed to delivering high-quality landing page development, UI/UX design, and MVP development services. This Refund Policy outlines the circumstances under which refunds may be issued.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By engaging our services, you acknowledge and agree to the terms outlined in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">2. Refund Eligibility</h2>
              <h3 className="text-2xl font-semibold mb-3 mt-6">2.1 When Refunds Are Available</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Refunds may be issued under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Project Cancellation Before Work Begins:</strong> Full refund minus a 10% administrative fee if cancelled within 48 hours of payment</li>
                <li><strong>Service Not Delivered:</strong> If we fail to deliver the agreed-upon services within the timeline specified in the project agreement (excluding delays caused by client)</li>
                <li><strong>Major Quality Issues:</strong> If deliverables significantly deviate from the agreed scope and we are unable to rectify them within 14 days</li>
                <li><strong>Force Majeure:</strong> Mutual agreement to terminate due to unforeseen circumstances preventing project completion</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">2.2 When Refunds Are NOT Available</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Change of mind after work has commenced</li>
                <li>Client-caused delays exceeding 30 days</li>
                <li>Dissatisfaction with subjective design preferences (after agreed revision rounds are exhausted)</li>
                <li>Client failure to provide required materials, feedback, or access</li>
                <li>Third-party service failures (hosting, domains, APIs)</li>
                <li>After final deliverables have been accepted and delivered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">3. Refund Calculation by Project Stage</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you cancel a project after work has begun, refunds are calculated based on completed work:
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-3">Discovery & Planning Stage (0-20% Complete)</h3>
                <p className="text-gray-700 dark:text-gray-300">Refund: 70% of total project cost</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Includes initial consultations, research, and project scoping</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-3">Design Phase (20-50% Complete)</h3>
                <p className="text-gray-700 dark:text-gray-300">Refund: 50% of total project cost</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Includes wireframes, mockups, and initial design iterations</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-3">Development Phase (50-80% Complete)</h3>
                <p className="text-gray-700 dark:text-gray-300">Refund: 30% of total project cost</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Includes frontend/backend development, integrations, and testing</p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-3">Final Review & Delivery (80-100% Complete)</h3>
                <p className="text-gray-700 dark:text-gray-300">Refund: No refund available</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Project is substantially complete and ready for delivery</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">4. Non-Refundable Items</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The following costs are non-refundable under any circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Initial Deposits:</strong> 10% administrative fee on all upfront payments</li>
                <li><strong>Third-Party Costs:</strong> Domain registrations, hosting setup fees, premium plugins, stock assets, API fees</li>
                <li><strong>Completed Work:</strong> Any work that has been delivered, reviewed, and approved by the client</li>
                <li><strong>Consultation Fees:</strong> Discovery calls, strategy sessions, and consulting hours</li>
                <li><strong>Rush Fees:</strong> Any expedited delivery charges paid for accelerated timelines</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">5. Refund Request Process</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To request a refund, follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Submit a Written Request:</strong> Email{" "}
                  <a href="mailto:hello@joseign.com" className="text-primary hover:underline">hello@joseign.com</a>{" "}
                  with &quot;Refund Request&quot; in the subject line
                </li>
                <li>
                  <strong>Include Required Information:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Project name and agreement reference number</li>
                    <li>Reason for refund request</li>
                    <li>Supporting documentation (if applicable)</li>
                    <li>Original payment receipt</li>
                  </ul>
                </li>
                <li>
                  <strong>Review Period:</strong> We will review your request within 5 business days and respond with a decision
                </li>
                <li>
                  <strong>Approval & Processing:</strong> If approved, refunds will be processed within 10 business days to the original payment method
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">6. Payment Method-Specific Refund Times</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Credit/Debit Card (Stripe):</strong> 5-10 business days</li>
                <li><strong>PayPal:</strong> 3-5 business days</li>
                <li><strong>Bank Transfer:</strong> 7-14 business days</li>
                <li><strong>Cryptocurrency:</strong> 24-48 hours (subject to network confirmation times)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Note: Processing times may vary depending on your financial institution. Refunds are always issued in the original currency paid.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">7. Partial Deliverables</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you cancel mid-project and receive a partial refund, you may be entitled to receive completed work up to the cancellation point:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Design files (Figma, Sketch, Adobe XD) for completed design phases</li>
                <li>Source code for completed development work</li>
                <li>Documentation and assets created to date</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                However, you will NOT receive ownership of incomplete or work-in-progress files until the refund is processed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">8. Quality Guarantee</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We stand behind the quality of our work. If you are unsatisfied with the final deliverables:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Report Issues:</strong> Notify us within 7 days of delivery with specific concerns</li>
                <li><strong>Revision Opportunity:</strong> We will offer one additional revision round at no extra cost</li>
                <li><strong>Refund Consideration:</strong> If issues persist and are deemed valid, we will issue a partial refund (10-30% depending on severity)</li>
              </ol>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                This guarantee applies only to objective defects (broken functionality, missing features from scope) and not subjective design preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">9. Monthly Retainers</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For ongoing monthly retainer agreements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Cancellation Notice:</strong> 30 days&apos; written notice required</li>
                <li><strong>Current Month:</strong> No refund for the current billing period</li>
                <li><strong>Unused Hours:</strong> Unused hours do not roll over and are non-refundable</li>
                <li><strong>Early Termination:</strong> If you terminate before the minimum commitment period (typically 3 months), no refund will be issued for months already paid</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you disagree with our refund decision:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Contact us to discuss your concerns in detail</li>
                <li>We will escalate to senior management for review</li>
                <li>If still unresolved, both parties agree to mediation before pursuing legal action</li>
                <li>Disputes will be governed by the laws of the United Kingdom</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">11. Chargebacks</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Important:</strong> Initiating a chargeback without first contacting us may result in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Immediate suspension of all services</li>
                <li>Termination of project and forfeiture of all work</li>
                <li>Legal action to recover costs and damages</li>
                <li>Reporting to credit agencies and payment processors</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                We encourage you to contact us directly to resolve any billing disputes before filing a chargeback.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to update this Refund Policy at any time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Existing projects will be governed by the policy in effect at the time of agreement signing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">13. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For refund requests or questions about this policy, contact us:
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

export default RefundPolicy;
