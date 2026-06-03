"use client";

import React from 'react';

export const Footer = () => {
  return (
    /* FIXED: Added bg-white to outer footer to prevent parent bleed in Light Mode */
    <footer className="relative px-6 pb-16 overflow-hidden bg-white dark:bg-transparent transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 dark:bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Premium Disclaimer Box */}
        <div className="relative group max-w-4xl mx-auto mb-20">
          <div className="absolute -inset-px bg-gradient-to-r from-transparent via-blue-500/10 dark:via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-slate-50/80 dark:bg-[#131820]/40 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-2xl p-8 sm:p-10 transition-all duration-500">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 transition-colors">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-blue-600">Legal Notice</span>
              </div>

              <p className="text-[12px] sm:text-[13px] text-slate-800 dark:text-[#ACAEB0] leading-relaxed max-w-2xl font-light">
                <span className="text-slate-800 dark:text-[#ACAEB0] font-medium uppercase tracking-wider mr-2">Disclaimer:</span>
                AdjusterAssist™ is a professional-use software product currently in active development.
                Any future software output is intended solely to assist workflow and documentation quality.
                Final claim decisions, policy interpretations, communications, and file handling remain the
                exclusive responsibility of the licensed or authorized professional using the product.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-slate-200 dark:border-white/5">

          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-blue-600/10 dark:bg-blue-600/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500" />
              </div>
              {/* FIXED: Brand Text styling - Adjuster in Blue, Assist in Black/White */}
              <span className="font-syne font-bold text-[15px] tracking-tight transition-colors">
                <span className="text-slate-900 dark:text-white">Adjuster</span>
                <span className="text-blue-600">Assist</span>
              </span>
            </div>
            <p className="text-[14px] text-slate-500 dark:text-[#4a5568] font-medium tracking-wide transition-colors">
              © 2026 AdjusterAssist LLC. All rights reserved.
            </p>


          </div>

          {/* Links */}
          <div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['Privacy Policy', 'Terms of Service', 'Contact Support'].map((link) => (
                <a
                  key={link}
                  href={
                    link === 'Privacy Policy'
                      ? '/privacy'
                      : link === 'Terms of Service'
                        ? '/terms'
                        : '#'
                  }
                  className="text-[11px] font-bold text-slate-500 dark:text-[#4a5568] hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 mt-1 px-3 py-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-slate-500 dark:text-[#64748B]">
                Private Development • Public access is not available at this time.
              </span>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};