"use client";

import { useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useState(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Blazing Fast",
      description: "Built with Next.js 15 and React 18 for optimal performance",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Modern UI with glassmorphism and smooth animations",
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Looks great on any device, from mobile to desktop",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "🔒",
      title: "Type Safe",
      description: "Built with TypeScript for better code quality",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "🚀",
      title: "Deploy Anywhere",
      description: "Vercel, Netlify, Docker - you name it",
      color: "from-indigo-400 to-violet-500"
    },
    {
      icon: "🎯",
      title: "Developer Ready",
      description: "ESLint, Tailwind CSS, and best practices included",
      color: "from-red-400 to-pink-500"
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

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass animate-pulse-glow">
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ✨ Welcome to the Future
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Simple Next.js App
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-white/90">
              Built for Modern Web
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Experience the power of Next.js with a beautiful, responsive, and performant interface. 
            Perfect for your next project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25">
              Get Started →
            </button>
            <button className="px-8 py-4 rounded-xl glass hover:bg-white/20 transition-all duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass-dark rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Join thousands of developers who trust Simple Next.js App for their projects.
            </p>
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25">
              Start Building Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
