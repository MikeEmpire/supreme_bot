/* eslint-disable */
const rp = require('request-promise');
const cheerio = require('cheerio');
const axios = require('axios');

const url = 'http://www.supremenewyork.com';

api.getItem = (itemId, callback) => {
  options.uri += `/shop/${itemId}.json`;

  axios
    .get(options.uri)
    .then((res) => {
      checkStock(res.data);
      return res.data;
    })
    .catch((err) => {
      callback(null, null, err);
      return err;
    });

  stockBySize = (style, product) => {
    let stockCount = 0;
    style.sizes.map((size, x) => {
      !size.stock_level ? stockCount++ : null;
    });
    if (stockCount === style.sizes.length) {
      return 0;
    } else {
      return style.sizes.length - stockCount;
    }
  };
  checkStock = (product) => {
    if (product.styles.length > 1) {
      let stockCount = 0;
      product.styles.map((style, i) => {
        stockCount = stockBySize(style, product);
      });
      callback(product, stockCount);
    } else {
      let stockCount = product.styles[0].sizes[0].stock_level;

      callback(product, stockCount);
    }
  };

  options.uri = url;
};

// api.getRandom = (callback) => {
//   options.uri += "/random/";

//   rp(options)
//     .then(($) => {
//       console.log(`Found ${$("div.random-item").length} in Random`);
//       grabRandomItemInfo($);
//       return $;
//     })
//     .catch((err) => {
//       if (err.statusCode === 404) {
//         console.log("error: page not found");
//         callback(null, err.statusCode);
//       }
//       return err;
//     });

//   grabRandomItemInfo = ($) => {
//     let itemObject = [];
//     $("div.random-item").each((i, element) => {
//       let name = $(element).find("span.caption").text();
//       itemObject.push(
//         (name = {
//           name: $(element).find("span.caption").text(),
//           href: $(element).find("a").attr("href"),
//           img: `http:${$(element).find("img").attr("src")}`,
//         })
//       );
//     });
//     callback(itemObject);
//   };

//   options.uri = url;
// };

module.exports = api;
