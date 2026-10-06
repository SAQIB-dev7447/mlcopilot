"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function WorkspacePage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      



<main className="flex-1 flex flex-col relative overflow-hidden bg-surface-container-lowest/50">

<header className="h-16 flex items-center justify-between px-margin-container glass-panel border-b border-white/5 z-20">
<div className="flex flex-col">
<span className="text-on-surface font-headline-md text-headline-md leading-none">Customer Churn Analysis</span>
<span className="text-on-surface-variant text-[12px] mt-1 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    Workspace v2.4.1 — Telco_Dataset.csv
                </span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-white/5 text-on-surface-variant">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional profile headshot of a software engineer with a neutral expression, high-contrast studio lighting, focused gaze, and a blurred technological laboratory background in cool blues and greys." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABThYBDtOtWfnIFA2x6b052OJj9AcaRGFqSFkk-hth3kAcF2puFcTp-Vm5Nj5Rg8ABPd6A154Pe_YkYk4tJWzg-3bHHt_2hE_VOpUdT1Ps1ks3s1uQzjnqjuRTiBswaozY1DO0b0YuL-UuhLA6_eG2eypATdRgH4CyOU9Fo5g_PwMtimYLeNRw-pmRu5loYKmuu105WLmAQzRaAKgl1YWpHlY-6nmQtuvgCsn0MOsLnqZuPA82_rOZz7y52i2-IFiinHCd2W3SJv-k"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-margin-container space-y-gutter relative">



<div className="flex justify-end animate-in slide-in-from-right duration-500">
<div className="max-w-[80%] glass-card p-4 rounded-2xl rounded-tr-none border-primary/20">
<p className="text-on-surface">Predict customer churn based on the current dataset. I need a model that identifies high-risk customers with at least 85% precision.</p>
</div>
</div>

<div className="flex flex-col gap-4 animate-in slide-in-from-left duration-700">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-none mt-1">
<span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
</div>
<div className="flex-1 space-y-4">
<div className="max-w-[90%] glass-panel p-5 rounded-2xl rounded-tl-none border-white/10 shadow-xl neon-glow-primary">
<p className="text-on-surface mb-4">Understood. I've analyzed <span className="text-secondary font-bold">Telco_Dataset.csv</span>. There are 7,043 rows and 21 features. I am initiating the "Predictive Churn Pipeline" now.</p>

<div className="glass-card rounded-xl border-white/5 overflow-hidden mb-4">
<div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
<span className="text-[11px] uppercase tracking-widest font-bold text-outline">Dataset Snapshot</span>
<span className="text-[11px] text-tertiary">2.4MB • CSV</span>
</div>
<div className="p-3 overflow-x-auto">
<table className="w-full text-[12px] text-left">
<thead>
<tr className="text-on-surface-variant border-b border-white/5">
<th className="pb-2 px-2 font-medium">CustomerID</th>
<th className="pb-2 px-2 font-medium">Tenure</th>
<th className="pb-2 px-2 font-medium">Contract</th>
<th className="pb-2 px-2 font-medium">MonthlyCharges</th>
<th className="pb-2 px-2 font-medium">Churn</th>
</tr>
</thead>
<tbody className="text-on-surface/80">
<tr>
<td className="py-2 px-2">7590-VHVEG</td>
<td className="py-2 px-2">1</td>
<td className="py-2 px-2">Month-to-month</td>
<td className="py-2 px-2">$29.85</td>
<td className="py-2 px-2"><span className="text-error">Yes</span></td>
</tr>
<tr>
<td className="py-2 px-2">5575-GNVDE</td>
<td className="py-2 px-2">34</td>
<td className="py-2 px-2">One year</td>
<td className="py-2 px-2">$56.95</td>
<td className="py-2 px-2"><span className="text-primary">No</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-3">
<h4 className="text-label-sm font-label-sm text-secondary uppercase tracking-widest">Execution Plan</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-start gap-3">
<div className="text-primary font-bold text-lg">01</div>
<div>
<p className="text-sm font-bold text-on-surface">Pre-processing</p>
<p className="text-[11px] text-on-surface-variant">Clean nulls, encode categorical variables.</p>
</div>
</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-start gap-3">
<div className="text-primary font-bold text-lg">02</div>
<div>
<p className="text-sm font-bold text-on-surface">Feature Selection</p>
<p className="text-[11px] text-on-surface-variant">Identify drivers of churn via Random Forest.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="p-margin-container pt-0">
<div className="glass-panel p-2 rounded-2xl border-white/10 flex items-end gap-3 shadow-2xl">
<button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">attach_file</span>
</button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline p-3 resize-none max-h-32 min-h-[56px] font-body-md" placeholder="Ask anything about your ML model..."></textarea>
<button className="bg-primary hover:bg-primary-container text-on-primary-container h-12 w-12 rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-lg neon-glow-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
</button>
</div>
<div className="flex justify-center mt-3 gap-6">
<span className="text-[10px] text-outline flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">bolt</span> GPT-4o Enhanced</span>
<span className="text-[10px] text-outline flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">security</span> Data Encryption Active</span>
</div>
</footer>
</main>




    </div>
  );
}
