"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TerminalWindow, CommandLine, ASCIIArt, SystemStatus, InteractiveTerminal } from "./terminal-window";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Window */}
          <div className="lg:col-span-2 mb-12">
            <TerminalWindow>
              <ASCIIArt>
{`     ___                       
    |_  |                      
      | | __ _  ___ _ __ ___   
      | |/ _\` |/ _ \\ '_ \` _ \\  
  /\\__/ / (_| |  __/ | | | | | 
  \\____/ \\__,_|\\___|_| |_| |_| 
                               
   Systems Engineering Student  
   Frontend Developer           `}
              </ASCIIArt>
              
              <CommandLine 
                command="whoami" 
                output="Jaem Dessources - Frontend Software Engineer"
                delay={0.5}
              />
              
              <CommandLine 
                command="cat current_focus.txt" 
                output="🚀 Building performant systems that scale | 📍 Miramar, FL"
                delay={2}
              />
              
              <CommandLine 
                command="ls skills/" 
                output="react.js  typescript  next.js  tailwind.css  aws  systems-engineering"
                delay={3.5}
              />
              
              <SystemStatus />
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <InteractiveTerminal />
              </div>
            </TerminalWindow>
          </div>

          {/* Traditional Info Section - Now Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-6">
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}>
              <Button asChild size="lg" className="group bg-green-600 hover:bg-green-700">
                <Link href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500/10">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}>
              <div className="flex items-center gap-2 text-sm text-green-400 font-mono">
                <Code className="h-4 w-4" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-400 font-mono">
                <Database className="h-4 w-4" />
                <span>Systems Engineering</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-400 font-mono">
                <Monitor className="h-4 w-4" />
                <span>Performance Optimization</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="relative">
            <div className="relative w-64 h-64 mx-auto">
              {/* Terminal-style frame */}
              <div className="absolute inset-0 border-2 border-green-500/30 rounded-lg"></div>
              <div className="absolute inset-2 border border-green-500/50 rounded-lg overflow-hidden">
                <Image
                  src="/Right-profile.jpeg"
                  alt="Jaem Dessources - Systems Engineer"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ objectPosition: "0 0" }}
                  priority
                />
                {/* Terminal scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-50 animate-pulse"></div>
              </div>
              {/* Terminal border corners */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
