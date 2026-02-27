import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="neon-line w-full" />
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="py-12"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PerformanceLab — PC & Console Cleaning & Tuning. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
