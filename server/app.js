require('dotenv').config();
const config = require('config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const appConnectionStatus = require('debug')('app:dbStatus');
const dbConnectionStatus = require('debug')('app:dbStatus');
const users = require('./routes/users');
const blogs = require('./routes/blogs');
const categories = require('./routes/categories');

app.use(express.json());

if (!config.get('jwtPrivateKey')) {
  console.log('jwt key is not set');
  process.exit(1);
}

mongoose
  .connect('mongodb://localhost:27017/blog-app')
  .then(() => dbConnectionStatus('Connected to MongoDB.'))
  .catch((err) => console.log(err.message));

app.use('/api/users', users);
app.use('/api/blogs', blogs);
app.use('/api/categories', categories);

const port = process.env.PORT;
app.listen(port, () => {
  appConnectionStatus(`listening on port ${port}..`);
});
