const router = require('express').Router();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM;


router.post('/', async (req, res) => {

// Matches "/echo [whatever]"
//     bot.onText(/\/echo (.+)/, (msg, match) => {
//         // 'msg' is the received Message from Telegram
//         // 'match' is the result of executing the regexp above on the text content
//         // of the message
//
//         const chatId = msg.chat.id;
//         const resp = match[1]; // the captured "whatever"
//         console.log(resp)
//         // send back the matched "whatever" to the chat
//         bot.sendMessage(chatId, resp);
//     });

// Listen for any kind of message. There are different kinds of
// messages.
//     bot.on('message', (msg) => {
//         const chatId = msg.chat.id;
//         console.log(msg)
//         // send a message to the chat acknowledging receipt of their message
//         bot.sendMessage(chatId, 'Received your message');
//     });

    try {
        const bot = new TelegramBot(token, {polling: true});
        await bot.sendMessage(746796578, `телефон: ${req.body.message}`)
        await bot.stopPolling()
        res.json({message: 'good'})
    } catch (e) {
        console.error(e)
        res.json({message: 'error'})
    }
});

module.exports = router;
