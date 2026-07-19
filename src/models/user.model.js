const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");



//user schema creation
const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required for creating a user"],
        trim:true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],//this is an email regex i.e regular expression for valid email address
        unique:[true,"email already exists"]
    },
    name:{
        type:String,
        required:[true,"name is required for creating an account"],
    },
    password:{
        type:String,
        required:[true,"password is required for creating a user"],
        minlength:[6,"password should contain more than 6 characters"],
        select:false//->whenever in future we require or get user data for a query password wont be part of that query with this line
    },
},{
    timestamps:true//->shows when user was created and time of everythin etc and when lastly updated
});

userSchema.pre("save",async (next)=>{
    //check if user changes password hence we hash it here
    if(!this.isModified("password")){
        return next();
    }

    const hash=await bcrypt.hash(this.password,10);
    this.password= hash;

    return next();
});


userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password);
}

const userModel=mongoose.model("user",userSchema);

module.exports=userModel