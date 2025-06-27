import { Router } from "express";
import { accounts } from "../models/account.model";

const router = Router();

router.get("/", (_req, res) => {
  res.json(accounts);
});

export default router;
