import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../public/Joseign-logo.png";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`} onClick={onClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const services = [
  { name: "Landing Page Development", href: "/landing-page-design" },
  { name: "UI/UX Design", href: "/ui-ux-design-saas" },
  { name: "MVP Development", href: "/mvp-design-development" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full px-32 md:px-8 py-8 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-[#F8F8F8]"
      }`}
    >
      {/* Placeholder for Logo */}
      <div className="w-[120px]">
        <Image
          src={Logo}
          alt="Joseign Logo"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Desktop Nav Links */}
      <nav className="flex md:hidden gap-12 text-[18px] font-medium text-black items-center">
        <CustomLink href="/" title="Home" />

        {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="relative flex items-center gap-1">
            Services
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 transition-[width] ease duration-300 ${servicesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}>
              &nbsp;
            </span>
          </button>

          {/* Dropdown Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: servicesOpen ? 1 : 0,
              y: servicesOpen ? 0 : -10,
              pointerEvents: servicesOpen ? 'auto' : 'none'
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border-2 border-primary/20 overflow-hidden"
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block px-6 py-3 hover:bg-primary hover:text-white transition-all duration-200 border-b border-gray-100 last:border-b-0"
              >
                {service.name}
              </Link>
            ))}
          </motion.div>
        </div>

        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/pricing" title="Pricing" />
        <CustomLink href="/testimonials" title="Testimonials" />
      </nav>

      {/* Right Call-to-Action Button */}
      <div className="block md:hidden">
        <button
          className="animated-gradient text-white text-l font-medium px-5 py-2 rounded-md"
          data-cal-namespace="discovery"
          data-cal-link="joseign/discovery"
          data-cal-config='{"layout":"month_view"}'
        >
          Book Free Call
        </button>
      </div>

      {/* Burger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex flex-col items-center justify-center w-8 h-8 relative"
      >
        <span
          className={`w-6 h-0.5 bg-black absolute transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black absolute transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black absolute transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        ></span>
      </button>

      {/* Mobile Menu - Animated Side Panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-3/4 h-screen bg-[#F8F8F8] z-40 flex flex-col items-start px-8 py-10 gap-6 shadow-lg overflow-y-auto"
      >
        <div className="w-[120px]">
          <Image
            src={Logo}
            alt="Joseign Logo"
            className="w-full h-auto"
            priority
          />
        </div>
        <CustomLink href="/" title="Home" onClick={() => setIsOpen(false)} />

        {/* Mobile Services Dropdown */}
        <div className="w-full">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-2 font-medium text-[18px] w-full"
          >
            Services
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: servicesOpen ? 'auto' : 0,
              opacity: servicesOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 pl-4 pt-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 text-[16px]"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <CustomLink href="/projects" title="Projects" onClick={() => setIsOpen(false)} />
        <CustomLink href="/pricing" title="Pricing" onClick={() => setIsOpen(false)} />
        <CustomLink href="/testimonials" title="Testimonials" onClick={() => setIsOpen(false)} />

        <button
          className="animated-gradient text-white text-l font-medium px-5 py-2 rounded-md mt-4"
          data-cal-namespace="discovery"
          data-cal-link="joseign/discovery"
          data-cal-config='{"layout":"month_view"}'
        >
          Book Free Call
        </button>
      </motion.div>
    </header>
  );
};

export default NavBar;
