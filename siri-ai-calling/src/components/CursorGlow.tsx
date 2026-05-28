"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const trailX = useSpring(cursorX, { damping: 40, stiffness: 100 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-64 h-64 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.8) 0%, rgba(124,58,237,0.4) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Sharp cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-3 h-3 rounded-full bg-cyan-400 glow-cyan" />
      </motion.div>

      {/* Ring cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-cyan-400/50"
          style={{ boxShadow: "0 0 10px rgba(0,212,255,0.3)" }}
        />
      </motion.div>
    </>
  );
}
