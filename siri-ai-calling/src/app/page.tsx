'use client';

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { 
  Phone, 
  Play, 
  X, 
  Activity, 
  Volume2, 
  VolumeX, 
  Mic, 
  Shield, 
  Zap, 
  Sparkles, 
  TrendingUp, 
  Radio
} from 'lucide-react';

// ==========================================
// 🔊 PREMIUM INTERACTIVE SFX ENGINE (TYPED)
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
  const durationInterval = useRef<NodeJS.Timeout | null>(null);
  
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
    <div className="min-h-screen bg-[#030712] text-white font-sans overflow-x-hidden relative selection:bg-purple-500 selection:text-white">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_65%)]" />
        <div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
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
              <Radio className="w-5 h-5 text-white" />
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
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onMouseEnter={() => sfx.playHover()}
              onClick={() => { sfx.playClick(); setActiveModal('login'); }}
              className="relative px-5 py-2 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 transition-all hover:border-cyan-500/50"
            >
              Login Free <Sparkles className="inline-block w-3.5 h-3.5 ml-1 text-cyan-400" />
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
              <Play className="w-5 h-5 text-cyan-400 fill-cyan-400/20" /> Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div onMouseEnter={() => sfx.playHover()} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400"><Phone className="w-5 h-5" /></div>
              <div><div className="text-xl font-extrabold text-white">10K+</div><div className="text-xs text-slate-400">Calls Automated</div></div>
            </div>
            <div onMouseEnter={() => sfx.playHover()} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400"><TrendingUp className="w-5 h-5" /></div>
              <div><div className="text-xl font-extrabold text-white">98%</div><div className="text-xs text-slate-400">Accuracy Rate</div></div>
            </div>
            <div onMouseEnter={() => sfx.playHover()} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4 transition-all hover:-translate-y-1">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400"><Zap className="w-5 h-5" /></div>
              <div><div className="text-xl font-extrabold text-white">24/7</div><div className="text-xs text-slate-400">AI Support</div></div>
            </div>
          </div>
        </section>

        {/* 3D PARALLAX MASCOT ASSEMBLY */}
        <section className="lg:col-span-5 relative flex items-center justify-center min-h-[450px]">
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-[60px]" />
          <div 
            className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] flex items-center justify-center transition-all"
            style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)` }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_35px_rgba(168,85,247,0.3)] animate-float">
              <defs>
                <radialGradient id="metallicBody" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#38bdf8" /><stop offset="30%" stopColor="#1e3a8a" /><stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
                <radialGradient id="visorGlass" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#1e293b" /><stop offset="100%" stopColor="#020617" />
                </radialGradient>
                <radialGradient id="cyanCore" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stopColor="#67e8f9" /><stop offset="40%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
                </radialGradient>
              </defs>
              <g><circle cx="25" cy="115" r="7" fill="url(#metallicBody)" /></g>
              <g><circle cx="175" cy="115" r="7" fill="url(#metallicBody)" /></g>
              <g id="torso">
                <rect x="90" y="95" width="20" height="15" rx="5" fill="#1e293b" />
                <rect x="65" y="105" width="70" height="65" rx="20" fill="url(#metallicBody)" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="100" cy="138" r="14" fill="url(#cyanCore)" />
                <circle cx="100" cy="138" r="4" fill="#22d3ee" />
              </g>
              <g id="head" style={{ transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 5}px)` }}>
                <rect x="58" y="40" width="84" height="62" rx="28" fill="url(#metallicBody)" stroke="#38bdf8" strokeWidth="2" />
                <rect x="68" y="48" width="64" height="44" rx="16" fill="url(#visorGlass)" />
                <g id="eyes" style={{ transform: `translate(${mousePos.x * 4}px, ${mousePos.y * 3}px)` }}>
                  <circle cx="86" cy="68" r="5" fill="#22d3ee" /><circle cx="114" cy="68" r="5" fill="#22d3ee" />
                </g>
                <path d="M 94,80 Q 100,84 106,80" stroke="#22d3ee" strokeWidth="2" fill="none" />
              </g>
            </svg>

            {/* Float Badges */}
            <div className="absolute -top-4 -left-6 bg-slate-900/90 border border-cyan-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
              <Mic className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] font-bold">Live AI Connected</span>
            </div>
            <div className="absolute top-1/4 -right-12 bg-slate-900/90 border border-purple-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] font-bold">99.2% Automation</span>
            </div>
          </div>
        </section>
      </main>

      {/* 📞 TELEPHONY SANDBOX INTERFACE DIALOG */}
      {activeModal === 'calling' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-slate-950/40">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400"><Phone className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white">Siri AI Voice Caller Simulator</h3>
                  <p className="text-xs text-slate-400">Experience our human-like smart agent automation instantly</p>
                </div>
              </div>
              <button onClick={() => { sfx.playClick(); setActiveModal(null); }} className="p-2 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
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
              <span className="text-xs text-slate-400 flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Secure Environment</span>
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
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <div className="aspect-video rounded-xl bg-black border border-white/5 flex flex-col justify-center items-center text-center p-4">
              <Activity className="w-8 h-8 text-cyan-400 animate-pulse mb-2" />
              <p className="font-mono text-sm text-slate-300">SYSTEM TELEMETRY ENGINE CONNECTED</p>
              <p className="text-xs text-slate-500 mt-1">Simulated Latency Metric Target: 18ms</p>
            </div>
          </div>
        </div>
      )}

      {/* 📦 FALLBACK CATCH-ALL FOR NAV LINKS */}
      {['features', 'solutions', 'pricing', 'contact', 'login'].includes(activeModal || '') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 space-y-4 text-center">
            <h3 className="text-xl font-extrabold capitalize text-white">{activeModal} Module</h3>
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
      `}</style>

    </div>
  );
}