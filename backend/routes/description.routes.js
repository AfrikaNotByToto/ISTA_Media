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
    const newDescription = await Description.create({
      img,
      body,
      userId: req.session.userId,
    });
    console.log(newDescription);
    res.status(200).json(newDescription);
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
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
    await Description.update({ img, body }, { where: { id } });
    const data = await Description.findOne({ where: { id } });
    res.json(data);
  } catch (message) {
    res.status(500).json({ message: ' Crushed' });
  }
});

module.exports = router;
