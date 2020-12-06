const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const products = require('./routes/products');

const options = require('./docs');

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api/products', products);
  app.use(
    '/api/docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true }),
  );
};
