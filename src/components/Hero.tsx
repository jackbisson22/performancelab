import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <img
            src={logo}
            alt="PerformanceLab Logo"
            className="w-64 md:w-80 lg:w-96 drop-shadow-[0_0_40px_hsl(142_70%_50%_/_0.25)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        >
          Your PC, <span className="text-neon-glow">Supercharged</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Professional PC & console cleaning, optimization & tuning. We bring your
          devices back to peak performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:brightness-125 transition-all duration-300 neon-pulse"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-glow bg-muted/50 text-foreground font-semibold text-lg hover:bg-muted hover:border-primary/50 transition-all duration-300"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;