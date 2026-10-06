"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function DatasetPage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      


<main className="flex-1 flex flex-col min-w-0 bg-background overflow-y-auto">

<header className="w-full top-0 sticky z-40 bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl border-b border-white/5 shadow-sm flex justify-between items-center px-gutter h-16 w-full">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</span>
<div className="hidden lg:flex items-center gap-6">
<a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Models</a>
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-150" href="#">Deployments</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="bg-surface-container-low border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-primary w-64" placeholder="Search datasets..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary">help</button>
<button className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-label-sm active:scale-95 duration-150">Create Project</button>
<img alt="User avatar" className="w-8 h-8 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx5UWptehBW8Q_6hj2KZZHDvDkHxmrHBlUbc_E4n8IHrELKXsJ-RfvbWIxdFA-eGwD9nj-LduqiGZ93twu2rHrZyncmTZZTR7QRHXpiXaRT8FPF1OFMb6zQ4tbywFFioQpYoY14vNtYp4T3fryrVYqhdLO_3aR-dBFqbAJgpzV72-USNGPk3dfzogYEPoRqekEv-goNtBPK_oyqYA6TEbhPNgn-WEYhlwd_48cMI3sV-QBAI1_EXAtbPeOVcN1CiNQut116FXtJwJk"/>
</div>
</div>
</header>

<div className="p-8 max-w-[1600px] mx-auto w-full space-y-panel-gap">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface mb-2">Customer_Churn_V4.csv</h2>
<div className="flex items-center gap-4 text-on-surface-variant font-label-sm">
<span className="flex items-center gap-1"><span className="status-dot bg-tertiary"></span> Analyzing</span>
<span>•</span>
<span>Updated 2 hours ago</span>
<span>•</span>
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px]">TABULAR</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="glass-panel px-4 py-2 rounded-lg text-primary flex items-center gap-2 font-label-sm hover:bg-surface-container-high">
<span className="material-symbols-outlined text-lg">download</span> Export
                    </button>
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg flex items-center gap-2 font-label-sm active:scale-95">
<span className="material-symbols-outlined text-lg">play_arrow</span> Run Training
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-panel-gap">
<div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
<span className="text-on-surface-variant font-label-sm">Rows</span>
<span className="text-headline-md font-headline-md text-primary mt-2">1,240,592</span>
<div className="h-1 bg-white/5 mt-4 rounded-full overflow-hidden">
<div className="h-full bg-primary w-3/4"></div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
<span className="text-on-surface-variant font-label-sm">Columns</span>
<span className="text-headline-md font-headline-md text-secondary mt-2">48</span>
<span className="text-label-sm text-tertiary mt-4">+2 from last upload</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
<span className="text-on-surface-variant font-label-sm">Missing Values</span>
<span className="text-headline-md font-headline-md text-error mt-2">12,405</span>
<span className="text-label-sm text-error/60 mt-4">1.0% of total data</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
<span className="text-on-surface-variant font-label-sm">Duplicates</span>
<span className="text-headline-md font-headline-md text-on-surface mt-2">0</span>
<span className="text-label-sm text-on-surface-variant mt-4">Clean dataset</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
<span className="text-on-surface-variant font-label-sm">Target Variable</span>
<span className="text-headline-md font-headline-md text-tertiary mt-2">churn_status</span>
<span className="text-label-sm text-tertiary-fixed-dim mt-4">Binary Classification</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-panel-gap">

<div className="lg:col-span-8 space-y-panel-gap">

