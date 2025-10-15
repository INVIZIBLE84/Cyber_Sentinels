import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <Card className="game-card max-w-4xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-headline uppercase text-primary tracking-widest">
              About The Cyber Sentinels
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base md:text-lg text-left text-foreground/80 space-y-6 font-body">
            <div>
              <h3 className="text-2xl font-headline text-primary uppercase tracking-wider mb-3 text-center">Who We Are</h3>
              <p className="mb-4">
                We are the Cyber Sentinels—a dynamic and forward-thinking community of students dedicated to exploring the frontiers of technology and cybersecurity. We are more than just a club; we are a hub for innovators, a training ground for future tech leaders, and a launchpad for ambitious ideas.
              </p>
              <p>
                Born from a passion for solving complex digital challenges, our club brings together coders, ethical hackers, developers, and tech enthusiasts from all backgrounds. We believe in the power of curiosity and the importance of practical, hands-on learning to navigate and secure the ever-evolving digital landscape.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-headline text-primary uppercase tracking-wider mb-3 text-center">Our Philosophy: "Learn, Build, Secure"</h3>
              <p className="mb-4 text-center">
                This simple motto drives everything we do.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-background/20 rounded-lg">
                      <h4 className="font-bold text-xl text-foreground mb-2">Learn</h4>
                      <p className="text-sm">We are committed to continuous learning, staying ahead of the curve on the latest trends in cybersecurity, software development, and digital innovation. We create a space where asking questions is encouraged and knowledge is shared freely.</p>
                  </div>
                  <div className="p-4 bg-background/20 rounded-lg">
                      <h4 className="font-bold text-xl text-foreground mb-2">Build</h4>
                      <p className="text-sm">We are creators at heart. We don't just consume technology; we build it. From designing engaging CTF challenges like "The Gilded Game" to developing digital solutions for real-world problems, our projects are where our skills come to life.</p>
                  </div>
                  <div className="p-4 bg-background/20 rounded-lg">
                      <h4 className="font-bold text-xl text-foreground mb-2">Secure</h4>
                      <p className="text-sm">Our ultimate goal is to foster a culture of digital responsibility. We learn to think like hackers so we can build stronger defenses, championing an ethical and proactive approach to securing the digital world for everyone.</p>
                  </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headline text-primary uppercase tracking-wider mb-3 text-center">Meet the Sentinels</h3>
              <p className="text-center">
                A Sentinel is a problem-solver, a tech enthusiast, and a team player. You'll find us debugging code, brainstorming project ideas, or getting hyped for our next challenge.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
