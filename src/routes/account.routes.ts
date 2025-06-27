import { Router, Request, Response } from "express";
import { accounts } from "../data/accounts";
import { Account } from "../models/account.model";

const router = Router();

router.get("/", (_req, res) => {
  res.json(accounts);
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const account = accounts.find((acc) => acc.id === id);

  if (!account) {
    res.status(404).json({ message: "Account not found" });
    return;
  }

  res.json(account);
});

export default router;
