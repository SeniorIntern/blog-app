const express = require('express');
const router = express.Router();
const { UserModel } = require('../models/User');
const _ = require('lodash');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find().select('-password');
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).select('-password');
    if (!user) res.status(404).send('Invalid User Id');

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    let user = UserModel.find({ email: req.body.email });
    if (user) res.status(400).send('User Already Registered.');

    user = new UserModel(_.pick(req.body, ['username', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    if (!user) res.status(404).send('Invalid User Id');
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) res.status(404).send('Invalid User Id');
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
