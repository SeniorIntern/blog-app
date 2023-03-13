const express = require('express');
const router = express.Router();
const { CategoryModel } = require('../models/Category');
const _ = require('lodash');

router.get('/', async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).send(categories);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) res.status(400).send('Invalid Category Id');
    res.status(200).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/', async (req, res) => {
  let category = new CategoryModel(_.pick(req.body, ['categoryName']));
  try {
    console.log(category);
    await category.save();
    res.status(200).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: _.pick(req.body, ['categoryName']),
      },
      { new: true }
    );
    res.status(200).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(req.params.id);
    res.status(200).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
