var express = require('express');
var router = express.Router();

var questionController = require('../controllers/questionController');

router.get('/', memcachedMiddleware(60), questionController.index);

router.get('/:id', memcachedMiddleware(60), questionController.show);

router.post('/', questionController.create);

router.put('/:id', questionController.update);

router.delete('/:id', questionController.destroy);

module.exports = router;
