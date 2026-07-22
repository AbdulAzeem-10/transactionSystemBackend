const express =require("express");
const cookieParser=require("cookie-parser");

//routes
const authRouter=require("../src/routes/auth.routes");
const accountRouter = require("./routes/account.routes");


const app=express();
//using middleware
app.use(express.json());
app.use(cookieParser());


//use routes
app.use("/api/auth",authRouter);
app.use("/api/accounts", accountRouter);

module.exports=app;