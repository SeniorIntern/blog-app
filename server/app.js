require('dotenv').config();
const config = require('config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const blogs = require('./routes/blogs');
const categories = require('./routes/categories');
const challenges = require('./routes/challenges');
const cors = require('cors');
const appConnectionStatus = require('debug')('app:dbStatus');
const dbConnectionStatus = require('debug')('app:dbStatus');

app.use(express.json());
// Enable CORS
app.use(cors());

if (!config.get('jwtPrivateKey')) {
  console.log('jwt key is not set');
  process.exit(1);
}

mongoose
  .connect('mongodb://localhost:27017/blog-app')
  .then(() => dbConnectionStatus('Connected to MongoDB.'))
  .catch((err) => console.log(err.message));

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/blogs', blogs);
app.use('/api/categories', categories);
app.use('/api/challenges', challenges);

const port = process.env.PORT;
app.listen(port, () => {
  appConnectionStatus(`listening on port ${port}..`);
});
