import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import PaymentMethodsSection from "@/components/PaymentMethodsSection";
import DetoxSection from "@/components/DetoxSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <DifferentialsSection />
        <HowToOrderSection />
        <PaymentMethodsSection />
        <DetoxSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
