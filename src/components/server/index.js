const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3000;
app.use(cors())

app.use(express.json())

//route to get all posts
app.get("/api/get", (req,res)=>
{

    db.query("SELECT * FROM flights", (err, result)=>{
        if(err) {
            console.log(err)
        }
        res.send(result)
    });  });
