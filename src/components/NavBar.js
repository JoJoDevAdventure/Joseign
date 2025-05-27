import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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

  return (
    <header className="relative w-full bg-[#F8F8F8] px-32 md:px-8 py-8 flex items-center justify-between z-10 ">
      {/* Placeholder for Logo */}
      <div className="w-[120px]">
        <img
          src="/joseign-logo.png"
          alt="Joseign Logo"
          className="w-full h-auto"
        />
      </div>

      {/* Desktop Nav Links */}
      <nav className="flex md:hidden gap-12 text-[18px] font-medium text-black">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/testimonials" title="Testimonials" />
        <CustomLink href="https://blog.joesign.com" title="Blog" />
      </nav>

      {/* Right Call-to-Action Button */}
      <div className="block md:hidden">
        <button className="bg-[#333] text-white text-sm font-medium px-5 py-2 rounded-md">
          Free Call
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F8F8F8] flex flex-col items-center gap-6 py-8 md:hidden">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/testimonials" title="Testimonials" />
          <CustomLink href="https://blog.joesign.com" title="Blog" />
          <button className="bg-[#333] text-white text-sm font-medium px-5 py-2 rounded-md mt-4">
            Free Call
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
