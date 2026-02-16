"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/dessources", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/dessources",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:contact@jaemdessources.com", label: "Email" },
];

const projectLinks = [
  {
    name: "Rate-limited URL shortener",
    href: "https://pety.to/",
  },
  { name: "iChat App", href: "https://ichat-cra.jaemdessources.com" },
  { name: "PantherKolab", href: "https://pantherkolab.com" },

  { name: "Performance Dashboard", href: "/monitoring" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Jaem Dessources</h3>
            <p className="text-sm text-muted-foreground">
              Systems engineering student building reliable, high-performance
              applications.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="font-semibold">Projects</h4>
            <ul className="space-y-2">
              {projectLinks.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.href}
                    target={
                      project.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Status */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Open to internships and technical discussions
              </p>
              <Link
                href="mailto:contact@jaemdessources.com"
                className="text-sm text-primary hover:underline"
              >
                contact@jaemdessources.com
              </Link>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>Student at Florida International University</p>
              <p>Expected Graduation: Spring 2027</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jaem Dessources. Built with Next.js &
            Tailwind CSS.
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 sm:mt-0"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
