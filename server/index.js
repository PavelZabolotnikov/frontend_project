const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const users = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/registration', async (req, res) => {
  console.log('registration-data', req.body);
  const { email, password } = req.body;

  const currentUserFromDB = users.find((user) => user.email === email);

  if (currentUserFromDB) {
    res.send(JSON.stringify({ message: 'Извините, пользователь уже существует', success: false }));
  } else {
    users.push({ email, password });
    res.send(JSON.stringify({ message: 'Успех!', success: true }));
  }
});

app.post('/login', async (req, res) => {
  console.log('login-email', req.body);
  const { email } = req.body;

  const currentUserFromDB = users.find((user) => user.email === email);
  const token = users.indexOf(currentUserFromDB);

  if (currentUserFromDB) {
    res.send(
      JSON.stringify({ message: 'Успех!', success: true, user: currentUserFromDB.email, token: token })
    );
  } else {
    res.send(JSON.stringify({ message: 'Извините, введите корректные данные', success: false }));
  }
});

app.listen(3001, () => {
  console.log('Сервер успешно завёлся');
});