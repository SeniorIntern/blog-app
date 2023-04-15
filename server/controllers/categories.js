const { CategoryModel } = require('../models/Category');
const _ = require('lodash');

exports.getCategories = async (req, res) => {
  const categories = await CategoryModel.find();
  res.status(200).send(categories);
};

exports.getCategory = async (req, res) => {
  const category = await CategoryModel.findById(req.params.id);
  if (!category) res.status(400).send('Invalid Category Id');
  res.status(200).send(category);
};

exports.postCategory = async (req, res) => {
  let category = new CategoryModel(_.pick(req.body, ['categoryName']));

  console.log(category);
  await category.save();
  res.status(200).send(category);
};

exports.putCategory = async (req, res) => {
  let category = await CategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: _.pick(req.body, ['categoryName']),
    },
    { new: true }
  );
  res.status(200).send(category);
};

exports.deleteCategory = async (req, res) => {
  const category = await CategoryModel.findByIdAndDelete(req.params.id);
  res.status(200).send(category);
};
