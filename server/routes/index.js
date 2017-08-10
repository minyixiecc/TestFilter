var express = require('express');
var router  = express.Router();

var filter = require('./filter.js');

/*
 * Routes that is used for filter
 */
router.post('/', filter.request);

module.exports = router;