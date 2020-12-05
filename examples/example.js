/* eslint-disable */
const api = require('../app');

api.getItem("173767", (product, stockStatus, err) => {
  if (err) {
    console.log("error: " + err);
    return err;
  } else {
    console.log(`found item: ${product.ino} and stock count is ${stockStatus}`);
    return product;
  }
});

// api.getRandom((res, err) => {
//   if (err) {
//     console.log("error: " + err);
//     return err;
//   } else {
//     // console.log(res);
//     return res;
//   }
// });
