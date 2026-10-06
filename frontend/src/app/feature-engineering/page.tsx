"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function FeatureEngineeringPage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      
<div className="flex flex-1 h-full overflow-hidden">


<div className="flex-1 flex flex-col relative overflow-hidden">

<header className="w-full top-0 sticky bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl flex justify-between items-center px-gutter h-16 w-full border-b border-white/5 shadow-sm z-40">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</span>
<div className="hidden md:flex gap-6">
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Models</a>
<a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md transition-colors" href="#">Deployments</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md">search</span>
<input className="bg-surface-container-low border border-outline-variant rounded-full pl-10 pr-4 py-1.5 text-body-md focus:ring-1 focus:ring-primary focus:outline-none w-64 transition-all focus:w-80" placeholder="Search parameters..." type="text"/>
</div>
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-all">notifications</button>
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-all">help</button>
<div className="h-8 w-[1px] bg-outline-variant mx-2"></div>
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm text-label-sm font-bold active:scale-95 duration-150">Create Project</button>
<img alt="User avatar" className="w-8 h-8 rounded-full border border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5eINbxhybW0pMAv879bYoplMEiuOzaTmSkKS34EwZl4LfvQy03c-0bJn3NNnT3yFjglNRJvaJv4KxEX9TKnwxFQyJ3g16fWiJP6TdXlP797kbAXGFsVCtlvHlEzw2f972-YpxCKMQnJL1bEMjUonfUWoJHtQe9hKL_HklKf5HiZ-SvCUv47CPZSyAukF7_cgVxoTL_Cvy4UGg5_Rk3vBDMJDhHwvnmi0VYFCjzMhwbpkF9iI5lb9GKIpGuQmzLFzeOlkqSt7cnpsC"/>
</div>
</header>

<main className="flex-1 p-panel-gap flex flex-col gap-panel-gap overflow-y-auto">

<div className="flex flex-col lg:flex-row gap-panel-gap items-stretch">
<div className="flex-1 glass-panel p-6 rounded-xl flex flex-col justify-center">
<nav className="flex gap-2 text-on-surface-variant text-label-sm mb-2">
<span>Projects</span>
<span>/</span>
<span>DeepLearning_CRM</span>
<span>/</span>
<span className="text-primary">Feature Engineering</span>
</nav>
<h2 className="font-display-lg-mobile text-display-lg-mobile lg:font-display-lg lg:text-display-lg text-on-surface">Interactive Workspace</h2>
<p className="text-on-surface-variant mt-2 max-w-2xl">Refine your raw data into predictive signals. Use the node graph to chain transformations and let MLCopilot agents suggest optimal scaling strategies.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:w-1/3">
<div className="glass-panel p-4 rounded-xl flex flex-col justify-center">
<span className="text-label-sm text-on-surface-variant">Features</span>
<span className="text-headline-md font-bold text-primary">142</span>
</div>
<div className="glass-panel p-4 rounded-xl flex flex-col justify-center">
<span className="text-label-sm text-on-surface-variant">Pipeline Depth</span>
<span className="text-headline-md font-bold text-secondary">8 Nodes</span>
</div>
<div className="glass-panel p-4 rounded-xl flex flex-col justify-center">
<span className="text-label-sm text-on-surface-variant">Auto-Engineered</span>
<span className="text-headline-md font-bold text-tertiary">24</span>
</div>
<div className="glass-panel p-4 rounded-xl flex flex-col justify-center">
<span className="text-label-sm text-on-surface-variant">Signal-to-Noise</span>
<span className="text-headline-md font-bold text-primary">0.82</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-panel-gap flex-1 min-h-[600px]">

<div className="lg:col-span-8 glass-panel rounded-xl flex flex-col relative overflow-hidden group">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-surface-container-high/30">
<h3 className="font-headline-md text-[18px] text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">account_tree</span>
                                Pipeline Visualizer
                            </h3>
<div className="flex gap-2">
<button className="p-2 glass-panel rounded-lg hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-[20px]">zoom_in</span></button>
<button className="p-2 glass-panel rounded-lg hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-[20px]">play_arrow</span></button>
</div>
</div>

