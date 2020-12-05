const ProductServices = require('../services/product_service');

exports.getAllProducts = async (req, res) => {
  const { category } = req.query;
  const products = await ProductServices.getAllProducts(category);

  return res.status(200).send(products);
};
