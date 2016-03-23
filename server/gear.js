var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gearSchema = new Schema({
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
  Price: {
    type: Number,
    required: true,
    min: 0
  },

})
module.exports= mongoose.model("Gear", gearSchema);
