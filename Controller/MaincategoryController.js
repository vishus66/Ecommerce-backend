const Maincategory = require("../Model/MaincategoryModel")

async function creatingmaincategory(req,res){
    try {
        var data = new Maincategory(req.body)
        await data.save()
        res.send({result:"Done" , message:"Record is done"})
        
    } catch (error) {
        // console.log(error)
        if(error.keyValue)
        res.send({result:"Fail",status:401,message:"Duplicate can not allow"})
        else if (error.errors.name)
        res.send({result:"Fail",status:403,message:error.errors.name.message})
        else
        res.send({result:"Fail",message:"Internal sever error...."})        
    }

}
async function getAlldatamaincategory(req,res){
    try {
        let data = await Maincategory.find().sort({_id:-1})
        res.send({result:"Done",count:data.length,data:data})
    } 
    catch (error) {
        res.send.status(500)({result:"Fail",message:"Internal server error!!!"})       
    }

        // console.log(error);
        
}
async function singlegetAlldatamaincategory(req,res){
    try {
        let data = await Maincategory.findOne({_id:req.params._id})
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

async function updatemaincategory(req,res){
    try {
        let data  = await Maincategory.findOne({_id:req.params._id})
        if (data)
        data.name = req.body.name??data.name
        res.send({result:"Done",message:"Record is update"})
        await data.save()
    } catch (error) {
    }
}

async function deletemaincaegory(req,res){
    try {
        await Maincategory.deleteOne({_id:req.params._id})
        res.send({result:'Done',message:'Delete Successfully'});      
    } catch (error) {
        res.status(500).send({result:"Failed",message:"Internal server is error delete part"})
        
    }
}
module.exports = {  
    creatingmaincategory:creatingmaincategory,
    getAlldatamaincategory:getAlldatamaincategory,
    singlegetAlldatamaincategory:singlegetAlldatamaincategory,
    updatemaincategory:updatemaincategory,
    deletemaincaegory:deletemaincaegory
}
