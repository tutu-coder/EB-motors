import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import AboutSection from "@/components/AboutSection";
import BrandStrip from "@/components/BrandStrip";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { ContactForm }from "@/components/ContactForm";

export default function Home() {
  return (
    <main> 
      <Navbar />
      <Hero />
      <FeaturedCars />
      <AboutSection />
      <BrandStrip />
      <FinanceCalculator />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}