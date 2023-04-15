const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories');

router.get('/', categoryController.getCategories);

router.get('/:id', categoryController.getCategory);

router.post('/', categoryController.postCategory);

router.put('/:id', categoryController.putCategory);

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
