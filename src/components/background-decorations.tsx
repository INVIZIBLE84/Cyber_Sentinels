"use client";
import React from 'react';

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute inset-0 animate-[glitch-anim-1_5s_infinite] opacity-30">
        <div className="absolute inset-0"
           style={{
            backgroundImage: 'radial-gradient(hsl(var(--accent) / 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
           }}
        />
      </div>
      <div className="absolute inset-0 animate-[glitch-anim-2_7s_infinite_reverse] opacity-20">
        <div className="absolute inset-0"
           style={{
            backgroundImage: 'radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
           }}
        />
      </div>
    </div>
  );
}
