"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress-claude";
import { Code2, Database, Server, Monitor, Wrench, BookOpen } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "JavaScript/TypeScript", level: 85, learning: false },
      { name: "Python", level: 75, learning: false },
      { name: "Java", level: 70, learning: false },
      { name: "C", level: 65, learning: true },
      { name: "Go", level: 30, learning: true },
    ],
  },
  {
    icon: Server,
    title: "Frameworks & Tools",
    skills: [
      { name: "React/Next.js", level: 85, learning: false },
      { name: "Node.js", level: 70, learning: false },
      { name: "Docker", level: 40, learning: true },
      { name: "Kubernetes", level: 20, learning: true },
      { name: "AWS", level: 35, learning: true },
    ],
  },
  {
    icon: Database,
    title: "Data & Systems",
    skills: [
      { name: "PostgreSQL", level: 65, learning: false },
      { name: "Redis", level: 45, learning: true },
      { name: "System Design", level: 50, learning: true },
      { name: "Performance Optimization", level: 60, learning: true },
      { name: "Distributed Systems", level: 30, learning: true },
    ],
  },
  {
    icon: Monitor,
    title: "Infrastructure & DevOps",
    skills: [
      { name: "Git/GitHub", level: 80, learning: false },
      { name: "CI/CD Pipelines", level: 50, learning: true },
      { name: "Monitoring & Observability", level: 45, learning: true },
      { name: "Linux/Unix", level: 55, learning: true },
      { name: "Infrastructure as Code", level: 25, learning: true },
    ],
  },
];

const currentLearning = [
  {
    icon: BookOpen,
    title: "Computer Architecture",
    description: "Understanding hardware-software performance relationships",
    course: "CDA3102 - Fall 2025",
  },
  {
    icon: Wrench,
    title: "Systems Programming",
    description: "Low-level programming, system calls, and OS interaction",
    course: "COP4338 - Fall 2025",
  },
  {
    icon: Database,
    title: "Data Structures",
    description: "Advanced data structures with performance optimization focus",
    course: "COP3550 - Fall 2025",
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills & Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise in systems engineering through hands-on projects and
            formal coursework. Continuously learning and applying new technologies to
            solve complex problems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium flex items-center gap-2">
                        {skill.name}
                        {skill.learning && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                            Learning
                          </span>
                        )}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Currently Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentLearning.map((item, index) => (
              <Card key={item.title} className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {item.course}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}