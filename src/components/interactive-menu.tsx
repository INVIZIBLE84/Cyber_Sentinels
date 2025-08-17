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
                            className={`pentagon-container absolute w-40 h-40 flex items-center justify-center`}
                            style={{ 
                                animation: `fade-in-circle 0.5s ${index * 0.1}s ease-out forwards`, 
                                opacity: 0,
                                '--tx': `${x}px`,
                                '--ty': `${y}px`,
                            } as React.CSSProperties}
                        >
                            <div className={`pentagon-content flex items-center justify-center text-center text-md font-headline text-white uppercase tracking-widest`}>
                              {item.label}
                            </div>
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
