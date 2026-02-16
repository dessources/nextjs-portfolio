"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Cloud,
  Network,
  HardDrive,
  Award,
  ExternalLink,
  CheckCircle,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect",
    level: "Associate",
    provider: "Amazon Web Services",
    icon: Cloud,
    logo: "/logos/saa-c03.png",
    category: "Cloud Architecture",
    issueDate: "May 2024",
    verifyUrl: "https://aws.amazon.com/verification",
    certificateFile:
      "/credentials/AWS Certified Solutions Architect - Associate certificate.pdf",
    description: "Validates expertise in designing distributed systems on AWS",
    skills: [
      "Cloud Architecture",
      "AWS Services",
      "System Design",
      "High Availability",
    ],
    color: "bg-orange-500",
    featured: true,
  },
  {
    id: "azure-admin",
    title: "Microsoft Certified: Azure Administrator",
    level: "Associate",
    provider: "Microsoft",
    icon: Cloud,
    logo: "/logos/az-104.webp",
    category: "Cloud Administration",
    issueDate: "April 2025",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/jaemdessources/credentials/2413c8-r5ebc6",
    certificateFile: "/credentials/Credentials - jaem _ Microsoft Learn.pdf",
    description: "Azure infrastructure management and administration expertise",
    skills: [
      "Azure Administration",
      "Resource Management",
      "Identity & Access",
      "Monitoring",
    ],
    color: "bg-blue-600",
    featured: true,
  },
  {
    id: "comptia-security",
    title: "CompTIA Security+",
    level: "ce certified",
    provider: "CompTIA",
    icon: Shield,
    logo: "/logos/securityplus-logo.png",
    category: "Cybersecurity",
    issueDate: "October 2023",
    verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
    certificateFile: "/credentials/CompTIA Security+ ce certificate.pdf",
    description: "Foundation-level cybersecurity skills and knowledge",
    skills: [
      "Network Security",
      "Risk Management",
      "Cryptography",
      "Incident Response",
    ],
    color: "bg-red-500",
    featured: true,
  },
  {
    id: "comptia-network",
    title: "CompTIA Network+",
    level: "ce certified",
    provider: "CompTIA",
    icon: Network,
    logo: "/logos/comptia network+.png",
    category: "Networking",
    issueDate: "August 2023",
    verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
    certificateFile: "/credentials/CompTIA-Network-plus-ce-certificate.pdf",
    description: "Networking concepts and infrastructure management",
    skills: [
      "Network Configuration",
      "Troubleshooting",
      "Protocols",
      "Network Security",
    ],
    color: "bg-blue-500",
    featured: true,
  },
  {
    id: "comptia-aplus",
    title: "CompTIA A+",
    level: "ce certified",
    provider: "CompTIA",
    icon: HardDrive,
    category: "Hardware & IT Support",
    issueDate: "2024",
    verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
    certificateFile: "/credentials/CompTIA-A-plus-ce-certificate.pdf",
    description: "Hardware troubleshooting and IT support fundamentals",
    skills: [
      "Hardware Troubleshooting",
      "Operating Systems",
      "Mobile Devices",
      "Virtualization",
    ],
    color: "bg-green-500",
    featured: false,
  },
  {
    id: "comptia-cios",
    title: "IT Operations Specialist",
    level: "CIOS",
    provider: "CompTIA",
    icon: Award,
    category: "Stackable Certification",
    issueDate: "2024",
    verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
    certificateFile: "/credentials/CompTIA IT Operations Specialist – CIOS.pdf",
    description: "Comprehensive IT operations and management skills",
    skills: [
      "IT Operations",
      "System Administration",
      "Process Management",
      "Technical Support",
    ],
    color: "bg-purple-500",
    featured: false,
  },
  {
    id: "comptia-csis",
    title: "Secure Infrastructure Specialist",
    level: "CSIS",
    provider: "CompTIA",
    icon: Award,
    category: "Stackable Certification",
    issueDate: "2024",
    verifyUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
    certificateFile:
      "/credentials/CompTIA Secure Infrastructure Specialist – CSIS.pdf",
    description: "Advanced security infrastructure and implementation",
    skills: [
      "Infrastructure Security",
      "Security Implementation",
      "Risk Assessment",
      "Compliance",
    ],
    color: "bg-indigo-500",
    featured: false,
  },
];

export function CredentialsSection() {
  const featuredCredentials = credentials.filter((cred) => cred.featured);
  // const otherCredentials = credentials.filter((cred) => !cred.featured);

  return (
    <section id="credentials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud
            architecture, cybersecurity, networking, and systems administration.
          </p>
        </motion.div>

        {/* Featured Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Core Certifications
          </h3>
          <div className="flex flex-wrap justify-start gap-8">
            {featuredCredentials.map((credential) => (
              <Card
                key={credential.id}
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary w-full max-w-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 rounded-xl bg-white border-2 border-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {credential.logo ? (
                      <Image
                        src={credential.logo}
                        alt={`${credential.title} logo`}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    ) : (
                      <credential.icon className="w-8 h-8 text-gray-600" />
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {credential.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {credential.level}
                  </p>
                  <p className="text-xs text-muted-foreground text-center">
                    {credential.provider}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {credential.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {credential.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {credential.skills.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                        +{credential.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Issued {credential.issueDate}</span>
                    <CheckCircle className="w-3 h-3 text-green-500 ml-auto" />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={credential.certificateFile}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={credential.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
