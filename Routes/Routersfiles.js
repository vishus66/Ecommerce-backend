const router = require("express").Router()

const maincategoryRouter  = require("./MainRoutes")
const subcategoryrouter = require('./SubRoutes')
const brand = require("./BrandRoutes")
const product = require("./ProductRoutes")
const users = require("./UsersRoutes")
const cart = require("./CartRoutes")


router.use("/maincategory",maincategoryRouter )
router.use("/subcategory",subcategoryrouter)
router.use("/brand",brand)
router.use("/product",product)
router.use("/users",users)
router.use("/users/login",users)
router.use("/cart",cart)


module.exports = router