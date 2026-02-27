import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#", // Replace with your Instagram URL
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "#", // Replace with your Facebook URL
  },
  {
    name: "TikTok",
    icon: null,
    href: "#", // Replace with your TikTok URL
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "#", // Replace with your WhatsApp URL
  },
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const SocialLinks = () => {
  return (
    <section className="py-16 relative">
      {/* Section divider */}
      <div className="neon-line w-full mb-16" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-primary/30 text-primary mb-6"
          >
            Connect
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Follow <span className="text-gradient-brand">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">Stay connected on social media</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center gap-6"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover={{ scale: 1.2, y: -4 }}
              className="w-14 h-14 rounded-xl card-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_25px_hsl(142_70%_50%_/_0.2)] transition-all duration-300"
              title={social.name}
            >
              {social.icon ? (
                <social.icon className="w-6 h-6" />
              ) : (
                <TikTokIcon className="w-6 h-6" />
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