<div className="flex-1 relative p-gutter overflow-hidden flex items-center justify-center bg-[radial-gradient(#1f1f27_1px,transparent_1px)] [background-size:24px_24px]">


<div className="relative z-10 flex items-center gap-24">

<div className="w-48 p-4 glass-panel rounded-xl glow-primary border-primary/30 relative">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary">database</span>
<span className="text-label-sm font-bold uppercase tracking-wider">Source Data</span>
</div>
<p className="text-[12px] text-on-surface-variant font-mono-code">CRM_Exports_v4.csv</p>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
<div className="w-2 h-2 bg-background rounded-full"></div>
</div>
</div>

<div className="w-48 p-4 glass-panel rounded-xl relative hover:scale-105 transition-transform cursor-pointer group">
<div className="absolute inset-0 bg-secondary-container/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-2 mb-2 relative">
<span className="material-symbols-outlined text-secondary">healing</span>
<span className="text-label-sm font-bold uppercase tracking-wider">Imputation</span>
</div>
<p className="text-[12px] text-on-surface-variant relative">Strategy: Median Fill</p>
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
<div className="w-2 h-2 bg-background rounded-full"></div>
</div>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
<div className="w-2 h-2 bg-background rounded-full"></div>
</div>
</div>

<div className="w-48 p-4 glass-panel rounded-xl relative border-tertiary-container/30">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-tertiary">straighten</span>
<span className="text-label-sm font-bold uppercase tracking-wider">Scaling</span>
</div>
<p className="text-[12px] text-on-surface-variant">MinMax [0, 1]</p>
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center">
<div className="w-2 h-2 bg-background rounded-full"></div>
</div>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-tertiary-container flex items-center justify-center">
<div className="w-2 h-2 bg-background rounded-full"></div>
</div>
</div>

