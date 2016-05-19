"use strict"

const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'losnen',
    password : '',
    database : 'uya',
});

app.get('/usuarios',function(req,res){
    
    console.log(req.query.nombre)
    connection.query("SELECT * FROM usuarios WHERE Rutinas = '" + req.query.nombre +"'",function(err, rows, fields) {
        
        if(err) throw err;
        
        console.log(rows);
        if(rows.length != 0) {
            res.json(rows);
        }else {
            res.json("No se encuentra en la BBDD");
        }
    });
});

app.set('port',(process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
  console.log(`Node app running on localhost 8080`);
});
