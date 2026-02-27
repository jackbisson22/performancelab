import { useState } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="Performance Lab Logo" className="h-10 w-auto" />
            <span className="text-white text-xl font-bold tracking-wide">
              Performance<span className="text-green-400">Lab</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-gray-300 hover:text-white transition"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </a>
            <a
              href="#location"
              className="text-gray-300 hover:text-white transition"
            >
              Location
            </a>
            <a
              href="#booking"
              className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold transition"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a href="#hero" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#location" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white">
              Location
            </a>
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="text-center px-5 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;