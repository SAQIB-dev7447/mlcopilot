"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function InsightsPage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      



<main className="flex-1 flex flex-col min-w-0">

<header className="w-full top-0 sticky z-40 bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl border-b border-white/5 shadow-sm h-16 flex justify-between items-center px-gutter">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</span>
<div className="hidden md:flex gap-6">
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors active:scale-95 duration-150" href="#">Models</a>
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors active:scale-95 duration-150" href="#">Deployments</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-sm">search</span>
<input className="bg-surface-container-lowest border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:border-primary focus:ring-0 w-64 transition-all" placeholder="Search insights..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-variant border border-white/10 overflow-hidden ml-2">
<img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnqnXzBvB4JThNuLi9iWT0dJanNdoiFM_yhLn4zwsE3JuoCBA6apkdrMFhoNPfs9GUUk6ZvmYIdB1Km-kvLY48TtM1mA8n2P3cVEnFb8n4w69hNtxja-swLr8VaQ60c1beU0OTqjdQx3Z-tBBKPTydgi0LXMnGZHOqkxKia8It8KiWgqe10x2mlcsAqJMtG0FOp5xvaSoEzP3b5XEH3D_x7xNMA0SiyXvdXtnWIMRgSqWbNpawxFpCjyM3VtnTO7-2Ss3vnr1AKu-6"/>
</div>
</div>
<button className="ml-2 bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-sm glow-primary active:scale-95 duration-150">Create Project</button>
</div>
</header>

<div className="flex-1 p-gutter overflow-y-auto space-y-panel-gap">

<section className="relative h-48 rounded-xl overflow-hidden glass-panel p-8 flex flex-col justify-end">

<div className="relative z-10">
<h2 className="font-display-lg text-display-lg text-primary-fixed mb-2">Executive Insights</h2>
<p className="font-body-lg text-on-surface-variant max-w-2xl">Autonomous cross-analysis of active deployments, project metrics, and market volatility signals.</p>
</div>
</section>

<div className="grid grid-cols-12 gap-panel-gap">

<div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-panel-gap">

<div className="glass-panel p-6 rounded-xl hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="bg-secondary-container/30 text-secondary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">High Impact</span>
<div className="flex items-center gap-1 text-primary">
<span className="font-bold">98%</span>
<span className="text-[10px] uppercase font-mono-code">Confidence</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md mb-3 text-on-surface leading-tight">Agent Latency Anomaly detected in Region-US-East</h3>
<p className="text-on-surface-variant font-body-md mb-6">Cross-comparison suggests a 12% drop in token efficiency correlated with the latest model update deployment.</p>
<div className="flex items-center gap-4 mt-auto">
<div className="flex-1 bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[98%]"></div>
</div>
<span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
</div>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="bg-tertiary-container/30 text-tertiary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Efficiency Win</span>
<div className="flex items-center gap-1 text-primary">
<span className="font-bold">84%</span>
<span className="text-[10px] uppercase font-mono-code">Confidence</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md mb-3 text-on-surface leading-tight">Cost Optimization: Dataset Distillation Strategy</h3>
<p className="text-on-surface-variant font-body-md mb-6">Implementing recursive pruning on 'Alpha-Flow' datasets could reduce compute overhead by $4.2k monthly.</p>
<div className="flex items-center gap-4 mt-auto">
<div className="flex-1 bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-[84%]"></div>
</div>
<span className="material-symbols-outlined text-tertiary text-sm">savings</span>
</div>
</div>

<div className="md:col-span-2 glass-panel p-8 rounded-xl">
<div className="flex items-center justify-between mb-8">
<h3 className="font-headline-md text-headline-md">Trend Analysis Matrix</h3>
<div className="flex gap-2">
<button className="px-4 py-1 rounded-full bg-surface-container-highest text-xs font-bold text-on-surface border border-white/5">Daily</button>
<button className="px-4 py-1 rounded-full text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors">Weekly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="font-label-sm text-on-surface-variant">Global Throughput</span>
<span className="text-primary font-bold">+14.2%</span>
</div>
<svg className="w-full h-12 overflow-visible" viewBox="0 0 100 30">
<path className="text-primary sparkline-path" d="M0,25 Q15,5 30,20 T60,10 T90,28 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
</svg>
<p className="text-xs text-on-surface-variant/60 font-mono-code">2.4M Tokens / min avg.</p>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="font-label-sm text-on-surface-variant">Error Convergence</span>
<span className="text-error font-bold">-2.1%</span>
</div>
<svg className="w-full h-12 overflow-visible" viewBox="0 0 100 30">
<path className="text-error sparkline-path" d="M0,5 Q20,25 40,15 T70,25 T100,20" fill="none" stroke="currentColor" strokeWidth="2" />
</svg>
<p className="text-xs text-on-surface-variant/60 font-mono-code">Validation Loss: 0.042</p>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="font-label-sm text-on-surface-variant">Compute Velocity</span>
<span className="text-tertiary font-bold">+8.7%</span>
</div>
<svg className="w-full h-12 overflow-visible" viewBox="0 0 100 30">
<path className="text-tertiary sparkline-path" d="M0,20 Q10,10 20,25 T40,5 T60,20 T80,10 T100,15" fill="none" stroke="currentColor" strokeWidth="2" />
</svg>
<p className="text-xs text-on-surface-variant/60 font-mono-code">Cluster Uptime: 99.98%</p>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-panel-gap">

