"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Calendar } from "lucide-react";
import Image from "next/image";
import { Certifications } from "basehub-types";
import { DynamicIcon } from "@/lib/icons";

export function CredentialsSection({
  certifications,
}: {
  certifications: Certifications;
}) {
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
          {/* <h3 className="text-2xl font-semibold mb-8 text-center">
            Core Certifications
          </h3> */}
          <div className="flex flex-wrap justify-start gap-8">
            {certifications.list.items.map((cert) => (
              <Card
                key={cert.id}
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary w-full max-w-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 rounded-xl bg-white border-2 border-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {cert.logo ? (
                      <Image
                        src={cert.logo}
                        alt={`${cert._title} logo`}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    ) : (
                      <DynamicIcon
                        name={cert.icon as string}
                        className="w-8 h-8 text-gray-600"
                      />
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">{cert._title}</CardTitle>

                  <p className="text-xs text-muted-foreground text-center">
                    {cert.provider}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Issued {cert.issueDate}</span>
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
                        href={cert.certificateFile as string}
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
                        href={cert.verifyUrl as string}
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
