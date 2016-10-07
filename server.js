var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/assets/bios/bios');  
var likesRouter = require('./routes/likes');
var biosRouter = require('./routes/bios');

var app = express();

// middleware running
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// routers running
app.use('/likes', likesRouter);
app.use('/bios', biosRouter);

app.get('/', function (req, res) {
  var fileName = path.join(__dirname, 'public/views/index.html');
  res.sendFile(fileName);
});


app.listen(3000);
