"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function ExplainabilityPage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      



<main className="flex-1 flex flex-col min-w-0 relative">

<header className="w-full top-0 sticky bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl border-b border-white/5 shadow-sm flex justify-between items-center px-gutter h-16 z-40">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</span>
<nav className="hidden md:flex gap-6">
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Models</a>
<a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Deployments</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 text-body-md w-64 focus:ring-1 focus:ring-primary" placeholder="Search parameters..." type="text"/>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">notifications</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">help</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary p-[1px]">
<img alt="User avatar" className="w-full h-full rounded-full object-cover" data-alt="A professional headshot of a software engineer in a modern dark-lit studio. The lighting is moody with subtle blue and purple rim lights that match the futuristic design system. The individual has a confident, tech-savvy expression. High-end portrait photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQ_nrXoscNO5j0GjiSsfUj1EAg1CMsuHVVMARbCLE4pWNBlZ0ADbXSwc6TEsn5Z5_Fn096pdAJAmq0SLrBXpttOA9KLiByUFX-NtauGwWUcCYJ9_4NzIe4OQoXvTcFHaIsDc_Yt_gFoUFhbBHB5tEcZV-jQ0iIm86-nC-Lu6K3eOO4VroOexvVKGeZ1fljqzpiTJfr1QLi_2CIZE88QAKn9FLWyu4sPdiyytYLzqnuNO-w-44hnFVMlHZ0-3DKi6b2-RXrb_Ei8tp"/>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-gutter custom-scrollbar">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm mb-2">
<span>Models</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Fraud-Detection-V4</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary">Explainability</span>
</nav>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Interpretability Engine</h1>
<p className="text-on-surface-variant font-body-lg max-w-2xl mt-2">Deep-dive into the decision-making logic of Fraud-Detection-V4. Analyze feature contributions and local interpretations.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-lg border border-white/10 glass-panel text-on-surface font-label-sm text-label-sm flex items-center gap-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export SHAP Data
                    </button>
<button className="px-6 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">refresh</span>
                        Recalculate Values
                    </button>
</div>
</div>

<div className="grid grid-cols-12 gap-panel-gap">

<div className="col-span-12 lg:col-span-8 glass-panel rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary opacity-50"></div>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">analytics</span>
<h3 className="font-headline-md text-headline-md">SHAP Waterfall Plot</h3>
</div>
<div className="flex bg-surface-container-lowest rounded-lg p-1">
<button className="px-3 py-1 bg-surface-container text-primary rounded-md font-label-sm text-label-sm">Waterfall</button>
<button className="px-3 py-1 text-on-surface-variant rounded-md font-label-sm text-label-sm hover:text-on-surface">Summary</button>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-32 text-right font-mono-code text-mono-code text-on-surface-variant">Base Value</div>
<div className="flex-1 h-8 flex items-center">
<div className="h-full w-[20%] bg-surface-container-highest rounded-l-sm border-r border-white/10 flex items-center px-2 text-[10px] text-on-surface-variant">E[f(x)] = 0.24</div>
</div>
</div>

<div className="space-y-4">

