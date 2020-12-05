const axios = require('axios');
const options = require('../config/cheerio');
const checkStock = require('../modules/checkStock');

const { uri } = options;

const getAllProducts = async (category) => {
  const url = `${uri}/mobile_stock.json`;
  const headers = {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    },
  };

  const response = await axios.get(url, headers).then((res) => {
    if (category) {
      if (category !== 'all') {
        return res.data.products_and_categories[`${category}`];
      }
    }
    return res.data.products_and_categories;
  });
  return response;
};

const getProduct = async (id) => {
  const url = `${uri}/shop/${id}.json`;
  return axios.get(url).then((res) => {
    const { product, stockCount } = checkStock(res.data);

    return { product, stockCount };
  });
};

module.exports = {
  getAllProducts,
  getProduct,
};
