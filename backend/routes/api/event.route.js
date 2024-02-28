const router = require('express').Router();
const uuidv4 = require('uuid/v4');
const multer = require('multer');
const path = require('path');
const { Event } = require('../../db/models');

const DIR = path.join(`${__dirname}/../../public/`);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, `${uuidv4()}-${fileName}`);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/svg+xml'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .svg+xml, .jpg and .jpeg format allowed!'));
    }
  },
});

router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(event);
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll({ raw: true });
    res.status(200).json(events);
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      const { id } = req.params;
      await Event.destroy({ where: { id } });
      res.status(200).json(id);
    }
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      const card = await Event.create({
        date: new Date(req.body.date),
        title: req.body.title,
        address: req.body.address,
        description: req.body.description,
        photo: `/${req.file.filename}`,
      });
      res.status(200).json(card);
    }
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

router.put('/:id/update-cards', async (req, res) => {
  const { id } = req.params;
  const { date, title, address, description } = req.body.changeEvent;
  try {
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      await Event.update(
        { date, title, address, description },
        { where: { id } }
      );
      const updateCard = await Event.findOne({ where: { id }, raw: true });
      res.status(200).json(updateCard);
    }
  } catch (message) {
    console.error(message);
    res.status(500).json(message);
  }
});

module.exports = router;
