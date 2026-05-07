"use client";

import React from 'react';
import { Layout, FileText, MessageSquare, FastForward, Users, Zap } from 'lucide-react';
import { ShimmerButton } from './ui/shimmer-button';

const capabilities = [
  {
    icon: <Layout className="text-blue-500" size={24} />,
    title: "Organize Claim Info",
    desc: "Transform complex claim facts into structured, searchable data points for better file management."
  },
  {
    icon: <FileText className="text-emerald-500" size={24} />,
    title: "Structured Documentation",
    desc: "Prepare audit-ready file notes and documentation that maintain consistency across your entire portfolio."
  },
  {
    icon: <MessageSquare className="text-purple-500" size={24} />,
    title: "Professional Drafting",
    desc: "Draft precise, professional communications for stakeholders without starting from a blank page."
  },
  {
    icon: <FastForward className="text-amber-500" size={24} />,
    title: "Next-Step Intelligence",
    desc: "Identify practical next steps to keep claim files moving forward efficiently and reduce cycle time."
  }
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-[10px] text-blue-400 uppercase tracking-[0.2em] font-bold">The Mission</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Elevating the standard of <br />
              <span className="text-blue-500">claim handling.</span>
            </h2>
            <p className="text-[#8b9ab0] text-lg font-light leading-relaxed">
              AdjusterAssist LLC is developing software designed to support property insurance claim handling workflows. We believe in empowering professionals with tools that enhance clarity, speed, and documentation quality.
            </p>
          </div>
          
          <div className="bg-[#131820]/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Users className="text-blue-400" size={20} />
              </div>
              <h3 className="font-syne font-bold text-white text-lg">Who it is for</h3>
            </div>
            <p className="text-[#8b9ab0] text-sm leading-relaxed font-light">
              Built specifically for property claims personnel and industry users who require clearer structure, stronger documentation, and more efficient drafting support throughout the claim lifecycle.
            </p>
          </div>
        </div>

        {/* Capabilities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {capabilities.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-3xl bg-[#131820]/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/[0.03] group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="font-syne font-bold text-white text-lg mb-3">{item.title}</h4>
              <p className="text-[#4a5568] group-hover:text-[#8b9ab0] text-sm leading-relaxed transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Current Status Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#131820] to-[#0a0c0f] border border-white/5 p-8 md:p-12">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Zap size={120} className="text-blue-500" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-syne font-bold text-white text-2xl mb-2">Current Status</h3>
              <p className="text-[#8b9ab0] text-sm md:text-base font-light max-w-xl">
                AdjusterAssist™ is currently in active development. A public launch is being prepared. Product features and availability will be released at launch.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShimmerButton className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm">
                Active Build v1.5.2
              </ShimmerButton>
              <span className="text-[10px] text-[#8b9ab0] uppercase tracking-widest">Awaiting Launch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};