const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const methodOverride = require('method-override');

const db = require('../models/index');

function getShirts(req, res) {
  console.log('getting mens shirts!');
  res.send('Mens section!');
}

function postNewShirt(req, res) {
  console.log('posting a new shirt!');
  console.log(db.Shirt);
}

module.exports = {
  getShirts: getShirts,
  postNewShirt: postNewShirt
}
