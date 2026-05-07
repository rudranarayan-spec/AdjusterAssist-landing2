"use client";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden bg-[#0a0c0f]">

      {/* Premium Background Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

      {/* Animated Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Development Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#131820] border border-white/10 rounded-full px-5 py-2 mb-10 shadow-2xl shadow-blue-500/5 hover:border-white/20 transition-colors group cursor-default">
          <div className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b] group-hover:scale-110 transition-transform" />
          <span className="text-[11px] text-[#8b9ab0] uppercase tracking-[0.15em] font-bold">
            Currently in Active Development
          </span>
        </div>

        {/* Headline with Premium Typography */}
        <h1 className="font-syne font-extrabold text-[42px] sm:text-[64px] lg:text-[84px] leading-[0.95] mb-8 tracking-[-0.03em] text-white">
          <span className="animate-shimmer block sm:inline">AI-powered</span><br className="hidden sm:block" />
          <span className="relative">
            claim drafting support
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/20 md:block hidden" viewBox="0 0 400 20">
              <path d="M0 10 Q100 0 200 10 T400 10" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span><br />
          <span className="text-[#4a5568]">for insurance pros</span>
        </h1>

        {/* Refined Subtext */}
        <p className="max-w-[600px] mx-auto text-[#8b9ab0] text-base md:text-lg mb-12 leading-relaxed font-light px-4">
          AdjusterAssist™ is a professional workflow tool being built to help property claim professionals organize facts, draft clearer documentation, and move files forward with greater consistency.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <button
            className="
      relative group isolate overflow-hidden
      px-8 sm:px-10 py-4 sm:py-4
      rounded-2xl
      bg-[#0b0f14]
      border border-cyan-400/20
      text-white
      font-bold uppercase tracking-[0.18em]
      text-xs sm:text-sm
      transition-all duration-500 ease-out
      active:scale-[0.97]

      shadow-[0_0_20px_rgba(34,211,238,0.08)]
      hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]

      hover:border-cyan-400/60
    "
          >
            {/* Animated Neon Border */}
            <div
              className="
        absolute inset-0 rounded-2xl p-[1px]
        opacity-70 group-hover:opacity-100
        transition duration-500
        bg-[linear-gradient(130deg,rgba(34,211,238,0.9),rgba(59,130,246,0.2),rgba(168,85,247,0.9))]
      "
            >
              <div className="h-full w-full rounded-2xl bg-[#0b0f14]" />
            </div>

            {/* Background Glow */}
            <div
              className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)]
        opacity-80
      "
            />

            {/* Neon Blur Aura */}
            <div
              className="
        absolute -inset-[2px]
        rounded-2xl
        bg-cyan-400/20
        blur-xl
        opacity-0
        group-hover:opacity-100
        transition duration-500
        -z-10
      "
            />

            {/* Shimmer Sweep */}
            <div
              className="
        absolute inset-0 overflow-hidden rounded-2xl
      "
            >
              <div
                className="
          absolute top-0 left-[-120%]
          h-full w-[60%]
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent

          group-hover:left-[140%]
          transition-all
          duration-1000
        "
              />
            </div>

            {/* Pulse Ring */}
            <div
              className="
        absolute inset-0 rounded-2xl
        border border-cyan-400/30
        animate-pulse
        opacity-40
      "
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              <span
                className="
          h-2 w-2 rounded-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.95)]
          animate-pulse
        "
              />

              <span
                className="
          bg-gradient-to-r
          from-cyan-300
          via-white
          to-blue-300
          bg-clip-text
          text-transparent
        "
              >
                Coming Soon
              </span>
            </span>
          </button>
        </div>

        {/* Bottom Feature Pill Labels */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
          {['Optimized Workflow', 'AI-Assisted Docs', 'Pro-Grade Compliance'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};