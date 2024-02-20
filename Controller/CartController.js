const Cart = require("../Model/CartModel")

async function creatingCart(req,res){
    try {
        var data = new Cart(req.body)
        await data.save()
        res.send({result:"Done" , message:"Record is done"})
        
    } catch (error) {        
        if (error.errors.userid)
        res.send({result:"Fail",status:403,message:error.errors.userid.message})
        else if(error.errors.productid)
        res.send({result:"Fail",status:403,message:error.errors.productid.message})
        else if (error.errors.name)
        res.send({result:"Fail",status:403,message:error.errors.name.message})
        else if (error.errors.color)
        res.send({result:"Fail",status:403,message:error.errors.color.message})
        else if (error.errors.size)
        res.send({result:"Fail",status:403,message:error.errors.size.message})
        else if (error.errors.qty)
        res.send({result:"Fail",status:403,message:error.errors.qty.message})
        else if (error.errors.price)
        res.send({result:"Fail",status:403,message:error.errors.price.message})
        else if (error.errors.total)
        res.send({result:"Fail",status:403,message:error.errors.total.message})
        else
        res.send({result:"Fail",message:"Internal sever error...."})        
    }

}
async function getAlldataCart(req,res){
    try {
        let data = await Cart.find().sort({_id:-1})
        res.send({result:"Done",count:data.length,data:data})
    } 
    catch (error) {
        res.send.status(500)({result:"Fail",message:"Internal server error!!!"})       
    }

        // console.log(error);
        
}
async function singlegetAlldataCart(req,res){
    try {
        let data = await Cart.findOne({_id:req.params._id})
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

async function updateCart(req,res){
    try {
        let data  = await Cart.findOne({_id:req.params._id})
        if (data)
        data.name = req.body.name??data.name
        res.send({result:"Done",message:"Record is update"})
        await data.save()
    } catch (error) {
    }
}

async function deleteCart(req,res){
    try {
        await Cart.deleteOne({_id:req.params._id})
        res.send({result:'Done',message:'Delete Successfully'});      
    } catch (error) {
        res.status(500).send({result:"Failed",message:"Internal server is error delete part"})
        
    }
}
module.exports = {  
    creatingCart:creatingCart,
    getAlldataCart:getAlldataCart,
    singlegetAlldataCart:singlegetAlldataCart,
    updateCart:updateCart,
    deleteCart:deleteCart
}
