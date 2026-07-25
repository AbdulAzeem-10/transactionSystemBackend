# 💳 Transaction System Backend API

A production-style backend for a digital transaction and ledger system built with **Node.js, Express.js, MongoDB, and Mongoose**.

This project simulates how modern banking and fintech applications securely process money transfers using **double-entry accounting**, **MongoDB transactions**, **JWT authentication**, **idempotency keys**, and **ledger-based balance calculation**.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User Registration
- User Login
- User Logout
- JWT Authentication
- Cookie-based Authentication
- Protected Routes
- System User Authorization
- Token Blacklisting
- Password Hashing using bcrypt
- Authentication Middleware

---

### 👤 Account Management

- Create Account
- Account Ownership Verification
- Account Status Validation
- Account Balance Endpoint
- Ledger-Based Balance Calculation
- Multiple Account Support
- Compound Indexing for Faster Queries

---

### 💸 Transaction System

Implements a production-inspired transaction flow.

### Transaction Flow

1. Validate Request
2. Validate Idempotency Key
3. Validate Accounts
4. Check Account Status
5. Calculate Sender Balance
6. Start MongoDB Transaction Session
7. Create Pending Transaction
8. Create Debit Ledger Entry
9. Create Credit Ledger Entry
10. Mark Transaction Completed
11. Commit Transaction
12. Send Email Notification

---

### 🏦 Double Entry Accounting

Every transaction creates:

- One Debit Entry
- One Credit Entry

instead of directly updating balances.

Current account balance is calculated dynamically from the ledger.

```
Balance = Total Credits - Total Debits
```

---

### 🔄 Idempotency

Duplicate transactions are prevented using unique **Idempotency Keys**.

Benefits:

- Prevents accidental duplicate transfers
- Safe retries
- Network failure protection
- Production-ready payment design

---

### 📒 Ledger System

Balances are never stored directly.

Instead, every transfer creates immutable ledger entries.

Example:

```
Debit  : System Account
Credit : User Account
```

Balance is derived using MongoDB Aggregation Pipelines.

---

### 📧 Email Notifications

Automatic email notifications are sent for:

- User Registration
- Successful Transactions

Implemented using Nodemailer.

---

## 🛡 Security Features

- JWT Authentication
- Protected APIs
- Password Hashing (bcrypt)
- Token Blacklisting
- System User Authorization
- Request Validation
- Ownership Verification
- MongoDB Transactions
- Idempotency Protection

---

## ⚡ MongoDB Features Used

- MongoDB Atlas
- Mongoose
- Transactions (Sessions)
- Aggregation Pipeline
- Compound Indexes
- Unique Indexes
- References (ObjectId)
- Schema Validation
- Model Methods

---

## 📂 Project Structure

```
src/
│
├── config/
│
├── controllers/
│   ├── auth.controller.js
│   ├── account.controller.js
│   └── transaction.controller.js
│
├── middlewares/
│   └── auth.middleware.js
│
├── models/
│   ├── user.model.js
│   ├── account.model.js
│   ├── transaction.model.js
│   ├── ledger.model.js
│   └── tokenBlacklist.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── account.routes.js
│   └── transaction.routes.js
│
├── services/
│   └── email.service.js
│
└── app.js
```

---

## 🧱 Database Models

### User

- Name
- Email
- Password
- System User Flag

---

### Account

- User Reference
- Status
- Currency

---

### Transaction

- From Account
- To Account
- Amount
- Status
- Idempotency Key

---

### Ledger

- Account
- Transaction
- Amount
- Debit/Credit

---

### Token Blacklist

Stores invalidated JWTs after logout.

---

## 🔄 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

---

### Accounts

```
POST /api/accounts
GET /api/accounts/balance/:accountId
```

---

### Transactions

```
POST /api/transactions
POST /api/transactions/system/initial-funds
```

---

## 🧪 API Testing

All APIs were thoroughly tested using **Postman**.

Tested Scenarios:

- User Registration
- Login
- Logout
- Protected Routes
- Invalid Tokens
- Token Blacklisting
- Account Creation
- Balance Retrieval
- Initial Funds Transfer
- User-to-User Transfers
- Duplicate Transaction Prevention
- Invalid Account Validation
- Insufficient Balance
- System User Authorization

---

## 🗄 Database

- MongoDB Atlas
- MongoDB Compass
- Mongoose ODM

Database relationships were verified using MongoDB Compass throughout development.

---

## 📬 Email Service

Implemented with:

- Nodemailer
- Gmail OAuth2

Emails are sent automatically after:

- Successful Registration
- Successful Transactions

---

## 🌐 Deployment

Backend deployed as a **Render Web Service**.

Production deployment includes:

- Environment Variables
- MongoDB Atlas Connection
- Secure JWT Authentication
- Render Hosting

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose
- MongoDB Atlas

### Authentication

- JWT
- bcrypt
- Cookie Parser

### Email

- Nodemailer

### Testing

- Postman

### Deployment

- Render

---

## 📚 Concepts Practiced

- REST API Design
- MVC Architecture
- Authentication & Authorization
- Middleware
- MongoDB Transactions
- Double Entry Accounting
- Aggregation Pipelines
- Idempotency
- Error Handling
- JWT Security
- Password Encryption
- Database Indexing
- Schema Design
- Model Methods
- API Validation
- Protected Routes
- Environment Variables
- Production Deployment

---

## 📈 Future Improvements

- Refresh Tokens
- Role-Based Access Control (RBAC)
- Rate Limiting
- Redis Caching
- API Documentation with Swagger
- Docker Support
- CI/CD Pipeline
- Unit & Integration Testing
- Audit Logs
- Admin Dashboard

---

## 👨‍💻 Author

**Abdul Azeem**

If you found this project interesting, feel free to ⭐ the repository.