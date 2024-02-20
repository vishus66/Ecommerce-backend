const express = require("express")
// const MaincategoryController = require("./Controller/MaincategoryController")
const router = require("./Routes/Routersfiles") 


const app = express()

// require("./Routes/Routersfiles")
app.use(express.json())

app.use("/api",router)
app.set(express.static("/public"))
app.use("./public",express.static("public"))

require('./dbConnect')
app.listen(8000,()=>console.log("Server is runing at http://localhost:8000"))