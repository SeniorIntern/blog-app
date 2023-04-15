const { UserModel } = require('../models/User');
const _ = require('lodash');
const bcrypt = require('bcrypt');

exports.getUsers = async (req, res) => {
  const users = await UserModel.find().select('_id username email');
  res.status(200).send(users);
};

exports.getUser = async (req, res) => {
  const user = await UserModel.find({
    username: req.params.searchName,
  }).select('-password');
  if (!user) res.status(404).send('Invalid User Name');

  res.status(200).send(user);
};

exports.postUser = async (req, res) => {
  let user = await UserModel.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User Already Registered.');

  user = new UserModel(
    _.pick(req.body, ['username', 'userDesc', 'email', 'password'])
  );

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = await user.generateAuthToken();
  res
    .status(200)
    .header('x-auth-token', token)
    .header('access-control-expose-headers', 'x-auth-token')
    .send(_.pick(user, ['_id', 'username', 'userDesc', 'email']));
};

exports.putUser = async (req, res) => {
  const user = await UserModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: _.pick(req.body, ['username', 'userDesc', 'email', 'password']),
    },
    { new: true }
  );
  if (!user) res.status(404).send('Invalid User Id');
  res.status(200).send(user);
};

exports.deleteUser = async (req, res) => {
  const user = await UserModel.findByIdAndDelete(req.params.id);
  if (!user) res.status(404).send('Invalid User Id');
  res.status(200).send(user);
};
