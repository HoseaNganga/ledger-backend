export interface Account {
  id: string;
  name: string;
  currency: "KES" | "USD" | "NGN";
  balance: number;
}
