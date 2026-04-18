import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroComponent/HeroSection";
import { AboutSection } from "@/components/AboutComponent/AboutSection";
import { KeyIndicatorsSection } from "@/components/KeyIndicatorsComponent/KeyIndicatorsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-neutral-black-elbrus">
      <Header />
      <HeroSection />
      <AboutSection />
      <KeyIndicatorsSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
