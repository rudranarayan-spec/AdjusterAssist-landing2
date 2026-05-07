"use client";

import React from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export const CTA = () => {
    const handleNotify = () => {
        toast.success("Thanks for your interest! We'll notify you when we launch.");
    };
  return (
    <section className="relative px-6 py-15 overflow-hidden">
      {/* Background Glows for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative group">
        {/* Animated Border Gradient (The "Premium" Shimmer) */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Main Card */}
        <div className="relative bg-[#0d1117]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden">
          
          {/* Internal Radial Decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-8 relative z-10 transition-transform group-hover:scale-105">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <span className="text-[10px] text-amber-500 uppercase tracking-[0.2em] font-bold">
              Public Launch Incoming
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white mb-6 tracking-tight relative z-10">
            Be first to know <br className="hidden sm:block" />
            <span className="text-blue-500">when we ship.</span>
          </h2>

          {/* Subtext */}
          <p className="max-w-lg mx-auto text-[#8b9ab0] text-sm md:text-base mb-12 font-light leading-relaxed relative z-10">
            AdjusterAssist™ is in active development. Join our early notification list to receive updates on features, availability, and launch pricing.
          </p>

          {/* Premium Input Row */}
          <div className="max-w-md mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-full focus-within:border-blue-500/50 transition-all duration-500 group/input">
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-sm text-white placeholder:text-[#4a5568] focus:ring-0"
              />
              <button onClick={handleNotify} className="bg-white text-black hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-white/5">
                Notify Me
                <Send size={14} className="group-hover/input:translate-x-1 group-hover/input:-translate-y-1 transition-transform" />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-[#4a5568] uppercase tracking-widest font-medium">
              Professional use only • No spam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};