import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Page404 } from "@/components/page404/Page404";

export default function ProductsPage() {
  return (
    <MainLayout>
      {/* <Header hasButton={true} /> */}
      <Page404 />
    </MainLayout>
  );
}
