const router = require('express').Router();
const { Tarif } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const tarifs = await Tarif.findAll();
    res.status(200).json(tarifs);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
