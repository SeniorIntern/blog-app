require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const appConnectionStatus = require('debug')('app:dbStatus');
const dbConnectionStatus = require('debug')('app:dbStatus');
const users = require('./routes/users.js');
const posts = require('./routes/posts.js');
const categories = require('./routes/categories.js');

mongoose
  .connect('mongodb://localhost:27017/blog-app')
  .then(() => dbConnectionStatus('Connected to MongoDb.'))
  .catch((err) => console.log(err.message));

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/categories', categories);

const port = process.env.PORT;
app.listen(port, () => {
  appConnectionStatus(`listening on port ${port}..`);
});
