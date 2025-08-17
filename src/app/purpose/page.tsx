import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PurposePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
      <h1 className="text-5xl font-headline text-neon-blue uppercase tracking-widest mb-4 glitch-subtle">Our Purpose</h1>
      <p className="text-xl text-foreground/80 mb-8 font-body">Details about our purpose and mission will be revealed soon.</p>
       <Button asChild variant="default" className="gaming-button">
        <Link href="/">Return to HQ</Link>
      </Button>
    </div>
  );
}
