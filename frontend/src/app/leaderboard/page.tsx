"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { api } from "@/services/api";

export default function LeaderboardPage() {
  const [models, setModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await api.getLeaderboard("f1", false, 50);
        setModels(data.leaderboard || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      
      <div className="flex flex-1 h-full overflow-hidden">
        <main className="flex-1 flex flex-col min-w-0">
          <header className="w-full top-0 sticky z-40 bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl shadow-sm border-b border-white/5 flex justify-between items-center px-gutter h-16 w-full">
            <div className="flex items-center gap-8">
              <div className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</div>
              <div className="relative hidden md:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                <input className="bg-surface-container-lowest border-none rounded-full pl-10 pr-4 py-1.5 text-body-md focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search models..." type="text"/>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-6">
                <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Models</a>
                <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#">Deployments</a>
              </nav>
              <div className="flex items-center gap-4">
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">help</span>
                </button>
                <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-white/10">
                  <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSBbQPnJc4bunncWcvzU5tCF6939DBf5-rR-B2MnPwtsU9MuyFFyZmJvKoN95cJ9P6RXDnli2QN8JH9F5PjcekCyxKhb1JbOUdtY0_SBQalf0IsPpWOY5ahaIcdUEHOsYUKurbId5JrLCCDq24miXxQyVH6a3hY17UrFYcWDQwaM4xiQ1e1rzJnnWqu_Sf504Y17ENhbI6TDiJypxLdG0UrgFbfSYHF5MYmKbhOUr7dA-x24aPe8xqr8djYI5M_89txp8KZzrW4NF"/>
                </div>
                <button className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 duration-150">
                  Create Project
                </button>
              </div>
            </div>
          </header>

          <div className="p-gutter overflow-y-auto">
            <div className="mb-8">
              <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Model Comparison Hub</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg">Evaluating performance across 5 active agent architectures.</p>
            </div>

            <div className="grid grid-cols-12 gap-panel-gap">
              <div className="col-span-12 lg:col-span-4 glass-card glass-edge rounded-xl p-6 active-glow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">AI Recommendation</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2">Nexus-9 Architecture</h3>
                <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">
                  Based on current throughput and accuracy benchmarks, Nexus-9 shows a 12.4% efficiency lead. Its transformer-based reasoning is optimal for the current "Financial Sentiment" task.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-highest/30">
                    <span className="text-label-sm font-label-sm">Primary Advantage</span>
                    <span className="text-primary font-bold">Latency</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container-highest/30">
                    <span className="text-label-sm font-label-sm">Confidence Score</span>
                    <span className="text-tertiary font-bold">98.2%</span>
                  </div>
                </div>
                <button className="w-full mt-8 py-3 rounded-lg bg-surface-container-highest hover:bg-surface-bright transition-colors font-label-sm text-label-sm flex items-center justify-center gap-2">
                  Deploy Selected Model <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>

              <div className="col-span-12 lg:col-span-8 glass-card glass-edge rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline-md text-headline-md">Capability Vectors</h3>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1.5 text-label-sm"><span className="w-2 h-2 rounded-full bg-primary"></span> Nexus-9</span>
                    <span className="flex items-center gap-1.5 text-label-sm"><span className="w-2 h-2 rounded-full bg-secondary"></span> Cortex-Alpha</span>
                    <span className="flex items-center gap-1.5 text-label-sm"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Sentinel-V</span>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center relative">
                  <svg className="w-full h-full opacity-80" viewBox="0 0 400 300">
                    <circle cx="200" cy="150" fill="none" r="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <circle cx="200" cy="150" fill="none" r="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    <circle cx="200" cy="150" fill="none" r="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                    <line stroke="rgba(255,255,255,0.05)" x1="200" x2="200" y1="50" y2="250" />
                    <line stroke="rgba(255,255,255,0.05)" x1="100" x2="300" y1="150" y2="150" />

                    <polygon fill="rgba(192, 193, 255, 0.2)" points="200,60 280,140 240,210 160,210 120,140" stroke="#c0c1ff" strokeWidth="2" />
                    <polygon fill="rgba(221, 183, 255, 0.2)" points="200,80 260,150 210,230 190,230 140,150" stroke="#ddb7ff" strokeWidth="2" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant uppercase tracking-tighter">Logic</span>
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant uppercase tracking-tighter">Safety</span>
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-on-surface-variant uppercase tracking-tighter -rotate-90">Speed</span>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-on-surface-variant uppercase tracking-tighter rotate-90">Memory</span>
                  </div>
                </div>
              </div>

              <div className="col-span-12 glass-card rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md">Metric Leaderboard</h3>
                  <button className="p-2 rounded-lg hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined">filter_list</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-high/50">
                      <tr>
                        <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant">MODEL NAME</th>
                        <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant">ACCURACY</th>
                        <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant">PRECISION</th>
                        <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant">RECALL</th>
                        <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant">F1 SCORE</th>
                        <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant">TRAINING TIME</th>
                        <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {loading ? (
                        <tr>
                          <td colSpan={7} className="px-6 py-8 text-center text-on-surface-variant">Loading models...</td>
                        </tr>
                      ) : error ? (
                        <tr>
                          <td colSpan={7} className="px-6 py-8 text-center text-error">{error}</td>
                        </tr>
                      ) : models.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-6 py-8 text-center text-on-surface-variant">No models trained yet.</td>
                        </tr>
                      ) : (
                        models.map((model: any) => (
                          <tr key={model.version_id} className="hover:bg-white/5 transition-colors cursor-pointer group">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded flex items-center justify-center ${model.is_production ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                                  <span className="material-symbols-outlined text-[18px]">
                                    {model.is_production ? 'verified' : 'model_training'}
                                  </span>
                                </div>
                                <span className="font-bold">{model.model_name} {model.tuned ? '(Tuned)' : ''}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-mono-code text-mono-code">
                              {model.metrics?.accuracy ? model.metrics.accuracy.toFixed(3) : '-'}
                            </td>
                            <td className="px-6 py-4 font-mono-code text-mono-code">
                              {model.metrics?.precision ? model.metrics.precision.toFixed(3) : '-'}
                            </td>
                            <td className="px-6 py-4 font-mono-code text-mono-code">
                              {model.metrics?.recall ? model.metrics.recall.toFixed(3) : '-'}
                            </td>
                            <td className="px-6 py-4 font-mono-code text-mono-code text-primary">
                              {model.metrics?.f1 ? model.metrics.f1.toFixed(3) : '-'}
                            </td>
                            <td className="px-6 py-4 font-mono-code text-mono-code text-on-surface-variant">
                              {model.training_time?.toFixed(2) || 0}s
                            </td>
                            <td className="px-6 py-4">
                              {model.is_production ? (
                                <span className="flex items-center gap-2 text-label-sm bg-primary/10 text-primary px-2 py-1 rounded-full w-fit">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Production
                                </span>
                              ) : (
                                <span className="flex items-center gap-2 text-label-sm bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded-full w-fit">
                                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span> Stored
                                </span>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-12 glass-card glass-edge rounded-xl p-6 h-96 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-headline-md text-headline-md">ROC Performance Convergence</h3>
                    <p className="text-on-surface-variant text-label-sm">True Positive Rate vs. False Positive Rate</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-label-sm">
                      <div className="w-12 h-1 bg-primary rounded-full"></div> <span>Nexus</span>
                    </div>
                    <div className="flex items-center gap-2 text-label-sm">
                      <div className="w-12 h-1 bg-secondary rounded-full opacity-50"></div> <span>Baseline</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative border-l border-b border-white/10 ml-8 mb-8">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <line stroke="rgba(255,255,255,0.03)" strokeWidth="1" x1="0" x2="100%" y1="25%" y2="25%" />
                    <line stroke="rgba(255,255,255,0.03)" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%" />
                    <line stroke="rgba(255,255,255,0.03)" strokeWidth="1" x1="0" x2="100%" y1="75%" y2="75%" />

                    <path className="drop-shadow-[0_0_8px_rgba(192,193,255,0.5)]" d="M 0,300 Q 150,280 250,150 T 1000,0" fill="none" stroke="#c0c1ff" strokeWidth="3" style={{vectorEffect: "non-scaling-stroke", strokeDasharray: "2000", strokeDashoffset: "2000", animation: "draw 3s forwards"}} />
                    <line stroke="rgba(255,255,255,0.1)" strokeDasharray="4" strokeWidth="1" x1="0" x2="100%" y1="100%" y2="0" />
                  </svg>

                  <div className="absolute -left-10 top-0 h-full flex flex-col justify-between text-[10px] text-on-surface-variant">
                    <span>1.0</span><span>0.8</span><span>0.6</span><span>0.4</span><span>0.2</span><span>0.0</span>
                  </div>
                  <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] text-on-surface-variant px-2">
                    <span>0.0</span><span>0.2</span><span>0.4</span><span>0.6</span><span>0.8</span><span>1.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
