import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const founders = [
  { name: "Shwet Shirbhayye", title: "Founder", img: "https://placehold.co/400x400.png" },
  { name: "Darshan Kale", title: "Co-Founder", img: "https://placehold.co/400x400.png" },
];

const FounderCard = ({ name, title, img }: { name: string; title: string; img: string; }) => (
  <Card className="game-card h-full text-center group">
    <CardHeader className="p-0">
      <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
        <Image src={img} alt={name} layout="fill" objectFit="cover" data-ai-hint="person portrait" className="transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </CardHeader>
    <CardContent className="p-6">
       <CardTitle className="text-xl font-headline uppercase tracking-wider text-foreground">{name}</CardTitle>
      <p className="text-foreground/80 mt-2 font-body">{title}</p>
    </CardContent>
  </Card>
);

export function FoundersSection() {
  return (
    <section id="founders" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-headline text-center mb-12 uppercase text-primary tracking-widest">
          Meet the Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
