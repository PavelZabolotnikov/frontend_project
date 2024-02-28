const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../../db/models');

authRouter.get('/admin', async (req, res) => {
  const { admin } = res.locals;
  if (admin) {
    res.json({
      isLoggedIn: true,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const existingAdmin = await Admin.findOne({ where: { email } });
  // проверяем, что такой пользователь есть в БД и пароли совпадают
  if (
    existingAdmin &&
    (await bcrypt.compare(password, existingAdmin.password))
  ) {
    // кладём id нового пользователя в хранилище сессии (логиним пользователя)
    req.session.adminId = existingAdmin.id;
    req.session.admin = existingAdmin;
    res.json({ id: existingAdmin.id, email: existingAdmin.email });
  } else {
    res
      .status(401)
      .json({ error: 'Такого пользователя нет либо пароли не совпадают' });
  }
});

authRouter.delete('/logout', (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('admin_sid')
      .json({ error: 'Сессия удалена' })

    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = authRouter;
