"use strict"

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'losnen',
    password : '',
    database : 'uya',
});

app.get('/usuarios',function(req,res){
    
    var data = {"error": 1, "Usuarios": ""}; 
    
    connection.query("SELECT * from usuarios",function(err, rows, fields) {
        
        if(err) throw err;
        
        if(rows.length != 0) {
            data["error"] = 0;
            data["Usuarios"] = rows;
            console.log(data["Usuarios"]);
            res.json(rows);
        }else {
            data["Usuarios"] = 'No se encontraron usuarios';
        }
    });
});

app.set('port',(process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
  console.log(`Node app running on localhost 8080`);
});
