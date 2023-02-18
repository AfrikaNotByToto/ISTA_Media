const router = require('express').Router();
const { Request } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const Requests = await Request.findAll({ raw: true });
    res.status(200).json(Requests);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, data, comment } = req.body;
    if (name && email && phone && data && comment) {
      const Req = await Request.create({
        name,
        email,
        phone,
        data,
        comment,
        status: 'Получен'
        // userId: req.session.userId,
      });
      res.json(Req);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
