"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ShimmerButton } from './ui/shimmer-button';
import { ThemeToggle } from './ThemeToggle'; // Import your ThemeToggle

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
            if (pathname !== "/") {
                router.push(`/#${link.href}`);
                setIsOpen(false);
                return;
            }
            const targetId = link.href === "" || link.href === "/" ? "hero" : link.href;
            const element = document.getElementById(targetId);
            
            if (element) {
                const offset = 80;
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
                        ? "bg-white/80 dark:bg-[#0a0c0f]/80 backdrop-blur-2xl border-b border-black/5 dark:border-white/10"
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
                        <span className="font-syne font-bold text-slate-900 dark:text-white text-[17px] tracking-tight">
                            Adjuster<span className="text-blue-500 group-hover:text-blue-400">Assist</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.type === "scroll" ? `/#${link.href}` : link.href}
                                    onClick={(e) => handleNavClick(e as never, link)}
                                    className="text-[13px] text-slate-600 dark:text-[#8b9ab0] hover:text-blue-500 dark:hover:text-white transition-all duration-300 font-medium tracking-wide relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                        
                        {/* Action Area with Theme Toggle */}
                        <div className="flex items-center gap-4 pl-6 border-l border-black/5 dark:border-white/10">
                            <ThemeToggle />
                            <ShimmerButton>Coming Soon</ShimmerButton>
                        </div>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="flex md:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            className="relative z-[120] p-2 text-slate-900 dark:text-white transition-transform active:scale-90"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[105] md:hidden transition-all duration-700 ease-[cubic-bezier(0.32,0,0.67,0)] ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="absolute inset-0 bg-white/98 dark:bg-[#0a0c0f]/98 backdrop-blur-3xl" onClick={() => setIsOpen(false)} />

                <div className="relative h-full flex flex-col justify-center px-8">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.type === "scroll" ? `/#${link.href}` : link.href}
                                onClick={(e) => handleNavClick(e as never, link)}
                                className={`text-4xl font-syne font-bold text-slate-900 dark:text-white transition-all duration-500 transform ${
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