<div className="flex items-center gap-4">
<div className="w-32 text-right font-mono-code text-mono-code">tx_amount</div>
<div className="flex-1 h-10 relative">
<div className="absolute left-[20%] w-[35%] h-full waterfall-bar-pos rounded-sm active-glow flex items-center justify-end px-3">
<span className="font-mono-code text-mono-code text-on-primary">+0.42</span>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-32 text-right font-mono-code text-mono-code">user_history</div>
<div className="flex-1 h-10 relative">
<div className="absolute left-[55%] w-[15%] h-full waterfall-bar-pos rounded-sm active-glow flex items-center justify-end px-3">
<span className="font-mono-code text-mono-code text-on-primary">+0.18</span>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-32 text-right font-mono-code text-mono-code">device_score</div>
<div className="flex-1 h-10 relative">
<div className="absolute left-[50%] w-[20%] h-full waterfall-bar-neg rounded-sm flex items-center justify-start px-3">
<span className="font-mono-code text-mono-code text-white">-0.25</span>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-32 text-right font-mono-code text-mono-code">loc_velocity</div>
<div className="flex-1 h-10 relative">
<div className="absolute left-[70%] w-[12%] h-full waterfall-bar-pos rounded-sm active-glow flex items-center justify-end px-3">
<span className="font-mono-code text-mono-code text-on-primary">+0.09</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 pt-4 border-t border-white/5">
<div className="w-32 text-right font-headline-md text-on-surface">Prediction</div>
<div className="flex-1 h-12 flex items-center">
<div className="h-full w-[82%] bg-primary/20 border-r-2 border-primary flex items-center justify-end px-4">
<span className="font-headline-md text-primary">f(x) = 0.84</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary">bar_chart</span>
<h3 className="font-headline-md text-headline-md">Global Importance</h3>
</div>
<div className="space-y-5">
<div className="space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Transaction Amount</span>
<span className="text-on-surface-variant">84%</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "84%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">User Tenure</span>
<span className="text-on-surface-variant">62%</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "62%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Device ID Match</span>
<span className="text-on-surface-variant">45%</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "45%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">IP Geolocation</span>
<span className="text-on-surface-variant">38%</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "38%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">Account Age</span>
<span className="text-on-surface-variant">21%</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "21%"}}></div>
</div>
</div>
</div>
<div className="mt-8">
<div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
<p className="text-on-surface-variant font-label-sm text-label-sm leading-relaxed">
<span className="text-primary font-bold">Insight:</span> "tx_amount" has shifted in importance by +12% since the last training cycle, suggesting a change in fraud patterns.
                            </p>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-panel-gap">
<div className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">psychology</span>
<h4 className="font-headline-md text-[18px]">What influenced this?</h4>
</div>
<p className="text-on-surface-variant font-body-md mb-4 leading-relaxed">
                            The prediction of <span className="text-primary font-bold">Fraud</span> was primarily driven by an unusually high <span className="font-mono-code text-on-surface">transaction_amount ($4,200)</span> relative to this user's typical spending profile.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-surface-container-highest rounded text-[11px] font-mono-code text-on-surface-variant">High Impact</span>
<span className="px-2 py-1 bg-surface-container-highest rounded text-[11px] font-mono-code text-on-surface-variant">Spending Deviation</span>
</div>
</div>
<div className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-error p-2 bg-error/10 rounded-lg">warning</span>
<h4 className="font-headline-md text-[18px]">Counterfactual View</h4>
</div>
<p className="text-on-surface-variant font-body-md mb-4 leading-relaxed">
                            If the <span className="font-mono-code text-on-surface">location_velocity</span> had been below <span className="text-error">20km/h</span>, the fraud probability would have decreased by <span className="text-primary">34%</span>.
                        </p>
<button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline">
                            Run alternative scenarios <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>

<div className="col-span-12 lg:col-span-5 glass-panel rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-tertiary">lightbulb</span>
<h3 className="font-headline-md text-headline-md">Business Impact</h3>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-tertiary">trending_up</span>
</div>
<div>
<h5 className="font-bold text-on-surface">Precision Boost</h5>
<p className="text-on-surface-variant font-label-sm text-label-sm leading-relaxed">Adjusting thresholds based on SHAP variance could reduce false positives by 12.4% in high-risk regions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary">verified_user</span>
</div>
<div>
<h5 className="font-bold text-on-surface">Compliance Ready</h5>
<p className="text-on-surface-variant font-label-sm text-label-sm leading-relaxed">Automated local explanations generated for 100% of declined transactions for GDPR Article 22 compliance.</p>
</div>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-surface-container-lowest rounded-xl border border-white/5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Model Reliability Score</span>
<span className="text-primary font-bold">98.2%</span>
</div>
<div className="w-full bg-surface-container-highest h-1 mt-2 rounded-full">
<div className="bg-primary h-full rounded-full" style={{width: "98.2%"}}></div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[5%] right-[-10%] w-[35%] h-[35%] bg-secondary/5 blur-[100px] rounded-full"></div>

</div>


    </div>
  );
}
