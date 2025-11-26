import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-2xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <header className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">Let's Connect</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Always open to interesting conversations about systems, design, and the stories we tell through code.
            </p>
          </header>

          <div className="space-y-6">
            <motion.a
              href="mailto:hello@ashikarchive.com"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">hello@ashikarchive.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="text-muted-foreground">Connect professionally</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <Github className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <h3 className="text-xl font-semibold">GitHub</h3>
                <p className="text-muted-foreground">Explore my code</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
