const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name is required"],
    },
    maincategory:{
        type:String,
        required:[true,"Product maincategory is required"],
    },
    subcategory:{
        type:String,
        required:[true,"Product subcategory is required"],
    },
    brand:{
        type:String,
        required:[true,"Product  brand is required"],
    },
    color:{
        type:String,
        required:[true,"Product color is required"],
    },
    size:{
        type:Number,
        // required:[true,"Product size is required"],
    },
    baseprice:{
        type:Number,
        required:[true,"Product baseprice is required"],
    },
    discount:{
        type:Number,
        required:[true,"Product discount is required"],
    },
    finalprice:{
        type:Number,
        required:[true,"Product finalsprice is required"],
    },
    stock:{
        type:String,
        default: "In Stock",
    },
    pic1:{
        type:String,
        required:[true,"Product pitcure required"],
    },
    pic2:{
        type:String,
        required:[true,"Product pitcure required"],
    },
    pic3:{
        type:String,
        required:[true,"Product pitcure required"],
    },
})

const Product = new mongoose.model("Product",ProductSchema)
module.exports =  Product