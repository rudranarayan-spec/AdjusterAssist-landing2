"use client";

import React, { useState } from 'react';
import { Mail, Globe, Send, MapPin, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7457238e-f59d-4f47-8fe2-13020261d390");

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
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-white dark:bg-[#0a0c0f] transition-colors duration-500">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-[-10%] w-[300px] sm:w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] sm:w-[600px] h-[600px] bg-blue-800/5 dark:bg-blue-900/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Professional Info */}
          <div className="flex flex-col space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] font-bold">Get in Touch</span>
              </div>
              <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1] sm:leading-[0.95] transition-colors">
                Let&apos;s discuss your <br />
                <span className="text-blue-600 dark:text-blue-500">claim workflow.</span>
              </h2>
              <p className="text-slate-600 dark:text-[#8b9ab0] text-lg font-light leading-relaxed max-w-md transition-colors">
                For business inquiries or early interest regarding AdjusterAssist™, reach out through our official channels.
              </p>
            </div>

            {/* Interactive Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Mail size={22} />, label: "Official Email", value: "info@adjusterassistapp.com", color: "text-blue-600 dark:text-blue-500", bg: "bg-blue-500/10", href: "mailto:info@adjusterassistapp.com" },
                { icon: <Globe size={22} />, label: "Official Website", value: "adjusterassistapp.com", color: "text-emerald-600 dark:text-emerald-500", bg: "bg-emerald-500/10", href: "https://adjusterassistapp.com" },
                { icon: <MapPin size={22} />, label: "Entity", value: "AdjusterAssist LLC", color: "text-purple-600 dark:text-purple-500", bg: "bg-purple-500/10" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-5 p-5 rounded-3xl bg-slate-50 dark:bg-[#131820]/40 border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-white/10 hover:bg-white dark:hover:bg-[#131820]/60 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-[#4a5568] uppercase tracking-widest font-bold mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-slate-900 dark:text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Premium Contact Form */}
          <div className="relative group w-full">
            <div className="absolute -inset-4 bg-blue-500/5 dark:bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative bg-white dark:bg-[#0d1117]/80 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all">
              <h3 className="font-syne font-bold text-2xl text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                Send a Message
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent" />
              </h3>
              
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-500 dark:text-[#8b9ab0] uppercase tracking-[0.15em] font-bold ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#4a5568] focus:border-blue-500/50 focus:bg-white dark:focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/20 outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-500 dark:text-[#8b9ab0] uppercase tracking-[0.15em] font-bold ml-1">Work Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#4a5568] focus:border-blue-500/50 focus:bg-white dark:focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/20 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 relative">
                  <label className="text-[10px] text-slate-500 dark:text-[#8b9ab0] uppercase tracking-[0.15em] font-bold ml-1">Inquiry Type</label>
                  <div className="relative group/select">
                    <select name="inquiry_type" className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:border-blue-500/50 focus:bg-white dark:focus:bg-white/[0.06] outline-none appearance-none cursor-pointer">
                      <option className="bg-white dark:bg-[#0a0c0f]">General Question</option>
                      <option className="bg-white dark:bg-[#0a0c0f]">Early Interest / Beta</option>
                      <option className="bg-white dark:bg-[#0a0c0f]">Business Partnership</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#4a5568] group-hover/select:text-blue-500 pointer-events-none transition-colors" size={18} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-500 dark:text-[#8b9ab0] uppercase tracking-[0.15em] font-bold ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="How can we help your workflow?"
                    className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#4a5568] focus:border-blue-500/50 focus:bg-white dark:focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="group/btn w-full bg-[#2563eb] hover:bg-blue-700 disabled:bg-blue-400 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 text-[13px] uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] active:scale-[0.98]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} className={`${isSubmitting ? 'hidden' : 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1'} transition-transform`} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};