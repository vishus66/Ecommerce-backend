const mongoose = require("mongoose")

function getconnection(){
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Ekart-db")
        console.log("Server is connected.....")
    } catch (error) {
        console.log(error)
    }
}

getconnection()