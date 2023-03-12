const mongoose = require('mongoose');
const { categorySchema } = require('./Category');

// post model.
const BlogModel = mongoose.model(
  'posts',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlegth: 52,
    },
    // todo- embedd user schema, categories
    description: {
      type: String,
      required: true,
      unique: true,
      minlength: 20,
      maxlegth: 800,
    },
    datePosted: {
      type: Date,
      default: Date.now,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema({
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
          maxlegth: 154,
        },
      }),
    },
    category: {
      type: categorySchema,
      required: true,
    },
  })
);

exports.BlogModel = BlogModel;
