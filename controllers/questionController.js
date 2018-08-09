var Question = require('../models/question');

exports.index = function(req, res) {
  
};

exports.show = function(req, res) {
  
};

exports.create = function(req, res) {
  Question.create(req.body, function (err, result) {
    if (err) res.status(500).send({ data: null });
    res.status(200).send({ data: result });
  });
};

exports.update = function(req, res) {
  
};

exports.destroy = function(req, res) {
  
};
