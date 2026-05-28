# 🚀 Siri AI — Calling Reimagined for the Future

A premium futuristic AI calling platform landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark futuristic space theme** with animated stars, particles, and aurora gradients
- **Custom animated SVG mascot** — a detailed AI astronaut robot with glowing effects
- **Glassmorphism floating cards** with real-time pulse indicators
- **Custom dual cursor** — glowing dot + ring following the mouse with spring easing
- **Parallax mouse tracking** — mascot and cards subtly respond to cursor movement
- **Framer Motion animations** — staggered reveals, floating elements, hover micro-interactions
- **Fully responsive** — desktop two-column, mobile stacked
- **Noise texture overlay** for premium depth
- **Animated navbar** — transparent → frosted glass on scroll, mobile hamburger menu
- **Production-ready** TypeScript code with clean component architecture

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 14.1.0 |
| React | 18.2.0 |
| TypeScript | 5.3 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11.0 |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, utilities, noise texture
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page composition
└── components/
    ├── AIMascot.tsx        # Detailed SVG robot/astronaut
    ├── BackgroundEffects.tsx # Stars, particles, aurora blobs, grid
    ├── CTAButtons.tsx      # Primary + secondary CTA with animations
    ├── CursorGlow.tsx      # Custom dual cursor with spring physics
    ├── FloatingCards.tsx   # 4 glassmorphism status cards
    ├── HeroSection.tsx     # Main hero layout (left text + right visual)
    ├── Navbar.tsx          # Transparent → frosted glass navbar
    └── StatsSection.tsx    # 3 trust stats with glow
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to GitHub
2. Import to [Vercel](https://vercel.com)
3. Deploy — zero config needed!

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#070B14` |
| Secondary BG | `#0F172A` |
| Accent Purple | `#7C3AED` |
| Accent Cyan | `#00D4FF` |
| Text Primary | `#FFFFFF` |
| Text Secondary | `#94A3B8` |
| Font | Poppins (Google Fonts) |

## 📝 Spline Integration (Optional)

To replace the SVG mascot with a Spline 3D model:

1. Install: `npm install @splinetool/react-spline`
2. Replace `<AIMascot />` in `HeroSection.tsx`:

```tsx
import dynamic from "next/dynamic";
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

// In your component:
<Spline scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
```

---

Built with ❤️ for the internship selection task.
