"use client";

import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-50 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, hsl(var(--neon-blue) / 0.1), transparent 80%)`,
        }}
      />
      <div 
        className="pointer-events-none fixed z-50"
        style={{
            left: position.x,
            top: position.y,
            transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
            transition: 'transform 0.2s ease-out',
      }}>
        <div className={`w-2 h-2 rounded-full transition-all duration-200 ${isPointer ? 'bg-neon-green' : 'bg-neon-blue'}`} />
      </div>
    </>
  );
}
