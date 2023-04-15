const auth = require('../middleware/auth');
const blogsController = require('../controllers/blogs');
const express = require('express');
const router = express.Router();

router.get('/', blogsController.getBlogs);

router.get('/:username', blogsController.getUserBlog);

router.post('/', auth, blogsController.postBlog);

router.put('/:id', auth, blogsController.putBlog);

router.delete('/:id', auth, blogsController.deleteBlog);

module.exports = router;
