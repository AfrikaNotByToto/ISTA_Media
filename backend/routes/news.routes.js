const router = require("express").Router();
const { New } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const News = await New.findAll({ raw: true });
    res.status(200).json(News);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneNew = await New.findOne({ where: { id } });
    res.json(oneNew);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { img, title, description, url } = req.body;
    console.log(req.body);
    const News = await New.create({
      img,
      title,
      description,
      url,
      userId: req.session.userId,
    });
    res.json(News);
    console.log(News);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await New.destroy({ where: { id } });
    console.log(id);
    res.json(Number(id));
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { img, title, description, url } = req.body;
    if (img && title && description) {
      const oneNew = await New.findOne({ where: { id: Number(id) } });
      oneNew.img = img;
      oneNew.title = title;
      oneNew.description = description;
      oneNew.url = url;
      oneNew.save();
      res.json(oneNew);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
