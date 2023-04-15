const mongoose = require('mongoose');

// post model.
const BlogModel = mongoose.model(
  'blogs',
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        minlength: 5,
        maxlegth: 52,
      },
      description: {
        type: String,
        required: true,
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
            minlength: 5,
            maxlegth: 22,
          },
          email: {
            type: String,
            required: true,
            minlength: 10,
            maxlegth: 154,
          },
        }),
      },
      categoryName: {
        type: String,
        required: true,
        minlength: 3,
        maxlegth: 22,
      },
    },
    { timestamps: true }
  )
);

exports.BlogModel = BlogModel;
