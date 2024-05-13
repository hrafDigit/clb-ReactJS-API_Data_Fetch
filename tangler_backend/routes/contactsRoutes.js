/* --- backend/routes/api/contacts.js --- */
// - Default -
const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// Create a new contact
router.post('/add-contact', contactsController.createContact);
// Get all contacts
router.get('/', contactsController.getContacts);
// Get a single contact (by its ID)
router.get('/:_id', contactsController.getContactById);
// Update a single contact (by its ID)
router.put('/:_id', contactsController.updateContact);
// Delete a single contact (by its ID)
router.delete('/:_id', contactsController.deleteContact);

module.exports = router;


// router.post('/add', contactsController.create);
// router.get('/get', contactsController.get);
// router.put('/update-contact', contactsController.update);
// router.delete('/delete-contact', contactsController.delete);

