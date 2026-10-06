"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to dashboard on login/signup for preview flow
    router.push("/dashboard");
  };

  return (
    <div className="font-body-md text-on-surface bg-background min-h-screen w-full relative overflow-hidden">
      <main className="flex h-screen w-full relative">
        {/* Left Side: AI Agent Illustration */}
        <section className="hidden lg:flex w-7/12 h-full bg-surface-container-low relative overflow-hidden items-center justify-center p-gutter">
          <div className="absolute inset-0 auth-gradient-bg opacity-50"></div>
          {/* Collaborative Agent Network Visual */}
          <div className="relative w-full max-w-2xl aspect-square glass-panel rounded-xl p-8 flex items-center justify-center glow-effect">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-full border border-primary/20 rounded-full animate-pulse scale-90"></div>
              <div className="absolute w-3/4 h-3/4 border border-secondary/20 rounded-full animate-pulse scale-100"></div>
            </div>
            <div className="z-10 grid grid-cols-2 gap-8 relative">
              {/* Supervisor Agent */}
              <div className="agent-node-float col-span-2 flex justify-center">
                <div className="glass-panel p-6 rounded-xl flex flex-col items-center gap-3 border-t-2 border-primary-container">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    supervisor_account
                  </span>
                  <span className="font-headline-md text-primary text-headline-md">Supervisor</span>
                  <p className="font-label-sm text-on-surface-variant text-center max-w-[150px]">
                    Orchestrating agent workflows and logic.
                  </p>
                </div>
              </div>
              {/* Model Agent */}
              <div className="agent-node-float flex justify-end" style={{ animationDelay: "1.5s" }}>
                <div className="glass-panel p-6 rounded-xl flex flex-col items-center gap-3 border-t-2 border-secondary">
                  <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    model_training
                  </span>
                  <span className="font-headline-md text-secondary text-headline-md">Model</span>
                  <p className="font-label-sm text-on-surface-variant text-center max-w-[150px]">
                    Fine-tuning performance parameters.
                  </p>
                </div>
              </div>
              {/* Data Agent */}
              <div className="agent-node-float flex justify-start" style={{ animationDelay: "3s" }}>
                <div className="glass-panel p-6 rounded-xl flex flex-col items-center gap-3 border-t-2 border-tertiary">
                  <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    database
                  </span>
                  <span className="font-headline-md text-tertiary text-headline-md">Data</span>
                  <p className="font-label-sm text-on-surface-variant text-center max-w-[150px]">
                    Managing massive dataset pipelines.
                  </p>
                </div>
              </div>
            </div>
            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              <line stroke="rgba(192, 193, 255, 0.2)" strokeWidth="1" x1="50%" x2="30%" y1="30%" y2="70%"></line>
              <line stroke="rgba(192, 193, 255, 0.2)" strokeWidth="1" x1="50%" x2="70%" y1="30%" y2="70%"></line>
              <line stroke="rgba(192, 193, 255, 0.2)" strokeWidth="1" x1="30%" x2="70%" y1="70%" y2="70%"></line>
            </svg>
          </div>
          {/* Branding at Bottom Left */}
          <div className="absolute bottom-12 left-12">
            <h1 className="font-display-lg text-primary text-display-lg mb-2">MLCopilot</h1>
            <p className="font-body-lg text-on-surface-variant text-body-lg">
              The intelligent engine for multi-agent ecosystems.
            </p>
          </div>
        </section>
        {/* Right Side: Auth Forms */}
        <section className="w-full lg:w-5/12 h-full flex items-center justify-center p-gutter bg-surface overflow-y-auto">
          <div className="w-full max-w-md py-8">
            {/* Toggle UI */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-1">
                  {isLogin ? "Welcome Back" : "Get Started"}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {isLogin ? "Log in to manage your agent network." : "Scale your AI collaboration today."}
                </p>
              </div>
              <div className="text-right">
                <img
                  alt="Brand Logo"
                  className="w-12 h-12 rounded-lg opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHYmP5sNmmfdqlr7Ja4vv_iA37W3mBMuPvWVzd9yk8b8CpFFSoZg_8qN80RZdPWGRzYuceo2Fa6kVVSbJoKGNj8RbIEVL-fBQU7VultKup9Ksjr0aXGJtfwMBWs4M-r_npZ7tH8Oh7H-KNxlMaBfT2IHw4IUt0VqVyMBYzHPJuWrC16im_2ITPJ4Q6NduL5S92K07DpDfEqSDd81Wg_S1IjUfP02Zxj7jZ3fdHWhfmxHBi8HQI4oQhmZNnfZl2soMe6aqwNuuQ22LO"
                />
              </div>
            </div>
            {/* Social Login Cluster */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="w-full h-14 flex items-center justify-center gap-3 rounded-xl bg-surface-container-high border border-outline-variant hover:bg-surface-container-highest active:scale-[0.98] transition-all duration-200"
              >
                <img
                  alt="Google"
                  className="w-6 h-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxbT2B9bMouJfHT7wdy6Wj-tDlLr485PbUh_TE4z1MBQE_7uXolS4QTQbf9lxXal1MzGkAXPoofrlCHKvz68HETNfTj61Ngi9g6JCOj1Uj5dNzxUHZTUVPMTCskX6oFACo6FaZ7ZmwCfEEY_xhfCVRiT7IsnBjoa4bwLYUObq2fdY-r7JMErOuh8jdHwcwipegcTBx18JdWh-TMwpZD1MHnEuwOcQp_AVaeZjCjXg-Z5_RqJSdMz7xHqlBasZS8O7IMUgJ9wI8IQkI"
                />
                <span className="font-label-sm text-label-sm font-semibold">Sign in with Google</span>
              </button>
              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="w-full h-14 flex items-center justify-center gap-3 rounded-xl bg-surface-container-high border border-outline-variant hover:bg-surface-container-highest active:scale-[0.98] transition-all duration-200"
              >
                <svg className="w-6 h-6 fill-on-surface" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                <span className="font-label-sm text-label-sm font-semibold">Sign in with GitHub</span>
              </button>
            </div>
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-surface px-4 font-label-sm text-on-surface-variant">OR CONTINUE WITH EMAIL</span>
              </div>
            </div>
            {/* Auth Form Container */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block">Full Name</label>
                  <input
                    className="w-full h-12 bg-surface-container-low border border-outline-variant rounded-lg px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm text-on-surface-variant block">Email Address</label>
                <input
                  className="w-full h-12 bg-surface-container-low border border-outline-variant rounded-lg px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  placeholder="name@company.com"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block">Password</label>
                  {isLogin && (
                    <a className="font-label-sm text-primary hover:underline" href="#">
                      Forgot password?
                    </a>
                  )}
                </div>
                <input
                  className="w-full h-12 bg-surface-container-low border border-outline-variant rounded-lg px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
              <button
                className="w-full h-14 bg-primary text-on-primary font-headline-md rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20"
                type="submit"
              >
                <span>{isLogin ? "Sign In" : "Create Account"}</span>
              </button>
            </form>
            <p className="mt-8 text-center font-body-md text-on-surface-variant">
              <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
              <button
                type="button"
                className="text-primary font-semibold hover:underline ml-1"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create Account" : "Log In"}
              </button>
            </p>
            {/* Legal Footer */}
            <div className="mt-12 flex justify-center gap-6 font-label-sm text-on-surface-variant opacity-60">
              <a className="hover:text-on-surface transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-on-surface transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
