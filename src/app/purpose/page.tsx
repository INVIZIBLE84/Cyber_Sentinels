import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundDecorations } from "@/components/background-decorations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, ShieldCheck, Target, Users, Code, Trophy, Presentation, Network, Puzzle } from "lucide-react";

export default function PurposePage() {
  const whatWeDo = [
    {
      icon: Code,
      title: "Hands-On Workshops & Bootcamps",
      description: "We host regular sessions on everything from Ethical Hacking and Network Security to Digital Forensics and Secure Coding. These are practical workshops where you'll get to use the tools of the trade.",
    },
    {
      icon: Trophy,
      title: "Capture The Flag (CTF) Competitions",
      description: "We design and host thrilling CTF events like 'The Gilded Game.' These competitions are the ultimate playground to test your skills, learn new techniques, and compete for glory in a fun, high-energy environment.",
    },
    {
      icon: Presentation,
      title: "Expert Speaker Sessions",
      description: "We bridge the gap between classroom learning and the professional world by inviting industry experts, security researchers, and ethical hackers to share their experiences, insights, and career advice.",
    },
    {
      icon: Rocket,
      title: "Collaborative Tech Projects",
      description: "We are more than just a club; we are a team of innovators. We work on real-world projects, developing digital solutions and security tools. If you have an idea, this is the place to build it with a team that shares your passion.",
    },
    {
      icon: Network,
      title: "Community & Networking",
      description: "We foster a strong community where members can connect, share ideas, and support each other's growth. Join us to meet like-minded peers, find project partners, and build a professional network that will last a lifetime.",
    }
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundDecorations />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="gaming-title text-foreground relative glitch-effect" data-text="Our Purpose">
            Our Purpose
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-primary/80 font-body uppercase tracking-widest">
            The Mission of the Cyber Sentinels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="game-card event-card">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-primary uppercase tracking-wider flex items-center gap-4">
                <Target className="w-8 h-8 text-accent" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 font-body text-lg">
              <p>
                To empower the next generation of digital defenders. We are dedicated to creating a collaborative and inclusive environment where students can explore the vast world of cybersecurity, develop practical skills, and cultivate an ethical mindset to protect the digital future.
              </p>
            </CardContent>
          </Card>
          <Card className="game-card event-card">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-primary uppercase tracking-wider flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-accent" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 font-body text-lg">
              <p>
                To be the central hub for cybersecurity innovation and education within our college. We envision a community where every student is aware of digital risks and opportunities, and where our members are recognized as skilled, proactive leaders in the tech industry, ready to tackle the challenges of tomorrow.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="game-card event-card mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-headline text-primary uppercase tracking-widest">
              What We Do
            </CardTitle>
            <p className="text-lg text-foreground/80 font-body pt-2">
              We believe that the best way to learn is by doing. As a club for tech enthusiasts and innovators, we move beyond theory and focus on hands-on application. Our activities are designed to be engaging, challenging, and incredibly rewarding.
            </p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, index) => (
              <div key={index} className="p-6 bg-background/30 rounded-lg border border-border transition-all hover:border-accent hover:scale-105">
                <item.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-headline text-xl text-primary mb-2 uppercase">{item.title}</h3>
                <p className="text-foreground/80 font-body">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="game-card event-card text-center">
          <CardHeader>
            <CardTitle className="text-4xl font-headline text-primary uppercase tracking-wider">
              <Puzzle className="w-10 h-10 text-accent mx-auto mb-4" />
              Join the Vanguard
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80 font-body text-lg max-w-3xl mx-auto">
            <p>
              Whether you're a curious beginner, a seasoned coder, or someone who loves solving complex puzzles, there's a place for you here. Join us and be part of a community that is shaping the future of cybersecurity.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="gaming-button text-xl py-6 px-10">
                <Link href="/events">{`>> View Our Next Event <<`}</Link>
              </Button>
            </div>
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
