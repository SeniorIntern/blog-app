const routes = require('express').Router();
const { PostModel } = require('../models/Post');

routes.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find().sort('datePosted');
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// posts to display on timeline/feed
routes.get('/recetPosts', async (req, res) => {
  try {
    const posts = await PostModel.find()
      .sort('datePosted')
      .limit(10)
      .select('title description datePosted likeCount');
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routes.get('/:id', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id).sort('datePosted');
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routes.post('/', async (req, res) => {
  try {
    const post = new PostModel({
      title: req.body.title,
      description: req.body.description,
      likeCount: req.body.likeCount,
    });
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routes.put('/:id', async (req, res) => {
  try {
    // update first approach
    const post = PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          likeCount: req.body.likeCount,
        },
      },
      { new: true }
    );

    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

routes.delete('/:id', async (req, res) => {
  try {
    const post = PostModel.findByIdAndDelete(req.params.id);
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
