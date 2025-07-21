"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                Building <span className="text-primary">Scalable Systems</span> That
                Perform
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Systems Engineering student passionate about debugging complex
                infrastructure, optimizing performance, and building reliable
                distributed systems.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/monitoring">Performance Dashboard</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code className="h-4 w-4" />
                <span>Next.js • React • TypeScript</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="h-4 w-4" />
                <span>Systems Programming • C • Java</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Monitor className="h-4 w-4" />
                <span>Performance Optimization</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative">
            {/* Profile Picture */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-soft"></div>

              {/* Outer decorative ring */}
              <div className="absolute inset-4 rounded-full border-2 border-primary/20 animate-float"></div>

              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/Right-profile.jpeg"
                  alt="Jaem Dessources - Systems Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: "0 0" }}
                  priority
                />
              </div>

              {/* Floating tech icons - positioned outside the image circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
                className="absolute inset-0">
                {/* Code icon - positioned outside the circle at top-right */}
                <div className="absolute -top-2 -right-2 bg-primary/10 p-3 rounded-full backdrop-blur-sm shadow-lg border border-primary/20">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                {/* Database icon - positioned outside the circle at bottom-left */}
                <div className="absolute -bottom-2 -left-2 bg-primary/10 p-3 rounded-full backdrop-blur-sm shadow-lg border border-primary/20">
                  <Database className="h-4 w-4 text-primary" />
                </div>
                {/* Monitor icon - positioned outside the circle at middle-left */}
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-primary/10 p-3 rounded-full backdrop-blur-sm shadow-lg border border-primary/20">
                  <Monitor className="h-4 w-4 text-primary" />
                </div>
              </motion.div>

              {/* Additional orbital icons for more visual interest */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
                className="absolute inset-0">
                {/* Additional icon at top */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent/10 p-2 rounded-full backdrop-blur-sm shadow-lg border border-accent/20">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
                {/* Additional icon at bottom-right */}
                <div className="absolute -bottom-1 -right-4 bg-accent/10 p-2 rounded-full backdrop-blur-sm shadow-lg border border-accent/20">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
