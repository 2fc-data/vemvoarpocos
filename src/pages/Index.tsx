import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Tips from "@/components/Tips";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Gallery />
      <Pricing />
      <Tips />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
