import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Joseign-logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light bg-white dark:bg-dark">
      <div className="w-full px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 py-12 md:py-10 sm:py-8">
        <div className="grid grid-cols-12 gap-8 md:grid-cols-1 md:gap-6">
          {/* Left Side - Logo & Tagline */}
          <div className="col-span-4 md:col-span-1 flex flex-col gap-4">
            <Link href="/">
              <Image src={logo} alt="Joseign - Landing Page Development, UI/UX Design & MVP Development for SaaS" width={80} height={80} className="rounded-md" />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Landing Page Development, UI/UX Design & End-to-End MVPs for SaaS Startups.
            </p>
          </div>

          {/* Right Side - Links */}
          <div className="col-span-8 md:col-span-1 grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1 sm:gap-6">
            {/* Services */}
            <div>
              <h3 className="text-sm font-bold text-dark dark:text-light uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/landing-page-design" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Landing Page Development
                  </Link>
                </li>
                <li>
                  <Link href="/ui-ux-design-saas" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/mvp-design-development" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    End-to-End MVP
                  </Link>
                </li>
                <li>
                  <Link href="/ui-ux-design-saas" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    UX Prototyping
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold text-dark dark:text-light uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/bookme" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold text-dark dark:text-light uppercase mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap.xml" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center md:flex-col md:gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} &copy; Joseign. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer