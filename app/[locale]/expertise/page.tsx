import { ExpertiseComponent } from "@/components/ExpertiseComponent/ExpertiseComponent";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { ExpertiseTabs } from "@/app/components/ExpertiseTabs/ExpertiseTabs";

export default function ExpertisePage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <ExpertiseComponent />
      <ExpertiseTabs />
    </MainLayout>
  );
}
