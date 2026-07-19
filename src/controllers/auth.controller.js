const userModel=require("../models/user.model");
const jwt=require("jsonwebtoken");


/**
* user register controller 
* POST /api/auth/register
*/
async function userRegisterController(req,res){
//controller will get some data we use to create a user
let {email,password,name}=req.body;

    const isExist=await userModel.findOne({
        email:email
    });

    if(isExist){
        return res.status(422).json({
            message:"user already exists with email",
            status:"failed"
        })
    } 

    //creating user
    const user=await userModel.create({
        email,
        password,
        name
    })


    //need private key for jwt
    const token=jwt.sign({userId:user._id}
        ,process.env.JWT_SECRET,
        {expiresIn:"3d"}
    );//->send payload here

    //saving token
    res.cookie("token",token);

    //whenever we make new endpoint or new resource in api because of users request hence we send 201 status
    res.status(201).json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        },
        token
    })
}
//register api complete

module.exports={
    userRegisterController
}