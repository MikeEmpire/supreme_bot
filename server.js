/** *********************************** */
//* ****// Dependencies
/** *********************************** */
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const app = express();

const PORT = 4444;

/** *********************************** */
//* ****// Middleware
/** *********************************** */
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cors()); // Enable CORS from client-side
app.use(logger('dev'));
app.use(compression());

/** *********************************** */
//* ****// Route declaration
/** *********************************** */
app.get('/', (req, res) => res.status(200).send('Hello!'));

require('./routes')(app);

app.listen(process.env.PORT || PORT, () => null);

module.exports = app;
