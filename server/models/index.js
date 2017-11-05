const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clothrehab');

module.exports.Shirt = require('./shirt.js');
