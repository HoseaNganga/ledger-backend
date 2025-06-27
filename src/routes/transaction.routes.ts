import { Router } from "express";
import { transactions } from "../models/transaction.model";
import { transferFunds } from "../services/ledger.service";

const router = Router();

router.get("/", (_req, res) => {
  res.json(transactions);
});

router.post("/transfer", (req, res) => {
  const { fromId, toId, amount, note } = req.body;
  const result = transferFunds(fromId, toId, amount, note);
  if (result.success) res.status(200).json(result);
  else res.status(400).json(result);
});

export default router;
