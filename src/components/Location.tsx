import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Address",
    content: "Tunis, Tunisia",
    color: "primary" as const,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
    color: "secondary" as const,
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+216 XX XXX XXX",
    color: "primary" as const,
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@performancelab.com",
    color: "secondary" as const,
  },
];

const Location = () => {
  return (
    <section id="location" className="py-24 relative">
      <div className="neon-line w-full mb-24" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-secondary/30 text-secondary mb-6">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find <span className="text-gradient-brand">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Visit our shop or contact us to schedule a pickup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-4">
            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 p-5 rounded-xl card-glass transition"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm uppercase text-foreground/80">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden border border-border/50 h-[400px] shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d199.53771602275654!2d10.265317469018699!3d36.85197200260417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1772171427049!5m2!1sfr!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PerformanceLab Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;