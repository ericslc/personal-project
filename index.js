var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var port = 8040;
var Product = require('./products');


app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/products");
mongoose.connection.once("open", function(){
  console.log("connected to mongodb");
});
app.get('/api/products', function(req, res){
	var query;
	if(req.query.status){
	  query = {status: req.query.status}
	}else{
	  query = {}
	};
	Product.find(query, function(err, product) {
	 return res.send(product);
});
});

app.post('/api/products', function(req, res){
	var product = new Product(req.body);
  product.save(function(err, s){
    return err ? res.status(500).send(err) : res.send(s);
});
});


app.put('/api/products', function(req, res){
	Product.findById(req.query.id, function(err, product){
	  product.update(req.body, function(err, product){
	    if(err){
	      return res.status(500).send(err);
	    }else{
	      Product.findById(req.query.id, function(err, product){
	        return res.send(s);
	      });
	    }
	  });
	});
});

app.delete('/api/products', function(req, res){
	if(!req.query.id){
		return res.status(400).send('id query needed');
	};

	Product.findByIdAndRemove(req.query.id, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	})
});
app.listen(port, function(){
	console.log('Now listening on port: ' + port);
});
