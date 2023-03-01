const routes = require('express').Router();

routes.get('/', async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(err);
  }
});

routes.get('/:id', async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(err);
  }
});

routes.post('/', async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(err);
  }
});

routes.put('/:id', async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(err);
  }
});

routes.delete('/:id', async (req, res) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send(err);
  }
});
