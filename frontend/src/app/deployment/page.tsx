"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { api } from "@/services/api";

export default function DeploymentPage() {
  const [predictionInput, setPredictionInput] = useState('{\n  "feature1": 0,\n  "feature2": 1\n}');
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [isPredicting, setIsPredicting] = useState(false);

  const runPrediction = async () => {
    try {
      setIsPredicting(true);
      const data = JSON.parse(predictionInput);
      const result = await api.predict(data);
      setPredictionResult(result);
    } catch (err: any) {
      setPredictionResult({ error: err.message });
    } finally {
      setIsPredicting(false);
    }
  };

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

<div className="flex justify-between items-end">
<div>
<p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-1">Production Hub</p>
<h2 className="font-display-lg text-display-lg">Deployment Center</h2>
</div>
<div className="flex gap-4">
<button className="px-6 py-2.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-all font-label-sm text-label-sm flex items-center gap-2">
<span className="material-symbols-outlined text-base">cloud_sync</span>
                            Sync Infrastructure
                        </button>
<button className="px-6 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all">
<span className="material-symbols-outlined text-base">add_box</span>
                            Create Project
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-panel-gap">

<div className="glass-panel md:col-span-2 rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-3xl">developer_board</span>
<h3 className="font-headline-md text-headline-md">Infrastructure Status</h3>
</div>
<span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter flex items-center gap-2">
<span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                                Healthy
                            </span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">terminal</span>
<div>
<p className="font-label-sm text-label-sm">Docker Instances</p>
<p className="font-mono-code text-mono-code text-primary">v24.0.7 Stable</p>
</div>
</div>
<span className="text-secondary text-sm">12 Active</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">api</span>
<div>
<p className="font-label-sm text-label-sm">FastAPI Clusters</p>
<p className="font-mono-code text-mono-code text-primary">4 Workers Active</p>
</div>
</div>
<span className="text-secondary text-sm">99.9% Uptime</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">cloud</span>
<div>
<p className="font-label-sm text-label-sm">Cloud Gateway</p>
<p className="font-mono-code text-mono-code text-primary">AWS us-east-1</p>
</div>
</div>
<span className="text-secondary text-sm">Low Latency</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-tertiary">speed</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Latency</p>
<h4 className="text-4xl font-bold mt-2">124<span className="text-lg font-normal text-on-surface-variant ml-1">ms</span></h4>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center text-secondary gap-1">
<span className="material-symbols-outlined text-sm">trending_down</span>
<span className="text-xs">-12% vs last hour</span>
</div>
</div>
<div className="glass-panel rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary">bolt</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Requests/Sec</p>
<h4 className="text-4xl font-bold mt-2">1.2k<span className="text-lg font-normal text-on-surface-variant ml-1">reqs</span></h4>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center text-tertiary gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-xs">+8% since peak</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-panel-gap">

<div className="glass-panel md:col-span-2 rounded-xl p-6 min-h-[400px] flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-headline-md text-headline-md">Inference Monitoring</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Real-time throughput and error tracking</p>
</div>
<div className="flex bg-surface-container-low p-1 rounded-lg">
<button className="px-4 py-1.5 rounded-md bg-primary-container text-on-primary-container text-xs font-bold">1H</button>
<button className="px-4 py-1.5 rounded-md text-on-surface-variant text-xs hover:text-white transition-colors">24H</button>
<button className="px-4 py-1.5 rounded-md text-on-surface-variant text-xs hover:text-white transition-colors">7D</button>
</div>
</div>
<div className="flex-1 relative flex items-end gap-1 w-full overflow-hidden py-4">

<div className="w-full h-full absolute inset-0 opacity-10 pointer-events-none">
<div className="grid grid-cols-12 h-full w-full border-b border-l border-white/20"></div>
</div>
<div className="h-24 w-full bg-primary/20 rounded-t-sm animate-[grow_1s_ease-out_forwards]" style={{height: "45%"}}></div>
<div className="h-32 w-full bg-primary/30 rounded-t-sm" style={{height: "60%"}}></div>
<div className="h-48 w-full bg-primary/40 rounded-t-sm" style={{height: "80%"}}></div>
<div className="h-40 w-full bg-primary/30 rounded-t-sm" style={{height: "70%"}}></div>
<div className="h-56 w-full bg-primary/50 rounded-t-sm glow-active" style={{height: "95%"}}></div>
<div className="h-36 w-full bg-primary/30 rounded-t-sm" style={{height: "65%"}}></div>
<div className="h-28 w-full bg-primary/20 rounded-t-sm" style={{height: "50%"}}></div>
<div className="h-44 w-full bg-primary/40 rounded-t-sm" style={{height: "75%"}}></div>
<div className="h-52 w-full bg-primary/40 rounded-t-sm" style={{height: "85%"}}></div>
<div className="h-24 w-full bg-primary/20 rounded-t-sm" style={{height: "40%"}}></div>
</div>
<div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-mono-code uppercase">
<span>14:00</span><span>14:15</span><span>14:30</span><span>14:45</span><span>15:00</span>
</div>
</div>

<div className="glass-panel rounded-xl p-6 flex flex-col">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary">online_prediction</span>
<h3 className="font-headline-md text-headline-md">Test Inference</h3>
</div>
<div className="flex-1 flex flex-col gap-4">
  <textarea 
    className="flex-1 min-h-[120px] bg-surface-container-highest border border-white/5 rounded-lg p-3 text-mono-code font-mono-code text-sm text-on-surface focus:outline-none focus:border-primary/50 resize-none"
    placeholder="Enter JSON payload..."
    value={predictionInput}
    onChange={(e) => setPredictionInput(e.target.value)}
  ></textarea>
  <button 
    onClick={runPrediction}
    disabled={isPredicting}
    className="w-full py-3 bg-primary-container text-on-primary-container rounded-lg text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
  >
    {isPredicting ? <span className="material-symbols-outlined animate-spin text-[16px]">refresh</span> : <span className="material-symbols-outlined text-[16px]">send</span>}
    Submit Request
  </button>
  {predictionResult && (
    <div className="mt-2 p-3 bg-surface-container-lowest border border-white/5 rounded-lg overflow-x-auto">
      <pre className="text-xs text-secondary font-mono-code">
        {JSON.stringify(predictionResult, null, 2)}
      </pre>
    </div>
  )}
</div>
</div>
</div>

</div>

</main>
</div>

<div className="fixed inset-0 -z-10 pointer-events-none opacity-20">
</div>


    </div>
  );
}
