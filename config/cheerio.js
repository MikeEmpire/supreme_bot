const cheerio = require('cheerio');

const url = 'http://www.supremenewyork.com';

const options = {
  uri: url,
  transform(body) {
    return cheerio.load(body);
  },
};

module.exports = options;
