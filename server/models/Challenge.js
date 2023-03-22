const mongoose = require('mongoose');

const Challenge = mongoose.model(
  'challenges',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 24,
    },
    description: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 154,
    },
  })
);

exports.Challenge = Challenge;
