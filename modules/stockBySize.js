const stockBySize = (style) => {
  let stockCount = 0;
  style.sizes.forEach((size) => {
    if (!size.stock_level) {
      stockCount += 1;
    }
    return null;
  });
  if (stockCount === style.sizes.length) {
    return 0;
  }
  return style.sizes.length - stockCount;
};

module.exports = stockBySize;
