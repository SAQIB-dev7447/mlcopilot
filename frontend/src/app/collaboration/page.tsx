"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function CollaborationPage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden relative">
      <header className="bg-surface/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center w-full px-margin-container h-16 fixed top-0 z-50">
<div className="flex items-center gap-8">
<span className="font-display-lg text-display-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MLCopilot</span>
<nav className="hidden md:flex gap-6">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">System Overview</a>
<a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Agent Brain</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Logs</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all active:opacity-80">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
</div>
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all active:opacity-80">apps</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
<img alt="User profile photo with status indicator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWDKfe1yK1IAcCynfWzye5rJ9q10GkpdNdp_5JLqCd8f6AyMQuKOhIuqnBF-K3oicbDw20UWB9V7w_I_TM_C3XLFWma3fYm6B2RgLRrXpZUdgtasmQcYKkpayggX25A54hbmIKQl3TQjOGSDzidzGBQeOlr1mmt53J-oCcPb0ZeAammX2-jm3cTX2PKmomZbUKJCeiMQwMYl_Hl3FnIrcO2Sut3m_xYEkTGjlFMFGmU4kVceLPkNJTS-1cbny2U21NQIdM_oGDgAYc"/>
</div>
</div>
</header>
      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar />
        <main className="flex-grow h-full overflow-y-auto relative bg-surface-container-lowest">



<svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 800">
<defs>
<linearGradient id="commGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: "rgba(192, 193, 255, 0.1)", stopOpacity: "0"}} />
<stop offset="50%" style={{stopColor: "rgba(192, 193, 255, 0.8)", stopOpacity: "1"}} />
<stop offset="100%" style={{stopColor: "rgba(192, 193, 255, 0.1)", stopOpacity: "0"}} />
</linearGradient>
</defs>

<path className="communication-line stroke-primary/30" d="M500 400 L300 250" fill="none" strokeWidth="1.5" />
<path className="communication-line stroke-primary/30" d="M500 400 L700 250" fill="none" strokeWidth="1.5" />
<path className="communication-line stroke-primary/30" d="M500 400 L500 150" fill="none" strokeWidth="1.5" />
<path className="communication-line stroke-secondary/30" d="M500 400 L300 550" fill="none" strokeWidth="1.5" />
<path className="communication-line stroke-secondary/30" d="M500 400 L700 550" fill="none" strokeWidth="1.5" />
<path className="communication-line stroke-outline-variant" d="M300 250 L500 150" fill="none" strokeDasharray="4" strokeWidth="1" />
<path className="communication-line stroke-outline-variant" d="M700 250 L500 150" fill="none" strokeDasharray="4" strokeWidth="1" />


<g className="cursor-pointer group">
<circle className="fill-surface-container-high stroke-primary/50 node-pulse" cx="500" cy="400" r="45" strokeWidth="2" />
<text className="fill-primary font-bold text-sm pointer-events-none" textAnchor="middle" x="500" y="405">SUPERVISOR</text>
<circle className="fill-transparent stroke-primary/20 scale-0 group-hover:scale-110 transition-transform duration-300" cx="500" cy="400" r="50" strokeWidth="1" />
</g>

<g className="cursor-pointer group">
<circle className="fill-surface-container-high stroke-secondary/40" cx="300" cy="250" r="35" strokeWidth="2" />
<text className="fill-secondary text-xs pointer-events-none" textAnchor="middle" x="300" y="255">BUSINESS</text>
</g>

<g className="cursor-pointer group">
<circle className="fill-surface-container-high stroke-tertiary/40" cx="700" cy="250" r="35" strokeWidth="2" />
<text className="fill-tertiary text-xs pointer-events-none" textAnchor="middle" x="700" y="255">DATASET</text>
</g>

<g className="cursor-pointer group">
<circle className="fill-surface-container-high stroke-primary-fixed-dim/40" cx="500" cy="150" r="35" strokeWidth="2" />
<text className="fill-primary-fixed-dim text-xs pointer-events-none" textAnchor="middle" x="500" y="155">MODEL</text>
</g>

<g className="cursor-pointer group">
<circle className="fill-surface-container-high stroke-outline-variant" cx="300" cy="550" r="35" strokeWidth="2" />
<text className="fill-on-surface-variant text-xs pointer-events-none" textAnchor="middle" x="300" y="555">OPS</text>
</g>

<g className="cursor-pointer group">
<circle className="fill-surface-container-high stroke-error/40" cx="700" cy="550" r="35" strokeWidth="2" />
<text className="fill-error text-xs pointer-events-none" textAnchor="middle" x="700" y="555">SECURITY</text>
</g>
</svg>

