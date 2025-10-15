
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundDecorations } from "@/components/background-decorations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Mic, Info, Ticket } from "lucide-react";

export default function EventsPage() {
  const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: "Saturday, 1st November 2025",
    },
    {
      icon: Clock,
      label: "Time",
      value: "11:00 AM - 4:00 PM (IST)",
    },
    {
      icon: Mic,
      label: "Venue",
      value: "Online (Link to be provided to registered participants)",
    },
    {
      icon: Info,
      label: "Eligibility",
      value: "Open to all students of the college",
    },
    {
      icon: Users,
      label: "Team Size",
      value: "Individual or teams up to 3 members",
    },
    {
        icon: Ticket,
        label: "Registration Closes",
        value: "Thursday, 30th October 2025",
    }
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundDecorations />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="gaming-title text-foreground relative glitch-effect" data-text="The Gilded Game CTF">
            The Gilded Game CTF
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-primary/80 font-body uppercase tracking-widest">
            A Cybersecurity Gauntlet Where Your Wits are Your Only Lifeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 game-card event-card">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-primary uppercase tracking-wider">About the Event</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4 font-body text-lg">
              <p>
                Have you ever wondered if you could survive a game of wits and high-stakes challenges? The Cyber Sentinels are proud to announce "The Gilded Game," a Capture The Flag (CTF) competition inspired by the global phenomenon, Squid Game.
              </p>
              <p>
                This is not your average technical workshop. "The Gilded Game" plunges you into a thrilling narrative where you must compete as a contestant in a series of digital games. Instead of physical trials, you will face challenges in Web Reconnaissance, Cryptography, and Digital Forensics. Your mission is to solve puzzles, uncover hidden flags, and outsmart the Front Man to claim the final prize.
              </p>
              <p>
                This event is specially designed to be an exciting entry point into the world of cybersecurity. Whether you are a seasoned coder or just a curious puzzle-solver, this game has a challenge for you.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="game-card event-card">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary uppercase tracking-wider">Event Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 font-body">
                  {eventDetails.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <detail.icon className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                      <div>
                        <span className="font-bold text-foreground">{detail.label}:</span>
                        <p className="text-foreground/80">{detail.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="game-card event-card mt-8">
            <CardHeader>
                <CardTitle className="text-3xl font-headline text-primary uppercase tracking-wider">Why You Should Participate</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-foreground/80 font-body">
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">Learn by Doing</h3>
                    <p>Get hands-on experience with real-world cybersecurity tools and techniques in a fun, gamified environment.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">Beginner-Focused</h3>
                    <p>The challenges are crafted for those new to CTFs. No expert knowledge is required, just a sharp mind.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">Win Big</h3>
                    <p>Compete for an exciting prize pool and earn the ultimate bragging rights as the champion of The Gilded Game.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground">Collaborate and Conquer</h3>
                    <p>Form a team with your friends and tackle the challenges together, or prove your individual skill by competing solo.</p>
                </div>
            </CardContent>
        </Card>

        <div className="text-center mt-16">
            <h2 className="text-4xl font-headline uppercase text-primary tracking-widest">Ready to Play?</h2>
            <p className="text-lg text-foreground/80 my-4 font-body">Secure your spot in the game before it's too late.</p>
            <Button asChild size="lg" className="gaming-button text-2xl py-8 px-12">
              <Link href="#">{`>> REGISTER NOW <<`}</Link>
            </Button>
        </div>

        <div className="text-center mt-16 border-t border-border/50 pt-8">
            <p className="font-body text-foreground/80">For any questions or further details, please do not hesitate to reach out to our event coordinators:</p>
            <p className="font-headline text-accent text-xl mt-2">BreachHead</p>
        </div>

         <div className="text-center mt-12">
            <Button asChild variant="outline" className="gaming-button bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/">Return to HQ</Link>
            </Button>
        </div>

      </main>
    </div>
  );
}
