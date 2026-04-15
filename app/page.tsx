import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
