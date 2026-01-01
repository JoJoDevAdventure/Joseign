import Head from "next/head";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Joseign - Landing Page Development & UI/UX Design</title>
        <meta
          name="description"
          content="Joseign's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our landing page development and UI/UX design services."
        />
        <link rel="canonical" href="https://joseign.com/privacy-policy" />
        <meta name="robots" content="noindex,follow" />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-24 md:py-20 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last Updated: December 28, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Joseign ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                <Link href="/" className="text-primary hover:underline">joseign.com</Link> or use our services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>

              <h3 className="text-2xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When you interact with our services, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                <li><strong>Account Information:</strong> Username, password (encrypted), profile details</li>
                <li><strong>Project Information:</strong> Details about your project requirements, business goals, design preferences</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
                <li><strong>Communication Data:</strong> Messages, emails, feedback you send to us</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, scroll depth, referral source</li>
                <li><strong>Analytics Data:</strong> We use Google Analytics and Vercel Analytics to understand user behavior</li>
                <li><strong>Cookies:</strong> Session cookies, preference cookies, analytics cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Delivery:</strong> To provide landing page development, UI/UX design, and MVP development services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send project updates, and provide customer support</li>
                <li><strong>Billing:</strong> To process payments and maintain billing records</li>
                <li><strong>Improvement:</strong> To improve our services, website functionality, and user experience</li>
                <li><strong>Marketing:</strong> To send newsletters, promotional materials (with your consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and resolve disputes</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">4. How We Share Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Providers:</strong> Payment processors (Stripe, PayPal), email services (Mailchimp), analytics providers (Google Analytics, Vercel)</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale, your information may be transferred</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulations</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:hello@joseign.com" className="text-primary hover:underline">hello@joseign.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to improve your experience. You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
              <h3 className="text-2xl font-semibold mb-3 mt-6">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Track usage patterns and performance (Google Analytics, Vercel Analytics)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">8. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our website may contain links to third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Cal.com (booking system)</li>
                <li>Google Analytics</li>
                <li>Vercel Analytics</li>
                <li>WhatsApp Business</li>
                <li>Social media platforms (LinkedIn, Instagram, X/Twitter)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                These services have their own privacy policies. We are not responsible for their privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">9. Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to provide services and comply with legal obligations. When you request deletion, we will remove your data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover we have collected information from a child, we will delete it immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">11. International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">13. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, contact us:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300"><strong>Joseign</strong></p>
                <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:hello@joseign.com" className="text-primary hover:underline">hello@joseign.com</a></p>
                <p className="text-gray-700 dark:text-gray-300">Phone: <a href="tel:+447783517481" className="text-primary hover:underline">+44 778 351 7481</a></p>
                <p className="text-gray-700 dark:text-gray-300">WhatsApp: <a href="https://wa.me/447783517481" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">+44 778 351 7481</a></p>
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

export default PrivacyPolicy;
