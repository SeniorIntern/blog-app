const mongoose = require('mongoose');

// post model.
const PostModel = mongoose.model(
  'posts',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlegth: 52,
    },
    // todo- embedd user, categories
    description: {
      type: String,
      required: true,
      unique: true,
      minlength: 20,
      maxlegth: 500,
    },
  })
);

module.exports = PostModel;
