"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

// A simple component for the Discord icon
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.54 0C18.7 0 17.96.22 17.33.65A15.48 15.48 0 0014.28 3.5c-1.6.36-3.22.36-4.83 0A15.49 15.49 0 006.32.65C5.7.22 4.96 0 4.1 0A3.77 3.77 0 000 3.77v16.46A3.77 3.77 0 003.77 24a3.74 3.74 0 001.3-.23 16.5 16.5 0 004.88-3.79 13.2 13.2 0 002.57.42 13.13 13.13 0 002.56-.42 16.5 16.5 0 004.88 3.79c.42.16.86.23 1.3.23a3.77 3.77 0 003.77-3.77V3.77A3.77 3.77 0 0019.54 0zm-5.4 16.2c-1.4 0-2.55-1.12-2.55-2.5s1.15-2.5 2.55-2.5c1.4 0 2.55 1.12 2.55 2.5s-1.15 2.5-2.55 2.5zm-6.23 0c-1.4 0-2.55-1.12-2.55-2.5s1.15-2.5 2.55-2.5c1.4 0 2.55 1.12 2.55 2.5s-1.15 2.5-2.55 2.5z" />
  </svg>
);


export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      content: "For any general questions, please drop us an email at:",
      link: "mailto:theogcybersentinels@gmail.com",
      linkText: "theogcybersentinels@gmail.com",
    },
    {
      icon: DiscordIcon,
      title: "Join Our Community",
      content: "The best way to stay updated and chat with members is by joining our official Discord server.",
      link: "https://discord.gg/eSMjEmdP",
      linkText: "Join the Discord Server",
    },
    {
      icon: Phone,
      title: "Contact Number",
      content: "You can also reach out to us via phone:",
      link: "tel:+917972735397",
      linkText: "+91 7972735397",
    }
  ];

  return (
    <section id="contact-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <Card className="game-card max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-headline uppercase text-primary tracking-widest">
              Contact the Cyber Sentinels
            </CardTitle>
            <p className="text-lg text-foreground/80 font-body pt-2 max-w-2xl mx-auto">
              We're always excited to connect with students, potential collaborators, and industry professionals. Whether you have a question about our events, want to join the club, or have an idea for a project, we'd love to hear from you.
            </p>
          </CardHeader>
          <CardContent className="font-body space-y-8">
            <div>
              <h3 className="text-2xl font-headline text-primary uppercase tracking-wider text-center mb-6">How to Reach Us</h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="p-6 bg-background/30 rounded-lg border border-border text-center flex flex-col items-center">
                    <method.icon className="h-10 w-10 text-accent mb-4" />
                    <h4 className="font-headline text-xl text-primary mb-2 uppercase">{method.title}</h4>
                    <p className="text-foreground/80 font-body flex-grow">{method.content}</p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 font-bold text-accent hover:text-primary transition-colors break-all"
                    >
                      {method.linkText}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center pt-6">
                <h3 className="text-2xl font-headline text-primary uppercase tracking-wider mb-2">Follow Our Journey</h3>
                <p className="text-foreground/80">Stay connected with our latest activities, workshops, and achievements on social media.</p>
                {/* Social media links can be added here later */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
