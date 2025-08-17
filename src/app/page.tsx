import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { BranchLocator } from '@/components/branch-locator';
import { FoundersSection } from '@/components/founders-section';
import { ContactSection } from '@/components/contact-section';
import { BackgroundDecorations } from '@/components/background-decorations';

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <BackgroundDecorations />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <BranchLocator />
        <FoundersSection />
        <ContactSection />
      </main>
    </div>
  );
}
