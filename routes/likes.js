var express = require('express');

//bring in the router from the express library
var router = express.Router();


var likes = {
  Andy: 0,
  Paul: 0,
  Zach: 0
}

//post to /likes/name
router.post('/Andy', function (req, res) {
  likes.Andy++;
  res.send(likes);
});
router.post('/Paul', function (req, res) {
  likes.Paul++;
  res.send(likes);
});
router.post('/Zach', function (req, res) {
  likes.Zach++;
  res.send(likes);
});
//get to /likes
router.get('/', function (req, res) {
  res.send(likes);
});

module.exports = router;
