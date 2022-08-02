const mongoose=require("mongoose")
const {faker}= require("@faker-js/faker");

const subListSchema= new mongoose.Schema({
name:{
type:String,
default:faker.name.findName()

},

    email:{
        type:String,
        require:true,
        unique:true
    }
})


module.exports=mongoose.model("SubList",subListSchema);