export interface ICard {
  title: string;
  description: string;
}

export const cards: ICard[] = [
  {
    title: "Комфортные условия",
    description:
      "Офис или удалёнка по московскому времени — на ваше усмотрение",
  },
  {
    title: "Забота о здоровье",
    description: "ДМС, телемедицина, чекапы, страховки для родственников",
  },
  {
    title: "Развитие в профессии",
    description: "Менторство, командные мероприятия, условия роста",
  },
  {
    title: "Эффективный старт",
    description:
      "Стажёрские программы, программы карьерного старта, обучение ИТ-профессиям",
  },
];
export const placeOfWorks = ["Все города", "Удаленно", "Нальчик", "Москва"];
export const positions = [
  "Все направления",
  "Backend",
  "ML",
  "Design",
  "Frontend",
];
export const contracts = ["Full-time", "Part-time"];

export const FILTER_KEYS = {
  ALL_CITIES: "Все города",
  ALL_DIRECTIONS: "Все направления",
} as const;

export const INITIAL_VACANCIES_LIMIT = 5;

export interface Vacancy {
  id: number;
  position: string;
  positionDisplay: string;
  role: string;
  contract: string;
  location: string;
}

export const vacancies: Vacancy[] = [
  {
    id: 1,
    position: "Frontend",
    positionDisplay: "Frontend",
    role: "Dev",
    contract: "Full-Time",
    location: "Удаленно",
  },
  {
    id: 2,
    position: "Backend",
    positionDisplay: "Backend",
    role: "Dev",
    contract: "Full-time",
    location: "Москва",
  },
  {
    id: 3,
    position: "ML",
    positionDisplay: "ML",
    role: "Data",
    contract: "Full-time",
    location: "Нальчик",
  },
  {
    id: 4,
    position: "Design",
    positionDisplay: "UX/UI-дизайнер",
    role: "Designer",
    contract: "Part-time",
    location: "Удаленно",
  },
  {
    id: 5,
    position: "Design",
    positionDisplay: "UX/UI-дизайнер",
    role: "Designer",
    contract: "Part-time",
    location: "Москва",
  },
  {
    id: 6,
    position: "Design",
    positionDisplay: "UX/UI-дизайнер",
    role: "Designer",
    contract: "Part-time",
    location: "Москва",
  },
];
