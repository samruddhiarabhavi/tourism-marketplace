const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'samu5229',
    database: 'tourism_db'
});
db.connect((err) =>{
    if(err){
        console.log("error connecting database", err);
        return;
    }
    console.log("database connected successfully");
})
module.exports = db;