"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  _title: string;
  _slug: string | null;
  excerpt?: string | null;
  publishDate?: string | null;
  tags?: { _title: string; slug: string | null }[] | null;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest Writing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on software architecture, systems engineering, and modern
            web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const category = post.tags?.[0]?._title || "Uncategorized";
            const readTime = "5 min read";
            const date = post.publishDate
              ? new Date(post.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Recent";

            return (
              <motion.div
                key={post._slug || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col group hover:shadow-md transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                        {category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {readTime}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {post._title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {post.tags?.map((tag, index) => (
                        <span
                          key={tag.slug || index}
                          className="flex items-center text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                        >
                          <Tag className="w-2 h-2 mr-1" />
                          {tag._title}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-muted">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {date}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn h-8"
                        asChild
                      >
                        <Link href={`/blog/${post._slug}`}>
                          Read More
                          <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
