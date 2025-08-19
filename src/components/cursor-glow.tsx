"use client";

import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [delayedPosition, setDelayedPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const isMobile = useIsMobile();
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      setDelayedPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile, position]);

  if (isMobile) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-50 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${delayedPosition.x}px ${delayedPosition.y}px, hsl(var(--neon-blue) / 0.1), transparent 80%)`,
        }}
      />
      <div 
        className="pointer-events-none fixed z-50"
        style={{
            left: delayedPosition.x,
            top: delayedPosition.y,
            transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
            transition: 'transform 0.2s ease-out',
      }}>
        <div className={`w-2 h-2 rounded-full transition-all duration-200 ${isPointer ? 'bg-neon-green' : 'bg-neon-blue'}`} />
      </div>
    </>
  );
}
