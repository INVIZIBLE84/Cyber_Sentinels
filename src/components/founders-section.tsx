import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const founders = [
  { name: "Alex 'Glitch' Volkov", title: "Chief Strategist & Founder", img: "https://placehold.co/400x400.png" },
  { name: "Jasmine 'Proxy' Kaur", title: "Lead Developer & Co-Founder", img: "https://placehold.co/400x400.png" },
  { name: "Samuel 'Cipher' Chen", title: "Head of R&D & Co-Founder", img: "https://placehold.co/400x400.png" },
];

const FounderCard = ({ name, title, img }: { name: string; title: string; img: string }) => (
  <div className="group perspective-1000">
    <Card className="glassmorphism h-full text-center transition-transform duration-500 group-hover:rotate-y-12">
      <CardHeader>
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-accent/50">
          <Image src={img} alt={name} layout="fill" objectFit="cover" data-ai-hint="person portrait" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-headline text-accent">{name}</CardTitle>
        <p className="text-foreground/80 mt-2">{title}</p>
      </CardContent>
    </Card>
  </div>
);

export function FoundersSection() {
  return (
    <section id="founders" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-accent">
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
