"use strict"

const express = require('express');
const app = express();
const path = require('path');
var User = require("./models/user_schema").User;
const lay = require('express-ejs-layouts');

app.set('port',(process.env.PORT || 8080));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(lay);

app.use(express.static(__dirname + '/public'));

app.get('/',(request, response) => {
  response.render("index");
});

app.get('/trayecto',(request, response) => {
  response.render("trayectos");
});

app.get('/contacto',(request, response) => {
  response.render("contacto");
});

app.listen(app.get('port'), () => {
  console.log(`Node app running on localhost 8080`);
});
