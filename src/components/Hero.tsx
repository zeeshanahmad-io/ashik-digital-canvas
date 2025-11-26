import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background border-b border-border">
      <div className="container mx-auto px-6 relative">
        <div className="relative flex flex-col items-center justify-center">
          {/* Portrait Placeholder - Magazine Cover Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-2xl aspect-[3/4] mb-12 overflow-hidden"
          >
            {/* Placeholder image with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/60 flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-sm uppercase tracking-widest">Portrait</span>
            </div>
            
            {/* Magazine label overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-8 left-8 right-8 text-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-foreground font-sans font-light">
                The Archive
              </p>
            </motion.div>
          </motion.div>

          {/* Magazine Title - Name spanning full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <h1 className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-serif font-bold uppercase tracking-tighter leading-none text-center text-foreground">
              ASHIK
            </h1>
          </motion.div>

          {/* Subtitle - Vogue style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 text-center border-t border-border pt-6 max-w-xl"
          >
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-foreground font-sans font-light">
              Engineering Logic Meets Creative Chaos
            </p>
          </motion.div>

          {/* Issue Number & Date - Magazine Detail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-12 left-6 right-6 flex justify-between items-center text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span>Volume I</span>
            <span>2025</span>
          </motion.div>
        </div>
      </div>

      {/* Minimal background accents - very subtle */}
      <motion.div
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};
