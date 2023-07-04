const validateObjectId = require('../middleware/validateObject');
const categoryController = require('../controllers/categories');
const express = require('express');
const router = express.Router();

router.get('/', categoryController.getCategories);

router.get('/:id', validateObjectId, categoryController.getCategory);

router.post('/', categoryController.postCategory);

router.put('/:id', validateObjectId, categoryController.putCategory);

router.delete('/:id', validateObjectId, categoryController.deleteCategory);

module.exports = router;
