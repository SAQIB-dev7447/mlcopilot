"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { label: "Workspace", href: "/workspace", icon: "folder_open" },
  { label: "Collaboration", href: "/collaboration", icon: "smart_toy" },
  { label: "Datasets", href: "/dataset", icon: "database" },
  { label: "Feature Engineering", href: "/feature-engineering", icon: "architecture" },
  { label: "Training Center", href: "/training", icon: "model_training" },
  { label: "Model Leaderboard", href: "/leaderboard", icon: "leaderboard" },
  { label: "Explainability", href: "/explainability", icon: "query_stats" },
  { label: "Insights", href: "/insights", icon: "lightbulb" },
  { label: "Reports", href: "/report", icon: "assessment" },
  { label: "Deployments", href: "/deployment", icon: "rocket_launch" },
  { label: "Settings", href: "/settings", icon: "settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col h-screen left-0 w-64 bg-surface-container-low/90 backdrop-blur-2xl border-r border-white/5 py-6 gap-panel-gap sticky top-0 shrink-0">
      <div className="px-6 mb-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              fluid_med
            </span>
          </div>
          <div>
            <h1 className="font-display-lg text-[20px] leading-none text-on-surface tracking-tight">MLCopilot</h1>
            <p className="font-label-sm text-outline">v2.4.0-pro</p>
          </div>
        </div>
        <div className="p-3 glass-panel rounded-xl flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary text-sm">hub</span>
          </div>
          <div>
            <p className="font-label-sm text-on-surface leading-tight">Core Engine</p>
            <p className="text-[10px] text-outline">Active Project</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 custom-scrollbar overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return isActive ? (
            <Link
              key={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary-container/20 text-secondary-fixed-dim border-r-2 border-secondary-fixed-dim translate-x-1 transition-transform"
              href={item.href}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon}
              </span>
              <span className="font-label-sm pt-[2px] leading-none">{item.label}</span>
            </Link>
          ) : (
            <Link
              key={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 transition-all duration-200"
              href={item.href}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-sm pt-[2px] leading-none">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-6 mt-auto">
        <button className="w-full bg-primary-container text-on-primary-container font-label-sm py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Agent
        </button>
      </div>
    </aside>
  );
}
