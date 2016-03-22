var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  Name: {
    type: String,
    Unique: true,
    Required: true,
    index: true
  },
  Street: {
    type: String,
    Required: true,
  },
  City: {
    type: String,
    required: true
  },
  State:  {
    type: String,
    required: true
  },
  Zip: {
    type: Number,
    required: true
  }
});

module.exports= mongoose.model("users", userSchema);
