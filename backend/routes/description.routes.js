const router = require('express').Router();
const { Description } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const Descriptions = await Description.findAll({ raw: true });
    res.status(200).json(Descriptions);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneDescription = await Description.findOne({ where: { id } });
    res.json(oneDescription);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { img, body } = req.body;
    console.log(req.body);
    const newDescription = await Decription.create({
      img,
     body,
    userId: req.session.userId,
    });
    res.json(newDescription);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Description.destroy({ where: { id } });
    res.json(Number(id));
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { img, body } = req.body;
    if (img && body) {
      const changeDescription = await Description.findOne({ where: { id: Number(id) } });
      changeDescription.img = img;
    changeDescription.body = body;

      changeDescription.save();
      res.json(changeDescription);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;