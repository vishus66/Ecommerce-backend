const Product = require("../Model/ProductModel")
const fs = require("fs")

async function creatingproduct(req,res){
    try {
        var data = new Product(req.body)
        if (req.files.pic1) {
            data.pic1 = req.files.pic1[0].path
        }
        if (req.files.pic2) {
            data.pic2 = req.files.pic2[0].path
        }
        if (req.files.pic3) {
            data.pic3 = req.files.pic3[0].path
        }
        if (req.files.pic4) {
            data.pic4 = req.files.pic4[0].path
        }
        await data.save()
        res.send({result:"Done" , message:"Rcored is created"})
        
    } catch (error) { 

        // console.log(error.errors.name) here we are console to check if the data is coming form the errir
        console.log(error.errors.name)
        if(error.errors.name){
            res.send({result:"Fail",message:error.errors.name.message})
        }
        else if (error.errors.maincategory){
            res.send({result:'fail',message:error.erros.maincategory.message})
        }
        else if (error.errors.subcategory){
            res.send({result:'fail',message:error.erros.subcategory.message})
        }
        else if (error.errors.brand){
            res.send({result:'fail',message:error.erros.brand.message})
        }
        else if (error.errors.color){
            res.send({result:'fail',message:error.erros.color.message})
        }
        else if (error.errors.baseprice){
            res.send({result:'fail',message:error.erros.baseprice.message})
        }
        else if (error.errors.discount){
            res.send({result:'fail',message:error.erros.discount.message})
        }
        else if (error.errors.discount){
            res.send({result:'fail',message:error.erros.discount.message})
        }
        else if (error.errors.discount){
            res.send({result:'fail',message:error.erros.discount.message})
        }
        else{
            res.send({result:"Fail",message:"internal server error"})
        }
    }
}
async function getAlldataproduct(req,res){
    try {
        let data = await Product.find().sort({_id:-1})
        res.send({result:"Done getalldata",count:data.length,data:data})
    } 
    catch (error) {
        res.send.status(500)({result:"Fail",message:"Internal server error!!!"})       
    }

        // console.log(error);
        
}
async function singlegetAlldataproduct(req,res){
    try {
        let data = await Product.findOne({_id:req.params._id})
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

async function updateproduct(req,res){
    try {
        let data  = await Product.findOne({_id:req.params._id})
        if (data)
        data.name = req.body.name??data.name
        data.maincategory = req.body.maincategory??data.maincategory
        data.subcateogry = req.body.subcateogry??data.subcateogry
        data.brand = req.body.brand??data.brand
        data.color = req.body.color??data.color
        data.size = req.body.size??data.size
        data.baseprice = req.body.name??data.name
        data.discount = req.body.discount??data.discount
        data.finalprice = req.body.finalprice??data.finalprice
        data.stock = req.body.stock??data.stock
        // Here we are using the image updating part that is if we are doing the console log for req.files it give be an array of object which
        // if we are want to check what is data is going  in we just console log 
        if(req.files.pic1){
            try {
                fs.unlinkSync(data.pic1)
            } catch (error) {}
            data.pic1 = req.files.pic1[0].path
        }
        if(req.files.pic2){
            try {
                fs.unlinkSync(data.pic2)
            } catch (error) {}
            data.pic2 = req.files.pic2[0].path
        }
        if(req.files.pic3){
            try {
                fs.unlinkSync(data.pic3)
            } catch (error) {}
            data.pic3 = req.files.pic3[0].path
        }
        if(req.files.pic4){
            try {
                fs.unlinkSync(data.pic4)
            } catch (error) {}
            data.pic4 = req.files.pic4[0].path
        }
    
        await data.save()
        res.send({result:"Done",message:"Record is update"})
    } catch (error) {
    }
}

async function deleteproduct(req,res){
    try {
        let data = await Product.deleteOne({_id:req.params._id})
        // This is for deleteing concept  image from the folder also
        if (data){
            try {
                fs.unlinkSync(data.pic1)
            } catch (error) {}
            data.pic1 = req.files.pic1[0].path
            try {
                fs.unlinkSync(data.pic2)
            } catch (error) {}
            data.pic2 = req.files.pic2[0].path
            try {
                fs.unlinkSync(data.pic3)
            } catch (error) {}
            data.pic3 = req.files.pic3[0].path
            try {
                fs.unlinkSync(data.pic4)
            } catch (error) {}
            data.pic4 = req.files.pic4[0].path
            await data.save()
            res.send({Status:200,result:"Done",message:"Record is Deleting"})
        }
        else
        res.send({result:'Done',status:404,message:'Record is not Found...'});      
    } catch (error) {
        res.send({status:500,result:"Failed",message:"Internal server error!!!!"})
        
    }
}
async function searching(req,res){
    let search = req.body.search
    try {
        let data = await Product.find({
            $or:[
                {name:{$regex:`${search}`,$options:'i'}},
                {maincategory:search},
                {subcategory:search},
                {color:search},
            ]
        })
        res.send({status:200,result:"Done",count:data.length,data:data})
        
    } catch (error) {
        // console.log(error)
        res.send({status:500, result:"Fail",message:"Internal server error!!!!"})
        
    }
}
module.exports = {  
    creatingproduct:creatingproduct,
    getAlldataproduct:getAlldataproduct,
    singlegetAlldataproduct:singlegetAlldataproduct,
    updateproduct:updateproduct,
    deleteproduct:deleteproduct,
    searching:searching
}
