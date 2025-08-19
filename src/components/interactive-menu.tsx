"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";

const menuItems = [
    { label: "About Us", href: "/#about-us" },
    { label: "Team", href: "/team" },
    { label: "Purpose", href: "/purpose" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/#contact-us" },
];

export function InteractiveMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative z-10 text-center">
                <div className="mb-12">
                  <Logo size={80} />
                </div>
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
            `}</style>
        </div>
    );
}
