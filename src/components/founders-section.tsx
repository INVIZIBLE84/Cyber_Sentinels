import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const founders = [
  { name: "Alex 'Glitch' Volkov", title: "Chief Strategist & Founder", img: "https://placehold.co/400x400.png", color: "neon-blue" },
  { name: "Jasmine 'Proxy' Kaur", title: "Lead Developer & Co-Founder", img: "https://placehold.co/400x400.png", color: "neon-green" },
  { name: "Samuel 'Cipher' Chen", title: "Head of R&D & Co-Founder", img: "https://placehold.co/400x400.png", color: "hot-pink" },
];

const FounderCard = ({ name, title, img, color }: { name: string; title: string; img: string; color: string }) => (
  <Card className="game-card h-full text-center group">
    <CardHeader className="p-0">
      <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
        <Image src={img} alt={name} layout="fill" objectFit="cover" data-ai-hint="person portrait" className="transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </CardHeader>
    <CardContent className="p-6">
       <CardTitle className="text-xl font-pixel uppercase tracking-wider" style={{ color: `hsl(var(--${color}))` }}>{name}</CardTitle>
      <p className="text-foreground/80 mt-2 font-body">{title}</p>
    </CardContent>
  </Card>
);

export function FoundersSection() {
  return (
    <section id="founders" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 uppercase text-neon-blue tracking-widest">
          Meet the Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
