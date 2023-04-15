const { Challenge } = require('../models/Challenge');
const _ = require('lodash');

exports.getChallenges = async (req, res) => {
  const challenges = await Challenge.find();
  res.status(200).send(challenges);
};

exports.postChallenge = async (req, res) => {
  const challenge = new Challenge(_.pick(req.body, ['title', 'description']));
  await challenge.save();
  res.status(200).send(challenge);
};
