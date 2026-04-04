import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Pump } from "basehub/react-pump";
import { draftMode } from "next/headers";
import { queries } from "@/lib/basehub";
import { mdxComponents } from "@/components/mdx-components";

export default async function BlogPostPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <Pump
        draft={(await draftMode()).isEnabled}
        next={{ revalidate: 1 }}
        queries={queries}
      >
        {async ([data]) => {
          "use server";
          const post = data.blogposts.items[0];

          if (!post) {
            notFound();
          }

          return (
            <article className="container mx-auto px-4 py-12 max-w-3xl">
              <Button variant="ghost" size="sm" className="mb-8" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>

              <header className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                    CMS Post
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Latest
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />5 min read
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  {post._title}
                </h1>

                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3 mr-2" />
                    BaseHub
                  </span>
                </div>
              </header>

              <div className="prose prose-lg dark:prose-invert max-w-none prose-code:unset prose-code:before:content-none prose-code:after:content-none">
                <MDXRemote
                  source={post.content.code}
                  //@ts-ignore
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </div>
            </article>
          );
        }}
      </Pump>
      {/* <Footer /> */}
    </main>
  );
}
