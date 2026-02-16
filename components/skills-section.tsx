"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DynamicIcon } from "@/lib/icons";
import { Skills } from "basehub-types";

export function SkillsSection({ skills }: { skills: Skills }) {
  const skillCategories = [
    skills.programmingLanguages,
    skills.frameworks,
    skills.databases,
    skills.infrastructure,
  ];
  skillCategories.forEach((item) => console.dir(item, { depth: null }));
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills & Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {skills.subHeadline}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category) => (
            <Card key={category._title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 capitalize">
                  <div className="bg-primary/10 p-2 rounded-lg ">
                    <DynamicIcon
                      name={category.icon as string}
                      className="h-5 w-5 text-primary"
                    />
                  </div>
                  {category._title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.items.map((item) => (
                  <div
                    key={item._title}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{item._title}</span>
                    </div>
                    {/* <SkillLevelBadge level={skill.level} /> */}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Current Learning */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Currently Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentLearning.map((item) => (
              <Card key={item.title} className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>

                  <div className="text-xs text-primary font-medium">
                    {item.course}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
