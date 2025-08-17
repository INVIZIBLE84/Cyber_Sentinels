
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

const SvgGlitchLock = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="currentColor">
        <path fill="#C62828" d="M448 448H64c-17.67 0-32-14.33-32-32V160c0-17.67 14.33-32 32-32h384c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32z"/>
        <path fill="#212121" d="M416 416H96V160h320v256z"/>
        <path fill="#E53935" d="M288 288h-16v-32h-32v-16h48zM240 240h-16v16h-16v16h32zM240 304h16v16h16v-32h-32zM288 320h-16v-16h-16v-16h32z"/>
        <path fill="#C62828" d="M256 208c-26.47 0-48 21.53-48 48v48h16v-48c0-17.64 14.36-32 32-32s32 14.36 32 32v16h16v-16c0-26.47-21.53-48-48-48z"/>
        <path fill="#E53935" d="M272 256v16h-48v-16h16v-16h16v16h16zM320 208H192v16h128v-16zM352 240H160v16h192v-16zM320 272H192v16h128v-16zM352 304H160v16h192v-16zM320 336H192v16h128v-16zM352 368H160v16h192v-16z"/>
        <path fill="#4527A0" d="M384 128H320l-16-32-16-32-16-32-16-32h144z"/>
        <path fill="#7E57C2" d="M368 128h-48l16-32 16-32 16-32z"/>
        <path fill="#FFB74D" d="M352 112a24 24 0 1 1-48 0 24 24 0 0 1 48 0z"/>
        <path fill="#212121" d="M352 112a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-24-16a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/>
        <path fill="#212121" d="M384 128H320l-4-8-4-8-4-8-4-8-4-8-4-8-4-8-4-8h104l-8 32z" opacity=".2"/>
    </svg>
);

const SvgHack = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className} fill="currentColor">
        <path fill="#00BCD4" d="M100 10c-49.7 0-90 40.3-90 90s40.3 90 90 90 90-40.3 90-90-40.3-90-90-90zm0 162c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"/>
        <path fill="#212121" d="M136.1 43.9c-3.2-3.2-8.4-3.2-11.6 0l-24.5 24.5-24.5-24.5c-3.2-3.2-8.4-3.2-11.6 0s-3.2 8.4 0 11.6l24.5 24.5-24.5 24.5c-3.2 3.2-3.2 8.4 0 11.6 1.6 1.6 3.7 2.4 5.8 2.4s4.2-.8 5.8-2.4l24.5-24.5 24.5 24.5c1.6 1.6 3.7 2.4 5.8 2.4s4.2-.8 5.8-2.4c3.2-3.2 3.2-8.4 0-11.6l-24.5-24.5 24.5-24.5c3.2-3.2 3.2-8.4 0-11.6z"/>
        <path fill="#FFFFFF" d="M96 122.3l-13.8-13.8c-1.5-1.5-3.5-2.3-5.6-2.3s-4.1.8-5.6 2.3c-3.1 3.1-3.1 8.2 0 11.3l19.4 19.4c1.5 1.5 3.5 2.3 5.6 2.3s4.1-.8 5.6-2.3l38.9-38.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L96 122.3z"/>
        <path fill="#009688" d="M100 18c-45.1 0-82 36.9-82 82s36.9 82 82 82 82-36.9 82-82-36.9-82-82-82zm0 156c-40.8 0-74-33.2-74-74s33.2-74 74-74 74 33.2 74 74-33.2 74-74 74z"/>
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
    { top: '10%', left: '15%', transform: 'rotate(-25deg)', component: SvgLogoInspired },
    { top: '20%', left: '80%', transform: 'rotate(15deg)', component: SvgGlitchLock },
    { top: '70%', left: '10%', transform: 'rotate(20deg)', component: SvgGlitchLock },
    { top: '80%', left: '75%', transform: 'rotate(-10deg)', component: SvgLogoInspired },
    { top: '50%', left: '50%', transform: 'rotate(5deg) translateX(-50%)', component: SvgLogoInspired },
    { top: '40%', left: '25%', transform: 'rotate(10deg)', component: SvgHack },
    { top: '60%', left: '90%', transform: 'rotate(-15deg)', component: SvgHack },
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
                top: pos.top,
                left: pos.left,
                transform: pos.transform,
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                animation: `float ${6 + i * 0.5}s ease-in-out infinite`,
                opacity: 0.4,
            }}
        >
          <pos.component />
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
