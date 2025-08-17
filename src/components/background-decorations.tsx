
"use client";
import React from 'react';

const SvgLogoInspired = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M50 10 V 30" /> 
    <path d="M50 70 V 90" />
    <path d="M10 50 H 30" />
    <path d="M70 50 H 90" />
    <path d="M21.2 21.2 L 35.3 35.3" />
    <path d="M64.7 64.7 L 78.8 78.8" />
    <path d="M21.2 78.8 L 35.3 64.7" />
    <path d="M64.7 35.3 L 78.8 21.2" />
    <circle cx="50" cy="50" r="20" />
  </svg>
);


const FloatingIcon = ({ children, style }: { children: React.ReactNode, style: React.CSSProperties }) => (
  <div className="absolute text-foreground/10" style={style}>
    {children}
  </div>
);

export function BackgroundDecorations() {
  const iconSize = 150;
  const positions = [
    { top: '10%', left: '15%', transform: 'rotate(-25deg)' },
    { top: '20%', left: '80%', transform: 'rotate(15deg)' },
    { top: '70%', left: '10%', transform: 'rotate(20deg)' },
    { top: '80%', left: '75%', transform: 'rotate(-10deg)' },
    { top: '50%', left: '50%', transform: 'rotate(5deg) translateX(-50%)' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
       <div className="absolute inset-0 w-full h-full opacity-5" style={{
          backgroundImage: 'linear-gradient(hsl(var(--neon-blue)/0.3) 1px, transparent 1px), linear-gradient(to right, hsl(var(--neon-blue)/0.3) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
       }}/>

      {positions.map((pos, i) => (
        <FloatingIcon 
            key={i} 
            style={{ 
                ...pos,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                animation: `float ${6 + i * 0.5}s ease-in-out infinite`,
                opacity: 0.4,
            }}
        >
          <SvgLogoInspired />
        </FloatingIcon>
      ))}

      <div className="absolute left-[max(50%,25rem)] top-0 h-[60rem] w-[120rem] -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_top_center,white,transparent)]">
        <svg
          viewBox="0 0 1200 600"
          className="absolute -top-24 left-1/2 -z-10 h-[60rem] -translate-x-1/2 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-x-[-50%]"
        >
          <path
            fill="none"
            stroke="hsl(var(--foreground) / 0.1)"
            strokeWidth="1"
            d="M 600,0 L 600,600 M 550,0 L 550,600 M 500,0 L 500,600 M 450,0 L 450,600 M 400,0 L 400,600 M 350,0 L 350,600 M 300,0 L 300,600 M 250,0 L 250,600 M 200,0 L 200,600 M 150,0 L 150,600 M 100,0 L 100,600 M 50,0 L 50,600 M 0,0 L 0,600 M 650,0 L 650,600 M 700,0 L 700,600 M 750,0 L 750,600 M 800,0 L 800,600 M 850,0 L 850,600 M 900,0 L 900,600 M 950,0 L 950,600 M 1000,0 L 1000,600 M 1050,0 L 1050,600 M 1100,0 L 1100,600 M 1150,0 L 1150,600 M 1200,0 L 1200,600"
          ></path>
          <path
            fill="none"
            stroke="hsl(var(--foreground) / 0.1)"
            strokeWidth="1"
            d="M 0,300 L 1200,300 M 0,250 L 1200,250 M 0,200 L 1200,200 M 0,150 L 1200,150 M 0,100 L 1200,100 M 0,50 L 1200,50 M 0,350 L 1200,350 M 0,400 L 1200,400 M 0,450 L 1200,450 M 0,500 L 1200,500 M 0,550 L 1200,550"
          ></path>
        </svg>
      </div>
    </div>
  );
}
