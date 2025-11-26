import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getJournalEntry } from "@/lib/journal";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getJournalEntry(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-serif">Loading...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Post not found</h1>
          <Button onClick={() => navigate("/journal")} variant="outline">
            Back to Journal
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="container mx-auto max-w-4xl px-6 py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            onClick={() => navigate("/journal")}
            variant="ghost"
            className="gap-2 -ml-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Button>
        </motion.div>

        {/* Hero Image with morph animation */}
        <motion.div
          layoutId={`post-${post.slug}`}
          className="aspect-[21/9] rounded-2xl overflow-hidden mb-12"
        >
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8"
        >
          <header className="space-y-4">
            <time className="text-sm text-muted-foreground">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              {post.description}
            </p>
          </header>

          <div className="h-px bg-border" />

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-xl !bg-[#1e1e1e] !p-4 my-6 shadow-lg"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...props} className={`${className} bg-muted px-1.5 py-0.5 rounded-md font-mono text-sm text-primary`}>
                      {children}
                    </code>
                  )
                },
                blockquote({ children }: any) {
                  return (
                    <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-muted-foreground text-lg bg-secondary/10 py-4 pr-4 rounded-r-xl">
                      {children}
                    </blockquote>
                  );
                },
                a({ href, children }: any) {
                  return (
                    <a
                      href={href}
                      className="text-primary underline decoration-primary/30 hover:decoration-primary transition-all font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  );
                },
                h1({ children }: any) {
                  return <h1 className="text-3xl md:text-4xl font-serif font-bold mt-12 mb-6 text-foreground">{children}</h1>;
                },
                h2({ children }: any) {
                  return <h2 className="text-2xl md:text-3xl font-serif font-bold mt-10 mb-5 text-foreground">{children}</h2>;
                },
                h3({ children }: any) {
                  return <h3 className="text-xl md:text-2xl font-serif font-bold mt-8 mb-4 text-foreground">{children}</h3>;
                },
                ul({ children }: any) {
                  return <ul className="list-disc list-outside ml-6 space-y-2 my-6 text-muted-foreground">{children}</ul>;
                },
                ol({ children }: any) {
                  return <ol className="list-decimal list-outside ml-6 space-y-2 my-6 text-muted-foreground">{children}</ol>;
                },
                li({ children }: any) {
                  return <li className="pl-2">{children}</li>;
                },
                img({ src, alt }: any) {
                  return (
                    <figure className="my-10">
                      <img
                        src={src}
                        alt={alt}
                        className="rounded-xl shadow-lg w-full object-cover border border-border"
                      />
                      {alt && <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">{alt}</figcaption>}
                    </figure>
                  );
                },
                p({ children }: any) {
                  return <p className="leading-relaxed text-muted-foreground mb-6">{children}</p>;
                },
                hr() {
                  return <hr className="my-12 border-border" />;
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