<div className="glass-panel p-6 rounded-xl">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-on-surface">Feature Correlation Matrix</h3>
<button className="material-symbols-outlined text-on-surface-variant">fullscreen</button>
</div>
<div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                // Seeded pseudo-random correlation value between -1.0 and +1.0
                const val = Math.sin(row * 1.5 + col * 2.3) * 0.95;
                const getCorrColor = (v: number) => {
                  if (v > 0.8) return 'bg-primary-container text-on-primary-container';
                  if (v > 0.4) return 'bg-primary/40 text-on-surface';
                  if (v > 0.1) return 'bg-primary/20 text-on-surface';
                  if (v > -0.1) return 'bg-surface-container-highest text-on-surface-variant';
                  if (v > -0.4) return 'bg-secondary/20 text-on-surface';
                  return 'bg-secondary-container text-on-secondary-container';
                };
                return (
                  <div key={i} className={`heatmap-cell ${getCorrColor(val)} h-8 w-full relative group cursor-pointer hover:scale-110 transition-transform flex items-center justify-center rounded`}>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bg-black/90 text-white text-[10px] px-1.5 py-0.5 rounded -top-8 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap pointer-events-none">
                      {val.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
<div className="flex justify-between mt-4 text-label-sm text-on-surface-variant">
<span>Feature X1-X8</span>
<div className="flex items-center gap-2">
<div className="w-32 h-2 bg-gradient-to-r from-secondary-container via-surface-container-highest to-primary-container rounded"></div>
<span>-1 to +1</span>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-on-surface">Target Distribution (churn_status)</h3>
<select className="bg-surface-container text-xs border-none rounded py-1 pr-8">
<option>Histograms</option>
<option>Box Plots</option>
</select>
</div>
<div className="h-64 flex items-end gap-1 px-2 w-full">
              {Array.from({ length: 40 }).map((_, i) => {
                // Seeded pseudo-random heights
                const height = Math.floor((Math.sin(i * 0.25) * 0.4 + 0.5) * 75) + 12;
                const opacity = (height / 100) + 0.2;
                return (
                  <div key={i} className="flex-1 bg-primary rounded-t-sm" style={{ height: `${height}%`, opacity: opacity }} />
                );
              })}
            </div>
<div className="flex justify-between mt-4 border-t border-white/5 pt-4 text-on-surface-variant font-label-sm">
<span>0.0</span>
<span>0.25</span>
<span>0.50</span>
<span>0.75</span>
<span>1.0</span>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-panel-gap">

<div className="glass-panel p-6 rounded-xl flex flex-col items-center">
<h3 className="w-full font-label-sm text-on-surface-variant mb-6 text-center">OVERALL DATA QUALITY</h3>
<div className="relative w-48 h-48 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-white/5" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="8" />
<circle className="text-primary drop-shadow-[0_0_10px_rgba(192,193,255,0.4)]" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.4" strokeDashoffset="60" strokeWidth="12" />
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-4xl font-display-lg font-bold text-on-surface">88</span>
<span className="text-label-sm text-primary uppercase tracking-widest">Excellent</span>
</div>
</div>
<div className="w-full mt-8 grid grid-cols-2 gap-4">
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant uppercase">Completeness</span>
<span className="text-lg font-headline-md">99%</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-on-surface-variant uppercase">Consistency</span>
<span className="text-lg font-headline-md">84%</span>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl flex-1 active-glow">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
<h3 className="font-headline-md text-on-surface">AI Smart Insights</h3>
</div>
<div className="space-y-6">
<div className="relative pl-6 border-l-2 border-primary/30">
<p className="text-body-md font-body-md text-on-surface leading-relaxed">
<span className="text-primary font-bold">Class Imbalance Detected:</span> The target feature <code className="bg-primary/10 px-1 rounded">churn_status</code> shows an 82/18 split. Consider SMOTE upsampling before training.
                                </p>
</div>
<div className="relative pl-6 border-l-2 border-secondary/30">
<p className="text-body-md font-body-md text-on-surface leading-relaxed">
<span className="text-secondary font-bold">Strong Correlation:</span> <code className="bg-secondary/10 px-1 rounded">monthly_charges</code> and <code className="bg-secondary/10 px-1 rounded">tenure</code> have a 0.89 correlation. One feature may be redundant.
                                </p>
</div>
<div className="relative pl-6 border-l-2 border-tertiary/30">
<p className="text-body-md font-body-md text-on-surface leading-relaxed">
<span className="text-tertiary font-bold">Data Leakage Risk:</span> Column <code className="bg-tertiary/10 px-1 rounded">last_contact_id</code> contains high-cardinality metadata. Recommend dropping for model generalization.
                                </p>
</div>
</div>
<button className="w-full mt-8 py-3 border border-primary/20 rounded-lg text-primary font-label-sm hover:bg-primary/5 transition-colors">
                            Generate Full Report
                        </button>
</div>

<div className="glass-panel p-6 rounded-xl">
<h3 className="font-label-sm text-on-surface-variant mb-4">MISSING VALUE DENSITY</h3>
<div className="h-12 w-full flex gap-px bg-white/5 rounded overflow-hidden">
              {Array.from({ length: 100 }).map((_, i) => {
                // Seeded missing values (5% probability)
                const isMissing = ((i * 13 + 7) % 100) < 5;
                return (
                  <div key={i} className={`h-full flex-1 ${isMissing ? 'bg-error' : 'bg-primary/20'}`} />
                );
              })}
            </div>
<div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-mono-code uppercase">
<span>Index 0</span>
<span>Index 1,240,592</span>
</div>
</div>
</div>
</div>
</div>

<footer className="p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-on-surface-variant font-label-sm gap-4">
<div className="flex items-center gap-4">
<a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="hover:text-primary transition-colors" href="#">Documentation</a>
<a className="hover:text-primary transition-colors" href="#">API Reference</a>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><span className="status-dot bg-green-500 animate-pulse"></span> Engine Live</span>
<span>© 2024 MLCopilot Enterprise v2.4.1</span>
</div>
</footer>
</main>

<button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50">
<span className="material-symbols-outlined text-2xl">chat_bubble</span>
</button>


    </div>
  );
}
