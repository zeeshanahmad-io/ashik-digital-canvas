import { motion } from "framer-motion";
import { Home, BookOpen, Compass, Mail } from "lucide-react";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";

const dockItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: BookOpen, label: "Journal", path: "/journal" },
  { icon: Compass, label: "Ethos", path: "/ethos" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export const FloatingDock = () => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-8 left-1/2 z-50 w-max"
    >
      <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg">
        <ul className="flex items-center gap-6">
          {dockItems.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            >
              <NavLink
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200",
                  "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
                activeClassName="text-foreground bg-accent"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
