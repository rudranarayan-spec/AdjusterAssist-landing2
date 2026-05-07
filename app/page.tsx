import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/ui/CTA";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0c0f]">
      <Navbar />
      <Hero />
      <About/>
      <CTA/>
      <Contact/>
      <Footer />
    </main>
  );
}