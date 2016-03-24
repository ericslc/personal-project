var mongoose= require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  user: {type: String, required: true},
  products: []
})

module.exports = mongoose.model('Order', orderSchema)
