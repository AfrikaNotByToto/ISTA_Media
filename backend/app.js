require("dotenv").config();

const db = require("./db/models");
const config = require("./config/config");

const apiAuthRoute = require("./routes/auth.routes");
const apiPostRoute = require("./routes/posts.routes");

const app = express();
const PORT = process.env.PORT || 4000;

config(app);

app.use("/api/auth", apiAuthRoute);
app.use("/api/posts", apiPostRoute);

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
