import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siri AI — Calling Reimagined",
  description:
    "Siri AI Calling Assistant helps businesses automate intelligent conversations with human-like AI voice agents, real-time analytics, and 24/7 smart communication.",
  keywords: ["AI calling", "voice AI", "automation", "Siri AI"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
