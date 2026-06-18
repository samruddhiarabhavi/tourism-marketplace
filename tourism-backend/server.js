const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./config/db")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
res.send("tourism api is running");
});
app.get("/destinations", (req, res) => {

    const sql = "SELECT * FROM destinations";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
});
});
app.post("/destinations",(req,res)=>{
    const {name, location, price} = req.body;
    const sql ="INSERT INTO destinations (name, location, price) VALUES (?, ?, ?)";
    db.query(sql,[name,location,price],(err, result)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.json({message:"Destination added successfully"})
    })
})
app.delete("/destinations/:id", (req, res) => {

  const id = req.params.id;

  const sql =
    "DELETE FROM destinations WHERE id = ?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Destination Deleted"
    });

  });

});
app.listen(5000,()=>{
    console.log("server is running on port 5000");
});