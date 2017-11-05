const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shirt = new Schema({
  title: String,
  primaryImage: String,
  secondaryImage: String,
  image3: String,
  image4: String,
  fabric: String,
  price: Number,
  sizesAvailable: {
    xs: Number,
    small: Number,
    medium: Number,
    large: Number,
    xl: Number,
    xxl: Number
  },
  description: String,
  sex: String
});

module.exports = mongoose.model('Shirt', Shirt);
