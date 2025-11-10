"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield, Clock, BarChart3 } from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    icon: Zap,
    title: "Core Web Vitals",
    value: "95/100",
    change: "+30 points",
    description: "Lighthouse Performance Score",
    color: "text-green-600",
  },
  {
    icon: Clock,
    title: "First Contentful Paint",
    value: "0.8s",
    change: "-1.5s",
    description: "From WordPress baseline",
    color: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Largest Contentful Paint",
    value: "1.2s",
    change: "-2.9s",
    description: "70% improvement",
    color: "text-green-600",
  },
  {
    icon: Shield,
    title: "Cumulative Layout Shift",
    value: "0.02",
    change: "-0.15",
    description: "Excellent stability",
    color: "text-green-600",
  },
];

const optimizations = [
  "Next.js Image Optimization",
  "Code Splitting",
  "Implemented a headless CMS (Basehub)",
  "Real-time Performance Monitoring",
];

export function PerformanceMetrics() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Performance Engineering
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real metrics from migrating this portfolio from WordPress to
            Next.js. Demonstrating the impact of systematic performance
            optimization.
          </p>
        </motion.div>

        {/* Performance Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {metrics.map((metric) => (
            <Card key={metric.title} className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className={`text-sm font-medium mb-2 ${metric.color}`}>
                  {metric.change}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Optimization Techniques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-1 w-[70%] m-auto gap-8 mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center align-center gap-2 ">
                <BarChart3 className="h-5 w-5" />
                Optimization Techniques Applied
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid  gap-3">
                {optimizations.map((optimization) => (
                  <div
                    key={optimization}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {optimization}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Performance Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                "I prefer finding and fixing the root cause of performance
                issues rather than just throwing more resources at the problem."
              </p>
              <p className="text-sm text-muted-foreground">
                This approach demonstrates the analytical mindset essential for
                systems engineering - measuring, optimizing, and validating
                improvements with real data.
              </p>
              <div className="pt-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/monitoring">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Dashboard
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Interested in the Technical Details?
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore the architecture decisions, performance analysis, and
                monitoring setup that achieved these results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/projects/portfolio-migration">
                    Migration Documentation
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/monitoring">Live Performance Data</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
