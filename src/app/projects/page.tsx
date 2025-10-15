import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundDecorations } from "@/components/background-decorations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChartBig, Bell, GraduationCap, UserSquare } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: "Student Dashboard",
    description: "Attendance overview, fee status, clearance forms, notice downloads, and applications."
  },
  {
    icon: <UserSquare className="h-8 w-8 text-accent" />,
    title: "Faculty Dashboard",
    description: "Attendance management, analytics, document uploads, and clearance approvals."
  },
  {
    icon: <BarChartBig className="h-8 w-8 text-accent" />,
    title: "Analytics & Reporting",
    description: "Real-time and ML-powered insights for academic performance, attendance, and fee tracking."
  },
  {
    icon: <Bell className="h-8 w-8 text-accent" />,
    title: "Smart Notifications",
    description: "Automated alerts for attendance, fee dues, clearance updates, and announcements."
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip">
      <BackgroundDecorations />
      <main className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
         <div className="absolute top-8 left-8">
            <Button asChild variant="outline">
                <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Return to HQ</Link>
            </Button>
        </div>
        <h1 className="text-5xl font-headline text-center text-primary uppercase tracking-widest mb-12">Projects</h1>
        
        <Card className="game-card max-w-5xl mx-auto border-accent/50">
          <CardHeader>
            <CardTitle className="text-center">
              <h2 className="text-4xl md:text-5xl font-headline uppercase text-accent tracking-widest">S.P.A.R.K.</h2>
              <p className="text-lg md:text-xl font-body text-foreground/80 mt-2">System for Performance Analytics, Recognition & Kinetics</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-12 px-4 md:px-8">
            <div>
              <p className="text-lg text-foreground/90 font-body text-center max-w-3xl mx-auto">
                SPARK is a next-generation college digital management system developed by the Cyber Sentinels team. It is designed to simplify and secure the academic journey for students, faculty, and administrators.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-headline text-accent uppercase tracking-wider mb-6 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground font-body">{feature.title}</h4>
                      <p className="text-foreground/80 text-sm font-body">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-headline text-accent uppercase tracking-wider mb-4">Purpose</h3>
                <p className="text-foreground/80 font-body">To streamline academic workflows while ensuring Confidentiality, Integrity, and Availability (CIA triad principles) of student data.</p>
              </div>
              <div>
                <h3 className="text-2xl font-headline text-accent uppercase tracking-wider mb-4">Vision</h3>
                <p className="text-foreground/80 font-body">SPARK aims to become a benchmark student-faculty management system, blending security, accessibility, and innovation.</p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button className="gaming-button">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
