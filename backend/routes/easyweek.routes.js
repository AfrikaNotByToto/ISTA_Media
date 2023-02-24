const TelegramBot = require("node-telegram-bot-api");
const router = require('express').Router();
const token = process.env.TELEGRAM;

router.post('/', async (req, res) => {
    try {
        const text = `${req.body['booking_status']}\n 
    ${req.body['time']} ${req.body['date']}\n 
    ${req.body['customer_full_name']} \n 
    ${req.body['customer_phone']} \n 
    ${req.body['service_name']} \n 
    ${req.body['booking_description']} \n 
    moderator: ${req.body['user_name']}`
        const bot = await new TelegramBot(token, {polling: true});
        await bot.sendMessage(746796578, text);
        await bot.stopPolling();
        res.status(200).json({message: 'good'})
    } catch (e) {
        res.status(500).json({message: 'error'})
    }
});

module.exports = router;
