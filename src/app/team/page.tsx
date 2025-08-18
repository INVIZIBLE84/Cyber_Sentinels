import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundDecorations } from "@/components/background-decorations";
import { TeamCard } from "@/components/team-card";
import { ArrowLeft } from "lucide-react";

const teamMembers = [
  {
    name: "Alex 'Glitch' Mercer",
    title: "President & Lead Strategist",
    experience: "5+ years in threat intelligence and strategic cybersecurity planning.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Jasmine 'Echo' Chen",
    title: "Vice President & Ops Chief",
    experience: "Expert in network security and incident response coordination.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Ken 'Root' Takahashi",
    title: "Head of R&D",
    experience: "Specializes in zero-day vulnerability research and malware analysis.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Priya 'Firewall' Sharma",
    title: "Head of Defensive Security",
    experience: "Designs and implements robust security architectures for enterprises.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Leo 'Proxy' Rodriguez",
    title: "Head of Offensive Security",
    experience: "Certified Ethical Hacker with a focus on penetration testing and red teaming.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Sofia 'Cipher' Dubois",
    title: "Cryptography Lead",
    experience: "Develops next-gen encryption algorithms and secure communication protocols.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Ben 'Kernel' Carter",
    title: "Digital Forensics Expert",
    experience: "Uncovers digital trails and analyzes evidence from complex cyber-crime scenes.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Aisha 'Nexus' Khan",
    title: "Community & Events Lead",
    experience: "Organizes workshops, CTF competitions, and industry outreach programs.",
    img: "https://placehold.co/400x400.png"
  },
   {
    name: "Marcus 'Vector' Dane",
    title: "Threat Modeling Specialist",
    experience: "Identifies and assesses potential threats in software and systems.",
    img: "https://placehold.co/400x400.png"
  },
  {
    name: "Eva 'Oracle' Rostova",
    title: "Cyber-Policy Advisor",
    experience: "Bridges the gap between technology and law, focusing on digital ethics.",
    img: "https://placehold.co/400x400.png"
  },
];


export default function TeamPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-background">
      <BackgroundDecorations />
      <main className="relative z-10 container mx-auto px-4 py-20 lg:py-24 text-center">
        <div className="absolute top-8 left-8">
            <Button asChild className="bg-neon-blue text-white hover:bg-neon-blue/80">
                <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Return to HQ</Link>
            </Button>
        </div>
        <h1 className="text-5xl font-headline text-neon-blue uppercase tracking-widest mb-4 glitch-subtle">Meet the Sentinels</h1>
        <p className="text-xl text-foreground/80 mb-12 font-body max-w-3xl mx-auto">
          Our team is composed of passionate experts and rising talent in the cybersecurity world, united by a single mission: to guard the digital frontier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </main>
    </div>
  );
}
