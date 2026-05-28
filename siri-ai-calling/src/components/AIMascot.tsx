"use client";

import { motion } from "framer-motion";

export default function AIMascot() {
  return (
    <motion.div
      className="relative w-full flex items-center justify-center"
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Glow base */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-10 rounded-full opacity-30"
        style={{
          background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <svg
        viewBox="0 0 320 400"
        className="w-full max-w-[320px] h-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="helmetGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="70%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#070B14" />
          </radialGradient>
          <radialGradient id="visorGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#070B14" stopOpacity="0.9" />
          </radialGradient>
          <radialGradient id="bodyGrad" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </radialGradient>
          <radialGradient id="glowCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* ---- BODY ---- */}
        {/* Torso */}
        <rect x="90" y="200" width="140" height="120" rx="20" fill="url(#bodyGrad)" stroke="url(#borderGrad)" strokeWidth="1.5" />
        {/* Chest panel */}
        <rect x="110" y="218" width="100" height="60" rx="10" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
        {/* Chest core */}
        <circle cx="160" cy="248" r="18" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
        <circle cx="160" cy="248" r="10" fill="url(#glowCore)" opacity="0.9" filter="url(#glow)" />
        <circle cx="160" cy="248" r="5" fill="#fff" opacity="0.9" filter="url(#glow)" />
        {/* Chest dots */}
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={126 + i * 24} cy="294" r="4" fill="rgba(0,212,255,0.6)" filter="url(#glow)" />
        ))}
        {/* Shoulder pads */}
        <ellipse cx="90" cy="218" rx="22" ry="14" fill="#1E293B" stroke="url(#borderGrad)" strokeWidth="1.5" />
        <ellipse cx="230" cy="218" rx="22" ry="14" fill="#1E293B" stroke="url(#borderGrad)" strokeWidth="1.5" />

        {/* Left arm */}
        <rect x="52" y="215" width="36" height="90" rx="14" fill="url(#armGrad)" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
        {/* Left hand */}
        <ellipse cx="70" cy="312" rx="18" ry="12" fill="#1E293B" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />

        {/* Right arm */}
        <rect x="232" y="215" width="36" height="90" rx="14" fill="url(#armGrad)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
        {/* Right hand */}
        <ellipse cx="250" cy="312" rx="18" ry="12" fill="#1E293B" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />

        {/* Waist / belt */}
        <rect x="95" y="310" width="130" height="22" rx="8" fill="#0F172A" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
        {/* Belt accent */}
        <rect x="148" y="314" width="24" height="14" rx="4" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />

        {/* Legs */}
        <rect x="105" y="330" width="48" height="55" rx="12" fill="#0F172A" stroke="rgba(124,58,237,0.25)" strokeWidth="1" />
        <rect x="167" y="330" width="48" height="55" rx="12" fill="#0F172A" stroke="rgba(0,212,255,0.25)" strokeWidth="1" />
        {/* Feet */}
        <ellipse cx="129" cy="385" rx="26" ry="10" fill="#1E293B" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
        <ellipse cx="191" cy="385" rx="26" ry="10" fill="#1E293B" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />

        {/* ---- NECK ---- */}
        <rect x="145" y="180" width="30" height="24" rx="8" fill="#1E293B" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />

        {/* ---- HELMET ---- */}
        <ellipse cx="160" cy="130" rx="78" ry="82" fill="url(#helmetGrad)" stroke="url(#borderGrad)" strokeWidth="2" />
        {/* Helmet top antenna */}
        <rect x="156" y="50" width="8" height="20" rx="4" fill="#1E293B" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
        <circle cx="160" cy="48" r="6" fill="#00D4FF" filter="url(#glow)" />

        {/* Visor */}
        <ellipse cx="160" cy="128" rx="54" ry="54" fill="url(#visorGrad)" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5" />
        {/* Visor shine */}
        <ellipse cx="145" cy="108" rx="18" ry="12" fill="rgba(255,255,255,0.06)" transform="rotate(-20,145,108)" />

        {/* Eyes */}
        <g filter="url(#glow)">
          <ellipse cx="143" cy="128" rx="13" ry="10" fill="#00D4FF" opacity="0.9" />
          <ellipse cx="177" cy="128" rx="13" ry="10" fill="#00D4FF" opacity="0.9" />
          <ellipse cx="143" cy="128" rx="7" ry="6" fill="#fff" />
          <ellipse cx="177" cy="128" rx="7" ry="6" fill="#fff" />
          <circle cx="145" cy="127" r="3" fill="#0F172A" />
          <circle cx="179" cy="127" r="3" fill="#0F172A" />
          <circle cx="146" cy="126" r="1.2" fill="#fff" />
          <circle cx="180" cy="126" r="1.2" fill="#fff" />
        </g>

        {/* Mouth / speaker bar */}
        <rect x="143" y="150" width="34" height="6" rx="3" fill="rgba(0,212,255,0.5)" filter="url(#glow)" />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={144 + i * 8}
            y={151}
            width="5"
            height="4"
            rx="2"
            fill="#00D4FF"
            opacity={0.6 + i * 0.1}
            filter="url(#glow)"
          />
        ))}

        {/* Helmet side details */}
        <circle cx="86" cy="130" r="8" fill="#1E293B" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
        <circle cx="234" cy="130" r="8" fill="#1E293B" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />

        {/* Floating rings around helmet */}
        <ellipse cx="160" cy="130" rx="90" ry="20" fill="none" stroke="url(#borderGrad)" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
      </svg>

      {/* Orbit ring animated */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-56 h-20 rounded-full border border-dashed opacity-20"
          style={{ borderColor: "#00D4FF" }}
        />
      </motion.div>

      {/* Pulse ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        style={{ border: "1px solid rgba(124,58,237,0.6)" }}
      />
    </motion.div>
  );
}
