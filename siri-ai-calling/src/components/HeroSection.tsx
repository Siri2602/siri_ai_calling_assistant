"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CTAButtons from "./CTAButtons";
import StatsSection from "./StatsSection";
import FloatingCards from "./FloatingCards";
import AIMascot from "./AIMascot";

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const mascotX = useTransform(springX, [-1, 1], [-8, 8]);
  const mascotY = useTransform(springY, [-1, 1], [-6, 6]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
      mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ─── LEFT ─── */}
          <motion.div
            variants={stagger.container}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={stagger.item} className="mb-6 inline-flex">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "#A78BFA",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Next-Gen AI Voice Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={stagger.item}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6"
            >
              <span className="text-white">AI Calling</span>
              <br />
              <span className="text-white">Reimagined</span>
              <br />
              <span className="gradient-text">for the Future</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={stagger.item}
              className="text-base lg:text-lg text-[#94A3B8] leading-relaxed max-w-lg mb-8"
            >
              Siri AI Calling Assistant helps businesses automate intelligent
              conversations with human-like AI voice agents, real-time analytics,
              and 24/7 smart communication.
            </motion.p>

            <CTAButtons />
            <StatsSection />

            {/* Social proof */}
            <motion.div
              variants={stagger.item}
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex -space-x-2">
                {["#7C3AED", "#00D4FF", "#A78BFA", "#38BDF8"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#070B14] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#94A3B8]">
                <span className="text-white font-semibold">2,400+</span> businesses trust Siri AI
              </p>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle at 50% 50%, #7C3AED 0%, #00D4FF 50%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />

            {/* Mascot with parallax */}
            <motion.div
              style={{ x: mascotX, y: mascotY }}
              className="relative w-full max-w-md"
            >
            <AIMascot></AIMascot>
              <FloatingCards mouseX={mouseX} mouseY={mouseY} />
            </motion.div>
          </motion.div>
        </div>

        {/* ─── BOTTOM MARQUEE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-24 border-t border-white/5 pt-10"
        >
          <p className="text-center text-xs text-[#94A3B8] uppercase tracking-widest mb-8 font-medium">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 items-center">
            {["Salesforce", "HubSpot", "Twilio", "Zendesk", "Intercom", "Pipedrive"].map((brand) => (
              <span
                key={brand}
                className="text-sm font-semibold text-[#94A3B8]/40 hover:text-[#94A3B8] transition-colors duration-300 cursor-default tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
