import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../public/Joseign-logo.png";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "joseign-free-call" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: true,
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
      <nav className="flex md:hidden gap-12 text-[18px] font-medium text-black">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/testimonials" title="Testimonials" />
        <a
          href="https://blog.joseign.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          Blog
          <span className="h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">
            &nbsp;
          </span>
        </a>
      </nav>

      {/* Right Call-to-Action Button */}
      <div className="block md:hidden">
        <button
          className="animated-gradient text-white text-l font-medium px-5 py-2 rounded-md"
          data-cal-namespace="joseign-free-call"
          data-cal-link="joseph-bouhlel/joseign-free-call"
          data-cal-config='{"layout":"month_view","theme":"light"}'
        >
          Book Free Call
        </button>
      </div>

      {/* Burger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex flex-col items-center justify-center"
      >
        <span className="w-6 h-0.5 bg-black mb-1"></span>
        <span className="w-6 h-0.5 bg-black mb-1"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Menu - Animated Side Panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-3/4 h-screen bg-[#F8F8F8] z-40 flex flex-col items-start px-8 py-10 gap-6 shadow-lg"
      >
        <div className="w-[120px]">
          <Image
            src={Logo}
            alt="Joseign Logo"
            className="w-full h-auto"
            priority
          />
        </div>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/testimonials" title="Testimonials" />
        <a
          href="https://blog.joseign.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          Blog
          <span className="h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">
            &nbsp;
          </span>
        </a>
        <button
          className="animated-gradient text-white text-l font-medium px-5 py-2 rounded-md"
          data-cal-namespace="joseign-free-call"
          data-cal-link="joseph-bouhlel/joseign-free-call"
          data-cal-config='{"layout":"month_view","theme":"light"}'
        >
          Book Free Call
        </button>
      </motion.div>
    </header>
  );
};

export default NavBar;
