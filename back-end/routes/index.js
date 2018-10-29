var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //渲染ejs模板引擎
  res.render('index', { title: 'Express!!!!' });
});

module.exports = router;
