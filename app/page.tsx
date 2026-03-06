"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Blazing Fast",
      description: "Built with Next.js and React for optimal performance",
      color: "from-yellow-400 to-orange-500",
      bgLight: "bg-yellow-500/10"
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Modern UI with glassmorphism and smooth animations",
      color: "from-pink-400 to-purple-500",
      bgLight: "bg-pink-500/10"
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Looks great on any device, from mobile to desktop",
      color: "from-blue-400 to-cyan-500",
      bgLight: "bg-blue-500/10"
    },
    {
      icon: "🔒",
      title: "Type Safe",
      description: "Built with TypeScript for better code quality",
      color: "from-green-400 to-emerald-500",
      bgLight: "bg-green-500/10"
    },
    {
      icon: "🚀",
      title: "Deploy Anywhere",
      description: "Vercel, Netlify, Docker - you name it",
      color: "from-indigo-400 to-violet-500",
      bgLight: "bg-indigo-500/10"
    },
    {
      icon: "🎯",
      title: "Developer Ready",
      description: "ESLint, Tailwind CSS, and best practices included",
      color: "from-red-400 to-pink-500",
      bgLight: "bg-red-500/10"
    }
  ];

  const stats = [
    { label: "Projects", value: "100+" },
    { label: "Stars", value: "1.2K" },
    { label: "Contributors", value: "50+" },
    { label: "Downloads", value: "50K+" }
  ];

  if (!mounted) {
    return null;
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-[450px] h-[450px] bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-xl">🦀</span>
            </div>
            <span className="font-bold text-xl">SimpleApp</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('hero')} className="nav-link">Home</button>
            <button onClick={() => scrollTo('features')} className="nav-link">Features</button>
            <button onClick={() => scrollTo('stats')} className="nav-link">Stats</button>
            <button onClick={() => scrollTo('cta')} className="nav-link">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass rounded-xl p-2 hover:bg-white/20 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-dark mt-2 mx-4 rounded-2xl overflow-hidden animate-slide-down">
            <button onClick={() => { scrollTo('hero'); setMobileMenuOpen(false); }} className="w-full text-left px-6 py-4 hover:bg-white/10 transition-all border-b border-white/10">Home</button>
            <button onClick={() => { scrollTo('features'); setMobileMenuOpen(false); }} className="w-full text-left px-6 py-4 hover:bg-white/10 transition-all border-b border-white/10">Features</button>
            <button onClick={() => { scrollTo('stats'); setMobileMenuOpen(false); }} className="w-full text-left px-6 py-4 hover:bg-white/10 transition-all border-b border-white/10">Stats</button>
            <button onClick={() => { scrollTo('cta'); setMobileMenuOpen(false); }} className="w-full text-left px-6 py-4 hover:bg-white/10 transition-all">Contact</button>
          </div>
        )}
      </nav>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-4 py-32 md:py-48 min-h-screen flex items-center">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block mb-8 px-6 py-3 rounded-full glass animate-pulse-glow">
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide uppercase">
                ✨ Welcome to the Future
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Simple Next.js App
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-white/90">
                Built for Modern Web
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the power of Next.js with a beautiful, responsive, and performant interface.
              Perfect for your next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollTo('cta')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                Get Started →
              </button>
              <button className="px-8 py-4 rounded-xl glass hover:bg-white/20 transition-all duration-300 font-medium">
                Learn More
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator cursor-pointer" onClick={() => scrollTo('stats')}>
              <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                <div className="w-1 h-2 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:bg-white/5 group"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Amazing Features
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to build modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden ${feature.bgLight}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-white/90 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="container mx-auto px-4 py-32">
          <div className="glass rounded-3xl p-12 md:p-20 max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-white/70 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers who trust Simple Next.js App for their projects.
                Start building today and see the difference.
              </p>
              <button className="px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-lg">
                Start Building Now →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-dark py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-xl">🦀</span>
                </div>
                <span className="font-bold text-lg">SimpleApp</span>
              </div>

              <div className="text-white/60 text-sm">
                © 2025 Simple Next.js App. Built with ❤️
              </div>

              <div className="flex items-center gap-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-2.465 7.396-6.027 7.396-11.053 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
