"use client";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden bg-white dark:bg-[#0a0c0f] transition-colors duration-500">

      {/* Premium Background Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-40 pointer-events-none" />

      {/* Dynamic Radial Gradient for Light/Dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

      {/* Animated Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-600/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Private Development Notice */}
        <div className="mb-6 flex justify-center">
          <div
            className="
      max-w-3xl
      rounded-2xl
      border border-amber-200/60 dark:border-amber-500/20
      bg-amber-50/80 dark:bg-amber-500/5
      px-5 py-3
      backdrop-blur-sm
      shadow-sm
    "
          >
            <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <span className="font-semibold">
                Private Development Notice:
              </span>{" "}
              AdjusterAssist™ is currently in private development. The platform is intended
              to support professional claim documentation, workflow organization, and
              communication drafting. Public access is not currently available.
            </p>
          </div>
        </div>

        {/* Development Badge */}
        <div className="inline-flex items-center gap-2.5 bg-slate-50 dark:bg-[#131820] border border-slate-200 dark:border-white/10 rounded-full px-5 py-2 mb-10 shadow-xl dark:shadow-2xl shadow-blue-500/5 hover:border-blue-300 dark:hover:border-white/20 transition-all group cursor-default">
          <div className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b] group-hover:scale-110 transition-transform" />
          <span className="text-[11px] text-slate-500 dark:text-[#8b9ab0] uppercase tracking-[0.15em] font-bold">
            Currently in Active Development
          </span>
        </div>

        {/* Headline with Premium Typography */}
        <h1 className="font-syne font-extrabold text-[38px] sm:text-[64px] lg:text-[84px] leading-[1.1] sm:leading-[0.95] mb-8 tracking-[-0.03em] text-slate-900 dark:text-white">
          <span className="animate-shimmer block sm:inline bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">Claim Documentation</span><br className="hidden sm:block" />
          <span className="relative">
            and Guidance for
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/20 md:block hidden" viewBox="0 0 400 20">
              <path d="M0 10 Q100 0 200 10 T400 10" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span><br />
          <span className="text-slate-400 dark:text-[#4a5568]">Property Insurance Professionals</span>
        </h1>

        {/* Refined Subtext */}
        <p className="max-w-[600px] mx-auto text-slate-600 dark:text-[#8b9ab0] text-base md:text-lg mb-12 leading-relaxed font-light px-4 transition-colors">
          AdjusterAssist is a claim execution workspace designed for property insurance professionals. It helps adjusters organize claim facts, draft professional claim communications, create file-ready notes, and move claims forward with clearer next steps.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <button
            className="
              relative group isolate overflow-hidden
              px-8 sm:px-10 py-4
              rounded-2xl
              bg-white dark:bg-[#0b0f14]
              border border-blue-200 dark:border-cyan-400/20
              text-slate-900 dark:text-white
              font-bold uppercase tracking-[0.18em]
              text-xs sm:text-sm
              transition-all duration-500 ease-out
              active:scale-[0.97]
              shadow-lg dark:shadow-[0_0_20px_rgba(34,211,238,0.08)]
              hover:shadow-2xl dark:hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]
              hover:border-blue-400 dark:hover:border-cyan-400/60
            "
          >
            {/* Animated Border Gradient */}
            <div
              className="
                absolute inset-0 rounded-2xl p-[1px]
                opacity-40 dark:opacity-70 group-hover:opacity-100
                transition duration-500
                bg-[linear-gradient(130deg,rgba(37,99,235,0.8),rgba(34,211,238,0.2),rgba(37,99,235,0.8))]
                dark:bg-[linear-gradient(130deg,rgba(34,211,238,0.9),rgba(59,130,246,0.2),rgba(168,85,247,0.9))]
              "
            >
              <div className="h-full w-full rounded-2xl bg-white dark:bg-[#0b0f14]" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)] opacity-80" />

            {/* Neon Blur Aura */}
            <div className="absolute -inset-[2px] rounded-2xl bg-blue-400/10 dark:bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

            {/* Shimmer Sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-[-120%] h-full w-[60%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-blue-500/10 dark:via-white/10 to-transparent group-hover:left-[140%] transition-all duration-1000" />
            </div>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.5)] dark:shadow-[0_0_12px_rgba(34,211,238,0.95)] animate-pulse" />
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 dark:from-cyan-300 dark:via-white dark:to-blue-300 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </span>
          </button>
        </div>

        {/* Bottom Feature Pill Labels */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-6 opacity-60 dark:opacity-40">
          {['Optimized Workflow', 'AI-Assisted Docs', 'Pro-Grade Compliance'].map((item) => (
            <div key={item} className="flex items-center gap-2 group cursor-default">
              <div className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 transition-transform group-hover:scale-150" />
              <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.2em] font-bold text-slate-800 dark:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};