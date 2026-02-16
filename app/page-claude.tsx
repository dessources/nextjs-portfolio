// app/page.tsx
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { CredentialsSection } from "@/components/credentials-section";
import { ContactSection } from "@/components/contact-section";

import { Pump } from "basehub/react-pump";
import { draftMode } from "next/headers";
import { queries } from "@/lib/basehub";

export default async function HomePage() {
  return (
    <>
      <Pump
        draft={(await draftMode()).isEnabled}
        next={{ revalidate: 1 }}
        queries={queries}
      >
        {async ([data]) => {
          "use server";
          return (
            <>
              <Hero hero={data.hero} />
              <AboutSection />
              <SkillsSection skills={data.skills} />
              <CredentialsSection />
              <ProjectsSection />
              {/* <PerformanceMetrics /> */}
              <ContactSection />
            </>
          );
        }}
      </Pump>
    </>
  );
}
