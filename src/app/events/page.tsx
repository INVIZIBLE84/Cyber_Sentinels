import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
       <h1 className="text-5xl font-headline text-neon-blue uppercase tracking-widest mb-4 glitch-subtle">Events</h1>
      <p className="text-xl text-foreground/80 mb-8 font-body">Our events schedule is currently being planned. Check back soon!</p>
      <Button asChild variant="default" className="gaming-button">
        <Link href="/">Return to HQ</Link>
      </Button>
    </div>
  );
}
