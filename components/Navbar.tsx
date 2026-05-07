"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link
import { usePathname, useRouter } from 'next/navigation'; // Added for cross-page navigation
import { ShimmerButton } from './ui/shimmer-button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "", type: "scroll" },
        { name: "About", href: "about", type: "scroll" },
        { name: "Contact", href: "contact", type: "scroll" },
        { name: "Privacy Policy", href: "/privacy", type: "route" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { type: string; href: string; }) => {
        if (link.type === "scroll") {
            e.preventDefault();
            
            // If we are NOT on the home page, redirect to home first
            if (pathname !== "/") {
                router.push(`/#${link.href}`);
                setIsOpen(false);
                return;
            }

            // If we ARE on the home page, scroll smoothly
            const targetId = link.href === "/" ? "hero" : link.href; // Assuming your Hero section has id="hero"
            const element = document.getElementById(targetId);
            
            if (element) {
                const offset = 80; // Height of your navbar
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${
                    scrolled || isOpen
                        ? "bg-[#0a0c0f]/80 backdrop-blur-2xl border-b border-white/10"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/1111111.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 40px, 36px"
                            />
                        </div>
                        <span className="font-syne font-bold text-white text-[17px] tracking-tight">
                            Adjuster<span className="text-blue-500 group-hover:text-blue-400">Assist</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.type === "scroll" ? `/#${link.href}` : link.href}
                                    onClick={(e) => handleNavClick(e as never, link)}
                                    className="text-[13px] text-[#8b9ab0] hover:text-white transition-all duration-300 font-medium tracking-wide relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                        <ShimmerButton>Coming Soon</ShimmerButton>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden relative z-[120] p-2 text-white transition-transform active:scale-90"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[105] md:hidden transition-all duration-700 ease-[cubic-bezier(0.32,0,0.67,0)] ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="absolute inset-0 bg-[#0a0c0f]/98 backdrop-blur-3xl" onClick={() => setIsOpen(false)} />

                <div className="relative h-full flex flex-col justify-center px-8">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.type === "scroll" ? `/#${link.href}` : link.href}
                                onClick={(e) => handleNavClick(e as never, link)}
                                className={`text-4xl font-syne font-bold text-white transition-all duration-500 transform ${
                                    isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className={`mt-12 transition-all duration-700 delay-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <ShimmerButton className="w-full py-5 rounded-2xl">Coming Soon</ShimmerButton>
                    </div>
                </div>
            </div>
        </>
    );
};