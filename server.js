var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/assets/bios/bios');

var app = express();

//middleware running
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {
  var fileName = path.join(__dirname, 'public/views/index.html');
  res.sendFile(fileName);
});

app.get('/bios', function (req, res) {
  res.send(bios);
});

var likes = {
  Andy: 0,
  Paul: 0,
  Zach: 0
}

//post to /likes/name
app.post('/likes/Andy', function (req, res) {
  likes.Andy++;
  res.send(likes);
});
app.post('/likes/Paul', function (req, res) {
  likes.Paul++;
  res.send(likes);
});
app.post('/likes/Zach', function (req, res) {
  likes.Zach++;
  res.send(likes);
});
//get to /likes
app.get('/likes', function (req, res) {
  res.send(likes);
});


app.listen(3000);
