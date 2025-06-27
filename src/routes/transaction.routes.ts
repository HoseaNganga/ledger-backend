import { Router, Request, Response } from "express";
import { transactions } from "../data/transactions";
import { transferFunds } from "../services/ledger.service";

const router = Router();

router.get("/", (req, res) => {
  const { account, currency } = req.query;
  let filtered = transactions;

  if (account) {
    filtered = filtered.filter(
      (txn) => txn.from === account || txn.to === account
    );
  }

  if (currency) {
    filtered = filtered.filter((txn) => txn.currency === currency);
  }

  res.json(filtered);
});

router.get("/scheduled", (req, res) => {
  const now = new Date();

  const scheduled = transactions.filter(
    (t) => t.scheduledDate && new Date(t.scheduledDate) > now
  );

  res.json(scheduled);
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const transaction = transactions.find((txn) => txn.id === id);

  if (!transaction) {
    res.status(404).json({ message: "Transaction not found" });
    return;
  }

  res.json(transaction);
});

router.post("/transfer", (req, res) => {
  const { fromId, toId, amount, note, scheduledDate } = req.body;

  const result = transferFunds(fromId, toId, amount, note, scheduledDate);

  if (result.success) res.status(200).json(result);
  else res.status(400).json(result);
});

export default router;
