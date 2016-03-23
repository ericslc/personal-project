var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var port = 8040;
var Product = require('./server/productinfo');
var User = require('./server/users')
var Gear = require('./server/gear')


app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json());

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/productinfo");
mongoose.connection.once("open", function(){
  console.log("connected to mongodb");
});


// product section
app.get('/api/productinfo', function(req, res){
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

app.post('/api/productinfo', function(req, res){
	var product = new Product(req.body);
  product.save(function(err, s){
    return err ? res.status(500).send(err) : res.send(s);
});
});


app.put('/api/productinfo', function(req, res){
	Product.findByIdAndUpdate(req.query.id, req.body, function(err, product){
	    if(err){
	      return res.status(500).send(err);
	    }else{
	      Product.findById(req.query.id, function(err, product){
	        return res.send();
	      });
	    }
	  });
	});


app.delete('/api/productinfo', function(req, res){
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

// gear section
app.get('/api/gear', function(req, res){
	var query;
	if(req.query.status){
	  query = {status: req.query.status}
	}else{
	  query = {}
	};
	Gear.find(query, function(err, gear) {
	 return res.send(gear);
});
});

app.post('/api/gear', function(req, res){
  var gear = new Gear(req.body);
  gear.save(function(err, s){
    return err ? res.status(500).send(err) : res.send(s);
});
});


app.put('api/gear', function(req, res){
  Gear.findByIdAndUpdate(req.query.id, req.body, function(err, gear){
	    if(err){
	      return res.status(500).send(err);
	    }else{
	      Gear.findById(req.query.id, function(err, gear){
	        return res.send();
	      });
	    }
	  });
});


app.delete('/api/gear', function(req, res){
  if(!req.query.id){
		return res.status(400).send('id query needed');
	};

	Gear.findByIdAndRemove(req.query.id, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	})
});


// user section

app.get('/api/users', function(req, res){
	var query;
	if(req.query.status){
	  query = {status: req.query.status}
	}else{
	  query = {}
	};
	User.find(query, function(err, user) {
	 return res.send(user);
});
});

app.post('/api/users', function(req, res){
  var user = new User(req.body);
  user.save(function(err, s){
    return err ? res.status(500).send(err) : res.send(s);
});
});


app.put('api/users', function(req, res){
  User.findByIdAndUpdate(req.query.id, req.body, function(err, user){
	    if(err){
	      return res.status(500).send(err);
	    }else{
	      User.findById(req.query.id, function(err, user){
	        return res.send();
	      });
	    }
	  });
});


app.delete('api/users', function(req, res){
  if(!req.query.id){
		return res.status(400).send('id query needed');
	};

	User.findByIdAndRemove(req.query.id, function(error, response){
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
