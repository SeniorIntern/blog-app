const express = require('express');
const router = express.Router();
const { Challenge } = require('../models/Challenge');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const _ = require('lodash');

router.get('/', async (req, res) => {
  const challenges = await Challenge.find();
  res.status(200).send(challenges);
});

router.post('/', [auth, admin], async (req, res) => {
  const challenge = new Challenge(_.pick(req.body, ['title', 'description']));
  await challenge.save();
  res.status(200).send(challenge);
});

module.exports = router;
