//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product.js');

//Routes
function formatData(req, res, next) {
	console.log(res.locals.bundle);
  var currentResponse = res.locals.bundle[0];
  var jsonResponse = {};
  jsonResponse.type = 'product';
  jsonResponse.id = currentResponse._id;
  jsonResponse.attributes = currentResponse;
  res.locals.bundle = {
  	data: [jsonResponse]
  };
  next();
}
Product.methods(['get', 'put', 'post', 'delete']).after('get', formatData).register(router, '/products');

module.exports = router;
