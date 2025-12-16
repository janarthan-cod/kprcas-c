
const mongoose = require("mongoose")
const connectDb = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/task")
        console.log("mongoDb Connected 🧿 ")
    }catch(error){
        console.log(error)
    }
}
module.exports = connectDb