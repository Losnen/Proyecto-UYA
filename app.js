"use strict"

const express = require('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
  console.log(`Node app running on localhost 8080`);
});
