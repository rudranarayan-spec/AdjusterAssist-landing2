import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdjusterAssist",
  description: "AdjusterAssist (TM) is a professional workflow tool being built to help property claim professionals organize claim facts, draft clearer documentation, prepare communications, and move files forward with greater consistency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" // Start with your premium dark look
          enableSystem
          disableTransitionOnChange
        >
        {children}
        <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
