var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  Name: {
    type: String,
    Unique: true,
    Required: true,
    index: true
  },

  Description: {
    type: String,
    required: true
  },
  Purchase: {
    type: Number,
    required: true,
    min: 0
  },
  Rent: {
    type: Number,
    
  }

});

module.exports= mongoose.model("Productinfo", productSchema);
