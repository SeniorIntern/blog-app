const express = require('express');
const router = express.Router();
const { UserModel } = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validate = await bcrypt.compare(req.body.password, user.password);
  if (!validate) return res.status(400).send('Invalid email or password.');

  const token = await user.generateAuthToken();

  res
    .status(200)
    .header('x-auth-token', token)
    .header('access-control-expose-headers', 'x-auth-token')
    .send(token);
});

module.exports = router;
