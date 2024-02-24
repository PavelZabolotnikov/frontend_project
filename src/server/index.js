import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { registration } from './controllers/registrationController';
import { login } from './controllers/loginColntroller';
import { weatherController } from './controllers/weatherController';

import pkg from 'pg';
export const pool = new pkg.Pool({
  host: 'http://localhost/',
  port: 3000,
  database: 'weather',
  user: 'postgres',
  password: 'postgres',
});

const app = express();

export const users = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/registration', registration);
app.post('/login', login);
app.post('/weather', weatherController);

app.listen(9500, () => {
  console.log('Сервер запустился на порту 3000');
});