import About from "@/src/components/AboutUs";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import HeroSection from "@/src/components/Hero";
import Services from "@/src/components/Services";
import TrustBar from "@/src/components/TrustBar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <HeroSection />
      <TrustBar />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
