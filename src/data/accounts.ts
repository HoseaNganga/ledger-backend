import { Account } from "../models/account.model";

export const accounts: Account[] = [
  {
    id: "1",
    name: "James Kariuki - KES Wallet",
    currency: "KES",
    balance: 50000,
  },
  {
    id: "2",
    name: "HR Payroll - KES Reserve",
    currency: "KES",
    balance: 75000,
  },
  { id: "3", name: "Operations Fund - KES", currency: "KES", balance: 25000 },
  {
    id: "4",
    name: "James Kariuki - USD Account",
    currency: "USD",
    balance: 1000,
  },
  { id: "5", name: "Vendor Payouts - USD", currency: "USD", balance: 2000 },
  { id: "6", name: "USD Treasury Pool", currency: "USD", balance: 1500 },
  { id: "7", name: "NGN Treasury Pool", currency: "NGN", balance: 300000 },
  { id: "8", name: "Payroll - NGN", currency: "NGN", balance: 150000 },
  {
    id: "9",
    name: "Mobile Disbursement - NGN",
    currency: "NGN",
    balance: 50000,
  },
  { id: "10", name: "Central Reserve - KES", currency: "KES", balance: 100000 },
  { id: "11", name: "FX Holding - ZAR", currency: "ZAR", balance: 120000 },
  { id: "12", name: "Vendor ZAR Payments", currency: "ZAR", balance: 90000 },
  { id: "13", name: "ZAR Treasury Fund", currency: "ZAR", balance: 140000 },
];
