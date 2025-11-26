import { motion } from "framer-motion";
import { FloatingDock } from "@/components/FloatingDock";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingDock />

      <div className="container mx-auto max-w-4xl px-6 py-24">
        {/* Print Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-end mb-8 print:hidden"
        >
          <Button
            onClick={handlePrint}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Printer className="w-4 h-4" />
            Print to PDF
          </Button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border rounded-2xl p-12 shadow-sm print:border-0 print:shadow-none print:rounded-none"
          style={{ aspectRatio: "210/297" }} // A4 proportion
        >
          {/* Header */}
          <header className="mb-10 pb-6 border-b border-border">
            <h1 className="text-4xl font-serif font-bold mb-2">Ashik Chengappa K</h1>
            <p className="text-xl text-muted-foreground">Principal Member of Technical Staff</p>
          </header>

          {/* Experience Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold mb-6">Experience</h2>

            <div className="space-y-8">
              {/* Oracle */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Oracle India</h3>
                    <p className="text-muted-foreground">Principal Member of Technical Staff</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Sep 2022 - Present</span>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Designed React/TypeScript UI plugins for Oracle Sharded Database</li>
                  <li>Built private endpoint workflows for distributed systems</li>
                  <li>Implemented OCI Vault encryption integration</li>
                  <li>Architected visual control planes for complex infrastructure</li>
                </ul>
              </div>

              {/* SAP Labs */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">SAP Labs India</h3>
                    <p className="text-muted-foreground">Software Engineer 2</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Dec 2014 - Sep 2022</span>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Built NextGen Cloud Payroll microservices from ground up</li>
                  <li>Developed EC Adapter using REST APIs for system integration</li>
                  <li>Created UI components for SAP Lumira Discovery</li>
                  <li>Architected scalable solutions for enterprise applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold mb-6">Education</h2>
            <div>
              <h3 className="text-xl font-semibold">B.E. Computer Science</h3>
              <p className="text-muted-foreground">National Institute of Engineering, Mysore</p>
              <p className="text-sm text-muted-foreground mt-1">CGPA: 9.24</p>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "Java", "SpringBoot", "React", "Docker", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
