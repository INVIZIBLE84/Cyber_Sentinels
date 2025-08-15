import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TeamPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-headline text-accent mb-4">Our Team</h1>
      <p className="text-xl text-foreground/80 mb-8">Full team member profiles will be available soon.</p>
      <Button asChild variant="outline">
        <Link href="/">Return to HQ</Link>
      </Button>
    </div>
  );
}
