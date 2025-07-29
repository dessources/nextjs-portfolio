"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({ children, className }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-2xl",
        "shadow-green-500/20 max-w-4xl mx-auto",
        className
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm font-mono">terminal@jaem-portfolio</span>
        <div className="w-6" />
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm space-y-2">
        {children}
      </div>
    </motion.div>
  );
}

interface CommandLineProps {
  command: string;
  output?: string;
  delay?: number;
  showCursor?: boolean;
}

export function CommandLine({ command, output, delay = 0, showCursor = true }: CommandLineProps) {
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (output) {
      const timer = setTimeout(() => setShowOutput(true), (delay + 2) * 1000);
      return () => clearTimeout(timer);
    }
  }, [delay, output]);

  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-2">
        <span className="text-green-400">$</span>
        <TypeAnimation
          sequence={[delay * 1000, command]}
          wrapper="span"
          speed={75}
          className="text-white"
          cursor={showCursor}
        />
      </div>
      {output && showOutput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 ml-4"
        >
          {output}
        </motion.div>
      )}
    </div>
  );
}

export function ASCIIArt({ children }: { children: string }) {
  return (
    <motion.pre
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-green-400 text-xs leading-tight mb-4 overflow-x-auto"
    >
      {children}
    </motion.pre>
  );
}

export function SystemStatus() {
  const [stats, setStats] = useState({
    uptime: "0d 0h 0m",
    projects: 0,
    skills: 0,
    commits: 0
  });

  useEffect(() => {
    // Simulate loading stats
    const timer = setTimeout(() => {
      setStats({
        uptime: "5y 2m 15d",
        projects: 12,
        skills: 8,
        commits: 847
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="grid grid-cols-2 gap-4 my-4 p-4 border border-gray-700 rounded bg-gray-800/50"
    >
      <div className="space-y-1">
        <div className="text-gray-400 text-xs">SYSTEM STATUS</div>
        <div className="text-green-400">Online ●</div>
      </div>
      <div className="space-y-1">
        <div className="text-gray-400 text-xs">UPTIME</div>
        <div className="text-green-400">{stats.uptime}</div>
      </div>
      <div className="space-y-1">
        <div className="text-gray-400 text-xs">PROJECTS</div>
        <div className="text-green-400">{stats.projects}</div>
      </div>
      <div className="space-y-1">
        <div className="text-gray-400 text-xs">SKILLS</div>
        <div className="text-green-400">{stats.skills}</div>
      </div>
    </motion.div>
  );
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const commands = {
    help: "Available commands: about, skills, projects, contact, clear",
    about: "Frontend Software Engineer specializing in React.js and TypeScript",
    skills: "React.js • TypeScript • Next.js • Tailwind CSS • Node.js • AWS",
    projects: "Building scalable web applications and modern user interfaces",
    contact: "Email: jaem@example.com | LinkedIn: /in/jaem-dessources",
    clear: "CLEAR"
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === "clear") {
      setOutput([]);
      return;
    }

    if (commands[command as keyof typeof commands]) {
      setOutput(prev => [...prev, `$ ${cmd}`, commands[command as keyof typeof commands]]);
    } else {
      setOutput(prev => [...prev, `$ ${cmd}`, `Command not found: ${cmd}. Type 'help' for available commands.`]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div className="space-y-2">
      <div className="text-gray-400 text-xs mb-2">Interactive Terminal (try typing 'help')</div>
      
      {/* Output */}
      <div className="space-y-1 min-h-[100px] max-h-[200px] overflow-y-auto">
        {output.map((line, i) => (
          <div key={i} className={line.startsWith("$") ? "text-green-400" : "text-gray-300"}>
            {line}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center space-x-2 border-t border-gray-700 pt-2">
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-transparent text-white outline-none font-mono"
          placeholder="Type a command..."
          autoComplete="off"
        />
        <div className="w-2 h-4 bg-green-400 animate-pulse" />
      </div>
    </div>
  );
}