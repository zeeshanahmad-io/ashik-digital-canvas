import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FloatingDock } from "@/components/FloatingDock";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Ethos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <FloatingDock />

      <main className="container mx-auto max-w-4xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <header className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif font-bold text-balance"
            >
              On Systems & Storytelling
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-border"
            />
          </header>

          {/* Narrative Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-8 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              At Oracle, I've spent my days architecting the invisible—visual control planes that 
              transform distributed systems from incomprehensible complexity into intuitive 
              interfaces. As a Principal Member of Technical Staff, I design React and TypeScript 
              plugins for Oracle Sharded Database, building private endpoint workflows that bridge 
              the gap between raw infrastructure and human understanding. My work with OCI Vault 
              encryption integration is about trust: ensuring that what's secure feels secure, 
              that what's complex becomes clear.
            </p>

            <p>
              Before Oracle, I spent eight years at SAP Labs India, where I learned that software 
              engineering is as much about narrative as it is about code. I built the NextGen Cloud 
              Payroll microservices from the ground up, architected REST API adapters for Employee 
              Central, and crafted UI components for SAP Lumira Discovery. Each project was a story 
              of structure emerging from chaos—of taking scattered requirements and weaving them 
              into coherent, maintainable systems.
            </p>

            <p>
              My approach to engineering is rooted in a belief that great architecture is about 
              more than technical excellence. It's about empathy: understanding how users think, 
              how systems fail, and how complexity can be tamed without being oversimplified. 
              Whether I'm working with Docker containers, SpringBoot microservices, or React 
              frontends, I'm always asking: How can this be clearer? How can this be more elegant? 
              How can this tell its own story?
            </p>
          </motion.article>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-8"
          >
            <Button
              onClick={() => navigate("/resume")}
              variant="outline"
              size="lg"
              className="group gap-2 border-2 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <FileText className="w-5 h-5 group-hover:rotate-6 transition-transform" />
              View Technical Résumé
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Ethos;
