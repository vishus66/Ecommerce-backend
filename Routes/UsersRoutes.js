const UserRouter = require("express").Router()

const {creatingUsers,getAlldataUsers,singlegetAlldataUsers,updateUsers,deleteUsers,login} = require("../Controller/UsersController")

UserRouter.post("/",creatingUsers)
UserRouter.get("/",getAlldataUsers)
UserRouter.get("/:_id",singlegetAlldataUsers)
UserRouter.put("/:_id",updateUsers)
UserRouter.delete("/:_id",deleteUsers)
UserRouter.post("/login",login)
module.exports = UserRouter 