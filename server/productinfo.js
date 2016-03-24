var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var productSchema = new Schema({
  Name: {type: String, Unique: true, Required: true, index: true},
  Description: { type: String, required: true},
  Price: {type: Number, required: true, min: 0},
  Rent: {type: Number, required: false}
});

module.exports= mongoose.model("Productinfo", productSchema);
