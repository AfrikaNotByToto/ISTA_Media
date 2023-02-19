/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/sign-in', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const checkUserName = await User.findOne({ where: { userName } });
    const checkPassword = await bcrypt.compare(
      password,
      checkUserName.password
    );
    if (!checkUserName) {
      return res.status(404).json({ message: 'Логин или пароль не верны' });
    }
    if (!userName || !password) {
      return res.status(403).json({ message: 'Нужно заполнить все поля' });
    }
    if (!checkPassword) {
      return res.status(403).json({ message: 'Логин или пароль не верны' });
    }
    const user = {
      id: checkUserName.id,
      userName: checkUserName.userName,
    };
    req.session.userId = checkUserName.id;
    res.status(200).json({ message: '', user });
    // if (email && password) {
    //   let user = await User.findOne({ where: { email } });
    //   if (user && (await bcrypt.compare(password, user.password))) {
    //     user = {
    //       id: user.id,
    //       name: user.name,
    //       email: user.email,
    //     };
    //     req.session.userId = user.id;
    //     res.status(201).json(user);
    //   } else {
    //     res
    //       .status(403)
    //       .json({ message: 'Неверный email или пароль', user: {} });
    //   }
    // } else {
    //   res.status(403).json({ message: 'Заполните все поля', user: {} });
    // }
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
      return res.status(403).json({ message: 'Заполните все поля' });
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
    res.status(201).json({ message: '', user });
    // } else {
    //   res
    //     .status(403)
    //     .json({ message: 'Такой email уже существует', user: {} });
    // } else {
    //   res.status(403).json({ message: 'Заполните все поля', user: {} });
    // }
  } catch (message) {
    res.json({ message: 'Заполните все поля' });
  }
});

module.exports = router;
