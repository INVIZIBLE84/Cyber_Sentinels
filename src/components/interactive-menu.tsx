"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
    { label: "About Us", href: "/#about-us" },
    { label: "Team", href: "/#founders" },
    { label: "Purpose", href: "/purpose" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/#contact-us" },
];

export function InteractiveMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 w-full h-full animated-grid opacity-30" />
            <div
                className="pointer-events-none fixed inset-0 z-50 transition-transform duration-300"
                style={{
                    background: `radial-gradient(600px at 50% 50%, hsl(var(--primary) / 0.15), transparent 80%)`,
                }}
            />

            <div className="relative z-10 w-full max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    {menuItems.map((item, index) => (
                        <Link href={item.href} passHref key={item.href}>
                            <a
                                onClick={onClose}
                                className="glassmorphism p-6 md:p-8 flex items-center justify-center text-xl md:text-2xl font-headline text-accent uppercase tracking-widest transition-all duration-300 hover:bg-primary/20 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                                style={{ animation: `fade-in-up 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}
                            >
                                {item.label}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-6 right-6 z-50 text-accent hover:text-white"
                aria-label="Close menu"
            >
                <X className="w-8 h-8" />
            </Button>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}
