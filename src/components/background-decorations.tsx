"use client";
import React from 'react';

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated dot grid */}
      <div 
        className="absolute inset-0 animate-grid-pan" 
        style={{
          backgroundImage: 'radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Electric pulse layer 1 */}
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: 'radial-gradient(circle at 25% 25%, hsl(var(--accent) / 0.15), transparent 30%)'
        }}
      />

      {/* Electric pulse layer 2 */}
      <div
        className="absolute inset-0 animate-pulse [animation-delay:-2s]"
        style={{
          background: 'radial-gradient(circle at 75% 50%, hsl(var(--primary) / 0.1), transparent 40%)'
        }}
      />
      
      {/* Aurora effect */}
      <div 
        className="absolute inset-0 animate-aurora opacity-20"
        style={{
          backgroundImage: 'linear-gradient(120deg, hsl(var(--accent) / 0.1), hsl(var(--primary) / 0.1) 50%, hsl(var(--accent) / 0.1) 100%)',
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
}
