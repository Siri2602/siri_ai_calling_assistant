"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

const cards = [
  {
    id: 1,
    icon: "🎙️",
    label: "AI Voice Active",
    value: "Live",
    color: "#00D4FF",
    position: "top-4 -left-8 md:-left-20",
    delay: 0,
    floatDuration: 3.5,
  },
  {
    id: 2,
    icon: "⚡",
    label: "Smart Automation",
    value: "99.2%",
    color: "#7C3AED",
    position: "top-1/3 -right-6 md:-right-16",
    delay: 0.8,
    floatDuration: 4.2,
  },
  {
    id: 3,
    icon: "📊",
    label: "Real-time Analytics",
    value: "24ms",
    color: "#00D4FF",
    position: "bottom-1/3 -left-6 md:-left-16",
    delay: 1.2,
    floatDuration: 5,
  },
  {
    id: 4,
    icon: "🤖",
    label: "24/7 AI Calling",
    value: "Active",
    color: "#7C3AED",
    position: "-bottom-4 right-4 md:right-0",
    delay: 0.4,
    floatDuration: 3.8,
  },
];

interface FloatingCardProps {
  card: (typeof cards)[0];
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

function FloatingCard({ card, mouseX, mouseY }: FloatingCardProps) {
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: card.delay + 0.8, duration: 0.5 }}
      className={`absolute ${card.position} z-20`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: card.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ rotateX, rotateY, perspective: 800 }}
      >
        <div
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer"
          style={{
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${card.color}30`,
            boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 16px ${card.color}20`,
            minWidth: "140px",
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
            style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
          >
            {card.icon}
          </div>
          <div>
            <p className="text-[10px] text-[#94A3B8] leading-none mb-0.5">{card.label}</p>
            <p
              className="text-sm font-bold leading-none"
              style={{ color: card.color, textShadow: `0 0 10px ${card.color}` }}
            >
              {card.value}
            </p>
          </div>
          {/* Animated ping dot */}
          <div className="ml-auto relative flex-shrink-0">
            <span
              className="block w-2 h-2 rounded-full animate-ping absolute"
              style={{ background: card.color, opacity: 0.4 }}
            />
            <span
              className="block w-2 h-2 rounded-full"
              style={{ background: card.color }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface FloatingCardsProps {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

export default function FloatingCards({ mouseX, mouseY }: FloatingCardsProps) {
  return (
    <>
      {cards.map((card) => (
        <FloatingCard key={card.id} card={card} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </>
  );
}
