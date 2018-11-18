var express = require('express');
var router = express.Router();
const data = require('./data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res) {
    res.send({'h1':"hello world"});
});
// отправить дату


// поиск
router.get('/search', function(req, res) {
    res.send({});
});

module.exports = router;
