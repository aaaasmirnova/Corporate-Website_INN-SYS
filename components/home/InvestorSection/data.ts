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
  { name: "CAGR", percent: "+70%" },
  { name: "Выручка", percent: "+70%" },
  { name: "Валовая прибыль", percent: "+70%" },
  { name: "Свободный денежный поток", percent: "+70%" },
  { name: "EBITDA", percent: "+70%" },
  { name: "Рентабельность", percent: "+70%" },
];

export const reports: Report[] = [
  { year: "2024", reportUrl: "", presentationUrl: "" },
  { year: "2025", reportUrl: "", presentationUrl: "" },
  { year: "2026", reportUrl: "", presentationUrl: "" },
  { year: "2027", reportUrl: "", presentationUrl: "" },
  { year: "2028", reportUrl: "", presentationUrl: "" },
  { year: "2029", reportUrl: "", presentationUrl: "" },
];
