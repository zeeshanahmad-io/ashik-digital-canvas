import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getJournalEntries } from "@/lib/journal";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const Journal = () => {
  const navigate = useNavigate();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getJournalEntries,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-24">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Journal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Thoughts on systems, stories, and the space between.
          </p>
        </motion.header>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[400px] rounded-2xl" />
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts?.map((post) => (
              <motion.article
                key={post.slug}
                variants={item}
                layoutId={`post-${post.slug}`}
                onClick={() => navigate(`/journal/${post.slug}`)}
                className="group cursor-pointer"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <motion.div
                    className="aspect-[4/3] overflow-hidden bg-secondary"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                  <div className="p-6 space-y-3">
                    <time className="text-sm text-muted-foreground">
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                    <h2 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Journal;
