"use client";

import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative mt-20 px-6 pb-16 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Premium Disclaimer Box */}
        <div className="relative group max-w-4xl mx-auto mb-20">
          {/* Subtle Border Glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-[#131820]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8b9ab0]">Legal Notice</span>
              </div>
              
              <p className="text-[11px] sm:text-[13px] text-[#ACAEB0] leading-relaxed max-w-2xl font-light">
                <span className="text-[#ACAEB0] font-medium uppercase tracking-wider mr-2">Disclaimer:</span> 
                AdjusterAssist™ is a professional-use software product currently in active development. 
                Any future software output is intended solely to assist workflow and documentation quality. 
                Final claim decisions, policy interpretations, communications, and file handling remain the 
                exclusive responsibility of the licensed or authorized professional using the product.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-blue-600/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <span className="font-syne font-bold text-white text-[13px] tracking-tight">
                AdjusterAssist
              </span>
            </div>
            <p className="text-[10px] text-[#4a5568] font-medium tracking-wide">
              © 2026 AdjusterAssist LLC. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Privacy Policy', 'Terms of Service', 'Contact Support'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[11px] font-bold text-[#4a5568] hover:text-blue-400 uppercase tracking-widest transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};