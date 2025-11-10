"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target } from "lucide-react";

const currentFocus = [
  {
    icon: BookOpen,
    title: "Academic Journey",
    description:
      "Computer Architecture • Data Structures • Systems Programming",
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Systems Engineer in the Making
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science student with a passion for building reliable,
            scalable infrastructure. I thrive on debugging complex systems and
            optimizing performance at scale.
          </p>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
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
                <p className="text-sm text-primary font-medium">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
