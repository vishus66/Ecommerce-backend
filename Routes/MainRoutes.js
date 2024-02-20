const MaincategoryRouter = require("express").Router()
const {creatingmaincategory,getAlldatamaincategory,singlegetAlldatamaincategory,updatemaincategory,deletemaincaegory} = require("../Controller/MaincategoryController")
// const MaincategoryRouter = new  express.Router()

MaincategoryRouter.post("/",creatingmaincategory)
MaincategoryRouter.get("/",getAlldatamaincategory)
MaincategoryRouter.get("/:_id",singlegetAlldatamaincategory)
MaincategoryRouter.put("/:_id",updatemaincategory)
MaincategoryRouter.delete("/:_id",deletemaincaegory)
module.exports = MaincategoryRouter 