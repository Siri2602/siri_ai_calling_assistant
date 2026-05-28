"use client";

import { motion } from "framer-motion";

export default function CTAButtons() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      {/* Primary CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          alert("AI Calling Started");
        }}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-white"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
          backgroundSize: "200% 200%",
          boxShadow: "0 0 24px rgba(124,58,237,0.4)",
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          🚀 Start Calling
        </span>
        {/* Shimmer Effect */}
        <span className="absolute inset-0 translate-x-[-100%] bg-white/20 skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-[200%]" />
      </motion.button>

      {/* Secondary CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          window.open("https://youtube.com", "_blank");
        }}
        className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm group"
        style={{
          background: "rgba(15,23,42,0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,212,255,0.3)",
          boxShadow: "0 0 16px rgba(0,212,255,0.1)",
        }}
      >
        {/* Play icon */}
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(0,212,255,0.2)",
            border: "1px solid rgba(0,212,255,0.4)",
          }}
        >
          <svg
            className="w-3 h-3 text-cyan-400 ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>

        Watch Demo

        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "rgba(0,212,255,0.05)",
          }}
        />
      </motion.button>
    </motion.div>
  );
}