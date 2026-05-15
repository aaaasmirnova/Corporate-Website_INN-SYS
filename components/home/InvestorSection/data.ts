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
  { name: "For_investors.gagr", percent: "0" },
  { name: "For_investors.revenue", percent: "0" },
  { name: "For_investors.gross_profit", percent: "0" },
  { name: "For_investors.fresh_cash_flow", percent: "0" },
  { name: "For_investors.ebitda", percent: "+70%" },
  { name: "For_investors.profitability", percent: "+70%" },
];

export const reports: Report[] = [
  { year: "2024", reportUrl: "", presentationUrl: "" },
  { year: "2025", reportUrl: "", presentationUrl: "" },
  // { year: "2026", reportUrl: "", presentationUrl: "" },
  // { year: "2027", reportUrl: "", presentationUrl: "" },
  // { year: "2028", reportUrl: "", presentationUrl: "" },
  // { year: "2029", reportUrl: "", presentationUrl: "" },
];
