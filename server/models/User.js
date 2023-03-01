const mongoose = require('mongoose');

// user model
const UserModel = mongoose.model(
  'users',
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlegth: 22,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlegth: 54,
    },
    password: {
      type: String,
      required: true,
      maxlegth: 1024,
    },
  })
);

module.exports = UserModel;
