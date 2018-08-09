var Question = require('../models/question');

exports.index = function(req, res) {
  Question.find(function (err, result) {
    if (err) res.status(500).send({ data: null });
    res.status(200).send({ data: result });
  });
};

exports.show = function(req, res) {
  Question.findById(req.params.id, function (err, result) {
    if (err) res.status(500).send({ data: null });
    res.status(200).send({ data: result });
  });
};

exports.create = function(req, res) {
  Question.create(req.body, function (err, result) {
    if (err) res.status(500).send({ data: null });
    res.status(200).send({ data: result });
  });
};

exports.update = function(req, res) {
  Question.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true }, function (err, result) {
    if (err) res.status(500).send({ data: null });
    res.status(200).send({ data: result });
  });
};

exports.destroy = function(req, res) {
  
};
