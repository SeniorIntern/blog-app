const mongoose = require('mongoose');

const Challenge = mongoose.model(
  'challenges',
  new mongoose.Schema({
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
      maxlength: 154,
    },
  })
);

exports.Challenge = Challenge;
