const SubRouter = require("express").Router()

const {creatingsubcategory,getAlldatasubcategory,singlegetAlldatasubcategory,updatesubcategory,deletesubcategory} = require("../Controller/SubcategoryController")

SubRouter.post("/",creatingsubcategory)
SubRouter.get("/",getAlldatasubcategory)
SubRouter.get("/:_id",singlegetAlldatasubcategory)
SubRouter.put("/:_id",updatesubcategory)
SubRouter.delete("/:_id",deletesubcategory)
module.exports = SubRouter 