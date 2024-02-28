const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const getAdmin = require('../middlewares/getAdmin');

function expressConfig(app) {
  // плагины - миддлварки

  app.use(express.static('public'));

  // логирование запросов
  app.use(morgan('dev'));

  // парсинг тела пост-запроса из формы
  app.use(express.urlencoded({ extended: true }));

  // миддлварка для отправки фечей с клиента в формате JSON
  app.use(express.json()); // тело запроса, распарсить => req.body
  app.use(cookieParser());
  app.use(session(sessionConfig));
  // настраиваем статические файлы из папки public
  // app.use(express.static(path.join(__dirname, '../public')));

  app.use(getAdmin);
}

module.exports = expressConfig;
