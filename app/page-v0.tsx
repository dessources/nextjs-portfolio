import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Cpu,
  Bug,
  Zap,
  Terminal,
  BookOpen,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Alex Rodriguez
              </h1>
              <p className="text-lg text-slate-600 mt-1">
                Systems Engineering Student & Infrastructure Enthusiast
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Expected Graduation: Spring 2027| Florida International
                University
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* About Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Computer Science student passionate about systems engineering,
                infrastructure optimization, and the "detective work" of
                debugging complex distributed systems. I thrive on mathematical
                problem-solving and building robust, scalable solutions that
                other developers can rely on.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    What Drives Me
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>
                      • Debugging complex system failures and performance
                      bottlenecks
                    </li>
                    <li>
                      • Building infrastructure that scales and performs
                      reliably
                    </li>
                    <li>
                      • Solving algorithmic challenges and optimization problems
                    </li>
                    <li>
                      • Working with technical stakeholders on system
                      architecture
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Career Focus
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Site Reliability Engineering (SRE)</li>
                    <li>• Backend Infrastructure & Performance Engineering</li>
                    <li>• AI Infrastructure & Model Serving Optimization</li>
                    <li>• Distributed Systems & Platform Engineering</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Skills */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    Systems & Backend
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Python</span>
                      <Progress value={85} className="w-20 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Java</span>
                      <Progress value={80} className="w-20 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">C/C++</span>
                      <Progress value={70} className="w-20 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">SQL</span>
                      <Progress value={75} className="w-20 h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Web & Frameworks
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">React/Next.js</span>
                      <Progress value={80} className="w-20 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Node.js</span>
                      <Progress value={75} className="w-20 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">REST APIs</span>
                      <Progress value={85} className="w-20 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Docker</span>
                      <Progress value={60} className="w-20 h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Systems Concepts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Structures</Badge>
                    <Badge variant="secondary">Algorithms</Badge>
                    <Badge variant="secondary">Computer Architecture</Badge>
                    <Badge variant="secondary">Operating Systems</Badge>
                    <Badge variant="secondary">Distributed Systems</Badge>
                    <Badge variant="secondary">Performance Optimization</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Learning Journey */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Current Learning Journey
              </CardTitle>
              <CardDescription>
                Focused path toward Systems/Infrastructure Engineering roles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Fall 2025 Coursework
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Computer Architecture (CDA3102)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Data Structures (COP3550)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Systems Programming (COP4338)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Spring 2026 Planned
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Operating Systems (COP4610)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Parallel Computing (COP4520)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Programming Languages (COP4555)
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">
                  Self-Directed Learning Focus
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-100 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">
                      AI Infrastructure
                    </h5>
                    <p className="text-xs text-slate-600">
                      Model serving, GPU optimization, scalable AI systems
                    </p>
                  </div>
                  <div className="p-4 bg-slate-100 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">
                      Performance Engineering
                    </h5>
                    <p className="text-xs text-slate-600">
                      Profiling, optimization, bottleneck analysis
                    </p>
                  </div>
                  <div className="p-4 bg-slate-100 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">
                      Site Reliability
                    </h5>
                    <p className="text-xs text-slate-600">
                      Monitoring, incident response, system design
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Featured Projects */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Featured Projects
              </CardTitle>
              <CardDescription>
                Projects demonstrating systems thinking and problem-solving
                skills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Real-time Chat Application
                      <ExternalLink className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription>
                      Next.js • WebSockets • Performance Optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      Built a scalable chat application with focus on debugging
                      connection issues and optimizing message delivery
                      performance. Implemented connection pooling and message
                      queuing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">WebSockets</Badge>
                      <Badge variant="outline">Redis</Badge>
                      <Badge variant="outline">Performance Tuning</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Algorithm Visualizer
                      <ExternalLink className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription>
                      React • Algorithms • Data Structures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      Interactive tool for visualizing sorting and graph
                      algorithms. Focus on mathematical precision and
                      performance analysis of different algorithmic approaches.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Algorithms</Badge>
                      <Badge variant="outline">Data Visualization</Badge>
                      <Badge variant="outline">Performance Analysis</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      System Monitor Dashboard
                      <ExternalLink className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription>
                      Python • System Metrics • Real-time Monitoring
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      Built a system monitoring tool that tracks CPU, memory,
                      and network metrics. Implemented alerting for performance
                      anomalies and bottleneck detection.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">System Monitoring</Badge>
                      <Badge variant="outline">Data Analysis</Badge>
                      <Badge variant="outline">Alerting</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      LeetCode Solutions Archive
                      <ExternalLink className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription>
                      Multiple Languages • Algorithms • Optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      Comprehensive collection of optimized solutions with
                      detailed complexity analysis. Focus on mathematical
                      approaches and performance optimization techniques.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">Java</Badge>
                      <Badge variant="outline">C++</Badge>
                      <Badge variant="outline">Algorithm Analysis</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Problem-Solving Approach */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="w-5 h-5" />
                My Problem-Solving Approach
              </CardTitle>
              <CardDescription>
                How I tackle complex technical challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Analyze & Measure
                  </h4>
                  <p className="text-sm text-slate-600">
                    Start with data collection and metrics. Understand the
                    system's current state before making changes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Root Cause Investigation
                  </h4>
                  <p className="text-sm text-slate-600">
                    Deep dive into the underlying issues. I prefer finding the
                    real problem over quick fixes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Optimize & Validate
                  </h4>
                  <p className="text-sm text-slate-600">
                    Implement solutions with measurable improvements. Always
                    validate with concrete metrics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>
                Interested in discussing systems engineering, infrastructure
                challenges, or potential opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  alex.rodriguez@example.edu
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Profile
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2025 Alex Rodriguez. Built with Next.js and focused on systems
              engineering excellence.
            </p>
            <p className="text-sm text-slate-500">
              Expected Graduation: Spring 2027| Open to internships and
              entry-level SRE positions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
