// Swagger set up
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Supreme API documentation with Swagger',
      version: '1.0.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Michael Olie',
        url: 'https://supreme.afam.app',
        email: 'aolie94@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:4444',
      },
    ],
  },
  apis: ['../routes/products*.js'],
};

module.exports = options;