<div className="w-48 p-4 glass-panel rounded-xl border-dashed border-primary/40 opacity-70">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-on-surface-variant">output</span>
<span className="text-label-sm font-bold uppercase tracking-wider">Output</span>
</div>
<p className="text-[12px] text-on-surface-variant">Ready for Training</p>
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-outline flex items-center justify-center">
<div className="w-2 h-2 bg-background rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-panel-gap">
<div className="glass-panel p-6 rounded-xl flex-1">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
<h3 className="font-headline-md text-[18px]">Agent Insights</h3>
</div>
<div className="space-y-4">
<div className="p-4 bg-surface-container-high/50 rounded-lg border-l-4 border-secondary">
<h4 className="text-label-sm font-bold text-secondary mb-1">DATA LEAKAGE ALERT</h4>
<p className="text-body-md text-[14px]">I've detected timestamps that might be causing target leakage. Recommend removing `Session_End_Time` before training.</p>
<button className="mt-3 text-primary text-[12px] font-bold flex items-center gap-1 hover:underline">Apply Recommendation <span className="material-symbols-outlined text-[14px]">arrow_forward</span></button>
</div>
<div className="p-4 bg-surface-container-high/50 rounded-lg border-l-4 border-tertiary">
<h4 className="text-label-sm font-bold text-tertiary mb-1">SKEWNESS DETECTED</h4>
<p className="text-body-md text-[14px]">`Annual_Spend` has a skewness coefficient of 4.2. Log-transformation is highly suggested.</p>
<button className="mt-3 text-primary text-[12px] font-bold flex items-center gap-1 hover:underline">Fix Skewness <span className="material-symbols-outlined text-[14px]">arrow_forward</span></button>
</div>
<div className="p-4 bg-surface-container-high/50 rounded-lg border-l-4 border-primary">
<h4 className="text-label-sm font-bold text-primary mb-1">ENCODING OPTIMIZATION</h4>
<p className="text-body-md text-[14px]">`User_City` has high cardinality (500+). Target encoding will perform better than One-Hot.</p>
<button className="mt-3 text-primary text-[12px] font-bold flex items-center gap-1 hover:underline">Apply Encoding <span className="material-symbols-outlined text-[14px]">arrow_forward</span></button>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl h-64 overflow-hidden flex flex-col">
<h3 className="text-label-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Feature Importance</h3>
<div className="flex-1 flex flex-col justify-between">
<div className="space-y-3">
<div className="flex items-center gap-4">
<span className="text-[11px] font-mono-code w-24 truncate">Session_Len</span>
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[92%] rounded-full shadow-[0_0_8px_rgba(192,193,255,0.4)]"></div>
</div>
<span className="text-[11px] font-mono-code">0.92</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[11px] font-mono-code w-24 truncate">Prev_Churn</span>
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[78%] rounded-full opacity-80"></div>
</div>
<span className="text-[11px] font-mono-code">0.78</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[11px] font-mono-code w-24 truncate">Support_Ticks</span>
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[65%] rounded-full opacity-60"></div>
</div>
<span className="text-[11px] font-mono-code">0.65</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[11px] font-mono-code w-24 truncate">User_Age</span>
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[42%] rounded-full opacity-40"></div>
</div>
<span className="text-[11px] font-mono-code">0.42</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden mb-gutter">
<div className="flex items-center justify-between p-4 border-b border-white/5 bg-surface-container-high/30">
<div className="flex items-center gap-6">
<h3 className="font-headline-md text-[18px]">Data Comparison</h3>
<div className="flex rounded-lg bg-surface-container p-1">
<button className="px-3 py-1 text-label-sm font-bold bg-surface-container-high text-primary rounded shadow-sm">Before vs After</button>
<button className="px-3 py-1 text-label-sm font-bold text-on-surface-variant hover:text-on-surface">Statistical Drift</button>
</div>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 glass-panel rounded-lg text-label-sm hover:bg-primary/5 transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Export Preview
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="p-4 text-label-sm font-bold text-on-surface-variant border-b border-white/5">Row ID</th>
<th className="p-4 text-label-sm font-bold text-on-surface-variant border-b border-white/5">Feature: Annual_Spend (Raw)</th>
<th className="p-4 text-label-sm font-bold text-primary border-b border-white/5">Feature: Annual_Spend (Scaled)</th>
<th className="p-4 text-label-sm font-bold text-on-surface-variant border-b border-white/5">Feature: User_ID (Raw)</th>
<th className="p-4 text-label-sm font-bold text-primary border-b border-white/5">Feature: User_Cluster (Engineered)</th>
<th className="p-4 text-label-sm font-bold text-on-surface-variant border-b border-white/5">Status</th>
</tr>
</thead>
<tbody className="text-body-md text-[14px]">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="p-4 font-mono-code text-on-surface-variant">#9281</td>
<td className="p-4">12,450.00</td>
<td className="p-4 text-primary font-bold">0.842</td>
<td className="p-4 font-mono-code">u_4812_ax</td>
<td className="p-4 font-bold text-secondary">High-Value</td>
<td className="p-4">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold border border-primary/20">Clean</span>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="p-4 font-mono-code text-on-surface-variant">#9282</td>
<td className="p-4 text-error">NULL</td>
<td className="p-4 text-primary font-bold italic">0.412 (Imputed)</td>
<td className="p-4 font-mono-code">u_1002_bz</td>
<td className="p-4 font-bold text-secondary">Churn-Risk</td>
<td className="p-4">
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary text-[10px] uppercase font-bold border border-tertiary-container/20">Imputed</span>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="p-4 font-mono-code text-on-surface-variant">#9283</td>
<td className="p-4">450.00</td>
<td className="p-4 text-primary font-bold">0.125</td>
<td className="p-4 font-mono-code">u_9921_kl</td>
<td className="p-4 font-bold text-secondary">Standard</td>
<td className="p-4">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold border border-primary/20">Clean</span>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="p-4 font-mono-code text-on-surface-variant">#9284</td>
<td className="p-4">25,890.00</td>
<td className="p-4 text-primary font-bold">0.991</td>
<td className="p-4 font-mono-code">u_0032_pp</td>
<td className="p-4 font-bold text-secondary">High-Value</td>
<td className="p-4">
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold border border-primary/20">Clean</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>

<button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-on-primary shadow-2xl glow-primary flex items-center justify-center group active:scale-90 transition-all z-50">
<span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">auto_fix_high</span>
<span className="absolute right-16 bg-surface-container text-primary px-4 py-2 rounded-lg text-label-sm font-bold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-primary/20">Auto-Apply Pipeline</span>
</button>
</div>
</div>



    </div>
  );
}
