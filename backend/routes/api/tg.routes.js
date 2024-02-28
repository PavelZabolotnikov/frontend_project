const router = require('express').Router();
const TelegramBot = require('node-telegram-bot-api');

router.post('/', async (req, res) => {
  try {
    const { inputName, inputPhone, inputEmail, inputAbout } =
      req.body.applicationForm;

    const bot = new TelegramBot(
      '6115334592:AAH5Om-s3LfKPpxqLGwNLojT32CJHzNtTEY',
      { polling: true }
    );
    await bot.sendMessage(
      2109962455,
      `ФИО: ${inputName},Номер телефона ${inputPhone},Емаил ${inputEmail}, Направление деятельности ${inputAbout}`
    );
    await bot.stopPolling();
    res.json({ message: 'good' });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
