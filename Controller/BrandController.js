const Brand = require("../Model/BrandModel")

async function creatingbrand(req,res){
    try {
        var data = new Brand(req.body)
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
async function getAlldatabrand(req,res){
    try {
        let data = await Brand.find().sort({_id:-1})
        res.send({result:"Done",count:data.length,data:data})
    } 
    catch (error) {
        res.send.status(500)({result:"Fail",message:"Internal server error!!!"})       
    }

        // console.log(error);
        
}
async function singlegetAlldatabrand(req,res){
    try {
        let data = await Brand.findOne({_id:req.params._id})
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

async function updatebrand(req,res){
    try {
        let data  = await Brand.findOne({_id:req.params._id})
        if (data)
        data.name = req.body.name??data.name
        res.send({result:"Done",message:"Record is update"})
        await data.save()
    } catch (error) {
    }
}

async function deletebrand(req,res){
    try {
        await Brand.deleteOne({_id:req.params._id})
        res.send({result:'Done',message:'Delete Successfully'});      
    } catch (error) {
        res.status(500).send({result:"Failed",message:"Internal server is error delete part"})
        
    }
}
module.exports = {  
    creatingbrand:creatingbrand,
    getAlldatabrand:getAlldatabrand,
    singlegetAlldatabrand:singlegetAlldatabrand,
    updatebrand:updatebrand,
    deletebrand:deletebrand
}
