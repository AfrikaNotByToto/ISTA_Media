const router = require("express").Router();
const { Post } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const Posts = await Post.findAll({ raw: true });
    res.status(200).json(Posts);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Post = await Post.findOne({ where: { id } });
    res.json(Post);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { img, title, description } = req.body;
    if (img && title && description) {
      const Post = await Post.create({
        img,
        title,
        description,
        userId: req.session.userId,
      });
      res.json(Post);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.destroy({ where: { id } });
    res.json(result);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { img, title, description } = req.body;
    if (img && title && description) {
      const Post = await Post.findOne({ where: { id: Number(id) } });
      Post.img = img;
      Post.title = title;
      Post.description = description;
      Post.save();
      res.json(Post);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;