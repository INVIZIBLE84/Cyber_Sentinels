"use client";

import { Logo } from "./ui/logo";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-center overflow-hidden">
      <div className="z-10 relative px-4 flex flex-col items-center">
        <div className="mb-8">
          <Logo size={150} />
        </div>
        <h1 
          className="gaming-title text-foreground relative glitch-effect"
          data-text="The Cyber Sentinels"
        >
          The Cyber Sentinels
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary/80 font-body uppercase tracking-widest">
          Empowering Minds, Securing Cyberspace
        </p>
        <div className="mt-8 text-sm text-foreground/60 font-body">
          <p>Inaugurated on: Apr 23, 2024</p>
        </div>
      </div>
    </section>
  );
}
