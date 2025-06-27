import { accounts } from "../data/accounts";
import { transactions } from "../data/transactions";
import { Transaction } from "../models/transaction.model";
import { v4 as uuidv4 } from "uuid";

const FX_RATES: Record<string, number> = {
  USD_KES: 140,
  KES_USD: 1 / 140,
  USD_NGN: 770,
  NGN_USD: 1 / 770,
  KES_NGN: 770 / 140,
  NGN_KES: 140 / 770,
  USD_ZAR: 18,
  ZAR_USD: 1 / 18,
  KES_ZAR: 18 / 140,
  ZAR_KES: 140 / 18,
  NGN_ZAR: 18 / 770,
  ZAR_NGN: 770 / 18,
};

export function transferFunds(
  fromId: string,
  toId: string,
  amount: number,
  note?: string,
  scheduledDate?: string
): { success: boolean; message: string } {
  const fromAccount = accounts.find((acc) => acc.id === fromId);
  const toAccount = accounts.find((acc) => acc.id === toId);

  if (!fromAccount || !toAccount)
    return { success: false, message: "Invalid account ID" };

  let fxRate = 1;
  let finalAmount = amount;

  if (fromAccount.currency !== toAccount.currency) {
    const key = `${fromAccount.currency}_${toAccount.currency}`;
    fxRate = FX_RATES[key];
    if (!fxRate) return { success: false, message: "FX rate not supported" };
    finalAmount = amount * fxRate;
  }

  if (fromAccount.balance < amount)
    return { success: false, message: "Insufficient balance" };

  fromAccount.balance -= amount;
  toAccount.balance += finalAmount;

  const newTransaction: Transaction = {
    id: uuidv4(),
    from: fromAccount.name,
    to: toAccount.name,
    amount,
    currency: fromAccount.currency,
    note,
    timestamp: new Date().toISOString(),
    fxRate: fxRate !== 1 ? fxRate : undefined,
    scheduledDate: scheduledDate || undefined,
  };

  transactions.unshift(newTransaction);
  return { success: true, message: "Transfer successful" };
}
