import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroComponent/HeroSection";
import { AboutSection } from "@/components/AboutComponent/AboutSection";

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
