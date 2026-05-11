import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { InvestorsHero } from "@/components/investors/InvestorsHero";
import { AnnualReport } from "@/components/investors/AnnualReport";
import { CompanyRule } from "@/components/investors/CompanyRule";

export default function ContactsPage() {
  return (
    <MainLayout>
      <InvestorsHero />
      <AnnualReport />
      <CompanyRule />
      <ContactsForm />
    </MainLayout>
  );
}
