"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export const CTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Using your Web3Forms Access Key
    formData.append("access_key", "7457238e-f59d-4f47-8fe2-13020261d390");
    formData.append("subject", "New Beta/Waitlist Signup");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thanks for your interest! We'll notify you when we launch.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative px-6 py-24 overflow-hidden bg-white dark:bg-transparent transition-colors duration-500">
      
      {/* Background Glows for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[400px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500/20 dark:via-white/20 to-transparent rounded-[2.5rem] opacity-30 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden shadow-2xl shadow-blue-500/5 dark:shadow-none transition-all duration-500">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-8 relative z-10 transition-transform group-hover:scale-105">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <span className="text-[10px] text-amber-600 dark:text-amber-500 uppercase tracking-[0.2em] font-bold">
              Public Launch Incoming
            </span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-slate-900 dark:text-white mb-6 tracking-tight relative z-10 transition-colors">
            Be first to know <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-500">when we ship.</span>
          </h2>

          <p className="max-w-lg mx-auto text-slate-600 dark:text-[#8b9ab0] text-sm md:text-base mb-12 font-light leading-relaxed relative z-10 transition-colors">
            AdjusterAssist™ is in active development. Join our early notification list to receive updates on features, availability, and launch pricing.
          </p>

          {/* Premium Input Row - Now wrapped in a FORM */}
          <div className="max-w-md mx-auto relative z-10">
            <form 
              onSubmit={handleNotify}
              className="flex flex-col sm:flex-row gap-3 p-2 bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-full focus-within:border-blue-500/50 focus-within:bg-white dark:focus-within:bg-[#0d1117] transition-all duration-500 group/input shadow-inner"
            >
              <input 
                required
                type="email" 
                name="email"
                placeholder="Enter your professional email" 
                className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#4a5568] focus:ring-0"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-slate-900/10 dark:shadow-white/5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Notify Me"}
                {!isSubmitting && <Send size={14} className="group-hover/input:translate-x-1 group-hover/input:-translate-y-1 transition-transform" />}
              </button>
            </form>
            <p className="mt-4 text-[10px] text-slate-400 dark:text-[#4a5568] uppercase tracking-widest font-medium transition-colors">
              Professional use only • No spam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};