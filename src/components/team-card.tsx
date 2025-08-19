import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  title: string;
  experience: string;
  img: string;
}

export function TeamCard({ name, title, experience, img }: TeamCardProps) {
  return (
    <div className="group perspective-1000">
      <Card className="game-card h-full text-left transition-transform duration-500 ease-in-out group-hover:rotate-y-12 bg-card/80 backdrop-blur-sm">
        <CardHeader className="p-0">
          <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
            <Image 
              src={img} 
              alt={name} 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint="person portrait" 
              className="transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="text-xl font-headline uppercase tracking-wider text-primary">{name}</h3>
          <p className="text-accent/80 mt-1 font-body text-sm">{title}</p>
          <p className="text-foreground/70 mt-4 font-body text-sm">{experience}</p>
        </CardContent>
      </Card>
    </div>
  );
}
