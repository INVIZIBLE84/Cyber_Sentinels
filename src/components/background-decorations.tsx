"use client";
import React from 'react';

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent) / 0.1)" />
            <stop offset="100%" stopColor="hsl(var(--accent) / 0)" />
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.05)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
          </radialGradient>
        </defs>
        
        {/* Static background circuitry */}
        <path d="M-100 100 Q 50 200 200 100 T 500 100 M 0 300 Q 150 400 300 300 T 600 300 M 800 50 Q 900 150 1000 50 T 1300 50" stroke="hsl(var(--border) / 0.2)" strokeWidth="1" fill="none" />
        <path d="M-50 500 Q 100 600 250 500 T 550 500 M 400 800 Q 550 900 700 800 T 1000 800" stroke="hsl(var(--border) / 0.2)" strokeWidth="1" fill="none" />

        {/* Animated flowing lines */}
        <path d="M-100 200 L 200 400 L 400 100 L 700 500 L 1000 200 L 1200 400" stroke="hsl(var(--accent) / 0.3)" strokeWidth="1" fill="none" className="animate-flow" />
        <path d="M-100 600 L 100 700 L 300 500 L 600 800 L 900 600 L 1200 700" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" fill="none" className="animate-flow-reverse" />

        {/* Pulsing nodes */}
        <circle cx="200" cy="400" r="150" fill="url(#grad1)" className="animate-pulse-slow" />
        <circle cx="900" cy="600" r="200" fill="url(#grad2)" className="animate-pulse-slow [animation-delay:-2s]" />
      </svg>
    </div>
  );
}
