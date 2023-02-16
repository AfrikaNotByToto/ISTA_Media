/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        req.session.userId = user.id;
        res.status(201).json(user);
      } else {
        res
          .status(403)
          .json({ message: 'Неверный email или пароль', user: {} });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля', user: {} });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/sign-up', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (email && name && password) {
      let user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          name,
          email,
          password: hash,
        });
        user = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        };
        req.session.userId = user.id;
        res.status(201).json({ message: '', user });
      } else {
        res
          .status(403)
          .json({ message: 'Такой email уже существует', user: {} });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля', user: {} });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
