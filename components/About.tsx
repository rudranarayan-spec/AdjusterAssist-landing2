"use client";

import React from 'react';
import { Layout, FileText, MessageSquare, FastForward, Users, Zap } from 'lucide-react';
import { ShimmerButton } from './ui/shimmer-button';
import { ShinyButton } from './ui/shiny-button';

const capabilities = [
  {
    icon: <Layout className="text-blue-600 dark:text-blue-500" size={24} />,
    title: "Organize Claim Info",
    desc: "Transform complex claim facts into structured, searchable data points for better file management."
  },
  {
    icon: <FileText className="text-emerald-600 dark:text-emerald-500" size={24} />,
    title: "Structured Documentation",
    desc: "Prepare audit-ready file notes and documentation that maintain consistency across your entire portfolio."
  },
  {
    icon: <MessageSquare className="text-purple-600 dark:text-purple-500" size={24} />,
    title: "Professional Drafting",
    desc: "Draft precise, professional communications for stakeholders without starting from a blank page."
  },
  {
    icon: <FastForward className="text-amber-600 dark:text-amber-500" size={24} />,
    title: "Next-Step Intelligence",
    desc: "Identify practical next steps to keep claim files moving forward efficiently and reduce cycle time."
  }
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-white dark:bg-[#0a0c0f] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] font-bold">The Mission</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
              Elevating the standard of <br />
              <span className="text-blue-600 dark:text-blue-500">claim handling.</span>
            </h2>
            <p className="text-slate-600 dark:text-[#8b9ab0] text-lg font-light leading-relaxed">
              AdjusterAssist LLC is developing software designed to support property insurance claim handling workflows. We believe in empowering professionals with tools that enhance clarity, speed, and documentation quality.
            </p>
          </div>
          
          <div className="bg-slate-50/50 dark:bg-[#131820]/40 border border-slate-200 dark:border-white/5 p-8 rounded-3xl backdrop-blur-sm shadow-sm dark:shadow-none transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg">
                <Users className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="font-syne font-bold text-slate-900 dark:text-white text-lg">Who it is for</h3>
            </div>
            <p className="text-slate-500 dark:text-[#8b9ab0] text-sm leading-relaxed font-light">
              Built specifically for property claims personnel and industry users who require clearer structure, stronger documentation, and more efficient drafting support throughout the claim lifecycle.
            </p>
          </div>
        </div>

        {/* Capabilities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {capabilities.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-3xl bg-white dark:bg-[#131820]/30 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-slate-50 dark:bg-white/[0.03] group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="font-syne font-bold text-slate-900 dark:text-white text-lg mb-3">{item.title}</h4>
              <p className="text-slate-400 dark:text-[#4a5568] group-hover:text-slate-600 dark:group-hover:text-[#8b9ab0] text-sm leading-relaxed transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Current Status Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-50 to-white dark:from-[#131820] dark:to-[#0a0c0f] border border-slate-200 dark:border-white/5 p-8 md:p-12 shadow-inner transition-all">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-10">
            <Zap size={120} className="text-blue-600 dark:text-blue-500" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-syne font-bold text-slate-900 dark:text-white text-2xl mb-2">Current Status</h3>
              <p className="text-slate-500 dark:text-[#8b9ab0] text-sm md:text-base font-light max-w-xl">
                AdjusterAssist™ is currently in active development. A public launch is being prepared. Product features and availability will be released at launch.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShinyButton className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm shadow-sm">
                Active Build v1.5.2
              </ShinyButton>
              <span className="text-[10px] text-slate-400 dark:text-[#8b9ab0] uppercase tracking-widest">Awaiting Launch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};