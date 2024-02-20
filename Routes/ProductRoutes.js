const ProductRouter = require("express").Router()
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/upload/product')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })
const {creatingproduct,getAlldataproduct,singlegetAlldataproduct,updateproduct,deleteproduct,searching} = require("../Controller/ProductController")
// const productRouter = new  express.Router()


ProductRouter.post("/",upload.fields([
    {name:"pic1",maxCount:1},
    {name:"pic2",maxCount:1},
    {name:"pic3",maxCount:1},
    {name:"pic4",maxCount:1},
]),creatingproduct)
ProductRouter.get("/",getAlldataproduct)
ProductRouter.get("/:_id",singlegetAlldataproduct)
ProductRouter.put("/:_id",upload.fields([
    {name:"pic1",maxCount:1},
    {name:"pic2",maxCount:1},
    {name:"pic3",maxCount:1},
    {name:"pic4",maxCount:1},
]),updateproduct)
ProductRouter.delete("/:_id",deleteproduct)

ProductRouter.post("/search",searching)


module.exports = ProductRouter 