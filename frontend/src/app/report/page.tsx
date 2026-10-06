"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function ReportPage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      
<div className="flex flex-1 h-full overflow-hidden">



<main className="flex-1 flex flex-col relative min-w-0 bg-background overflow-hidden">

<header className="w-full top-0 sticky bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl flex justify-between items-center px-gutter h-16 w-full border-b border-white/5 shadow-sm z-40">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Models</a>
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Deployments</a>
</nav>
</div>
<div className="flex items-center gap-4 flex-1 max-w-xl mx-8">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-2 pl-10 pr-4 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search reports, agents, or logs..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="help">help</button>
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
<img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE4KvZZl1nbBaXIX7S71P9CAtYqw3qzhUb2Pp-WqjCXbZoJlx72eKgZ3GyaQeh7-eVagrePa9xEhtA5db9JFw29wM34GvExfY00G1BuXPGOr7ploWu_R_Tf_YCsm79lR4xXAUew2lQ56grjaXow_TfbNO7ZJkFvBEUqPUFELolpMThlBYwkEFzXiBpBeRfOyNTmBUG1ESpuqwKm8inUEk8hLRMEjlGPRMr1-QgML57q16fdIKJf7NHvnScCTp2BJA8j-icIgnNMyIx"/>
</div>
<button className="bg-primary text-on-primary font-body-md px-6 py-2 rounded-full font-bold hover:brightness-110 active:scale-95 duration-150">
                        Create Project
                    </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">



<section className="flex-1 bg-surface-dim relative overflow-y-auto p-12 flex flex-col items-center">
<div className="max-w-4xl w-full flex flex-col gap-12 pb-24">

<div className="flex justify-between items-center w-full bg-surface-container/50 backdrop-blur px-6 py-3 rounded-2xl border border-white/5 active-glow">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">zoom_in</span>
</button>
<span className="text-label-sm text-on-surface-variant">100%</span>
<button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">zoom_out</span>
</button>
</div>
<div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-white/5">
<button className="material-symbols-outlined text-on-surface-variant hover:text-white">chevron_left</button>
<span className="text-label-sm font-mono-code px-2 border-x border-white/5">PAGE 1 / 4</span>
<button className="material-symbols-outlined text-on-surface-variant hover:text-white">chevron_right</button>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-primary-container/20 rounded-lg text-primary transition-colors">
<span className="material-symbols-outlined">edit</span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">refresh</span>
</button>
</div>
</div>

<div className="paper-preview w-full bg-white text-slate-900 p-16 relative overflow-hidden group">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
<header className="border-b-4 border-primary pb-8 mb-12">
<div className="flex justify-between items-start">
<div>
<p className="font-mono-code text-[12px] uppercase tracking-tighter text-slate-400 mb-2">Internal Research Report</p>
<h1 className="font-display-lg text-[40px] font-bold leading-none text-slate-900">Neural Engine V2.4 Performance Audit</h1>
</div>
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-300">LOGO</div>
</div>
</header>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<h4 className="font-label-sm text-[10px] uppercase font-bold text-primary mb-2">Prepared By</h4>
<p className="text-body-md font-semibold">MLCopilot Automated Agent</p>
<p className="text-body-md text-slate-500">Infrastructure Intelligence Team</p>
</div>
<div>
<h4 className="font-label-sm text-[10px] uppercase font-bold text-primary mb-2">Timestamp</h4>
<p className="text-body-md font-semibold">Oct 24, 2023 — 14:32:01 UTC</p>
<p className="text-body-md text-slate-500">Reference: #AUDIT-8812-B</p>
</div>
</div>
<section className="mb-12">
<h2 className="text-headline-md font-bold text-slate-800 mb-4 border-l-4 border-slate-200 pl-4">Executive Summary</h2>
<p className="text-body-md text-slate-600 leading-relaxed">
                                    The following report provides a detailed breakdown of the recent inference scaling experiments performed on the Neural Engine cluster. Initial findings indicate a 14% improvement in token throughput while maintaining consistent latency thresholds below 45ms. Security compliance checks passed all mandatory heuristic layers.
                                </p>
</section>
<div className="grid grid-cols-3 gap-4">
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Total Agents</p>
<p className="text-headline-md font-bold text-slate-900">128</p>
</div>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Efficiency</p>
<p className="text-headline-md font-bold text-emerald-600">+12.4%</p>
</div>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Error Rate</p>
<p className="text-headline-md font-bold text-slate-900">0.02%</p>
</div>
</div>
</div>

<div className="paper-preview w-full bg-white text-slate-900 p-16 relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
<h2 className="text-headline-md font-bold text-slate-800 mb-8">Performance Analytics</h2>
<div className="w-full aspect-[16/9] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center relative group">
<img className="w-full h-full object-cover rounded-2xl opacity-80" data-alt="A clean, professional data visualization dashboard displayed on a white paper background. The chart features minimalist line graphs and bar charts in shades of navy blue and emerald green, illustrating upward growth trends. The lighting is bright and studio-like, emphasizing a crisp, high-end business report aesthetic with significant white space and elegant typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGPxBy2JtacfP83UApRCSbMM8sM45abETL9Q7vjUfKJZvazTFEgiNjnxIumY8-7LwFkCL0LvrmKPQ7GP45jcxnKlHuhGoEE_rGIM3tQfWOAYpyeNYq2As28rrby7rZLPH23fpPAUqqq-pvSD_thwHfuH-BL9YZhZJvbTqiGDVdspUNW9BGlslu6ayGo2ckMezjsqmpgksLibXnzlu4O-kUrFmOmjKWvuQ08gW-T9CxwvAQFiF7cOCLYWXgxNmS0DEtqM7KQXYo2_m9"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent flex items-end p-6">
<p className="text-[12px] font-mono-code text-slate-500 italic">Fig 1.1: Multi-Agent Latency Distribution across 24h cycle</p>
</div>
</div>
<div className="mt-8 space-y-4">
<div className="p-4 border border-slate-100 rounded-xl flex items-center gap-6">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<p className="flex-1 text-body-md">Optimized Tokenization Layer</p>
<p className="font-mono-code font-bold">ACTIVE</p>
</div>
<div className="p-4 border border-slate-100 rounded-xl flex items-center gap-6">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<p className="flex-1 text-body-md">Cold Storage Retrieval</p>
<p className="font-mono-code font-bold">340ms</p>
</div>
</div>
</div>
</div>

<button className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container shadow-2xl px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
<span className="material-symbols-outlined">auto_fix</span>
                        Regenerate Analytics
                    </button>
</section>


</div>
</main>
</div>


    </div>
  );
}
