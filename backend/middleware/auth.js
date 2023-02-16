const { User } = require('../db/models');

const getUser = async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findByPk(Number(req.session.userId), { raw: true });
    res.locals.user = { name: user.name, id: user.id, points: user.points };
  }
  next();
};

const resLocals = (req, res, next) => {
  if (req.session?.userId) {
    res.locals.user = req.session.userId;
  }

  next();
};

module.exports = { resLocals, getUser };
