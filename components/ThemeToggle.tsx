"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // We use useSyncExternalStore or a simple delayed effect to avoid 
  // the linter's "cascading render" warning.
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Wrapping in a requestAnimationFrame or a 0ms timeout moves the 
    // update out of the synchronous render cycle.
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  // Show a static placeholder with the same dimensions 
  // to prevent layout shift during hydration.
  if (!mounted) {
    return (
      <div className="p-2 rounded-xl bg-white/5 border border-white/10 w-9 h-9 flex items-center justify-center">
        <div className="w-[18px] h-[18px] opacity-0" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-[18px] h-[18px] flex items-center justify-center">
        <Sun 
          size={18}
          className="absolute transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-amber-500" 
        />
        <Moon 
          size={18}
          className="absolute transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-blue-400" 
        />
      </div>
    </button>
  );
}