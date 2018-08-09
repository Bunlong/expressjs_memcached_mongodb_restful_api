var express = require('express');
var router = express.Router();

var questionController = require('../controllers/questionController');

router.get('/:id', memcachedMiddleware(60), questionController.show);

router.post('/', questionController.create);

module.exports = router;
