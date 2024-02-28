const router = require('express').Router();
const uuidv4 = require('uuid/v4');
const multer = require('multer');
const path = require('path');
const { Lawyer, Feedback } = require('../../db/models');

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
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

router
  .get('/', async (req, res) => {
    try {
      const lawyers = await Lawyer.findAll(
        { include: Feedback },
        { raw: true }
      );
      res.json(lawyers);
    } catch ({ message }) {
      res.json(message);
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const lawyer = await Lawyer.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.json(lawyer);
    } catch ({ message }) {
      res.json(message);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      const { id } = req.params;
      await Lawyer.destroy({ where: { id } });
      res.status(200).json(id);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      const card = await Lawyer.create({
        full_name: req.body.fullName,
        price: Number(req.body.price),
        speciality: req.body.speciality,
        description: req.body.description,
        experience: Number(req.body.experience),
        phone: req.body.phone,
        email: req.body.email,
        photo: `/${req.file.filename}`,
      });
      res.status(200).json(card);
    }
  } catch ({message}) {
    console.error(message);
  }
});

router.put('/:id/update-cards', async (req, res) => {
  const { id } = req.params;
  const {
    // eslint-disable-next-line camelcase
    full_name,
    price,
    description,
    speciality,
    experience,
    phone,
    email,
  } = req.body.changeLawyer;
  try {
    const { admin } = res.locals;
    if (admin && admin.dataValues.email === 'admin@mail.ru') {
      await Lawyer.update(
        {
          // eslint-disable-next-line camelcase
          full_name,
          price: Number(price),
          description,
          speciality,
          experience: Number(experience),
          phone,
          email,
        },
        { where: { id } }
      );
      const updateCard = await Lawyer.findOne({ where: { id }, raw: true });
      res.status(200).json(updateCard);
    }
  } catch ({message}) {
    console.error(message);
  }
});

module.exports = router;
