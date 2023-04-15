const express = require('express');
const error = require('../middleware/error');
const users = require('../routes/users');
const auth = require('../routes/auth');
const blogs = require('../routes/blogs');
const categories = require('../routes/categories');
const challenges = require('../routes/challenges');
const cors = require('cors');

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/blogs', blogs);
  app.use('/api/categories', categories);
  app.use('/api/challenges', challenges);
  app.use(error);
};
