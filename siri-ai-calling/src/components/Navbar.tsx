"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Features", "Solutions", "Pricing", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[#070B14]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2.5 cursor-pointer"
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#00D4FF] opacity-80" />
            <div className="absolute inset-[2px] rounded-full bg-[#070B14] flex items-center justify-center">
              <span className="text-xs font-bold text-transparent bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] bg-clip-text">S</span>
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="text-white">Siri</span>
            <span className="gradient-text-cyan"> AI</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:flex items-center gap-3"
        >
          <a href="#" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
            Sign in
          </a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="animated-border px-5 py-2 rounded-full text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(0,212,255,0.1))",
              boxShadow: "0 0 20px rgba(124,58,237,0.3)",
            }}
          >
            Login Free
          </motion.a>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 px-6 pb-6"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block py-3 text-[#94A3B8] hover:text-white border-b border-white/5 text-sm"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 block text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #00D4FF)",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}
            >
              Login Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
