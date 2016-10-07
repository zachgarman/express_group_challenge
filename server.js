var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/assets/bios/bios');  // this file must be accessed by biosRouter
var likesRouter = require('./routes/likes');
//var biosRouter = require('./routes/bios');  //router won't work while needing bios.json fil

var app = express();

//middleware running
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/likes', likesRouter);
//app.use('/bios', biosRouter);  // can't use biosRouter without access to bios.json

app.get('/', function (req, res) {
  var fileName = path.join(__dirname, 'public/views/index.html');
  res.sendFile(fileName);
});

app.get('/bios', function (req, res) {  // can't move this to biosRouter, how can we?
  res.send(bios);
});

app.listen(3000);
