"use client";

import Link from "next/link";

export default function AuthCallbackPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-6 text-slate-900 dark:bg-[#070A12] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.16),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.22),transparent_55%)]" />
      <div className="absolute left-1/2 top-20 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-lg">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-400/20 dark:bg-blue-400/5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                Account Confirmation
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-8 text-center shadow-2xl shadow-blue-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#101722]/80 dark:shadow-black/40 sm:p-10">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50 dark:bg-emerald-500/10 dark:ring-emerald-500/5">
              <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                ✓
              </span>
            </div>

            <h1 className="font-syne text-3xl font-extrabold tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl">
              Email Verified
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
              Your AdjusterAssist account has been confirmed successfully. You
              can now return to the mobile app and sign in.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/80 p-4 dark:border-blue-400/10 dark:bg-blue-400/5">
              <p className="text-xs font-semibold leading-5 text-blue-700 dark:text-blue-300">
                If the app did not open automatically, please open
                AdjusterAssist manually and continue with login.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.98]"
              >
                Back to Website
              </Link>

              <a
                href="adjusterassist://login"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 active:scale-[0.98] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/40"
              >
                Open App
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] font-medium text-slate-400 dark:text-slate-600">
            AdjusterAssist™ is currently in private development.
          </p>
        </div>
      </div>
    </main>
  );
}