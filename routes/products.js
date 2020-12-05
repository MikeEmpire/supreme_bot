const express = require('express');

const router = express.Router();

const api = require('../api/product_api');

router.route('/').get(api.getAllProducts);

router.route('/:id').get(api.getProduct);

module.exports = router;
