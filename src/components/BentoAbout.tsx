import { motion } from "framer-motion";

export const BentoAbout = () => {
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
    <section className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {/* Bio Block - Spans 2 columns on large screens */}
          <motion.div
            variants={item}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              I live in the balance between logic and narrative. By day, I architect visual control 
              planes for distributed systems, turning chaos into structure. By night, I explore the 
              quieter corners of life through writing.
            </p>
          </motion.div>

          {/* Portrait Block with parallax effect */}
          <motion.div
            variants={item}
            className="bg-secondary/50 border border-border rounded-2xl overflow-hidden relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src="/placeholder.svg"
                alt="Ashik Chengappa K"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Current Role */}
          <motion.div
            variants={item}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-center"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
              Current Role
            </p>
            <h3 className="text-xl font-serif font-bold mb-2">
              Principal Member of Technical Staff
            </h3>
            <p className="text-muted-foreground">Oracle India</p>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            variants={item}
            className="lg:col-span-2 bg-accent/20 border border-border rounded-2xl p-8 flex flex-col justify-center"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "System Architecture", "Cloud Infrastructure", "UI/UX"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
