import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { FloatingDock } from "@/components/FloatingDock";
import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/api";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug!),
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
      <FloatingDock />

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
          layoutId={`post-${post.id}`}
          className="aspect-[21/9] rounded-2xl overflow-hidden mb-12"
        >
          <img
            src={post.attributes.coverImage.data.attributes.url}
            alt={post.attributes.coverImage.data.attributes.alternativeText}
            className="w-full h-full object-cover"
          />
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
              {format(new Date(post.attributes.publishedAt), "MMMM d, yyyy")}
            </time>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              {post.attributes.title}
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              {post.attributes.summary}
            </p>
          </header>

          <div className="h-px bg-border" />

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {post.attributes.content}
            </p>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
