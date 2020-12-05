const express = require('express');

const router = express.Router();

const api = require('../api/product_api');

router.route('/all').get(api.getAllProducts);

module.exports = router;
