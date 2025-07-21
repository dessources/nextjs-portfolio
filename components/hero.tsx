"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Monitor } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/50 py-24 sm:py-32">
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
            {/* System Architecture Visualization */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="relative bg-card border rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  {/* Frontend Layer */}
                  <div className="col-span-3 bg-primary/10 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-primary">
                      Frontend
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Next.js • React
                    </div>
                  </div>

                  {/* API Layer */}
                  <div className="col-span-3 bg-accent/30 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold">API Layer</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      REST • GraphQL
                    </div>
                  </div>

                  {/* Services */}
                  <div className="bg-secondary rounded-lg p-2 text-center">
                    <div className="text-xs font-medium">Auth</div>
                  </div>
                  <div className="bg-secondary rounded-lg p-2 text-center">
                    <div className="text-xs font-medium">Cache</div>
                  </div>
                  <div className="bg-secondary rounded-lg p-2 text-center">
                    <div className="text-xs font-medium">DB</div>
                  </div>

                  {/* Monitoring */}
                  <div className="col-span-3 bg-destructive/10 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-destructive">
                      Monitoring & Observability
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Metrics • Logs • Traces
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
