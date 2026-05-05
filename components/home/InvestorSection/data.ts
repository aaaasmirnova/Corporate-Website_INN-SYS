export interface Statistic {
  name: string;
  percent: string;
}

export interface Report {
  year: string;
  reportUrl: string;
  presentationUrl: string;
}
export const statistics: Statistic[] = [
  { name: "CAGR", percent: "0" },
  { name: "Выручка", percent: "0" },
  { name: "Валовая прибыль", percent: "0" },
  { name: "Свободный денежный поток", percent: "0" },
  { name: "EBITDA", percent: "0" },
  { name: "Рентабельность", percent: "0" },
];

export const reports: Report[] = [
  { year: "2024", reportUrl: "", presentationUrl: "" },
  { year: "2025", reportUrl: "", presentationUrl: "" },
  { year: "2026", reportUrl: "", presentationUrl: "" },
  { year: "2027", reportUrl: "", presentationUrl: "" },
  { year: "2028", reportUrl: "", presentationUrl: "" },
  { year: "2029", reportUrl: "", presentationUrl: "" },
];
