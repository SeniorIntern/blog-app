const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const challengeController = require('../controllers/challenges');
const express = require('express');
const router = express.Router();

router.get('/', challengeController.getChallenges);

router.post('/', [auth, admin], challengeController.postChallenge);

module.exports = router;
