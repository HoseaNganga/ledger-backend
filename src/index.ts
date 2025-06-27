import express from "express";
import cors from "cors";
import accountRoutes from "./routes/account.routes";
import transactionRoutes from "./routes/transaction.routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/accounts", accountRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
