const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Sign_form")
.then(()=>{
    console.log("connected");
})
.catch((err) => {
    console.log("failed", err);
});

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = mongoose.model("form_data", newSchema)

module.exports = collection