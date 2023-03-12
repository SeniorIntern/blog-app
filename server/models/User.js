const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlegth: 22,
  },
  userDesc: {
    type: String,
    required: true,
    minlength: 10,
    maxlegth: 52,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlegth: 154,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlegth: 1024,
  },
  isAdmin: {
    type: Boolean,
  },
});

const UserModel = mongoose.model('users', userSchema);

exports.UserModel = UserModel;
