import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

// In a real app, this would come from a CMS or local files
const blogPosts = [
  {
    title: "Building a Scalable URL Shortener in Go",
    excerpt:
      "Exploring the challenges of rate limiting, SSE metrics, and high-concurrency handling in Go services.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Systems Engineering",
    slug: "building-url-shortener-go",
    tags: ["Go", "Distributed Systems", "Redis"],
  },
  {
    title: "Optimizing Next.js Performance for Portfolios",
    excerpt:
      "A deep dive into Core Web Vitals, image optimization, and server-side rendering strategies.",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Frontend",
    slug: "nextjs-performance-tips",
    tags: ["Next.js", "Web Vitals", "React"],
  },
  {
    title: "The Shift Towards Platform Engineering",
    excerpt:
      "Why modern development teams are moving away from traditional DevOps towards internal developer platforms.",
    date: "February 10, 2024",
    readTime: "10 min read",
    category: "DevOps",
    slug: "platform-engineering-shift",
    tags: ["Platform Engineering", "Kubernetes", "DevOps"],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on software architecture, systems engineering, and modern
            web development.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="h-full flex flex-col group hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                    >
                      <Tag className="w-2 h-2 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-muted">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn h-8"
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
