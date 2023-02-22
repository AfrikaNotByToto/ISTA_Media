const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/check', async (req, res) => {
  try {
    if (req.session.userId) {
      let user = await User.findOne({
        where: { id: req.session.userId },
        attributes: {
          exclude: ['password'],
        },
        raw: true,
      });
      res.json({ user });
    } else {
      res.status(500).json({ message: '' });
    }
  } catch (message) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/sign-in', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const checkUserName = await User.findOne({ where: { userName } });
    const checkPassword = await bcrypt.compare(
      password,
      checkUserName.password
    );
    if (!userName && !password) {
      return res.status(403).json({ message: 'Нужно заполнить все поля' });
    }
    if (!checkPassword) {
      return res.status(403).json({ message: 'Логин или пароль не верны' });
    }
    if (!checkUserName) {
      return res.status(404).json({ message: 'Логин или пароль не верны' });
    }

    const user = {
      id: checkUserName.id,
      userName: checkUserName.userName,
    };
    req.session.userId = checkUserName.id;
    res.status(200).json({ user });
  } catch (message) {
    res.status(500).json({ message: 'Заполните все поля' });
  }
});

router.post('/sign-up', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const CheckUser = await User.findOne({ where: { userName } });

    if (CheckUser) {
      return res.status(403).json({ message: 'Пользователь уже существует' });
    }
    if (!userName || !password) {
      res.status(403).json({ message: 'Заполните все поля' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      userName,
      password: hash,
    });
    const user = {
      id: newUser.id,
      userName: newUser.userName,
    };
    req.session.userId = user.id;
    res.status(201).json({ user });
  } catch (message) {
    res.json({ message: 'Заполните все поля' });
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('user_sid');
      const user = {};
      res.json({ user });
    });
  } catch (message) {
    res.json({ message: 'Сессия не удалена' });
  }
});

module.exports = router;
