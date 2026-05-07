"use client";

import React from "react";

export const CTAButton = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row transition-colors duration-500">
      <button
        type="button"
        className="
          group relative isolate inline-flex items-center gap-3
          overflow-hidden rounded-[14px]
          px-8 sm:px-9 py-4

          text-[12px] sm:text-[13px]
          font-semibold uppercase tracking-[0.16em]
          text-slate-900 dark:text-white

          transition-all duration-300 ease-out
          active:scale-[0.97]

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-500/70 dark:focus-visible:ring-cyan-400/70
          focus-visible:ring-offset-2
          focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0c0f]
        "
        style={{
          background: "transparent",
        }}
        onMouseEnter={(e) => {
          // Dynamic Shadow based on theme can be handled via CSS classes or manual entry
          const isDark = document.documentElement.classList.contains('dark');
          e.currentTarget.style.boxShadow = isDark 
            ? "0 0 0 1px rgba(99,179,237,0.5), 0 0 40px rgba(99,179,237,0.18), 0 0 80px rgba(139,92,246,0.12)"
            : "0 10px 30px -10px rgba(59,130,246,0.3), 0 0 0 1px rgba(59,130,246,0.2)";
        }}
        onMouseLeave={(e) => {
          const isDark = document.documentElement.classList.contains('dark');
          e.currentTarget.style.boxShadow = isDark
            ? "0 0 0 1px rgba(99,179,237,0.25), 0 0 32px rgba(99,179,237,0.06)"
            : "0 4px 12px rgba(59,130,246,0.05), 0 0 0 1px rgba(59,130,246,0.1)";
        }}
      >
        {/* Base Background - Swaps between White and Dark Slate */}
        <div className="absolute inset-0 -z-20 rounded-[14px] bg-white dark:bg-[#0d1117] transition-colors duration-500" />

        {/* Neon Blur Aura */}
        <div
          className="
            absolute -inset-[2px] -z-30 rounded-[16px]
            opacity-0 blur-xl
            transition-opacity duration-500
            group-hover:opacity-100
          "
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.2), rgba(236,72,153,0.18))",
          }}
        />

        {/* Gradient Border - Adjusted for Light Mode Contrast */}
        <div
          className="
            absolute inset-0 rounded-[14px]
            p-[1px]
            opacity-70
            transition-opacity duration-300
            group-hover:opacity-100
          "
          style={{
            background:
              "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
          }}
        >
          <div className="h-full w-full rounded-[13px] bg-white dark:bg-[#0d1117] transition-colors duration-500" />
        </div>

        {/* Top Glow - Subtle blue for light mode, cyan for dark */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12), transparent 65%)",
          }}
        />

        {/* Shimmer - Higher visibility in light mode */}
        <div
          className="
            pointer-events-none absolute top-0
            h-full w-[55%]
            -skew-x-[18deg]

            bg-gradient-to-r
            from-transparent
            via-blue-400/[0.1] dark:via-white/[0.08]
            to-transparent

            -left-[120%]
            transition-all duration-1000
            group-hover:left-[150%]
          "
        />

        {/* Pulse Dot */}
        <span
          className="
            relative z-10
            h-[7px] w-[7px]
            flex-shrink-0 rounded-full
            bg-blue-500 dark:bg-cyan-300
            animate-pulse
          "
          style={{
            boxShadow:
              "0 0 10px rgba(59,130,246,0.6), 0 0 18px rgba(59,130,246,0.3)",
          }}
        />

        {/* Text - Adaptive Gradient */}
        <span
          className="relative z-10 whitespace-nowrap font-bold"
          style={{
            background: "linear-gradient(90deg, #1e40af, #2563eb, #7c3aed)", // Fallback gradient
            backgroundImage: "var(--cta-text-gradient)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {/* Internal CSS Variable strategy for complex text gradient swap */}
          <style jsx>{`
            span {
              --cta-text-gradient: linear-gradient(90deg, #1e3a8a, #3b82f6, #6d28d9);
            }
            :global(.dark) span {
              --cta-text-gradient: linear-gradient(90deg, #93c5fd, #ffffff, #c4b5fd);
            }
          `}</style>
          Get Started
        </span>
      </button>
    </div>
  );
};