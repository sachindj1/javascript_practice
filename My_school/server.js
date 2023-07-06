const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

//connecting to the database ;

const sql = mysql.createConnection({

    host:"localhost",
    user : "root",
    password : "hellosachin",
    database : "my_school"
});


sql.connect((err)=>{
if(err) throw err;
console.log("connected to database !!!")

})

app.listen(7777 , ()=>{
    console.log("server is up and running")
})




app.get('/students' , (req , res)=>{

sql.query("SELECT * FROM students " , (err , result)=>{
if(err){
    res.status(503).json({err : "there is error"});
} else{
     
    res.status(200).json({result });
    console.log(result);

}

})

})