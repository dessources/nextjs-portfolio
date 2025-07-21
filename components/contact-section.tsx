"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  MessageSquare,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Best for project inquiries and collaboration",
    value: "contact@jaemdessources.com",
    href: "mailto:contact@jaemdessources.com",
    primary: true,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Professional networking and career discussions",
    value: "linkedin.com/in/dessources",
    href: "https://linkedin.com/in/dessources",
    primary: true,
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Code repositories and technical contributions",
    value: "github.com/dessources",
    href: "https://github.com/dessources",
    primary: false,
  },
];

const interestAreas = [
  "Systems Engineering Opportunities",
  "Performance Optimization Projects",
  "Infrastructure & Backend Development",
  "Site Reliability Engineering Roles",
  "Technical Mentorship",
  "Open Source Contributions",
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Something Reliable Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in discussing systems engineering, performance optimization,
            or potential collaboration? I'm always excited to connect with fellow
            engineers and learn from experienced professionals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className={`group hover:shadow-md transition-all duration-300 ${
                  method.primary ? "border-primary/30" : ""
                }`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        method.primary ? "bg-primary/10" : "bg-secondary"
                      }`}>
                      <method.icon
                        className={`h-5 w-5 ${
                          method.primary ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {method.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer">
                          {method.value}
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Areas of Interest</h3>
            <Card>
              <CardContent className="p-6 space-y-4">
                {interestAreas.map((area, index) => (
                  <div key={area} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Interview Me Series</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Coming soon: Video series where I discuss systems engineering
                  concepts, debug complex problems, and share my learning journey.
                </p>
                <Button variant="outline" size="sm" disabled>
                  <Calendar className="mr-2 h-4 w-4" />
                  Launching Fall 2025
                </Button>
              </CardContent>
            </Card>

            <div className="text-center pt-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Current Status</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Full-time student working towards graduation in Fall 2026. Open
                    to internships, part-time opportunities, and technical
                    discussions.
                  </p>
                  <div className="text-xs text-primary font-medium">
                    Expected Graduation: Fall 2026
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
