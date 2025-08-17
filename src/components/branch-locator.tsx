import { Globe } from "@/components/globe";

export function BranchLocator() {
  return (
    <section id="branch-locator" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline uppercase mb-4 text-neon-blue tracking-widest">Our Headquarters</h2>
        <p className="max-w-2xl mx-auto mb-12 text-foreground/80 font-body">
          Our main branch is located at HVPM COET, Amravati. We are expanding our network to connect with cyber enthusiasts globally.
        </p>
        <div className="relative h-[400px] md:h-[600px] w-full max-w-4xl mx-auto">
          <Globe />
        </div>
      </div>
    </section>
  );
}
