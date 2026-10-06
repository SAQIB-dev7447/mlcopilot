"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";


export default function SettingsPage() {

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      
<div className="flex flex-1 h-full overflow-hidden">



<main className="flex-1 flex flex-col h-full overflow-hidden">

<header className="w-full top-0 sticky z-40 bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl border-b border-white/5 shadow-sm h-16 flex justify-between items-center px-gutter">
<div className="flex items-center gap-8">
<h1 className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</h1>
<nav className="hidden md:flex gap-6">
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors active:scale-95 duration-150" href="#">Models</a>
<a className="text-primary font-bold border-b-2 border-primary pb-1 transition-colors active:scale-95 duration-150" href="#">Deployments</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant">search</span>
<input className="bg-surface-container-low border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-body-md focus:outline-none focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search resources..." type="text"/>
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">help</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary/30">
<img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyggSB8kYixYYPDVIpLUaUxjv_R5BiUAuuezTKJjoEJKaNChKAMWIC0JtFtGhnMVYYNZdLjl_FKqybOf-YBWE8WDJZrunBYxQvDdd0n1oj9bc3RtaC1b9Dl2PyaXjeup_zTBZf7Ic53is8joCn4gsMOp1VJWblLkvyPqpuOU8VgiDiZUZiUukamM_b_fL_BprEerJEqBqtjV95_KqJisquH314lndZpshCQz2YSeaFm4QARTMAuEEv2W3PvVUi_HbXyiCXWBRWTnzy"/>
</div>
</div>
</header>
<div className="p-gutter space-y-gutter overflow-y-auto">




<div className="border-white/5" id="settings-anchor">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-4xl text-primary">settings_applications</span>
<h2 className="font-display-lg text-display-lg">System Settings</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-panel-gap">

<div className="lg:col-span-1 space-y-2">
<button className="w-full flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg font-bold border-r-4 border-primary text-left">
<span className="material-symbols-outlined">person</span>
                                Profile &amp; Account
                            </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/5 rounded-lg text-left transition-all">
<span className="material-symbols-outlined">key</span>
                                API Keys &amp; Security
                            </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/5 rounded-lg text-left transition-all">
<span className="material-symbols-outlined">psychology</span>
                                LLM Configuration
                            </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/5 rounded-lg text-left transition-all">
<span className="material-symbols-outlined">notifications_active</span>
                                Notifications
                            </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-white/5 rounded-lg text-left transition-all">
<span className="material-symbols-outlined">payments</span>
                                Billing &amp; Plan
                            </button>
</div>

<div className="lg:col-span-3 space-y-8">

<div className="glass-panel rounded-xl p-8">
<h3 className="font-headline-md text-headline-md mb-6">Organization Profile</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Display Name</label>
<input className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none text-body-md" type="text" value="Quantum Dev Operations"/>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Primary Domain</label>
<input className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none text-body-md" type="text" value="mlcopilot.ai/quantum"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Notification Email</label>
<input className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 focus:border-primary outline-none text-body-md" type="email" value="admin@quantum-dev.io"/>
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="px-8 py-3 bg-primary text-on-primary rounded-lg font-bold hover:brightness-110 transition-all active:scale-95">Save Changes</button>
</div>
</div>

<div className="glass-panel rounded-xl p-8">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md">LLM Architecture</h3>
<span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">Enterprise Tier</span>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-primary/20 transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary">auto_awesome</span>
</div>
<div>
<h4 className="font-body-md font-bold text-on-surface">Default Provider</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Currently using GPT-4o-turbo</p>
</div>
</div>
<button className="text-primary font-label-sm text-label-sm hover:underline">Switch</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-lg bg-surface-container-low border border-white/5 text-center">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Context Window</p>
<p className="font-mono-code text-lg font-bold text-primary">128k</p>
</div>
<div className="p-4 rounded-lg bg-surface-container-low border border-white/5 text-center">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Max Tokens</p>
<p className="font-mono-code text-lg font-bold text-primary">4,096</p>
</div>
<div className="p-4 rounded-lg bg-surface-container-low border border-white/5 text-center">
<p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Temperature</p>
<p className="font-mono-code text-lg font-bold text-primary">0.7</p>
</div>
</div>
<div className="pt-4">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">GPU Memory Usage</span>
<span className="font-label-sm text-label-sm text-primary">68%</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[68%]"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-8">
<h3 className="font-headline-md text-headline-md mb-6">Security &amp; API Keys</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-white/10">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant">shield</span>
<div>
<p className="font-body-md font-bold">Production_Key_Main</p>
<p className="font-mono-code text-xs text-on-surface-variant">pk_live_********************8a2f</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-white/10 rounded-lg transition-all"><span className="material-symbols-outlined text-sm">visibility</span></button>
<button className="p-2 hover:bg-white/10 rounded-lg transition-all"><span className="material-symbols-outlined text-sm text-error">delete</span></button>
</div>
</div>
<button className="w-full py-4 border-2 border-dashed border-white/10 rounded-lg text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">add_circle</span>
                                        Generate New API Key
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-gutter"></div>
</main>
</div>

<div className="fixed inset-0 -z-10 pointer-events-none opacity-20">
</div>


    </div>
  );
}
