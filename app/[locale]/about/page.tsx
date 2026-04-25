import { MainLayout } from "@/components/MainLayout/MainLayout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <AboutPhilosophy />
    </MainLayout>
  );
}
