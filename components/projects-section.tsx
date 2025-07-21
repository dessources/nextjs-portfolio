"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Monitor, Zap, Shield } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "iChat - Real-time Communication",
    description:
      "React-based chat application with real-time messaging, user authentication, and performance optimizations.",
    image: "/projects/ichat-preview.jpg",
    url: "https://ichat-cra.jaemdessources.com",
    github: "https://github.com/dessources/ichat",
    technologies: ["React", "WebSocket", "Node.js", "Authentication"],
    highlights: [
      "Real-time messaging with optimized rendering",
      "Custom authentication system",
      "Performance monitoring integration",
    ],
    category: "Full Stack",
    status: "Production",
  },
  {
    title: "Death Wish Coffee - Brand Site",
    description:
      "High-performance marketing website with optimized loading times and responsive design.",
    image: "/projects/deathwish-preview.jpg",
    url: "https://deathwishcoffee.jaemdessources.com/",
    github: null,
    technologies: ["Next.js", "Responsive Design", "Performance Optimization"],
    highlights: [
      "Sub-second loading times",
      "Mobile-first responsive design",
      "SEO optimized architecture",
    ],
    category: "Frontend",
    status: "Production",
  },
  {
    title: "Corporate Site Architecture",
    description:
      "Business website demonstrating clean architecture and professional design patterns.",
    image: "/projects/corporate-preview.jpg",
    url: "https://corporate-site.jaemdessources.com/",
    github: null,
    technologies: ["WordPress", "Custom Themes", "Business Logic"],
    highlights: [
      "Professional business presentation",
      "Content management system",
      "Client-focused design",
    ],
    category: "Business",
    status: "Production",
  },
  {
    title: "Performance Monitoring Dashboard",
    description:
      "Real-time dashboard tracking site performance metrics, Core Web Vitals, and system health.",
    image: "/projects/monitoring-preview.jpg",
    url: "/monitoring",
    github: "https://github.com/dessources/performance-monitoring",
    technologies: ["Next.js", "Charts", "Real-time Data", "Web Vitals"],
    highlights: [
      "Real-time performance metrics",
      "Core Web Vitals tracking",
      "Historical performance analysis",
    ],
    category: "Systems",
    status: "In Development",
    featured: true,
  },
];

const systemsProjects = [
  {
    icon: Monitor,
    title: "High-Performance Caching System",
    description:
      "Building an optimized caching layer demonstrating data structure efficiency and memory management.",
    status: "Planned - September 2025",
    technologies: ["C", "Data Structures", "Performance Analysis"],
  },
  {
    icon: Zap,
    title: "Distributed Key-Value Store",
    description:
      "Implementing a distributed storage system with replication and fault tolerance.",
    status: "Planned - November 2025",
    technologies: ["Distributed Systems", "Consensus", "Replication"],
  },
  {
    icon: Shield,
    title: "AI Infrastructure Platform",
    description:
      "Model serving platform with load balancing, auto-scaling, and performance monitoring.",
    status: "Planned - Spring 2026",
    technologies: ["Kubernetes", "AI/ML Serving", "Auto-scaling"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects & Systems</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of web applications and system engineering projects
            demonstrating performance optimization, scalable architecture, and
            infrastructure reliability.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`group hover:shadow-lg transition-all duration-300 ${
                project.featured ? "border-primary/50 bg-primary/5" : ""
              }`}>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">
                        {project.category === "Systems"
                          ? "⚙️"
                          : project.category === "Full Stack"
                          ? "💬"
                          : project.category === "Frontend"
                          ? "☕"
                          : "🏢"}
                      </div>
                      <div className="text-sm font-medium">
                        {project.category} Project
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === "Production"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild size="sm" className="flex-1">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Systems Engineering Roadmap Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Systems Engineering Roadmap
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {systemsProjects.map((project) => (
              <Card key={project.title} className="border-dashed">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="text-xs text-primary font-medium mb-3">
                    {project.status}
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View All Projects & Documentation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
