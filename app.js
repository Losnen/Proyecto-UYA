"use strict"

const express = require('express');
const mysql = require('mysql');
const app = express();
const nodemailer = require('nodemailer');


const connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'losnen',
    password : '',
    database : 'uya',
});

app.get('/usuarios',function(req,res){ //Middleware de la BBDD
    
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

app.get('/enviar',function(req,res){

   // var transporter = nodemailer.createTransport('smtps://shareyourcar1516gmail.com:UYA-1516');
    var transporter = nodemailer.createTransport({ 
        service: "Gmail",
        auth: { 
            user: 'shareyourcar1516@gmail.com', 
            pass: 'UYA-1516' 
            
        }
    });
    var mailOptions = {
        from: req.query.correo,
        to: 'ShareYourCar, <shareyourcar1516@gmail.com>',
        subject: req.query.asunto,
        text: req.query.texto
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    }); 
});

app.set('port',(process.env.PORT || 8080));
app.use(express.static(__dirname + '/public')); //Middleware Estático

app.listen(app.get('port'), () => {
  console.log(`Node app running on localhost 8080`);
});