<div className="glass-panel p-6 rounded-xl">
<h3 className="font-headline-md text-headline-md mb-6">Strategic Indicators</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-highest/30 border border-white/5">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
<span className="font-label-sm">Token Saturation</span>
</div>
<span className="bg-error-container text-on-error-container text-[10px] px-2 py-0.5 rounded font-bold uppercase">Critical Risk</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-highest/30 border border-white/5">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm">Market Drift</span>
</div>
<span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded font-bold uppercase">Monitor</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-highest/30 border border-white/5">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-sm">Competitive GAP</span>
</div>
<span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 rounded font-bold uppercase">Opportunity</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden flex flex-col h-full">
<div className="p-6 border-b border-white/5">
<h3 className="font-headline-md text-headline-md">Strategic Roadmap</h3>
<p className="text-xs text-on-surface-variant mt-1">Generated by Agent Insight-v4</p>
</div>
<div className="flex-1 p-6 space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 shrink-0 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/10 font-mono-code text-primary">01</div>
<div>
<p className="font-bold text-sm mb-1">Scale Cluster-7 Dynamic Sharding</p>
<p className="text-xs text-on-surface-variant">Allocate 20% more GPU resources to regional clusters to mitigate latency spikes observed in morning peaks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 shrink-0 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/10 font-mono-code text-primary">02</div>
<div>
<p className="font-bold text-sm mb-1">Initiate Model Distillation</p>
<p className="text-xs text-on-surface-variant">Compress the 'Titan-XL' weights to a quantized 4-bit format for edge-node deployment to save $2k bandwidth costs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 shrink-0 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/10 font-mono-code text-primary">03</div>
<div>
<p className="font-bold text-sm mb-1">Deprecate v2.1 API Endpoint</p>
<p className="text-xs text-on-surface-variant">Migration complete for 94% of users. Shutdown legacy node to free up maintenance overhead.</p>
</div>
</div>
</div>
<button className="w-full p-4 bg-surface-container-highest text-on-surface font-bold text-sm hover:bg-surface-bright transition-colors border-t border-white/5 flex items-center justify-center gap-2">
<span>Download Executive Summary</span>
<span className="material-symbols-outlined text-sm">download</span>
</button>
</div>
</div>
</div>

<section className="glass-panel rounded-xl p-8">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h3 className="font-headline-md text-headline-md">Cross-Project Correlation Map</h3>
<p className="font-label-sm text-on-surface-variant">Mapping agent inter-dependencies vs resource consumption</p>
</div>
<div className="flex items-center gap-4 bg-surface-container-lowest p-1.5 rounded-lg border border-white/5">
<button className="px-4 py-2 text-xs font-bold rounded-md bg-primary text-on-primary">Network View</button>
<button className="px-4 py-2 text-xs font-bold rounded-md text-on-surface-variant hover:text-on-surface transition-colors">Grid Analysis</button>
</div>
</div>
<div className="h-96 relative w-full flex items-center justify-center border border-white/5 rounded-xl bg-surface-container-lowest/50 overflow-hidden">


<div className="absolute top-1/4 left-1/3 glass-panel p-3 rounded shadow-lg border border-primary/30 z-10 animate-bounce">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-[10px] font-bold uppercase font-mono-code">Core_Engine_A</span>
</div>
<p className="text-[10px] text-on-surface-variant">Critical pathway dependency</p>
</div>
<div className="absolute bottom-1/3 right-1/4 glass-panel p-3 rounded shadow-lg border border-secondary/30 z-10">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-[10px] font-bold uppercase font-mono-code">Deploy_Node_Z</span>
</div>
<p className="text-[10px] text-on-surface-variant">Congestion detected</p>
</div>
</div>
</section>
</div>
</main>


    </div>
  );
}
