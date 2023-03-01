const mongoose = require('mongoose');

// user model
const CategoryModel = mongoose.model(
  'categories',
  new mongoose.Schema({
    categoryname: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlegth: 22,
    },
  })
);

module.exports = CategoryModel;
