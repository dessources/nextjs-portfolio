import { ProjectsSection } from "@/components/projects-section";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my work in systems engineering, distributed systems, and full-stack development.
          </p>
        </header>
        <ProjectsSection />
      </div>
    </main>
  );
}
