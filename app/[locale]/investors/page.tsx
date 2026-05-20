import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { InvestorsHero } from "@/components/InvestorsPage/InvestorsHero";
import { AnnualReport } from "@/components/InvestorsPage/AnnualReport";
import { CompanyRule } from "@/components/InvestorsPage/CompanyRule";

export default function InvestorsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <InvestorsHero />
      <AnnualReport />
      <CompanyRule />
      <ContactsForm />
    </MainLayout>
  );
}
