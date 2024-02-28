const { Admin } = require('../db/models');

module.exports = async function getAdmin(req, res, next) {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  const { adminId } = req.session;
  const admin = adminId && (await Admin.findByPk(adminId));
  // теперь если пользователь залогинен, то в он будет лежать в req.user
  res.locals.admin = admin;

  next();
};
