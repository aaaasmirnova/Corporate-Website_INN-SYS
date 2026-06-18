import { Header } from "@/components/Common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Page404 } from "@/components/page404/Page404";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <Page404 />
    </MainLayout>
  );
}
