import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactInformation from "@/app/components/ContactInformation/ContactInformation";

const contactTitle1 = "section_1.title";
const contactTitle2 = "section_2.title";

const contactSection_1 = [
  {
    id: 1,
    title: "Вконтакте",
    link: "https://vk.com/inn_sys",
  },
  {
    id: 2,
    title: "TikTok",
    link: "https://www.tiktok.com/404?fromUrl=/inn_sys",
  },
  {
    id: 3,
    title: "Instagram",
    link: "https://www.instagram.com/inn.sys",
    info: "section_1.info",
  },
  {
    id: 4,
    title: "YouTube",
    link: "https://www.youtube.com/channel/inn_sys",
  },
  {
    id: 5,
    title: "X (Twitter)",
    link: "https://x.com/inn_sys",
  },
];

const contactSection_2 = [
  {
    id: 1,
    title: "Хабр",
    link: "https://habr.com/ru/inn_tegro",
  },
  {
    id: 2,
    title: "GitHub",
    link: "https://github.com/Innovatica-Systems",
  },
  {
    id: 3,
    title: "Dprofile",
    link: "https://dprofile.ru/inn_sys/info",
  },
  {
    id: 4,
    title: "Behance",
    link: "https://www.behance.net/inn_sys",
  },
  {
    id: 5,
    title: "Dribbble",
    link: "https://dribbble.com/inn_sys",
  },
  {
    id: 6,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/inntegro",
  },
];

export default function Contact() {
  return (
    <MainLayout>
      <ContactInformation title={contactTitle1} data={contactSection_1} />
      <ContactInformation title={contactTitle2} data={contactSection_2} />
    </MainLayout>
  );
}
