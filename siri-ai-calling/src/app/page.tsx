import CursorGlow from "@/components/CursorGlow";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070B14] overflow-hidden">
      <CursorGlow />
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
    </main>
  );
}
