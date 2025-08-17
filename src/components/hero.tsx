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
          className="gaming-title text-foreground glitch-subtle"
        >
          The Cyber Sentinels
        </h1>
        <div className="mt-8">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Navigation Hub" className="cursor-pointer transition-transform duration-300 hover:scale-110">
                <Logo size={150} />
            </button>
        </div>
        <p className="mt-4 text-lg md:text-xl text-neon-blue font-body uppercase tracking-widest">
          Empowering Minds, Securing Cyberspace
        </p>
        <div className="mt-8 text-sm text-foreground/60 font-body">
          <p>Inaugurated on: Oct 26, 2023</p>
        </div>
      </div>
      <InteractiveMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
