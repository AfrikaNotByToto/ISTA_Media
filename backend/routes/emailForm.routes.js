const router = require('express').Router();
const { Emailform } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    let isTrue = await Emailform.findOne({ where: { email: email } });
    if (email === null || isTrue === null) {
      const newEmail = await Emailform.create({
        email,
      });
      res.status(200).json(newEmail);
    } else {
      res.status(406), json({ message: 'Такой email уже существует' });
    }
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
