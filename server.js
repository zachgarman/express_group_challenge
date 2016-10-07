var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/assets/bios/bios');
var likesRouter = require('./routes/likes');

var app = express();

//middleware running
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/likes', likesRouter);

app.get('/', function (req, res) {
  var fileName = path.join(__dirname, 'public/views/index.html');
  res.sendFile(fileName);
});

app.get('/bios', function (req, res) {
  res.send(bios);
});

app.listen(3000);
