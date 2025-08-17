"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/#about-us", label: "About" },
  { href: "/#contact-us", label: "Contact" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/#founders", label: "Team" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const midIndex = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, midIndex);
  const rightLinks = navLinks.slice(midIndex);

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
      href={href}
      onClick={onClick}
      className="font-headline text-lg uppercase tracking-wider text-foreground/80 transition-colors hover:text-neon-blue"
      style={{textShadow: '0 0 5px hsl(var(--neon-blue) / 0.3)'}}
    >
      {label}
    </Link>
  );

  const BrandLink = ({onClick}: {onClick?: () => void}) => (
    <Link 
      href="/" 
      aria-label="Cyber Sentinels HQ Home"
      onClick={onClick}
      className="font-headline text-xl uppercase tracking-wider text-foreground/90 transition-colors hover:text-neon-blue"
    >
      Cyber Sentinels
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8">
          {leftLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <BrandLink />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {rightLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-neon-blue" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/90 backdrop-blur-lg w-[250px]">
              <div className="flex flex-col items-center h-full pt-16">
                <div className="mb-12">
                  <BrandLink onClick={() => setIsMobileMenuOpen(false)} />
                </div>
                <nav className="flex flex-col items-center gap-8">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} onClick={() => setIsMobileMenuOpen(false)} />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
