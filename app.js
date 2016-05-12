"use strict"

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'root',
    password : 'uya1516',
    database : 'coches',
});



app.set('port',(process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
  console.log(`Node app running on localhost 8080`);
});
