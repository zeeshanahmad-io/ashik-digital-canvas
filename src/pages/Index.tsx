import { Hero } from "@/components/Hero";
import { BentoAbout } from "@/components/BentoAbout";
import { FloatingDock } from "@/components/FloatingDock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingDock />
      <Hero />
      <BentoAbout />
    </div>
  );
};

export default Index;
