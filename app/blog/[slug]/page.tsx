import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Pump } from "basehub/react-pump";
import { draftMode } from "next/headers";
import { getBlogPostQuery } from "@/lib/basehub";
import { mdxComponents } from "@/components/mdx-components";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen pt-24">
      <Navigation />
      <Pump
        draft={(await draftMode()).isEnabled}
        next={{ revalidate: 1 }}
        queries={getBlogPostQuery(slug)}
      >
        {async ([data]) => {
          "use server";
          const post = data.blog.posts.items[0];

          if (!post) {
            notFound();
          }

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
                    {category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {readTime}
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  {post._title}
                </h1>

                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span key={tag.slug} className="flex items-center text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3 mr-2" />
                      {tag._title}
                    </span>
                  ))}
                </div>
              </header>

              <div className="prose prose-lg dark:prose-invert max-w-none prose-code:unset prose-code:before:content-none prose-code:after:content-none">
                <MDXRemote
                  source={post.contentMarkdown.code}
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
    </main>
  );
}
