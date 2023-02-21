const router = require('express').Router();
const { PhoneForm } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { phone } = req.body;
    const newPhone = await PhoneForm.create({
      phone,
    });
    res.status(200).json(newPhone);
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
