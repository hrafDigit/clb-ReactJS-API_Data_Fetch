/* --- backend/routes/api/contacts.js --- */
// - Default -
const express = require('express');
const router = express.Router();
const contactsController = require('../../controllers/contacts');

router.post('/add', contactsController.create);
router.get('/get', contactsController.get);
router.put('/update-contact', contactsController.update);
router.delete('/delete-contact', contactsController.delete);

module.exports = router;