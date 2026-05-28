'use client';

import React, { useState, useEffect, useRef, FormEvent } from 'react';

// ==========================================
// 🎨 HAND-MAPPED SYSTEM REVOLUTION SVGS (ZERO DEPENDENCY ERRORS)
// ==========================================
const IconRadio = () => (
  <svg className="w-5 h-5 text-cyan-400 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
);

const IconPhone = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconPlay = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 fill-cyan-400/20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconVolume2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const IconVolumeX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
  </svg>
);

const IconTrendingUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconZap = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconMic = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v4M8 23h8" />
  </svg>
);

const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconActivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

// ==========================================
// 🔊 PREMIUM INTERACTIVE SFX ENGINE (STRICTLY TYPED)
// ==========================================
class SoundEngine {
  private ctx: AudioContext | null = null;
  public muted: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
  }

  public playBeep(freq: number, type: OscillatorType, duration: number, vol: number) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(vol || 0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio Context blocked or failed.");
    }
  }

  public playHover() {
    this.playBeep(600, 'sine', 0.1, 0.03);
  }

  public playClick() {
    this.playBeep(880, 'sine', 0.15, 0.08);
    setTimeout(() => this.playBeep(1200, 'sine', 0.2, 0.04), 60);
  }

  public playSuccess() {
    this.playBeep(523.25, 'triangle', 0.2, 0.08);
    setTimeout(() => this.playBeep(659.25, 'triangle', 0.2, 0.08), 100);
    setTimeout(() => this.playBeep(783.99, 'triangle', 0.3, 0.1), 200);
  }

  public playCallEnd() {
    this.playBeep(440, 'sawtooth', 0.2, 0.05);
    setTimeout(() => this.playBeep(220, 'sawtooth', 0.4, 0.08), 150);
  }
}

const sfx = new SoundEngine();

interface TranscriptMessage {
  time: string;
  sender: 'AI' | 'User' | 'System';
  text: string;
}

