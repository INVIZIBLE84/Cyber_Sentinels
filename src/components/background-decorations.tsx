export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
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
