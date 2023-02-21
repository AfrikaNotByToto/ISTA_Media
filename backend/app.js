require('dotenv').config();
const express = require('express');

const db = require('./db/models');
const config = require('./config/config');

const apiAuthRoute = require('./routes/auth.routes');
const apiPostRoute = require('./routes/posts.routes');
const apiReqRoute = require('./routes/req.routes');
const apiNewsRoute = require('./routes/news.routes');
const apiDescrRoute = require('./routes/description.routes');
const apiEasyWeekRoute = require('./routes/easyweek.routes');
const apiEmailForm = require('./routes/emailForm.routes');
const apiPhoneForm = require('./routes/phoneForm.routes');

const app = express();
const PORT = process.env.PORT || 4000;

config(app);

app.use('/api/auth', apiAuthRoute);
app.use('/api/posts', apiPostRoute);
app.use('/api/requests', apiReqRoute);
app.use('/api/news', apiNewsRoute);
app.use('/api/about', apiDescrRoute);
app.use('/api/easyweek', apiEasyWeekRoute);
app.use('/api/email', apiEmailForm);
app.use('/api/phone', apiPhoneForm);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Сервер слушает ${PORT} порт`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
