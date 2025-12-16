const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    task:{type:String,required:true},
    completed:{type:Boolean,default:false}
})

module.exports = new mongoose.model("todo",todoschema);