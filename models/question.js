var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    ObjectId = Schema.ObjectId;

var questionSchema = new Schema({
  name: String,
  year: String,
  rating: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('question', questionSchema);
