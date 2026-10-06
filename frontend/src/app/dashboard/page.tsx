"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { api } from "@/services/api";

export default function DashboardPage() {
  const [totalModels, setTotalModels] = useState(0);

  useEffect(() => {
    async function fetchOverview() {
      try {
        const lb = await api.getOverview();
        setTotalModels(lb.summary?.total_models || lb.leaderboard?.length || 0);
      } catch (err) {
        console.error("Failed to load overview data:", err);
      }
    }
    fetchOverview();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      



<main className="flex-1 flex flex-col h-screen relative overflow-hidden bg-background">



<header className="h-16 flex justify-between items-center w-full px-margin-container bg-surface/80 backdrop-blur-xl border-b border-white/10 z-50 shrink-0">
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px] transition-colors group-focus-within:text-primary">search</span>
<input className="bg-surface-container-highest/50 border-none rounded-full pl-10 pr-6 py-2 text-sm w-80 focus:ring-1 focus:ring-primary/50 text-on-surface-variant placeholder:text-outline transition-all" placeholder="Search experiments or agents..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-white/5 transition-all">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-white/5 transition-all">
<span className="material-symbols-outlined">apps</span>
</button>
<div className="h-8 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-3 cursor-pointer">
<div className="text-right hidden sm:block">
<p className="font-label-sm text-on-surface leading-none">Alex Rivera</p>
<p className="text-[10px] text-primary">Senior ML Ops</p>
</div>
<div className="relative">
<img alt="User profile photo with status indicator" className="w-9 h-9 rounded-full object-cover border border-white/10" data-alt="A professional headshot of a Hispanic male software engineer in his late 30s with a focused and intelligent expression. He is wearing a dark, minimalist tech-wear jacket. The background is a blurred, high-end office with soft bokeh lights in cool blue and purple tones, matching the futuristic MLCopilot brand aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjt26v7D3Ia_cpHoj3hExPpQaUeZHuZIkUrPZ78HTRR02PKr0suyS1VFYI9fA1myUmfTUBMgCelf7UlUCV67lZevuaD_FC_0_cFXqyIvGhv1LebpKATwG4ec_6XfFvVmNsCZH2PmRrG4dZUjYknq4YpH1yEVJAgOSExPLQfK8Zijvv3zvuoWqk3PGgkgr_EzaPe98n8W5V0uP9m9Nw9tavwyBkT2Ky7xnx34XRZ0G4VvkRtTKDn4lGbKQnxON_ihkeZzUl6zfVRHfU"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background status-pulse"></span>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-margin-container custom-scrollbar relative z-10">
<div className="max-w-[1400px] mx-auto space-y-panel-gap">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-display-lg text-on-surface text-[32px] tracking-tight">System Overview</h2>
<p className="font-body-md text-on-surface-variant max-w-lg">Monitoring 24 active agent instances across 4 distributed neural clusters.</p>
</div>
<div className="flex gap-3">
<button className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-all active:scale-95">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
<span className="font-label-sm">Upload Dataset</span>
</button>
<button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg flex items-center gap-2 font-label-sm hover:opacity-90 active:scale-95 transition-all active-glow">
<span className="material-symbols-outlined text-[20px]">add</span>
                            New Project
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-panel-gap">

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary-container"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">dynamic_feed</span>
</div>
<span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">+12%</span>
</div>
<p className="font-label-sm text-outline uppercase tracking-widest mb-1">Active Projects</p>
<p className="font-display-lg text-[28px] text-on-surface">14</p>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary">storage</span>
</div>
<span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">4.2 TB</span>
</div>
<p className="font-label-sm text-outline uppercase tracking-widest mb-1">Datasets Uploaded</p>
<p className="font-display-lg text-[28px] text-on-surface">1,024</p>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary-fixed-dim">model_training</span>
</div>
<span className="text-[10px] font-bold text-outline bg-outline/10 px-2 py-0.5 rounded-full">Live</span>
</div>
<p className="font-label-sm text-outline uppercase tracking-widest mb-1">Models Trained</p>
<p className="font-display-lg text-[28px] text-on-surface">{totalModels}</p>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-error-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-error">assessment</span>
</div>
<span className="text-[10px] font-bold text-error bg-error/10 px-2 py-0.5 rounded-full">New</span>
</div>
<p className="font-label-sm text-outline uppercase tracking-widest mb-1">Reports Generated</p>
<p className="font-display-lg text-[28px] text-on-surface">242</p>
</div>
</div>

<div className="grid grid-cols-12 gap-panel-gap">

<div className="col-span-12 lg:col-span-8 glass-panel rounded-2xl p-6 min-h-[400px] flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-headline-md text-on-surface">Model Performance Trends</h3>
<p className="font-label-sm text-outline">Mean F1-score across all active production models</p>
</div>
<div className="flex bg-surface-container-highest/30 p-1 rounded-lg">
<button className="px-3 py-1 rounded-md bg-primary/20 text-primary font-label-sm">Day</button>
<button className="px-3 py-1 rounded-md text-outline font-label-sm hover:text-on-surface">Week</button>
<button className="px-3 py-1 rounded-md text-outline font-label-sm hover:text-on-surface">Month</button>
</div>
</div>
<div className="flex-1 flex items-end justify-between gap-2 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="border-b border-outline w-full h-px"></div>
<div className="border-b border-outline w-full h-px"></div>
<div className="border-b border-outline w-full h-px"></div>
<div className="border-b border-outline w-full h-px"></div>
<div className="border-b border-outline w-full h-px"></div>
</div>

<div className="flex-1 flex items-end justify-around h-full pt-10 z-10">
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80" style={{height: "60%"}}></div>
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80" style={{height: "45%"}}></div>
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80" style={{height: "75%"}}></div>
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80" style={{height: "65%"}}></div>
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80" style={{height: "90%"}}></div>
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80 active-glow" style={{height: "85%"}}></div>
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80" style={{height: "70%"}}></div>
<div className="w-8 bg-gradient-to-t from-primary/5 to-primary rounded-t-lg transition-all hover:opacity-80" style={{height: "80%"}}></div>
</div>
</div>
<div className="flex justify-around mt-4">
<span className="font-label-sm text-outline">08:00</span>
<span className="font-label-sm text-outline">10:00</span>
<span className="font-label-sm text-outline">12:00</span>
<span className="font-label-sm text-outline">14:00</span>
<span className="font-label-sm text-outline">16:00</span>
<span className="font-label-sm text-outline">18:00</span>
<span className="font-label-sm text-outline">20:00</span>
<span className="font-label-sm text-outline">22:00</span>
</div>
</div>

<div className="col-span-12 lg:col-span-4 glass-panel rounded-2xl p-6 flex flex-col">
<div className="mb-6">
<h3 className="font-headline-md text-on-surface">Agent Activity</h3>
<p className="font-label-sm text-outline">Resource allocation by agent type</p>
</div>
<div className="flex-1 flex items-center justify-center relative py-6">

<div className="w-48 h-48 border border-outline/20 rounded-full flex items-center justify-center relative">
<div className="w-32 h-32 border border-outline/20 rounded-full flex items-center justify-center">
<div className="w-16 h-16 border border-outline/20 rounded-full"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-outline/10 rotate-45"></div></div>
<div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-outline/10 -rotate-45"></div></div>
<div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-outline/10 rotate-90"></div></div>

<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
<polygon fill="rgba(192, 193, 255, 0.4)" points="50,20 80,40 70,80 30,80 20,40" stroke="#c0c1ff" strokeWidth="1.5" />
</svg>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 font-label-sm text-on-surface-variant">Compute</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-label-sm text-on-surface-variant">Memory</div>
<div className="absolute top-1/2 left-0 -translate-y-1/2 font-label-sm text-on-surface-variant">Latent</div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 font-label-sm text-on-surface-variant">IO</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="font-label-sm text-on-surface-variant">Supervisor</span>
</div>
<span className="font-label-sm text-on-surface">42%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary-container"></div>
<span className="font-label-sm text-on-surface-variant">Optimization</span>
</div>
<span className="font-label-sm text-on-surface">31%</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 glass-panel rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-on-surface">Recent Activity</h3>
<button className="text-primary font-label-sm hover:underline">View Log</button>
</div>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-[20px]">person_search</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<p className="font-label-sm text-on-surface">Supervisor Agent initiated feature selection</p>
<span className="text-[10px] text-outline">2m ago</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">System identified 12 redundant parameters in <span className="text-secondary-fixed-dim">Project X</span>. Autoreduction protocol enabled.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center border border-tertiary/20 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<p className="font-label-sm text-on-surface">Model Agent achieved 94% accuracy</p>
<span className="text-[10px] text-outline">14m ago</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">Validation set benchmark complete. Convergence achieved in 140 epochs for <span className="text-primary-fixed">DeepVision-BETA</span>.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center border border-secondary-container/30 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]">cloud_sync</span>
</div>
<div className="flex-1 border-b border-white/5 pb-4">
<div className="flex justify-between mb-1">
<p className="font-label-sm text-on-surface">Cluster Synchronization Complete</p>
<span className="text-[10px] text-outline">45m ago</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">Weights distributed to edge nodes across Europe-West regions successfully.</p>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 glass-panel rounded-2xl overflow-hidden relative group">
<img alt="Neural network visualization" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="A macro cinematic visualization of a neural network being constructed in real-time. Shimmering threads of glowing indigo and electric blue light connect nodes that pulse with energy against a deep black background. The style is hyper-realistic and futuristic, with a shallow depth of field focusing on the intricate interplay of data streams and light, perfectly representing the high-tech MLCopilot brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMwzOxfwkkovkDRkmzlYAB82mo8D0hVZzs0y3YMISOyvhF0R6x5jt8hVpULx_ZHPmlor95FM0Vf_7YsCjel4tjiGQRfUWi8huU4NXi5t_Q4ySBG4wSkOOFkdbtQJTpB0XB4eayw-FmGh5XEtIbS3DQeOeIYXl-tPuS-hcSnp2CZBTggpSB-fjyZF9v9Yx5DI_TtxjAOv5BFbTsRXZBm3Jg7DU1me3wrKrEGG5H63f_1ZoEBrqk232oGKfvgE9O7RPn2H0CqeYpiIgI"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/60 to-transparent"></div>
<div className="relative p-8 h-full flex flex-col justify-end">
<span className="w-fit bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Pro Insight</span>
<h3 className="font-headline-md text-on-surface mb-2">Optimize Pipeline Efficiency</h3>
<p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Our AI suggests a 22% latency reduction by switching to Int8 quantization for your current active deployment.</p>
<button className="w-fit glass-panel border-white/20 px-6 py-2.5 rounded-lg font-label-sm text-on-surface hover:bg-white/10 transition-all">
                                Run Optimization Analysis
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center px-4 z-[100]">
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">folder_open</span>
<span className="text-[10px] font-medium">Projects</span>
</button>
<div className="relative -top-6">
<button className="w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-lg shadow-primary/20 flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[32px]">add</span>
</button>
</div>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">assessment</span>
<span className="text-[10px] font-medium">Reports</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">settings</span>
<span className="text-[10px] font-medium">Settings</span>
</button>
</nav>


    </div>
  );
}
