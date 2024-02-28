const router = require('express').Router();
const { Feedback, Lawyer } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const feedback = await Feedback.findAll({
      where: { lawyer_id: req.params.id, accepted: true },
    });
    res.json(feedback);
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.findAll({ include: Lawyer }, { raw: true });
    res.json(feedback);
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      const feedback = await Feedback.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json(feedback);
    }
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.put('/', async (req, res) => {
  try {
    const { id } = req.body.oneFeedback;
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      const feedback = await Feedback.update(
        { accepted: true },
        {
          where: { id },
        }
      );
      res.status(200).json(feedback);
    }
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      feedbackName,
      inputDate,
      inputPhone,
      inputEmail,
      inputAboutFeedback,
      id,
      stars,
    } = req.body;

    const fb = await Feedback.create({
      lawyer_id: id,
      accepted: false,
      content: inputAboutFeedback,
      full_name: feedbackName,
      date: new Date(inputDate),
      phone: inputPhone,
      email: inputEmail,
      stars,
    });
    res.status(201).json(fb);
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

module.exports = router;