<div className="absolute top-8 left-8 z-20 flex flex-col gap-4">
<div className="glass-panel p-4 rounded-xl border-l-4 border-primary">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">BRAIN ACTIVITY</p>
<div className="flex items-center gap-4">
<div>
<p className="font-display-lg text-headline-md text-primary">8.4k</p>
<p className="text-[10px] text-on-surface-variant">OPS/SEC</p>
</div>
<div className="w-16 h-8 flex items-end gap-0.5">
<div className="w-full bg-primary/20 h-1/2"></div>
<div className="w-full bg-primary/20 h-3/4"></div>
<div className="w-full bg-primary/40 h-1/2"></div>
<div className="w-full bg-primary h-full"></div>
</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-3">SYSTEM STATUS</p>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center gap-8">
<span className="text-[12px] text-on-surface-variant">Latency</span>
<span className="text-[12px] text-primary font-mono-code">12ms</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-1/4 h-full bg-primary"></div>
</div>
<div className="flex justify-between items-center gap-8">
<span className="text-[12px] text-on-surface-variant">Cognitive Load</span>
<span className="text-[12px] text-secondary font-mono-code">42%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-[42%] h-full bg-secondary"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-8 right-8 bottom-8 w-80 z-20 flex flex-col gap-4">
<div className="glass-panel flex-grow rounded-xl flex flex-col overflow-hidden border-t-2 border-primary-container">
<div className="p-4 border-b border-white/5 bg-white/5">
<div className="flex items-center justify-between mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Agent Debate</h3>
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded uppercase font-bold tracking-wider">Live</span>
</div>
<p className="text-[12px] text-on-surface-variant italic">Decision: Hyperparameter Optimization Strategy for Model-V4</p>
</div>
<div className="flex-grow overflow-y-auto p-4 glass-scroll flex flex-col gap-4">

<div className="p-3 rounded-lg bg-surface-container-high/50 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-tertiary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-[14px]">database</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary">Dataset Agent</span>
<span className="ml-auto text-[10px] text-on-surface-variant">2m ago</span>
</div>
<p className="text-[13px] text-on-surface leading-relaxed">"Suggesting a focus on Layer 3 dropout rates. Dataset variance is high in the validation set."</p>
</div>

<div className="p-3 rounded-lg bg-surface-container-high/50 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[14px]">payments</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Business Agent</span>
<span className="ml-auto text-[10px] text-on-surface-variant">1m ago</span>
</div>
<p className="text-[13px] text-on-surface leading-relaxed">"Counter-proposal: Prioritize inference latency. Marketing requirements specify sub-100ms response."</p>
</div>

<div className="mt-4 pt-4 border-t border-white/5">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-tighter">Voting Cluster</p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="flex-grow">
<div className="flex justify-between text-[11px] mb-1">
<span>Option A (Accuracy)</span>
<span className="text-primary">64%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-[64%] h-full bg-primary"></div>
</div>
</div>
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full border border-surface bg-tertiary"></div>
<div className="w-5 h-5 rounded-full border border-surface bg-primary-fixed-dim"></div>
<div className="w-5 h-5 rounded-full border border-surface bg-outline-variant"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-grow">
<div className="flex justify-between text-[11px] mb-1">
<span>Option B (Speed)</span>
<span className="text-secondary">36%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-[36%] h-full bg-secondary"></div>
</div>
</div>
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full border border-surface bg-secondary"></div>
<div className="w-5 h-5 rounded-full border border-surface bg-error"></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-4 bg-primary/5 border-t border-primary/20">
<div className="flex items-center gap-3">
<div className="flex-grow">
<p className="text-[11px] text-primary font-bold">CONSENSUS REACHED</p>
<p className="text-[13px] text-on-surface">Option A selected with constraints.</p>
</div>
<button className="px-4 py-2 bg-primary text-on-primary text-[12px] font-bold rounded-lg shadow-lg shadow-primary/20">APPLY</button>
</div>
</div>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
<div>
<p className="font-label-sm text-label-sm text-on-surface">Active Session</p>
<p className="text-[11px] text-on-surface-variant font-mono-code">TS-942-BETA-AGENT-SYNC</p>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 right-96 z-20">
<div className="glass-panel p-4 rounded-2xl flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant uppercase font-bold">Node Focus</span>
<span className="text-primary font-display-lg text-[20px]">Supervisor Mainframe</span>
</div>
<div className="h-10 w-px bg-white/10"></div>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-high border border-white/5 hover:border-primary/50 text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">zoom_in</span>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-high border border-white/5 hover:border-primary/50 text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">filter_center_focus</span>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-high border border-white/5 hover:border-primary/50 text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-right">
<p className="text-[10px] text-on-surface-variant uppercase">Network Health</p>
<p className="text-sm font-bold text-green-400">OPTIMAL</p>
</div>
<div className="flex gap-2">
<div className="w-1 h-6 bg-primary rounded-full"></div>
<div className="w-1 h-4 bg-primary/40 rounded-full mt-auto"></div>
<div className="w-1 h-7 bg-primary rounded-full"></div>
<div className="w-1 h-5 bg-primary/60 rounded-full mt-auto"></div>
<div className="w-1 h-8 bg-primary rounded-full"></div>
</div>
<button className="px-6 py-2.5 rounded-xl bg-surface-container-high text-on-surface font-semibold border border-white/10 hover:bg-surface-variant transition-all">
                            PAUSE SYNC
                        </button>
</div>
</div>
</div>
</main>
      </div>
    </div>
  );
}
