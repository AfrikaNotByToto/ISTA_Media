const router = require('express').Router();
const { Emailform } = require('../db/models');
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM;

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const newEmail = await Emailform.create({
      email,
    });
    const bot = new TelegramBot(token, {polling: true});
    await bot.sendMessage(746796578, `email: ${req.body.email}`)
    await bot.stopPolling()
    console.log(newEmail);
    res.status(200).json(newEmail);
  } catch (message) {
    res.status(500).json({ message: 'Crushed' });
  }
});

module.exports = router;
