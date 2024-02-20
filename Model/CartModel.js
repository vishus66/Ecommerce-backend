const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    userid:{
        type:String,
        required:[true,"userid is required"],
    },
    productid:{
        type:String,
        required:[true,"productid is required"],
    },
    name:{
        type:String,
        required:[true,"name is required"],
    },
    color:{
        type:String,
        required:[true,"color is required"],
    },
    size:{
        type:Number,
        required:[true,"size is required"],
    },
    price:{
        type:Number,
        required:[true,"price is required"],
    },
    qty:{
        type:Number,
        default:1
    },
    total:{
        type:Number,
        required:[true,"total is required"],
    },
   

})

const Cart = new mongoose.model("Cart",CartSchema)
module.exports =  Cart