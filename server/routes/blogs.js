const express = require('express');
const router = express.Router();
const { BlogModel } = require('../models/Blog');
const { CategoryModel } = require('../models/Category');
const { UserModel } = require('../models/User');
const _ = require('lodash');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');

// blog to display on timeline/feed
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogModel.find()
      .sort('datePosted')
      .limit(10)
      .select('-email');
    res.status(200).send(blogs);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/:username', async (req, res) => {
  try {
    const blog = await BlogModel.find({
      'user.username': req.params.username,
    });
    if (!blog)
      return res.status(400).send(`No Blog Found For User ${req.params.email}`);
    // res.status(200).send(blog);
    res.status(200).send(blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    if (!user) return res.status(400).send('Invalid user Id.');

    const category = await CategoryModel.findById(req.body.categoryId);
    if (!category) return res.status(400).send('Invalid Category Id.');

    const blog = new BlogModel({
      title: req.body.title,
      description: req.body.description,
      likeCount: req.body.likeCount,
      title: req.body.title,
      user: {
        // _id: user._id,
        username: user.username,
        email: user.email,
      },
      category: {
        _id: category._id,
        categoryName: category.categoryName,
      },
    });
    await blog.save();
    res.status(200).send(blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const blog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: _.pick(req.body, [
          'title',
          'description',
          'likeCount',
          'title',
          'userId',
          'categoryId',
        ]),
      },
      { new: true }
    );
    res.status(200).send(blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await BlogModel.findByIdAndDelete(req.params.id);
    if (!blog) res.status(404).send('Invalid blog Id.');

    res.status(200).send(blog);
  } catch (err) {
    res.status(400).send(`delete operation failed: ${err.message}`);
  }
});

module.exports = router;
