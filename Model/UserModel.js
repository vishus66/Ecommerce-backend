const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        
        
    },
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true,
        
    },
    email:{
        type:String,
        required:[true,"email is required"],
        
    },
    password:{
        type:String,
        required:[true,"password is required"],
        
    },
    phone:{
        type:String,
      
    },
    address:{
        type:String,
        
    },
})

const Users = new mongoose.model("Users",UsersSchema)
module.exports =  Users