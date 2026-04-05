import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Pump } from "basehub/react-pump";
import { draftMode } from "next/headers";
import { blogListQueries } from "@/lib/basehub";

export default async function BlogPage() {
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

        <Pump
          draft={(await draftMode()).isEnabled}
          next={{ revalidate: 1 }}
          queries={blogListQueries}
        >
          {async ([data]) => {
            "use server";
            const blogPosts = data.blog.posts.items;

            return (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => {
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
                    <Card
                      key={post._slug}
                      className="h-full flex flex-col group hover:shadow-md transition-all duration-300"
                    >
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
                          {post.tags?.map((tag) => (
                            <span
                              key={tag.slug}
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
                  );
                })}
              </div>
            );
          }}
        </Pump>
      </div>
    </main>
  );
}
