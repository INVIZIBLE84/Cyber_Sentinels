"use client";

import { useState } from "react";
import { InteractiveMenu } from "./interactive-menu";
import { Logo } from "./ui/logo";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative flex items-center justify-center min-h-screen text-center overflow-hidden">
      <div className="z-10 relative px-4 flex flex-col items-center">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white relative glitch"
          data-text="Cyber Sentinels HQ"
        >
          Cyber Sentinels HQ
        </h1>
        <div className="mt-8">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Navigation Hub" className="cursor-pointer">
                <Logo />
            </button>
        </div>
        <p className="mt-4 text-lg md:text-xl text-accent font-code">
          Guarding the Digital Frontier
        </p>
        <div className="mt-8 text-sm text-foreground/60 font-code">
          <p>Inaugurated on: Oct 26, 2023</p>
        </div>
      </div>
      <InteractiveMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
