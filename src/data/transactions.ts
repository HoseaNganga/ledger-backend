export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  currency: string;
  note?: string;
  timestamp: string;
  fxRate?: number;
}
