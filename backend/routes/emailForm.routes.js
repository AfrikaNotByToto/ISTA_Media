const router = require('express').Router();
const { Emailform } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const newEmail = await Emailform.create({
      email,
    });
    console.log(newEmail);
    res.status(200).json(newEmail);
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
