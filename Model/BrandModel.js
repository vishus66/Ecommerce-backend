const mongoose = require("mongoose")

const BrandSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Brand is required"],
        unique:true,
    }
})

const Brand = new mongoose.model("Brand",BrandSchema)
module.exports =  Brand