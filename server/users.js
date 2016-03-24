var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var userSchema = new Schema({
  Name: {type: String, Required: true, index: true },
  Email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  Cart: {type: String, ref: "Cart"}

});

module.exports= mongoose.model("User", userSchema);
