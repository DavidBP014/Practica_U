// backend/routes/jardinesRoutes.js

const express = require('express');
const { getJardines } = require('../controllers/jardinesController');
const router = express.Router();

router.get('/', getJardines);

module.exports = router;
