const express = require('express');
const router = express.Router();
const { BlogModel } = require('../models/Blog');
const _ = requrie('lodash');

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

router.get('/:id', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    if (!blog) res.status(400).send('Invalid Blog Id.');
    res.status(200).send(blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const blog = new BlogModel(
      _.pick(req.body, [
        'title',
        'description',
        'likeCount',
        'title',
        'userId',
        'categoryId',
      ])
    );
    await blog.save();
    res.status(200).send(blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
  try {
    const blog = BlogModel.findByIdAndDelete(req.params.id);
    res.status(200).send(blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
