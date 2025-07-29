"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react";
import Link from "next/link";

interface TerminalProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    tech: string[];
    status: "deployed" | "development" | "archived";
    githubUrl?: string;
    liveUrl?: string;
    type: "frontend" | "backend" | "fullstack" | "system";
  };
  delay?: number;
}

const statusColors = {
  deployed: "text-green-400",
  development: "text-yellow-400", 
  archived: "text-gray-400"
};

const typeIcons = {
  frontend: Code,
  backend: Database,
  fullstack: Globe,
  system: Database
};

export function TerminalProjectCard({ project, delay = 0 }: TerminalProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = typeIcons[project.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm font-mono">{project.name}.project</span>
        <Icon className="h-4 w-4 text-gray-400" />
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm space-y-3">
        {/* Project Info Commands */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">$</span>
            <TypeAnimation
              sequence={[delay * 1000, `cat ${project.name}/README.md`]}
              wrapper="span"
              speed={75}
              className="text-white"
              cursor={false}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay + 1 }}
            className="ml-4 space-y-1"
          >
            <div className="text-gray-300"># {project.name}</div>
            <div className="text-gray-400 text-xs">{project.description}</div>
          </motion.div>
        </div>

        {/* Status Check */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">$</span>
            <span className="text-white">systemctl status {project.name}</span>
          </div>
          <div className="ml-4 flex items-center space-x-2">
            <div className={cn("w-2 h-2 rounded-full", 
              project.status === "deployed" ? "bg-green-400" : 
              project.status === "development" ? "bg-yellow-400" : "bg-gray-400"
            )}></div>
            <span className={statusColors[project.status]}>
              {project.status === "deployed" ? "Active (running)" : 
               project.status === "development" ? "In Development" : "Archived"}
            </span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">$</span>
            <span className="text-white">ls dependencies/</span>
          </div>
          <div className="ml-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="text-blue-400 text-xs bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-green-400">$</span>
              <span className="text-white">./deploy.sh</span>
            </div>
            <div className="ml-4 flex space-x-3">
              {project.githubUrl && (
                <Link 
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-xs">source</span>
                </Link>
              )}
              {project.liveUrl && (
                <Link 
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center space-x-1 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-xs">demo</span>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Interactive Terminal */}
        <div className="pt-2 border-t border-gray-700">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors w-full text-left"
          >
            <span className="text-green-400">$</span>
            <span className="text-white text-xs">
              {isExpanded ? "less details" : "more details"}
            </span>
          </button>
          
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 mt-2 text-xs text-gray-400 space-y-1"
            >
              <div>Project Type: {project.type}</div>
              <div>Status: {project.status}</div>
              <div>Technologies: {project.tech.length} dependencies</div>
              {project.githubUrl && <div>Repository: Available</div>}
              {project.liveUrl && <div>Live Demo: Available</div>}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}