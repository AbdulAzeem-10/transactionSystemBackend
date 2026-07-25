const express =require("express");
const cookieParser=require("cookie-parser");



const app=express();

//using middleware
app.use(express.json());
app.use(cookieParser());

//routes required
const authRouter=require("../src/routes/auth.routes");
const accountRouter = require("./routes/account.routes");
const transactionRouter=require("./routes/transaction.routes");





//use routes
app.use("/api/auth", authRouter);
app.use("/api/accounts", accountRouter);
app.use("/api/transactions", transactionRouter);

module.exports=app;