export default function Page() {
  // Navigation State
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  
  // Calling Simulator State
  const [selectedAgent, setSelectedAgent] = useState<string>('Siri Alpha (Male - Friendly Tech Support)');
  const [callState, setCallState] = useState<'idle' | 'dialing' | 'connected' | 'disconnected'>('idle');
  const [callDuration, setCallDuration] = useState<number>(0);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);
  const [userSpeechInput, setUserSpeechInput] = useState<string>('');
  const durationInterval = useRef<any>(null);
  
  // Cursor coordinate tracker
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    sfx.muted = isMuted;
  }, [isMuted]);

  const mockConversation: Omit<TranscriptMessage, 'time'>[] = [
    { sender: 'AI', text: "Hello! Thank you for calling Siri AI Support. My name is Siri Alpha. How can I transform your sales workflow today?" },
    { sender: 'AI', text: "I can process up to 10,000 parallel calls, analyze user intent, and sync records directly to your CRM." },
    { sender: 'AI', text: "Go ahead, ask me anything about deployment timelines or pricing models!" },
    { sender: 'AI', text: "Absolutely, we support seamless webhook routing with less than 24ms network latency." },
    { sender: 'AI', text: "Shall we set up a live production API key for your dev team?" }
  ];

  useEffect(() => {
    if (callState === 'connected') {
      durationInterval.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
        
        if (Math.random() < 0.25) {
          const randomPhrase = mockConversation[Math.floor(Math.random() * mockConversation.length)];
          setTranscript(prev => [...prev, { 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), 
            sender: randomPhrase.sender as 'AI' | 'User',
            text: randomPhrase.text 
          }]);
        }
      }, 1000);
    } else {
      if (durationInterval.current) clearInterval(durationInterval.current);
      setCallDuration(0);
    }
    return () => {
      if (durationInterval.current) clearInterval(durationInterval.current);
    };
  }, [callState]);

  const startCallSim = () => {
    sfx.playClick();
    setCallState('dialing');
    setTranscript([
      { time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), sender: 'System', text: `Establishing secure WebRTC channel to ${selectedAgent}...` }
    ]);
    
    setTimeout(() => {
      setCallState('connected');
      sfx.playSuccess();
      setTranscript(prev => [
        ...prev,
        { time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), sender: 'AI', text: `Connected! Hello there, I am your active voice assistant today. How can I help you automate operations?` }
      ]);
    }, 2000);
  };

  const endCallSim = () => {
    sfx.playCallEnd();
    setCallState('disconnected');
    setTimeout(() => setCallState('idle'), 1000);
  };

  const handleUserSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!userSpeechInput.trim()) return;
    sfx.playClick();
    
    const newMsg: TranscriptMessage = { 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
      sender: 'User', 
      text: userSpeechInput 
    };
    setTranscript(prev => [...prev, newMsg]);
    setUserSpeechInput('');

    setTimeout(() => {
      sfx.playBeep(480, 'sine', 0.1, 0.05);
      const responses = [
        "That's an excellent question! Siri AI fully automates that workflow using contextual state machines.",
        "Yes! Our system supports real-time emotion telemetry to customize response speeds instantly.",
        "Understood. I am updating your simulation settings with that profile.",
        "I've configured our backend parameters to optimize for 24ms analytics processing speed."
      ];
      setTranscript(prev => [...prev, {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'AI',
        text: responses[Math.floor(Math.random() * responses.length)]
      }]);
    }, 1200);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-[#020510] text-white font-sans overflow-x-hidden relative selection:bg-purple-500 selection:text-white">
      
      {/* ==========================================
          🌌 DYNAMIC GALAXY SPACE BACKGROUND LAYERS
          ========================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Cyber Space Grid Mapping */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        {/* Galaxy Nebulas (Deep Radial Color Orbs) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-cyan-600/10 to-indigo-500/10 blur-[130px] opacity-70 animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[20%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-fuchsia-600/15 via-purple-600/10 to-transparent blur-[150px] opacity-80" />
        <div className="absolute bottom-[-15%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-indigo-900/15 via-slate-900/10 to-transparent blur-[160px] opacity-90" />

        {/* Scattered Interactive Twinkling Galaxy Stars */}
        <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          {/* Group 1: Fast Twinkling Stars */}
          <g className="star-fast fill-white">
            <circle cx="15%" cy="12%" r="1.5" />
            <circle cx="85%" cy="18%" r="1" />
            <circle cx="45%" cy="30%" r="2" />
            <circle cx="70%" cy="45%" r="1.5" />
            <circle cx="22%" cy="65%" r="1" />
            <circle cx="92%" cy="75%" r="1.5" />
          </g>
          {/* Group 2: Medium Twinkling Stars */}
          <g className="star-medium fill-cyan-400">
            <circle cx="5%" cy="40%" r="1.5" />
            <circle cx="35%" cy="15%" r="2.5" />
            <circle cx="60%" cy="10%" r="1.2" />
            <circle cx="80%" cy="55%" r="2" />
            <circle cx="12%" cy="85%" r="1" />
            <circle cx="50%" cy="92%" r="1.8" />
          </g>
          {/* Group 3: Slow Twinkling Stars */}
          <g className="star-slow fill-purple-400">
            <circle cx="28%" cy="25%" r="1.2" />
            <circle cx="75%" cy="28%" r="1.8" />
            <circle cx="95%" cy="3%" r="1.5" />
            <circle cx="40%" cy="70%" r="2.2" />
            <circle cx="65%" cy="80%" r="1" />
            <circle cx="88%" cy="90%" r="1.6" />
          </g>
        </svg>
      </div>

      {/* HEADER NAVBAR */}
      <header className="relative z-20 border-b border-white/5 bg-slate-950/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onMouseEnter={() => sfx.playHover()}
            onClick={() => { sfx.playClick(); setActiveModal(null); }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform group-hover:scale-110">
              <IconRadio />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Siri <span className="text-cyan-400">AI</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Solutions', 'Pricing', 'Contact'].map((item) => (
              <button
                key={item}
                onMouseEnter={() => sfx.playHover()}
                onClick={() => { sfx.playClick(); setActiveModal(item.toLowerCase()); }}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white relative py-2"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => { setIsMuted(!isMuted); sfx.playClick(); }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all"
            >
              {isMuted ? <IconVolumeX /> : <IconVolume2 />}
            </button>
            <button
              onMouseEnter={() => sfx.playHover()}
              onClick={() => { sfx.playClick(); setActiveModal('login'); }}
              className="relative px-5 py-2 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 transition-all hover:border-cyan-500/50"
            >
              Login Free <IconSparkles />
            </button>
          </div>
        </div>
      </header>

      {/* HERO CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <section className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          <div className="inline-flex items-center gap-2 bg-purple-950/60 border border-purple-500/30 px-4 py-2 rounded-full w-max text-xs font-semibold text-purple-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Next-Gen AI Voice Platform
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              AI Calling <br /> Reimagined <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                for the Future
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Siri AI Calling Assistant helps businesses automate intelligent conversations with human-like AI voice agents, real-time analytics, and 24/7 smart communication.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onMouseEnter={() => sfx.playHover()}
              onClick={() => { sfx.playClick(); setActiveModal('calling'); }}
              className="relative flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all bg-gradient-to-r from-purple-600 to-indigo-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/20"
            >
              🚀 Start Calling
            </button>
            <button
              onMouseEnter={() => sfx.playHover()}
              onClick={() => { sfx.playClick(); setActiveModal('demo'); }}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-200 transition-all bg-white/5 border border-white/10 hover:bg-white/10"
            >
              <IconPlay /> Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div onMouseEnter={() => sfx.playHover()} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400"><IconPhone /></div>
              <div><div className="text-xl font-extrabold text-white">10K+</div><div className="text-xs text-slate-400">Calls Automated</div></div>
            </div>
            <div onMouseEnter={() => sfx.playHover()} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400"><IconTrendingUp /></div>
              <div><div className="text-xl font-extrabold text-white">98%</div><div className="text-xs text-slate-400">Accuracy Rate</div></div>
            </div>
            <div onMouseEnter={() => sfx.playHover()} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400"><IconZap /></div>
              <div><div className="text-xl font-extrabold text-white">24/7</div><div className="text-xs text-slate-400">AI Support</div></div>
            </div>
          </div>
        </section>

        {/* 🤖 HIGH-QUALITY INTERACTIVE MASCOT COLUMN (WITH ACTIVE TELEMETRY CIRCUITS) */}
        <section className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] lg:min-h-[580px]">
          
          {/* Radial Ambient Glows behind the scene */}
          <div className="absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-[80px]" />
          <div className="absolute w-96 h-96 rounded-full bg-purple-600/5 blur-[100px]" />

          {/* Master Mascot & Connected Circuit Area */}
          <div 
            className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] flex items-center justify-center transition-transform"
            style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)` }}
          >
            
            {/* ==========================================
                CIRCUIT INTEGRATION PATHS (THE CONNECTING HUD LINES)
                ========================================== */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="gradientCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradientPurple" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Dotted HUD Orbit circle */}
              <circle cx="200" cy="200" r="145" fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth="1.5" strokeDasharray="6 8" className="animate-spin" style={{ animationDuration: '60s' }} />

              {/* Line 1: Left Ear to AI Voice Badge */}
              <path 
                d="M 130,120 L 70,120 L 40,95" 
                fill="none" 
                stroke="url(#gradientCyan)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
                className="animate-pulse"
              />
              <circle cx="40" cy="95" r="3.5" fill="#22d3ee" />

              {/* Line 2: Heart Core to Smart Automation Badge */}
              <path 
                d="M 220,230 L 290,230 L 320,185" 
                fill="none" 
                stroke="url(#gradientPurple)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
                className="animate-pulse"
              />
              <circle cx="320" cy="185" r="3.5" fill="#a855f7" />

              {/* Line 3: Bottom Left Torso to Real-time Analytics */}
              <path 
                d="M 170,250 L 100,250 L 50,295" 
                fill="none" 
                stroke="url(#gradientCyan)" 
                strokeWidth="1.5" 
                strokeDasharray="5 3"
              />
              <circle cx="50" cy="295" r="3" fill="#0ea5e9" />

              {/* Line 4: Bottom Right Torso to 24/7 Support */}
              <path 
                d="M 230,250 L 300,250 L 340,315" 
                fill="none" 
                stroke="url(#gradientPurple)" 
                strokeWidth="1.5" 
                strokeDasharray="5 3"
              />
              <circle cx="340" cy="315" r="3" fill="#c084fc" />
            </svg>

            {/* ==========================================
                THE 3D ROBOT MASCOT SVG
                ========================================== */}
            <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] z-10 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_35px_rgba(168,85,247,0.3)] animate-float">
                <defs>
                  <radialGradient id="metallicBody" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="30%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </radialGradient>
                  <radialGradient id="visorGlass" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#020617" />
                  </radialGradient>
                  <radialGradient id="cyanCore" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="40%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Left Floating Cyber-Hand */}
                <g className="animate-pulse" style={{ animationDuration: '4s' }}>
                  <circle cx="25" cy="115" r="7" fill="url(#metallicBody)" stroke="#38bdf8" strokeWidth="0.75" />
                  <circle cx="25" cy="115" r="2.5" fill="#22d3ee" />
                </g>

                {/* Right Floating Cyber-Hand */}
                <g className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
                  <circle cx="175" cy="115" r="7" fill="url(#metallicBody)" stroke="#a855f7" strokeWidth="0.75" />
                  <circle cx="175" cy="115" r="2.5" fill="#a855f7" />
                </g>

                {/* Torso Assembly */}
                <g id="torso">
                  <rect x="90" y="95" width="20" height="15" rx="5" fill="#1e293b" stroke="#334155" />
                  <rect x="65" y="105" width="70" height="65" rx="20" fill="url(#metallicBody)" stroke="#38bdf8" strokeWidth="1.5" />
                  <rect x="73" y="113" width="54" height="49" rx="14" fill="#0b1329" stroke="#1e293b" />
                  
                  {/* Glowing Chest Arc-Core */}
                  <circle cx="100" cy="138" r="13" fill="url(#cyanCore)" />
                  <circle cx="100" cy="138" r="4" fill="#ffffff" className="animate-ping" style={{ animationDuration: '2s' }} />
                  <circle cx="100" cy="138" r="3.5" fill="#22d3ee" />
                </g>

                {/* Head Joint & Helmet looking toward cursor */}
                <g id="head" style={{ transform: `translate(${mousePos.x * 7}px, ${mousePos.y * 6}px)` }}>
                  
                  {/* Left Head Antenna */}
                  <line x1="60" y1="65" x2="45" y2="50" stroke="#0ea5e9" strokeWidth="3" />
                  <circle cx="45" cy="50" r="3.5" fill="#22d3ee" />

                  {/* Right Head Antenna */}
                  <line x1="140" y1="65" x2="155" y2="50" stroke="#a855f7" strokeWidth="3" />
                  <circle cx="155" cy="50" r="3.5" fill="#d946ef" />

                  {/* Helmet Dome */}
                  <rect x="58" y="40" width="84" height="62" rx="28" fill="url(#metallicBody)" stroke="#38bdf8" strokeWidth="2" />
                  
                  {/* Glass Visor */}
                  <rect x="68" y="48" width="64" height="44" rx="16" fill="url(#visorGlass)" stroke="#334155" />
                  
                  {/* Tracking Holographic Eyes */}
                  <g id="eyes" style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 4}px)` }}>
                    <circle cx="86" cy="68" r="4.5" fill="#22d3ee" />
                    <circle cx="88" cy="66" r="1.5" fill="#ffffff" />
                    <circle cx="114" cy="68" r="4.5" fill="#22d3ee" />
                    <circle cx="116" cy="66" r="1.5" fill="#ffffff" />
                  </g>

                  {/* Dynamic digital expression path */}
                  <path d="M 94,80 Q 100,84 106,80" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" />
                </g>
              </svg>
            </div>

            {/* ==========================================
                FLOATING HUD STATUS BADGES (CONNECTED)
                ========================================== */}
            
            {/* BADGE 1: AI Voice Active (Top Left) */}
            <div 
              onMouseEnter={() => sfx.playHover()}
              className="absolute top-12 left-0 bg-slate-950/90 border border-cyan-500/30 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(34,211,238,0.25)] backdrop-blur-md z-20 cursor-pointer hover:border-cyan-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-bold text-white tracking-wide">AI Active (Live)</span>
            </div>

            {/* BADGE 2: Smart Automation (Middle Right) */}
            <div 
              onMouseEnter={() => sfx.playHover()}
              className="absolute top-32 right-0 bg-slate-950/90 border border-purple-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(168,85,247,0.25)] backdrop-blur-md z-20 cursor-pointer hover:border-purple-400"
            >
              <IconZap className="w-3 h-3 text-purple-400" />
              <span className="text-[10px] font-bold text-white">99.2% Automation</span>
            </div>

            {/* BADGE 3: Real-Time Analytics (Bottom Left) */}
            <div 
              onMouseEnter={() => sfx.playHover()}
              className="absolute bottom-20 left-0 bg-slate-950/90 border border-cyan-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(6,182,212,0.25)] backdrop-blur-md z-20 cursor-pointer hover:border-cyan-400"
            >
              <span className="text-[10px] font-bold text-cyan-400">24ms Analytics</span>
            </div>

            {/* BADGE 4: 24/7 Calling Active (Bottom Right) */}
            <div 
              onMouseEnter={() => sfx.playHover()}
              className="absolute bottom-16 right-0 bg-slate-950/90 border border-purple-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(168,85,247,0.25)] backdrop-blur-md z-20 cursor-pointer hover:border-purple-400"
            >
              <span className="text-[10px] font-bold text-purple-400">24/7 AI calling active</span>
            </div>

          </div>
        </section>

      </main>

      {/* ==========================================
          MODALS & INTERACTIVE PORTAL LAYERS
          ========================================== */}
      
      {/* 📞 TELEPHONY SANDBOX INTERFACE DIALOG */}
      {activeModal === 'calling' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-slate-950/40">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <IconPhone />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Siri AI Voice Caller Simulator</h3>
                  <p className="text-xs text-slate-400">Experience our human-like smart agent automation instantly</p>
                </div>
              </div>
              <button 
                onClick={() => { sfx.playClick(); setActiveModal(null); }} 
                className="p-2 text-slate-400 hover:text-white"
              >
                <IconX />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {callState === 'idle' && (
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-300 block">Select AI Voice Representative</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Siri Alpha (Male - Friendly Tech Support)', 'Nova Beta (Female - Highly Professional Sales)'].map((agent) => (
                      <button
                        key={agent}
                        onClick={() => { sfx.playClick(); setSelectedAgent(agent); }}
                        className={`p-4 rounded-2xl text-left border text-sm transition-all ${selectedAgent === agent ? 'bg-purple-600/10 border-purple-500 text-white' : 'bg-white/[0.02] border-white/5 text-slate-300'}`}
                      >
                        {agent}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {callState !== 'idle' && (
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 flex flex-col items-center text-center space-y-2">
                    <h4 className="font-bold text-white text-lg">{selectedAgent.split(' (')[0]}</h4>
                    <p className="text-xs text-slate-400">
                      {callState === 'dialing' ? 'Dialing secure AI uplink...' : `Active Call Time: ${formatTime(callDuration)}`}
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-white/5 rounded-2xl h-48 overflow-y-auto p-4 space-y-2 font-mono text-xs text-left">
                    {transcript.map((msg, idx) => (
                      <div key={idx}>
                        <span className="text-slate-500">[{msg.time}] </span>
                        <span className={msg.sender === 'AI' ? 'text-cyan-400' : 'text-purple-400'}>[{msg.sender}]: </span>
                        <span className="text-slate-300">{msg.text}</span>
                      </div>
                    ))}
                  </div>

                  {callState === 'connected' && (
                    <form onSubmit={handleUserSendMessage} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Say/Type something back to the AI agent..."
                        value={userSpeechInput}
                        onChange={(e) => setUserSpeechInput(e.target.value)}
                        className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                      <button type="submit" className="px-5 py-3 rounded-xl bg-cyan-600 text-sm font-bold text-white">Send</button>
                    </form>
                  )}
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/5 bg-slate-950/40 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1"><IconShield /> Secure Sandbox environment</span>
              {callState === 'idle' ? (
                <button onClick={startCallSim} className="px-6 py-2.5 rounded-xl bg-purple-600 font-bold text-sm text-white">🚀 Initiate Simulated Call</button>
              ) : (
                <button onClick={endCallSim} className="px-6 py-2.5 rounded-xl bg-red-600 font-bold text-sm text-white">Disconnect Channel</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 📺 WATCH PRODUCT DEMO OVERLAY */}
      {activeModal === 'demo' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Interactive Platform Walkthrough</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-white"><IconX /></button>
            </div>
            <div className="aspect-video rounded-xl bg-black border border-white/5 flex flex-col justify-center items-center text-center p-4">
              <IconActivity />
              <p className="font-mono text-sm text-slate-300">SYSTEM TELEMETRY ENGINE CONNECTED</p>
              <p className="text-xs text-slate-500 mt-1">Simulated Latency Metric Target: 18ms</p>
            </div>
          </div>
        </div>
      )}

      {/* 📦 OTHER NAV MODALS (FEATURES, SOLUTIONS, PRICING, CONTACT, LOGIN) */}
      {['features', 'solutions', 'pricing', 'contact', 'login'].includes(activeModal || '') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 space-y-4 text-center">
            <h3 className="text-xl font-extrabold capitalize text-white">{activeModal} Panel</h3>
            <p className="text-sm text-slate-400">The requested workspace parameters have initialized successfully inside the sandboxed preview context.</p>
            <button onClick={() => setActiveModal(null)} className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold transition-all">
              Dismiss Panel
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS Animation Injector */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .star-fast {
          animation: twinkle 3s infinite ease-in-out;
        }
        .star-medium {
          animation: twinkle 4.5s infinite ease-in-out;
        }
        .star-slow {
          animation: twinkle 6s infinite ease-in-out;
        }
      `}</style>

    </div>
  );
}