const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const methodOverride = require('method-override');

const Shirt = require('../models/index.js').models.Shirt;

function getAllMensShirts(req, res) {
  const allMens = Shirt.findAll({
    where: {
      isWomens: false
    }
  }).then( shirts => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.json(shirts);
  });
}

function getAllWomensShirts(req, res) {
  const allWomens = Shirt.findAll({
    where: {
      isWomens: true
    }
  }).then( shirts => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.json(shirts);
  })
}

function getAllShirts(req, res) {
  const allShirts = Shirt.findAll()
    .then( shirts => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(shirts);
    })
}

function getSpecificShirt(req, res) {
  const slug = req.params.selectedShirt;
  const shirt = Shirt.findOne({
    where: {
      slug: slug
    }
  }).then( shirt => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(shirt);
  })
}

function postNewShirt(req, res) {
  console.log('posting a new shirt!');
  console.log(db.Shirt);
}

module.exports = {
  getAllMensShirts: getAllMensShirts,
  getAllWomensShirts: getAllWomensShirts,
  getAllShirts: getAllShirts,
  getSpecificShirt: getSpecificShirt,
  postNewShirt: postNewShirt
}
