"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ShaderCanvas from "@/components/ShaderCanvas";

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen relative">
      {/* Custom Cursor Glow Micro-interaction */}
      <div
        className="pointer-events-none fixed w-64 h-64 bg-primary/5 blur-[100px] rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* TopNavBar */}
      <header className="fixed top-0 z-50 w-full h-16 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-margin-container border-b border-white/10">
        <div className="flex items-center gap-8">
          <span className="font-display-lg text-[24px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold tracking-tighter">
            MLCopilot
          </span>
          <nav className="hidden md:flex gap-6">
            <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="/">
              Home
            </Link>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#features">
              Features
            </a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#pricing">
              Pricing
            </a>
            <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/login">
              Auth
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">apps</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
            <img
              alt="User profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiPtNJJaZrJWMKWxl6ycWxWo1obW3VpT7jh-W0yFEdtGnoGFg4u4vzuv6EWirdScRy_yL-9RlwunL0eASkd-sxcw1IbQXfyQ2H2YKDs5AnIn-gaxmUrtrOkV5qN80jOJM-0svrbasnpmMfv0UwAPM1eskoQjAryl1SAUqwrJVT2V-dEc849i1nM7WWqqf_3GTRzgEAkMwStYPoTQ1_2WlGEYCrONgtHbtHN_DhXRRs8RODliDgKUC1ywOdvpSibFT_SfIu84KqXe1n"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Shader Background */}
        <div className="absolute inset-0 w-full h-full opacity-40">
          <ShaderCanvas />
        </div>
        <div className="container mx-auto px-margin-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                smart_toy
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">v2.0 Beta Live</span>
            </div>
            <h1 className="font-display-lg text-display-lg md:text-[64px] text-on-surface leading-tight">
              Your AI <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                Data Science Team
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Upload a dataset, describe your business problem, and let multiple AI agents build, evaluate, explain, and deploy machine learning solutions in seconds.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/login"
                className="px-8 py-4 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline-md rounded-xl glow-primary transition-all active:scale-95 flex items-center gap-2"
              >
                Start Project
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="px-8 py-4 glass-panel text-on-surface border border-white/10 rounded-xl hover:bg-white/5 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Watch Demo
              </button>
            </div>
          </div>
          {/* Workflow Visualizer */}
          <div className="relative h-[500px] glass-panel rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <svg className="w-full h-full relative z-10" viewBox="0 0 400 400">
              {/* Connections */}
              <path className="data-flow stroke-primary/30 fill-none" d="M200,80 L200,160" strokeWidth="2"></path>
              <path className="data-flow stroke-primary/30 fill-none" d="M200,240 L200,320" strokeWidth="2"></path>
              <path className="data-flow stroke-secondary/30 fill-none" d="M120,200 L280,200" strokeWidth="2"></path>
              {/* Nodes */}
              {/* Supervisor */}
              <g className="agent-node-pulse">
                <rect className="fill-surface-container-high stroke-primary/50" height="40" rx="8" width="100" x="150" y="40"></rect>
                <text className="fill-primary font-mono-code text-[10px]" textAnchor="middle" x="200" y="65">
                  SUPERVISOR
                </text>
              </g>
              {/* Dataset */}
              <g className="agent-node-pulse" style={{ animationDelay: "1s" }}>
                <circle className="fill-surface-container-high stroke-secondary/50" cx="80" cy="200" r="30"></circle>
                <text className="fill-secondary font-mono-code text-[10px]" textAnchor="middle" x="80" y="205">
                  DATASET
                </text>
              </g>
              {/* Core Logic */}
              <g className="agent-node-pulse" style={{ animationDelay: "0.5s" }}>
                <rect className="fill-primary/20 stroke-primary" height="80" rx="12" width="80" x="160" y="160"></rect>
                <text className="fill-on-surface font-headline-md text-[14px]" textAnchor="middle" x="200" y="205">
                  ENGINE
                </text>
              </g>
              {/* Model */}
              <g className="agent-node-pulse" style={{ animationDelay: "1.5s" }}>
                <circle className="fill-surface-container-high stroke-tertiary/50" cx="320" cy="200" r="30"></circle>
                <text className="fill-tertiary font-mono-code text-[10px]" textAnchor="middle" x="320" y="205">
                  MODEL
                </text>
              </g>
              {/* Deploy */}
              <g className="agent-node-pulse" style={{ animationDelay: "2s" }}>
                <rect className="fill-surface-container-high stroke-on-surface/30" height="40" rx="8" width="100" x="150" y="320"></rect>
                <text className="fill-on-surface-variant font-mono-code text-[10px]" textAnchor="middle" x="200" y="345">
                  DEPLOYMENT
                </text>
              </g>
            </svg>
            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-section-padding bg-surface-container-lowest relative">
        <div className="container mx-auto px-margin-container">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <h2 className="font-display-lg text-display-lg text-on-surface">Precision at Every Layer</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Modular AI intelligence designed for modern enterprise complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-panel-gap">
            {/* Feature 1 */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Multi-Agent Intelligence</h3>
                  <p className="text-on-surface-variant font-body-md max-w-md">
                    Our orchestration layer coordinates specialized agents for feature engineering, hyperparameter tuning, and cross-validation, ensuring the best architecture for your specific domain.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <span className="px-3 py-1 bg-surface rounded-full text-label-sm border border-white/5">Auto-Scaling</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-label-sm border border-white/5">Cross-Agent Logic</span>
                </div>
              </div>
              {/* Background Illustration */}
              <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ElrTKF7VeE0ewx38e1jk0MiJFYUQ6opyTGbwicUFuQwOxUIUF93lLGn-hvADBFZjZT5hmA91FHk_goKa_8xvsfb3O9HHF8-XzU37bDm-QAejc9WqK0cgFk7EELn2lXDXSszV8X2MeJG8nLDZ1JqbrYNwafc9qC4ToLETtbALpfyM8G3E7F0UCBbg1MwQEVosZLpoNJlTHFE5G8wv3hPyNzNo69FerRygcDxByxChjHcXcveT67_1wAjUsKXXbkzU0cCNXwNcJeVB"
                  alt="AI Orchestration Concept"
                />
              </div>
            </div>
            {/* Feature 2 */}
            <div className="glass-panel p-8 rounded-3xl hover:border-secondary/50 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Explainable ML</h3>
              <p className="text-on-surface-variant font-body-md">
                Black boxes are over. Get full SHAP/LIME interpretations and natural language summaries of why your model makes specific predictions.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="glass-panel p-8 rounded-3xl hover:border-tertiary/50 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined">settings_suggest</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Enterprise Automation</h3>
              <p className="text-on-surface-variant font-body-md">
                CI/CD for machine learning. Automatically retrain and redeploy when data drift is detected beyond your defined threshold.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Real-time Log Streaming</h3>
                <p className="text-on-surface-variant font-body-md">
                  Watch your agents think. Our real-time console shows every thought process, model comparison, and dataset split as it happens.
                </p>
              </div>
              <div className="w-full md:w-64 aspect-video bg-surface-container-lowest rounded-xl border border-white/10 p-4 font-mono-code text-[12px] overflow-hidden">
                <div className="text-primary">&gt; Agent Supervisor: Initiating EDA...</div>
                <div className="text-on-surface-variant">&gt; Agent Data: Loading 2.4M rows...</div>
                <div className="text-secondary">&gt; Agent Model: Testing XGBoost [v1]...</div>
                <div className="text-on-surface-variant">&gt; Success: AUC 0.94 achieved.</div>
                <div className="animate-pulse inline-block w-2 h-4 bg-primary ml-1 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-section-padding">
        <div className="container mx-auto px-margin-container">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <h2 className="font-display-lg text-display-lg text-on-surface">Flexible Scaling</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              From individual researchers to global enterprise teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col">
              <div className="mb-8">
                <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Individual
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[40px] font-bold text-on-surface">$0</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
              </div>
              <ul className="flex flex-col gap-4 mb-12 flex-1">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  3 Active Projects
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Standard Agents
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Community Support
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-on-surface font-bold">
                Get Started
              </button>
            </div>
            {/* Pro */}
            <div className="relative glass-panel p-8 rounded-3xl border-2 border-primary glow-primary flex flex-col scale-105 z-20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary-container px-4 py-1 rounded-full text-label-sm font-bold uppercase">
                Popular
              </div>
              <div className="mb-8">
                <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest">
                  Professional
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[40px] font-bold text-on-surface">$79</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
              </div>
              <ul className="flex flex-col gap-4 mb-12 flex-1">
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Unlimited Projects
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Advanced Agent Nodes
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Custom GPU Allocation
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  API Integration
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold hover:opacity-90 transition-all">
                Start Free Trial
              </button>
            </div>
            {/* Enterprise */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col">
              <div className="mb-8">
                <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Enterprise
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[40px] font-bold text-on-surface">Custom</span>
                </div>
              </div>
              <ul className="flex flex-col gap-4 mb-12 flex-1">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  On-premise Deployment
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  SLA &amp; 24/7 Support
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  RBAC &amp; Audit Logs
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Custom Agent Training
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-on-surface font-bold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-surface-container border-t border-white/5">
        <div className="container mx-auto px-margin-container grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <span className="font-display-lg text-[24px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold tracking-tighter">
              MLCopilot
            </span>
            <p className="mt-4 text-on-surface-variant font-body-md max-w-sm">
              Empowering data teams with coordinated multi-agent intelligence. Ship production ML models in days, not months.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-on-surface font-bold">Platform</h4>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              Agents
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              Workflow
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              Models
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-on-surface font-bold">Company</h4>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              About
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              Security
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="container mx-auto px-margin-container mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-label-sm text-on-surface-variant">
          <span>© 2024 MLCopilot AI Systems. All rights reserved.</span>
          <div className="flex gap-8">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
