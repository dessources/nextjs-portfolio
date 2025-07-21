"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bug, TrendingUp, Wrench, Users, BookOpen, Target } from "lucide-react";

const traits = [
  {
    icon: Bug,
    title: "Debugging Detective",
    description:
      "I love the investigative process of finding root causes in complex systems. Every bug is a mystery waiting to be solved.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimizer",
    description:
      "Passionate about making systems faster and more efficient. I prefer deep optimization over just adding more resources.",
  },
  {
    icon: Wrench,
    title: "Systems Builder",
    description:
      "Drawn to building robust infrastructure that other developers can rely on. I enjoy working with technical stakeholders.",
  },
  {
    icon: Users,
    title: "Mathematical Thinker",
    description:
      "I prefer logical, quantifiable problems over subjective work. Love applying formulas and analyzing performance metrics.",
  },
];

const currentFocus = [
  {
    icon: BookOpen,
    title: "Academic Journey",
    description: "Computer Architecture • Data Structures • Systems Programming",
    detail: "Expected graduation: Fall 2026",
  },
  {
    icon: Target,
    title: "Career Target",
    description:
      "Site Reliability Engineering • Backend Infrastructure • Performance Engineering",
    detail:
      "Building expertise in distributed systems and infrastructure reliability",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Systems Engineer in the Making
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science student with a passion for building reliable, scalable
            infrastructure. I thrive on debugging complex systems and optimizing
            performance at scale.
          </p>
        </motion.div>

        {/* Character Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16">
          {traits.map((trait) => (
            <Card key={trait.title} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <trait.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{trait.title}</h3>
                    <p className="text-muted-foreground">{trait.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8">
          {currentFocus.map((item) => (
            <Card key={item.title} className="bg-card border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-2">{item.description}</p>
                <p className="text-sm text-primary font-medium">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
