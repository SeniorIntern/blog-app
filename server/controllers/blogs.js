const { BlogModel } = require('../models/Blog');
const { CategoryModel } = require('../models/Category');
const { UserModel } = require('../models/User');
const _ = require('lodash');

exports.getBlogs = async (req, res) => {
  const blogs = await BlogModel.find().sort('datePosted').select('-email');
  res.status(200).send(blogs);
};

exports.getUserBlog = async (req, res) => {
  const blog = await BlogModel.find({
    'user.username': req.params.username,
  });
  if (!blog)
    return res.status(400).send(`No Blog Found For User ${req.params.email}`);
  res.status(200).send(blog);
};

exports.postBlog = async (req, res) => {
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
    categoryName: category.categoryName,
  });
  await blog.save();
  res.status(200).send(blog);
};

exports.putBlog = async (req, res) => {
  const blog = await BlogModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: _.pick(req.body, ['title', 'description', 'categoryName']),
    },
    { new: true }
  );
  res.status(200).send(blog);
};

exports.deleteBlog = async (req, res) => {
  const blog = await BlogModel.findByIdAndDelete(req.params.id);
  if (!blog) res.status(404).send('Invalid blog Id.');

  res.status(200).send(blog);
};
