var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;


var cartSchema = new Schema({
  products: [{
    item: {type: String, ref: 'Productinfo' 'Gear', required: true},
    quantity: {type: Number, min: 1}
  }]
})

module.exports = mongoose.model('Cart', cartSchema);
