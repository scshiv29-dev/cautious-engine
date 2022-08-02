const express=require("express")
const mongoose=require("mongoose")
const subroutes=require("../routes/subroutes")
const authroutes=require("../routes/authroutes")
const userroutes=require("../routes/userroutes")

const app=express()
const cors=require("cors")
const bodyParser = require("body-parser");
const PORT=8000




try{
    mongoose.connect("mongodb://cl5r9518y000c0noc93qxhkvw:hFCO8kXk52PrYyc15ZhPfVOA@dashboard.lawcoolify.ml:9001/?readPreference=primary&ssl=false")
}catch(e){
    console.log(e);
}

app.use(cors())
app.use(bodyParser.json())
app.use("/api",subroutes);
app.use("/api",authroutes)

app.get("/",(req,res)=>{
  return res.json({"msg":"hello world"})
})
//handle root route
app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
  });