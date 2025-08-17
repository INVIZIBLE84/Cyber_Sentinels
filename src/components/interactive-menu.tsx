"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
    { label: "About Us", href: "/#about-us", color: "neon-blue" },
    { label: "Team", href: "/#founders", color: "neon-green" },
    { label: "Purpose", href: "/purpose", color: "hot-pink" },
    { label: "Projects", href: "/projects", color: "orange" },
    { label: "Events", href: "/events", color: "neon-blue" },
    { label: "Contact", href: "/#contact-us", color: "neon-green" },
];

export function InteractiveMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
             <div className="absolute inset-0 w-full h-full opacity-5" style={{
                backgroundImage: 'linear-gradient(hsl(var(--neon-blue)/0.3) 1px, transparent 1px), linear-gradient(to right, hsl(var(--neon-blue)/0.3) 1px, transparent 1px)',
                backgroundSize: '2rem 2rem',
             }}/>
            
            <div className="relative z-10 text-center">
                 <h2 className="font-headline text-4xl mb-12 text-foreground uppercase tracking-widest">Select Destination</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {menuItems.map((item, index) => (
                         <Link
                            href={item.href}
                            key={item.href}
                            onClick={onClose}
                            className="gaming-button"
                            style={{ 
                                animation: `fade-in-up 0.5s ${index * 0.1}s ease-out forwards`, 
                                opacity: 0,
                                '--glow-color': `hsl(var(--${item.color}))`
                            } as React.CSSProperties}
                        >
                           {item.label}
                        </Link>
                    ))}
                </div>

                <Button
                    variant="ghost"
                    size="lg"
                    onClick={onClose}
                    className="mt-16 text-foreground/80 hover:text-foreground hover:bg-transparent font-headline text-lg"
                    aria-label="Close menu"
                >
                    <X className="w-6 h-6 mr-2" />
                    Cancel
                </Button>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .gaming-button:hover {
                    box-shadow: 0 0 15px var(--glow-color), 0 0 30px var(--glow-color);
                    background-color: var(--glow-color);
                    color: black;
                }
            `}</style>
        </div>
    );
}
