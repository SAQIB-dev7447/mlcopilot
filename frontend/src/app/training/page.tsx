"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { api } from "@/services/api";

export default function TrainingPage() {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Ready to start training..."
  ]);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingResults, setTrainingResults] = useState<any>(null);

  const startTraining = async () => {
    setIsTraining(true);
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] INFO Starting training pipeline...`]);
    
    try {
      const result = await api.evaluateModel({
        filepath: "c:/mlcopilot/data/test_data.csv",
        query: "Predict Churn and maximize f1 score",
        target_column: "Churn",
        tune: false
      });
      
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] PROC Training completed successfully!`]);
      setTrainingResults(result);
    } catch (err: any) {
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ERR ${err.message}`]);
    } finally {
      setIsTraining(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 h-screen w-screen flex overflow-hidden">
      <Sidebar />
      
      <div className="flex flex-1 h-full overflow-hidden">
        <div className="flex-1 flex flex-col min-w-0 bg-surface">
          <header className="w-full top-0 sticky bg-surface-container dark:bg-surface-container/80 backdrop-blur-xl border-b border-white/5 shadow-sm flex justify-between items-center px-gutter h-16 z-40">
            <div className="flex items-center gap-8">
              <h1 className="font-headline-md text-headline-md font-bold text-primary">MLCopilot</h1>
              <div className="hidden md:flex items-center gap-6">
                <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Models</a>
                <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-150" href="#">Deployments</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                <input className="bg-surface-container-lowest border border-outline-variant rounded-full pl-10 pr-4 py-1.5 text-body-md w-64 focus:outline-none focus:border-primary transition-colors" placeholder="Search experiments..." type="text"/>
              </div>
              <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-sm text-label-sm font-bold active:scale-95 duration-150">Create Project</button>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer active:scale-95 transition-all">notifications</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer active:scale-95 transition-all">help</span>
              <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
                <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmpug70nRDQ1UQ6_q39C1K1pqwqqQjsePp_lSAJxKat-9uc3tlrWkg2ecxdgrEcaJfP6iv343OxaNmL9nCYC4F0T8YOPUsVVjAVKHH-Sc899gCxsiYyUyljHoDEGAZ9cP_kr0EHlpQB-eIDKVT0ULx4gy0RHVmunLnU2IJ-ymaBq7KxAo5d3rWz4DkdSQpUus0Zab89VhaYlZULSXWktHQeHvea5ClQBAU9dPvGiEBmyuJnFjAg7yHQTUwgSVj77zKkYAX_IbH8xqo"/>
              </div>
            </div>
          </header>

          <main className="flex-1 p-gutter overflow-y-auto custom-scrollbar">
            <div className="max-w-[1600px] mx-auto">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-2">Training Center</p>
                  <h2 className="font-display-lg text-display-lg text-on-surface leading-tight">Hyperparameter Tuning <span className="text-primary-container font-mono-code font-normal text-headline-md">#EXP-402</span></h2>
                </div>
                <div className="flex gap-4">
                  <button className="glass-panel px-6 py-3 rounded-xl border border-white/10 text-on-surface flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                    <span className="material-symbols-outlined">stop_circle</span> Stop All
                  </button>
                  <button 
                    onClick={startTraining}
                    disabled={isTraining}
                    className={`bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-transform ${isTraining ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 active:scale-95'}`}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {isTraining ? 'hourglass_empty' : 'play_arrow'}
                    </span> {isTraining ? 'Running...' : 'Start Training'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-panel-gap">
                <div className="col-span-12 lg:col-span-8 glass-panel rounded-2xl p-6 border border-white/5 active-glow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary-container opacity-50"></div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                      <h3 className="font-headline-md text-headline-md">Active Candidates</h3>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1">
                        <span className="w-2 h-2 bg-primary rounded-full status-pulse"></span> {isTraining ? "Running" : trainingResults ? Object.keys(trainingResults.training_results || {}).length + " Evaluated" : "Idle"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {trainingResults ? (
                      Object.keys(trainingResults.training_results || {}).map((modelName) => {
                        const metrics = trainingResults.training_results[modelName];
                        const isBest = trainingResults.best_model === modelName;
                        return (
                          <div key={modelName} className={`bg-surface-container-lowest/50 rounded-xl p-4 border ${isBest ? 'border-primary/50' : 'border-white/5'} hover:border-primary/20 transition-all group`}>
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center font-mono-code ${isBest ? 'text-primary' : 'text-on-surface-variant'} font-bold`}>
                                  {modelName.substring(0, 3).toUpperCase()}
                                </div>
                                <div>
                                  <h4 className="font-body-md text-body-md font-bold flex items-center gap-2">
                                    {modelName}
                                    {isBest && <span className="material-symbols-outlined text-primary text-[16px]">verified</span>}
                                  </h4>
                                  <p className="text-label-sm font-label-sm text-on-surface-variant">Training Completed</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className={`text-headline-md font-headline-md ${isBest ? 'text-primary' : 'text-on-surface'}`}>
                                  {metrics.f1 ? (metrics.f1 * 100).toFixed(1) + '%' : '-'}
                                </p>
                                <p className="text-label-sm font-label-sm text-on-surface-variant">F1 Score</p>
                              </div>
                            </div>
                            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full transition-all duration-1000 ${isBest ? 'bg-primary' : 'bg-on-surface-variant'}`} style={{width: metrics.f1 ? (metrics.f1 * 100) + '%' : '0%'}}></div>
                            </div>
                          </div>
                        );
                      })
                    ) : isTraining ? (
                      <div className="text-center py-8 text-on-surface-variant font-label-sm animate-pulse">
                        Evaluating candidates...
                      </div>
                    ) : (
                      <div className="text-center py-8 text-on-surface-variant font-label-sm">
                        Ready to train models. Click "Start Training" to begin.
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-panel-gap">
                  <div className="glass-panel rounded-2xl p-6 flex-1 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">GPU Utilization</h3>
                      <span className="text-primary font-mono-code text-body-md font-bold">84%</span>
                    </div>
                    <div className="h-24 w-full relative">
                      <svg className="w-full h-full" viewBox="0 0 400 100">
                        <path className="text-primary" d="M0,80 Q50,70 100,85 T200,60 T300,75 T400,20" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path className="text-primary/10" d="M0,80 Q50,70 100,85 T200,60 T300,75 T400,20 V100 H0 Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="mt-4 flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                      <span>VRAM: 14.2/16 GB</span>
                      <span>Temp: 72°C</span>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl p-6 flex-1 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">CPU Threads</h3>
                      <span className="text-tertiary font-mono-code text-body-md font-bold">42%</span>
                    </div>
                    <div className="h-24 w-full relative">
                      <svg className="w-full h-full" viewBox="0 0 400 100">
                        <path className="text-tertiary" d="M0,50 Q40,60 80,45 T160,55 T240,40 T320,50 T400,45" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path className="text-tertiary/10" d="M0,50 Q40,60 80,45 T160,55 T240,40 T320,50 T400,45 V100 H0 Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="mt-4 flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                      <span>Cores: 64 Active</span>
                      <span>Load: 2.14 Avg</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-7 glass-panel rounded-2xl p-6 border border-white/5 h-[400px] flex flex-col relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">bubble_chart</span>
                      <h3 className="font-headline-md text-headline-md">Bayesian Search Map</h3>
                    </div>
                    <select className="bg-surface-container-lowest border border-white/10 rounded-lg px-4 py-2 text-label-sm font-label-sm text-on-surface focus:outline-none">
                      <option>Learning Rate vs Dropout</option>
                      <option>N-Estimators vs Depth</option>
                    </select>
                  </div>
                  <div className="flex-1 w-full relative bg-surface-container-lowest/30 rounded-xl overflow-hidden border border-white/5">
                    <div className="absolute inset-0 p-8">
                      <div className="w-full h-full border-l border-b border-white/10 relative">
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full blur-[1px] cursor-pointer hover:scale-150 transition-transform active-glow" title="Trial 12: Acc 0.89"></div>
                        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-on-surface-variant rounded-full opacity-40"></div>
                        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-secondary rounded-full blur-[1px] cursor-pointer hover:scale-150 transition-transform active-glow" title="Trial 45: Acc 0.94"></div>
                        <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-on-surface-variant rounded-full opacity-40"></div>
                        <div className="absolute top-1/2 left-[80%] w-3 h-3 bg-tertiary rounded-full blur-[1px] cursor-pointer hover:scale-150 transition-transform active-glow"></div>
                        <div className="absolute top-10 left-[70%] w-5 h-5 bg-primary rounded-full blur-[2px] opacity-80 animate-pulse"></div>

                        <div className="absolute w-full h-px bg-white/5 top-1/4"></div>
                        <div className="absolute w-full h-px bg-white/5 top-2/4"></div>
                        <div className="absolute w-full h-px bg-white/5 top-3/4"></div>
                        <div className="absolute h-full w-px bg-white/5 left-1/4"></div>
                        <div className="absolute h-full w-px bg-white/5 left-2/4"></div>
                        <div className="absolute h-full w-px bg-white/5 left-3/4"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-label-sm font-label-sm text-on-surface-variant opacity-50">Parameter Space: [X: Alpha, Y: Beta]</div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-5 glass-panel rounded-2xl border border-white/5 h-[400px] flex flex-col">
                  <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary-container">terminal</span>
                      <h3 className="font-label-sm text-label-sm uppercase tracking-wider">Live Logs</h3>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-error cursor-pointer"></span>
                      <span className="w-2 h-2 rounded-full bg-tertiary cursor-pointer"></span>
                      <span className="w-2 h-2 rounded-full bg-primary cursor-pointer"></span>
                    </div>
                  </div>
                  <div className="flex-1 bg-surface-container-lowest/80 p-4 font-mono-code text-mono-code text-on-surface-variant overflow-y-auto custom-scrollbar" id="log-console">
                    {logs.map((log, index) => (
                      <div key={index} className="opacity-80 mb-1" dangerouslySetInnerHTML={{ __html: log }} />
                    ))}
                    {isTraining && <div className="animate-pulse text-primary mt-2">_</div>}
                  </div>
                </div>  
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
