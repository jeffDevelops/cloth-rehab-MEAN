const express = require('express');
const router = express.Router();

const shirtController = require('../controllers/shirts')

router.route('/api/shirts')
      .get(shirtController.getShirts)
      .post(shirtController.postNewShirt);

module.exports = router;
