const BrandRouter = require("express").Router()
const {creatingbrand,getAlldatabrand,singlegetAlldatabrand,updatebrand,deletebrand} = require("../Controller/BrandController")
// const brandRouter = new  express.Router()

BrandRouter.post("/",creatingbrand)
BrandRouter.get("/",getAlldatabrand)
BrandRouter.get("/:_id",singlegetAlldatabrand)
BrandRouter.put("/:_id",updatebrand)
BrandRouter.delete("/:_id",deletebrand)
module.exports = BrandRouter 