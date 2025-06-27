# 💸 Ledger API - Treasury Movement Simulator (Backend)

This backend powers a virtual treasury simulator for managing account balances and cross-currency fund movements. It's built as part of a technical assessment for a Software Developer Internship at Niobi Kenya Ltd.

---

## 🚀 Overview

This API simulates real-world treasury operations such as:

- Managing multiple virtual accounts across 4 currencies
- Performing fund transfers (same or cross currency)
- Validating balance availability
- Applying static FX conversion rates
- Logging all transactions (including future-scheduled ones)
- Filtering transaction history by account or currency

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **In-Memory Storage**

---

## Setup & Run

**Install dependencies:**

   ```bash
   npm install
   ```

**Start Development Server:**

    ```bash
    npm run dev
    ```

## 💱 FX Conversion Logic

All cross-currency transfers apply static exchange rates defined in the backend. These simulate real-world FX treasury operations.

### Supported Currencies

- KES (Kenyan Shilling)
- USD (US Dollar)
- NGN (Nigerian Naira)
- ZAR (South African Rand)

### Static Exchange Rates

| From → To | Rate | Description |
|-----------|------|-------------|
| USD → KES | 140  | 1 USD = 140 KES |
| KES → USD | 1/140 | 1 KES ≈ 0.0071 USD |
| USD → NGN | 770  | 1 USD = 770 NGN |
| NGN → USD | 1/770 | 1 NGN ≈ 0.0013 USD |
| KES → NGN | 5.5  | 1 KES = 5.5 NGN |
| NGN → KES | 0.18 | 1 NGN = 0.18 KES |
| USD → ZAR | 18   | 1 USD = 18 ZAR |
| ZAR → USD | 1/18 | 1 ZAR ≈ 0.055 USD |
| KES → ZAR | 0.1285 | 1 KES ≈ 0.1285 ZAR |
| ZAR → KES | 7.78 | 1 ZAR ≈ 7.78 KES |
| NGN → ZAR | 0.0234 | 1 NGN ≈ 0.0234 ZAR |
| ZAR → NGN | 42.78 | 1 ZAR ≈ 42.78 NGN |

All transfers involving different currencies apply the matching FX rate automatically and are logged with the applied rate.

## Ledger EndPoints

- GET /accounts: Returns a list of all virtual accounts.Each account includes: id, name, currency, and balance
- POST /transactions/transfer: Transfers money from one account to another.It Validates sufficient balance Supports same-currency and cross-currency (FX) transfers.
- GET /transactions: Returns a list of all transactions (both completed and scheduled).Query filters include :
  - ?currency=KES → filter by currency
  - ?account=ZAR Treasury Fund → filter by from/to account
  - ?currency=KES&account=James Kariuki - KES Wallet → combined filter
  
- GET /transactions/scheduled: Returns only future-dated transactions (i.e., scheduled transfers).
