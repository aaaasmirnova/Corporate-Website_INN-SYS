import ComfortSupport from "@/public/icons/comfort-support.svg";
import Check from "@/public/icons/check.svg";
import ArrowLeftRight from "@/public/icons/arrow-left-right.svg";
import ArrowUp from "@/public/icons/arrow-up.svg";
export interface ICard {
  title: string;
  description: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const cards: ICard[] = [
  {
    title: "career_block.block1.title",
    description:
      "career_block.block1.description",
    icon: ComfortSupport,
  },
  {
    title: "career_block.block2.title",
    description: "career_block.block2.description",
    icon: Check,
  },
  {
    title: "career_block.block3.title",
    description: "career_block.block3.description",
    icon: ArrowLeftRight,
  },
  {
    title: "career_block.block4.title",
    description: "career_block.block4.description",
    icon: ArrowUp,
  },
];
export const placeOfWorks = ["filters.all_cities", "filters.remote", "filters.nalchik", "filters.moscow"];
export const positions = [
  "filters.all_categories",
  "filters.backend",
  "filters.ml",
  "filters.design",
  "filters.frontend",
];
export const contracts = ["filters.full-time", "filters.part-time"];

export const FILTER_KEYS = {
  ALL_CITIES: "filters.all_cities",
  ALL_DIRECTIONS: "filters.all_categories",
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
    position: "filters.frontend",
    positionDisplay: "filters.frontend",
    role: "filters.dev",
    contract: "filters.full-time",
    location: "filters.remote",
  },
  {
    id: 2,
    position: "filters.backend",
    positionDisplay: "filters.backend",
    role: "filters.dev",
    contract: "filters.full-time",
    location: "filters.moscow",
  },
  {
    id: 3,
    position: "filters.ml",
    positionDisplay: "filters.ml",
    role: "filters.data",
    contract: "filters.full-time",
    location: "filters.nalchik",
  },
  {
    id: 4,
    position: "filters.design",
    positionDisplay: "filters.design",
    role: "filters.designer",
    contract: "filters.part-time",
    location: "filters.remote",
  },
  {
    id: 5,
    position: "filters.design",
    positionDisplay: "filters.design",
    role: "filters.designer",
    contract: "filters.part-time",
    location: "filters.moscow",
  },
  {
    id: 6,
    position: "filters.design",
    positionDisplay: "filters.design",
    role: "filters.designer",
    contract: "filters.part-time",
    location: "filters.nalchik",
  },
];
