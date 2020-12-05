const ProductServices = require('../services/product_service');
const capitalize = require('../modules/capitalize');

exports.getAllProducts = async (req, res) => {
  const { category } = req.query;
  const products = await ProductServices.getAllProducts(
    capitalize(category),
  );

  return res.status(200).send(products);
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const { product, stockCount } = await ProductServices.getProduct(
    id,
  );

  return res.status(200).send({ product, stockCount });
};
