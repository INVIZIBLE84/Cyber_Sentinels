
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundDecorations } from "@/components/background-decorations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, User, Star } from "lucide-react";

const founders = [
  {
    name: "Shwet Shirbhayye",
    role: "MSc Cyber Security (Pursuing)",
  },
  {
    name: "Darshan Kale",
    role: "Bvoc Cyber Security",
  },
];

const teamMembers = [
    "Atharv Wighe",
    "Yadnyesh Chafle",
    "Sarvesh Chaware",
    "Atharv Jadhav",
    "Mayur Kathane"
];

export default function TeamPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundDecorations />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="gaming-title text-foreground relative glitch-effect" data-text="Our Team">
            Our Team
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-primary/80 font-body uppercase tracking-widest">
            The Minds Behind the Mission
          </p>
        </div>

        <Card className="game-card event-card mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-headline text-primary uppercase tracking-widest flex items-center justify-center gap-4">
              <ShieldCheck className="w-10 h-10 text-accent" />
              Founders
            </CardTitle>
            <p className="text-lg text-foreground/80 font-body pt-2">
              The architects of The Cyber Sentinels, who laid the foundation for our community.
            </p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="p-8 bg-background/50 rounded-lg border-2 border-accent shadow-lg text-center transition-all hover:scale-105 hover:shadow-accent/50">
                <h3 className="font-headline text-3xl text-primary mb-2 uppercase">{founder.name}</h3>
                <p className="font-body text-accent text-lg">{founder.role}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="game-card event-card text-center">
          <CardHeader>
            <CardTitle className="text-4xl font-headline text-primary uppercase tracking-wider flex items-center justify-center gap-4">
                <Star className="w-10 h-10 text-accent" />
                Core Team
            </CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((name) => (
               <div key={name} className="p-6 bg-background/30 rounded-lg border border-border text-center flex flex-col items-center justify-center">
                    <User className="h-10 w-10 text-accent mb-4" />
                    <h4 className="font-headline text-xl text-primary uppercase">{name}</h4>
                </div>
            ))}
          </CardContent>
        </Card>


        <div className="text-center mt-16">
          <Button asChild variant="outline" className="gaming-button bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/">Return to HQ</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
