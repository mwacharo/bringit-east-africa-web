import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ServiceHighlights from "@/components/landing/ServiceHighlights";
import About from "@/components/landing/About";
import ServicesGrid from "@/components/landing/ServicesGrid";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <About />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
