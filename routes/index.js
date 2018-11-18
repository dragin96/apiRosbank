var express = require('express');
var router = express.Router();
const data = require('../data.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res) {
    res.send({'h1':"hello world"});
});
// отправить датa ленты
router.get('/getFeed', function(req, res) {
    res.send(data);
});
// отправить датa компании
router.get('/getCompany:id', function(req, res) {
    res.send({});
});
// cторис
router.get('/getStory:id', function(req, res) {
    res.send({});
});

module.exports = router;
