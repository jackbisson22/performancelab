import { motion } from "framer-motion";
import { Monitor, Cpu, Wrench, Gamepad2, HardDrive, Zap, Gift } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "PC Deep Cleaning",
    price: "60 TND",
    description: "Complete dust removal, thermal paste replacement, and internal cleaning to keep your PC cool and quiet.",
  },
  {
    icon: Wrench,
    title: "Diagnostics & Repair",
    price: "20 TND",
    description: "Full system diagnostics to identify issues, with expert repair services.",
  },
  {
    icon: Cpu,
    title: "PC Assembly",
    price: "60 TND",
    description: "Custom PC builds tailored to your needs, with professional assembly, cable management, and thorough testing.",
  },
  {
    icon: Gamepad2,
    title: "Console Cleaning",
    price: "60 TND",
    description: "Deep cleaning for PlayStation, Xbox, and Nintendo consoles. Dust removal, thermal paste replacement, and fan maintenance.",
  },
  {
    icon: Gift,
    title: "All in One Service",
    price: "80 TND",
    description: "Complete PC cleaning, performance tuning, and hardware diagnostics in one service.",
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    price: "30 TND",
    description: "We provide our own custom Windows edition, PerformanceHub OS, designed to optimize your computer for better speed, performance, and overall user experience.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Section divider */}
      <div className="neon-line w-full mb-24" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-primary/30 text-primary mb-6"
          >
            What We Do
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-brand">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From deep cleaning to performance tuning — PCs and consoles, we handle it all.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 rounded-xl card-glass hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_hsl(142_70%_50%_/_0.12)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(142_70%_50%_/_0.2)] transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-primary text-glow-subtle" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  {service.price}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-glow-subtle transition-all">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
