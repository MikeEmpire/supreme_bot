const stockBySize = require('./stockBySize');

const checkStock = (product) => {
  if (product.styles.length > 1) {
    let stockCount = 0;
    product.styles.forEach((style) => {
      stockCount = stockBySize(style, product);
    });
    return { product, stockCount };
  }
  const stockCount = product.styles[0].sizes[0].stock_level;

  return { product, stockCount };
};

module.exports = checkStock;
