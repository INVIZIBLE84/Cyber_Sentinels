import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <Card className="glassmorphism max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-headline text-center text-accent">
              About Cyber Sentinels
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base md:text-lg text-center text-foreground/80 space-y-4">
            <p>
              Cyber Sentinels is a collective of passionate cybersecurity enthusiasts dedicated to exploring the depths of digital security. Our club was founded with the mission to foster a community of skilled and ethical digital guardians.
            </p>
            <p>
              We delve into various domains of cybersecurity, including ethical hacking, network security, cryptography, and digital forensics. Through workshops, competitions, and collaborative projects, we aim to equip our members with the knowledge and tools to tackle the cyber challenges of today and tomorrow. Our history is rooted in a shared vision of creating a safer digital world.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
