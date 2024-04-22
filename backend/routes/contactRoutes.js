// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContactById, deleteContact } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
      .get(protect, admin, getContacts)
      .post(createContact);

router.route('/:id')
      .get(protect, admin, getContactById)
      .delete(protect, admin, deleteContact);

module.exports = router;
