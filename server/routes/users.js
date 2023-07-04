const validateObjectId = require('../middleware/validateObject');
const userController = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.get('/', userController.getUsers);

router.get('/:searchName', userController.getUser);

router.post('/', userController.postUser);

router.put('/:id', validateObjectId, userController.putUser);

router.delete('/:id', validateObjectId, userController.deleteUser);

module.exports = router;
