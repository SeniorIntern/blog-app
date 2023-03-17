const express = require('express');
const router = express.Router();
const { UserModel } = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) res.status(400).send('Invalid email or password.');

    const decode = await bcrypt.compare(req.body.password, user.password);
    if (!decode) res.status(400).send('Invalid email or password.');

    const token = user.generateAuthToken();
    res.status(200).send(token);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
