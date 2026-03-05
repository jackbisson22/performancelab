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

        {/* ✨ Flying Logo */}
        <motion.div
          animate={{
            y: [0, -15, 0],     // smooth float up & down
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-16 relative"
        >
          {/* 🌫 Soft Reduced Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem]
                       rounded-full bg-primary blur-[140px]"
          />

          <img
            src={logo}
            alt="PerformanceLab Logo"
            className="w-64 md:w-80 lg:w-96 relative z-10 select-none"
          />
        </motion.div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Your PC, <span className="text-neon-glow">Supercharged</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Professional PC & console cleaning, optimization & tuning.
          We bring your devices back to peak performance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg 
                       bg-primary text-primary-foreground font-semibold text-lg 
                       hover:brightness-125 transition-all duration-300"
          >
            Book Appointment
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg 
                       border border-glow bg-muted/50 text-foreground 
                       font-semibold text-lg hover:bg-muted 
                       hover:border-primary/50 transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;