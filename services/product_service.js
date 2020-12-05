const axios = require('axios');
const options = require('../config/cheerio');

const getAllProducts = async (category) => {
  if (category === 'all' || category === 'new') {
    const url = (options.uri += '/mobile_stock.json');

    const response = await axios
      .get(url, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
        },
      })
      .then((res) => res.data.products_and_categories);
    return response;
  }
};

module.exports = {
  getAllProducts,
};
