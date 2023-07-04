const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
    maxlegth: 22,
  },
});

const CategoryModel = mongoose.model('categories', categorySchema);

exports.CategoryModel = CategoryModel;
exports.categorySchema = categorySchema;
