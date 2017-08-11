var express = require('express');
var router  = express.Router();

var filter = require('./filter.js');

/*
 * Routes that is used for filter
 */
router.post('/', filter.request);

router.get('/', function(req, res){
  res.status(200).end();
});

module.exports = router;