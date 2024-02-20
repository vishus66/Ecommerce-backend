const CartRouter = require("express").Router()
const {creatingCart,getAlldataCart,singlegetAlldataCart,updateCart,deleteCart} = require("../Controller/CartController")
// const CartRouter = new  express.Router()

CartRouter.post("/",creatingCart)
CartRouter.get("/",getAlldataCart)
CartRouter.get("/:_id",singlegetAlldataCart)
CartRouter.put("/:_id",updateCart)
CartRouter.delete("/:_id",deleteCart)
module.exports = CartRouter 