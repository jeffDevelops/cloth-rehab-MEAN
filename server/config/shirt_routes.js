const express = require('express');
const router = express.Router();

const shirtController = require('../controllers/shirts')

router.route('/api/mens')
      .get(shirtController.getAllMensShirts);

router.route('/api/womens')
      .get(shirtController.getAllWomensShirts);

router.route('/api/:selectedShirt')
      .get(shirtController.getSpecificShirt);

module.exports = router;
