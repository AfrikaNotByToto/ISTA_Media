const router = require('express').Router();
require('dotenv').config();
const nodemailer = require('nodemailer');
const path = require('path')

router.post('/', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.mail,
      subject: `Чек-лист для создания собственного бренда ISTA Media`,
      text: `Здравствуйте, ${req.body.name}!\nМы с командой написали универсальный чек-лист для создания собственного бренда. Здесь собраны ключевые вопросы, которые помогут вам понять, как создать свой успешный продукт. Если у вас остались вопросы, мы вам поможем. На нашем сайте также доступна запись на бесплатную консультацию с маркетологом!`,
      attachments: [{
        filename: 'ISTA_Check_List.pdf',
        path: path.join(__dirname, '../public/ISTA_Check_List.pdf'),
        contentType: 'application/pdf'
      }]
    };

    transporter.sendMail(mailOptions, (err) => console.log(err));
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json(req.body);
  }
});

module.exports = router;
