import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("bookings").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        service: formData.service,
        preferred_date: new Date().toISOString().split("T")[0],
        message: formData.message.trim() || null,
      });

      if (error) throw error;

      try {
        await supabase.functions.invoke("notify-booking", {
          body: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
        });
      } catch {
        console.warn("Email notification failed, but booking was saved.");
      }

      toast.success("Booking request sent! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
      console.error("Booking error:", err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 relative">
      {/* Section divider */}
      <div className="neon-line w-full mb-24" />

      <div className="container mx-auto px-6 relative z-10">
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
            Get Started
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book an <span className="text-gradient-brand">Appointment</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 card-glass p-8 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(142_70%_50%_/_0.1)] transition-all text-foreground"
                placeholder="Amir Dimassi"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={255}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(142_70%_50%_/_0.1)] transition-all text-foreground"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(142_70%_50%_/_0.1)] transition-all text-foreground"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(142_70%_50%_/_0.1)] transition-all text-foreground"
              >
                <option value="">Select a service</option>
                <option value="PC Deep Cleaning">PC Deep Cleaning</option>
                <option value="Diagnostics & Repair">Diagnostics & Repair</option>
                <option value="PC Assembly">PC Assembly</option>
                <option value="Console Cleaning">Console Cleaning</option>
                <option value="Console Repair">All In One Service</option>
                <option value="Performance Tuning">Performance Tuning</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              maxLength={1000}
              className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(142_70%_50%_/_0.1)] transition-all text-foreground resize-none"
              placeholder="Describe your issue or what you need..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg neon-pulse hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Booking Request"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
