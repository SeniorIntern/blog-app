require('dotenv').config();
const winston = require('winston');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello World.');
});

require('./startup/db')();
require('./startup/routes')(app);
require('./startup/logging')();
require('./startup/config')();

const port = process.env.PORT;
app.listen(port, (err) => {
  if (!err) winston.info(`listening on port ${port}..`);
});
