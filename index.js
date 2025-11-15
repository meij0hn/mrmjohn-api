'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const { swaggerUi, specs } = require('./swagger');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', api.routes);

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
  console.log('Swagger documentation available at http://localhost:' + config.port + '/api-docs')
});