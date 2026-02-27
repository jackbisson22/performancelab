import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import brandsBg from "@/assets/brands-bg.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Full-site background image */}
      <div
        className="fixed inset-0 bg-cover bg-center blur-sm scale-105 z-0"
        style={{ backgroundImage: `url(${brandsBg})` }}
      />
      <div className="fixed inset-0 bg-background/80 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <BookingForm />
        <Location />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
