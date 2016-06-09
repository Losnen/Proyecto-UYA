"use strict";

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

app.get('/usuarios',function(req,res){ //Consulta de trayectos en la BBDD
    
    console.log(req.query.nombre);
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

app.get('/registro',function(req,res){ //Consulta de trayectos en la BBDD
    
    console.log(req.query.r_nombre);
    var post = {
        Nombre: req.query.r_nombre,
        Apellidos: req.query.r_apellidos,
        Correo: req.query.r_correo,
        Contra: req.query.r_contra
    };

    connection.query('INSERT INTO registro SET ?', post, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');    
        }
    });
});

app.get('/calculadora',function(req,res){ //Consulta de trayectos en la BBDD
    
    connection.query("SELECT * FROM calculadora WHERE Trayecto = '" + req.query.org + "-" + req.query.dest + "'",function(err, rows, fields) {
        
        if(err) throw err;
        
        console.log(rows);
        if(rows.length != 0) {
            res.json(rows);
        }else {
            res.json("No se encuentra en la BBDD");
        }
    });
});

app.get('/enviar',function(req,res) { //Para enviar un mensaje de contacto

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
        subject: req.query.asunto + " de " + req.query.correo,
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