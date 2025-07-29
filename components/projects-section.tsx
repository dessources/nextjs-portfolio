"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Monitor, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { TerminalProjectCard } from "./terminal-project-card";

const projects = [
  {
    id: "ichat",
    name: "iChat",
    description: "React-based chat application with real-time messaging, user authentication, and performance optimizations.",
    tech: ["React", "WebSocket", "Node.js", "Authentication"],
    status: "deployed" as const,
    githubUrl: "https://github.com/dessources/ichat",
    liveUrl: "https://ichat-cra.jaemdessources.com",
    type: "fullstack" as const,
  },
  {
    id: "deathwish-coffee",
    name: "DeathWish-Coffee",
    description: "High-performance marketing website with optimized loading times and responsive design.",
    tech: ["Next.js", "Responsive Design", "Performance Optimization"],
    status: "deployed" as const,
    liveUrl: "https://deathwishcoffee.jaemdessources.com/",
    type: "frontend" as const,
  },
  {
    id: "corporate-site",
    name: "Corporate-Site",
    description: "Business website demonstrating clean architecture and professional design patterns.",
    tech: ["WordPress", "Custom Themes", "Business Logic"],
    status: "deployed" as const,
    liveUrl: "https://corporate-site.jaemdessources.com/",
    type: "frontend" as const,
  },
  {
    id: "performance-monitoring",
    name: "Performance-Monitor",
    description: "Real-time dashboard tracking site performance metrics, Core Web Vitals, and system health.",
    tech: ["Next.js", "Charts", "Real-time Data", "Web Vitals"],
    status: "development" as const,
    githubUrl: "https://github.com/dessources/performance-monitoring",
    liveUrl: "/monitoring",
    type: "system" as const,
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
    <section id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400 font-mono">
            $ ls projects/
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            A collection of web applications and system engineering projects
            demonstrating performance optimization, scalable architecture, and
            infrastructure reliability.
          </p>
        </motion.div>

        {/* Terminal Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <TerminalProjectCard
              key={project.id}
              project={project}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* Systems Engineering Roadmap Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-400 font-mono">
            $ cat roadmap.md
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {systemsProjects.map((project) => (
              <div key={project.title} className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                  <project.icon className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold mb-2 text-white font-mono">{project.title}</h4>
                <p className="text-sm text-gray-300 mb-3 font-mono text-xs">
                  {project.description}
                </p>
                <div className="text-xs text-yellow-400 font-medium mb-3 font-mono">
                  # {project.status}
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-green-400 rounded text-xs font-mono border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 font-mono">
            <Link href="/projects">$ explore --all-projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
