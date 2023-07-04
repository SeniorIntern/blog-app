const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      username: this.username,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.KEY
  );
};

const UserModel = mongoose.model('users', userSchema);

exports.UserModel = UserModel;
