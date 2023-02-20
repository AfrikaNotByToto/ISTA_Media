const router = require('express').Router();
const { Post } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const Posts = await Post.findAll({ raw: true });
    res.status(200).json(Posts);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const Post = await Post.findOne({ where: { id } });
    res.json(Post);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { img, title, description } = req.body;
    console.log(req.body);
    const Posts = await Post.create({
      img,
      title,
      description,
      // userId: req.session.userId,
    });
    res.json(Posts);
    console.log(Posts);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.destroy({ where: { id } });
    console.log(id);
    res.json(Number(id));
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description, img, title } = req.body;
    // const posts = await Post.findOne({
    //   where: { id, userId: req.session.userId },
    // });
    // if (posts.userId === req.session.userId) {
    await Post.update({ description, img, title }, { where: { id } });
    const data = await Post.findOne({ where: { id } });
    res.json(data);
    // }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
