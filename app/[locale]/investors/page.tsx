import { Header } from "@/components/Common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/components/Common/ContactsForm/ContactsForm";
import { InvestorsHero } from "@/components/InvestorsPage/InvestorsHero";
import { AnnualReport } from "@/components/InvestorsPage/AnnualReport";
import { CompanyRule } from "@/components/InvestorsPage/CompanyRule";
import InvestorsNumber from "@/components/InvestorsPage/InvestorsNumber/InvestorsNumber";
import InvestorsFinance from "@/components/InvestorsPage/InvestorsFinance/InvestorsFinance";

export default function InvestorsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <InvestorsHero />
      <InvestorsNumber />
      <InvestorsFinance />
      <AnnualReport />
      <CompanyRule />
      <ContactsForm />
    </MainLayout>
  );
}
