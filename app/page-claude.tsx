// app/page.tsx
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { PerformanceMetrics } from "@/components/performance-metrics";
import { BaseHubTest } from "@/components/basehub-test";

export const revalidate = 0;

export default function HomePage() {
  return (
    <>
      {/* <div className="container mx-auto px-4 py-8">
        <BaseHubTest />
      </div> */}
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PerformanceMetrics />
      <ContactSection />
    </>
  );
}
