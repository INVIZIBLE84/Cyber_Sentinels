"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
    { label: "About Us", href: "/#about-us", color: "bg-chart-1/30" },
    { label: "Team", href: "/#founders", color: "bg-chart-2/30" },
    { label: "Purpose", href: "/purpose", color: "bg-chart-3/30" },
    { label: "Projects", href: "/projects", color: "bg-chart-4/30" },
    { label: "Events", href: "/events", color: "bg-chart-5/30" },
    { label: "Contact", href: "/#contact-us", color: "bg-primary/30" },
];

const RADIUS = 220; // Radius of the circle in pixels

export function InteractiveMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 w-full h-full animated-grid opacity-30" />
            <div
                className="pointer-events-none fixed inset-0 z-50 transition-transform duration-300"
                style={{
                    background: `radial-gradient(600px at 50% 50%, hsl(var(--primary) / 0.15), transparent 80%)`,
                }}
            />

            <div className="relative z-10 flex items-center justify-center" style={{ width: RADIUS * 2.5, height: RADIUS * 2.5 }}>
                {menuItems.map((item, index) => {
                    const angle = (index / menuItems.length) * 2 * Math.PI - (Math.PI / 2);
                    const x = RADIUS * Math.cos(angle);
                    const y = RADIUS * Math.sin(angle);
                    
                    return (
                        <Link
                            href={item.href}
                            key={item.href}
                            onClick={onClose}
                            className={`absolute hexagon backdrop-blur-md border border-white/10 p-4 w-40 h-44 flex items-center justify-center text-center text-md font-headline text-accent uppercase tracking-widest transition-all duration-300 hover:border-accent hover:text-white hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 ${item.color}`}
                            style={{ 
                                animation: `fade-in-circle 0.5s ${index * 0.1}s ease-out forwards`, 
                                opacity: 0,
                                '--tx': `${x}px`,
                                '--ty': `${y}px`,
                            } as React.CSSProperties}
                        >
                            {item.label}
                        </Link>
                    );
                })}

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="z-50 text-accent hover:text-white rounded-full glassmorphism w-24 h-24 hover:bg-primary/20"
                    aria-label="Close menu"
                >
                    <X className="w-12 h-12" />
                </Button>
            </div>

            <style jsx>{`
                @keyframes fade-in-circle {
                    from {
                        opacity: 0;
                        transform: translate(0, 0) scale(0.5);
                    }
                    to {
                        opacity: 1;
                        transform: translate(var(--tx), var(--ty)) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}

    