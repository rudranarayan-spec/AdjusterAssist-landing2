"use client";

import React from "react";

export const CTAButton = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
      <button
        type="button"
        className="
          group relative isolate inline-flex items-center gap-3
          overflow-hidden rounded-[14px]
          px-8 sm:px-9 py-4

          text-[12px] sm:text-[13px]
          font-semibold uppercase tracking-[0.16em]
          text-white

          transition-all duration-300 ease-out
          active:scale-[0.97]

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-400/70
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#0a0c0f]
        "
        style={{
          background: "transparent",
          boxShadow:
            "0 0 0 1px rgba(99,179,237,0.25), 0 0 32px rgba(99,179,237,0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 0 1px rgba(99,179,237,0.5), 0 0 40px rgba(99,179,237,0.18), 0 0 80px rgba(139,92,246,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 0 1px rgba(99,179,237,0.25), 0 0 32px rgba(99,179,237,0.06)";
        }}
      >
        {/* Base Background */}
        <div className="absolute inset-0 -z-20 rounded-[14px] bg-[#0d1117]" />

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
              "linear-gradient(135deg, rgba(99,179,237,0.25), rgba(139,92,246,0.2), rgba(236,72,153,0.18))",
          }}
        />

        {/* Gradient Border */}
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
              "linear-gradient(135deg, rgba(99,179,237,0.9), rgba(139,92,246,0.7), rgba(236,72,153,0.9))",
          }}
        >
          <div className="h-full w-full rounded-[13px] bg-[#0d1117]" />
        </div>

        {/* Top Glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(99,179,237,0.22), transparent 65%)",
          }}
        />

        {/* Shimmer */}
        <div
          className="
            pointer-events-none absolute top-0
            h-full w-[55%]
            -skew-x-[18deg]

            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
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
            bg-cyan-300
            animate-pulse
          "
          style={{
            boxShadow:
              "0 0 10px rgba(99,179,237,0.95), 0 0 18px rgba(99,179,237,0.5)",
          }}
        />

        {/* Text */}
        <span
          className="relative z-10 whitespace-nowrap"
          style={{
            background:
              "linear-gradient(90deg, #93c5fd, #ffffff, #c4b5fd)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get Started
        </span>
      </button>
    </div>
  );
};