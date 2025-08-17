
"use client";
import React from 'react';

const SvgHacker = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        className={className}
        fill="currentColor"
    >
        <path d="M432.6 203.8c-2.4-5.2-4.8-10.4-7.2-15.5l-33.3-72.1c-1.2-2.6-2.4-5.2-3.6-7.8-13.6-29.4-44.2-48.4-77.9-48.4h-192c-33.7 0-64.3 19-77.9 48.4-1.2 2.6-2.4 5.2-3.6 7.8l-33.3 72.1c-2.4 5.1-4.8 10.3-7.2 15.5-16.7 35.8-10.8 77.9 14.1 106.9l2.8 3.2c1.2 1.4 2.4 2.8 3.7 4.1.2.2.4.3.6.5 12.3 12.8 27.2 23.3 43.6 30.7 1.8.8 3.6 1.6 5.4 2.4 2.8.3 5.5.5 8.3.5h192c2.8 0 5.5-.2 8.3-.5 1.8-.8 3.6-1.6 5.4-2.4 16.4-7.4 31.3-17.9 43.6-30.7.2-.2.4-.3.6-.5 1.3-1.3 2.5-2.7 3.7-4.1l2.8-3.2c24.9-29 30.8-71.1 14.1-106.9zm-225.8 91.8c-44.1 0-79.8-35.8-79.8-79.8s35.8-79.8 79.8-79.8 79.8 35.8 79.8 79.8-35.8 79.8-79.8 79.8zm-153.3-95.3c-20.1 0-36.4-16.3-36.4-36.4v-3.6h-3.6c-6.6 0-12-5.4-12-12s5.4-12 12-12h3.6v-26.3c0-20.1 16.3-36.4 36.4-36.4h7.2c6.6 0 12 5.4 12 12s-5.4 12-12 12h-7.2v72.1c-2.4-1.1-4.9-1.9-7.4-2.5zm19.3-55.6c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm301.2 31.6c-2.5.6-5 1.4-7.4 2.5v-72.1h-7.2c-6.6 0-12-5.4-12-12s5.4-12 12-12h7.2c20.1 0 36.4 16.3 36.4 36.4v26.3h3.6c6.6 0 12 5.4 12 12s-5.4 12-12 12h-3.6v3.6c0 20.1-16.3 36.4-36.4 36.4zm-7.2-55.6c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-143.4-124.9c-2.5.6-5 1.4-7.4 2.5v-10.9h-7.2c-6.6 0-12-5.4-12-12s5.4-12 12-12h7.2c20.1 0 36.4 16.3 36.4 36.4v12.7h3.6c6.6 0 12 5.4 12 12s-5.4 12-12 12h-3.6v3.6c0 20.1-16.3 36.4-36.4 36.4zm-7.2-55.6c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-8 42.4c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z M235.6 230.1l-11.1-22.9-22.9-11.1 22.9-11.1 11.1-22.9 11.1 22.9 22.9 11.1-22.9 11.1z"/>
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
          <SvgHacker />
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
