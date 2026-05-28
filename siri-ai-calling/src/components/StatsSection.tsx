"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Calls Automated", icon: "📞", color: "#00D4FF" },
  { value: "98%", label: "Accuracy Rate", icon: "🎯", color: "#7C3AED" },
  { value: "24/7", label: "AI Support", icon: "⚡", color: "#00D4FF" },
];

export default function StatsSection() {
  return (
    <motion.div
      className="flex flex-wrap gap-5 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{
            background: "rgba(15,23,42,0.5)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${stat.color}20`,
          }}
        >
          <span className="text-lg">{stat.icon}</span>
          <div>
            <p
              className="font-bold text-base leading-none"
              style={{ color: stat.color, textShadow: `0 0 12px ${stat.color}` }}
            >
              {stat.value}
            </p>
            <p className="text-[11px] text-[#94A3B8] mt-0.5">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
