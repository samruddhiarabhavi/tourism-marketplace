const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./config/db")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
res.send("tourism api is running");
});
app.listen(5000,()=>{
    console.log("server is running on port 5000");
});