const Users = require("../Model/UserModel")
const fs = require("fs")
const bcrypt = require("bcrypt")
var passwordValidator = require('password-validator');
const { error } = require("console");

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

async function creatingUsers(req,res){
    if(req.body.password && schema.validate(req.body.password)){
        const data = new Users(req.body)
        bcrypt.hash(req.body.password,12,async(error,hash)=>{
            if(error){
                res.send({status:500,result:"Fail",message:"Innternal server error"})
            }else{
                data.password = hash
                try {   
                    await data.save()
                    res.send({result:"Done" , message:"Recored is created"})
                    
                } catch (error) {
                    if (error.keyValue && error.keyValue.username){
                        res.send({result:"Fail",message:"Duplicate can not allow"})
                    }
                    else if(error.errors.name){
                        res.send({result:"Fail",message:error.errors.name.message})
                    }
                    else if(error.errors.username){
                        res.send({result:"Fail",message:error.errors.username.message})
                    }        
                    else if(error.errors.email){
                        res.send({result:"Fail",message:error.errors.email.message})
                    }        
                    else if(error.errors.password){
                        res.send({result:"Fail",message:error.errors.password.message})
                    }        
                    else if(error.errors.phone){
                        res.send({result:"Fail",message:error.errors.phone.message})
                    }        
                    else if(error.errors.address){
                        res.send({result:"Fail",message:error.errors.address.message})
                    }        
                    else{
                        res.send({result:"Fail",message:"internal server error"})
                    }
                }
            }

        })        
        
    }
    else{
        res.send({status:400,result:"Fail",message: "Password Must Contains Following Items 1. Minimum length 8 2. Maximum length 20 3. Must have 1 uppercase letters 4. Must have 1 lowercase letters 5. Must have at least 1 digits 6. Should not have spaces"})
    }
}
async function getAlldataUsers(req,res){
    try {
        let data = await Users.find().sort({_id:-1})
        res.send({result:"Done getalldata",count:data.length,data:data})
    } 
    catch (error) {
        res.send.status(500)({result:"Fail",message:"Internal server error!!!"})       
    }

        // console.log(error);
        
}
async function singlegetAlldataUsers(req,res){
    try {
        let data = await Users.findOne({_id:req.params._id})
        // console.log(data)
        if(data)
        res.send({result:"Done",data:data})
        else 
        res.send({result:"Fail",message:"Invalidate message!!!! "})
    } 
    catch (error) {
        // console.log(error);
        res.send({resuult:"Failed",message:"Internal sever  error..."})
        
    }
}

async function updateUsers(req,res){
    try {
        let data  = await Users.findOne({_id:req.params._id})
        if (data)
        data.name = req.body.name??data.name
        data.username = req.body.username??data.username
        data.email = req.body.email??data.email
        data.brand = req.body.brand??data.brand
        data.address = req.body.address??data.address
        data.phone = req.body.phone??data.phone
        await data.save()
        res.send({result:"Done",message:"Record is update"})
    } catch (error) {
    }
}

async function deleteUsers(req,res){
    try {
        let data = await Users.deleteOne({_id:req.params._id})
        // This is for deleteing concept  image from the folder also
        if (data){
            try {
                fs.unlinkSync(data.pic1)
            } catch (error) {}
            data.pic1 = req.files.pic1[0].path
            await data.save()
            res.send({Status:200,result:"Done",message:"Record is Deleting"})
        }
        else
        res.send({result:'Done',status:404,message:'Record is not Found...'});      
    } catch (error) {
        res.send({status:500,result:"Failed",message:"Internal server error!!!!"})
        
    }
}

async function login(req,res){
    try {
        let data = await Users.findOne({username:req.body.username})
        if (data){
            if(await bcrypt.compare(req.body.password,data.password)){
                res.send({result:"Done",data:data})
            }
            else{
                res.send({result:"Fail",message:"Username and password are invalid!!"})
            }

        } else{
            res.send({result:"Fail",nessage:"Username and password is invalid!!"})
        }
        
    } catch (error) {
        res.status(404).send({result:"Fail",message:"Internal server error"})
        
    }
}
module.exports = {  
    creatingUsers:creatingUsers,
    getAlldataUsers:getAlldataUsers,
    singlegetAlldataUsers:singlegetAlldataUsers,
    updateUsers:updateUsers,
    deleteUsers:deleteUsers,
    login:login,
   
}
