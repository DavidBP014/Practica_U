// backend/controllers/jardinesController.js

const Jardin = require('../models/jardinModel');

const getJardines = async (req, res) => {
  const jardines = await Jardin.find({});
  res.json(jardines);
};

module.exports = {
  getJardines,
};