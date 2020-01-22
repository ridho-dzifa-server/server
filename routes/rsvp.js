const express = require('express');
const router = express.Router();
const rsvpController = require('../controllers/rsvpController.js');

router.get('/', rsvpController.getAllInvitees);
router.post('/', rsvpController.addInvitees);

module.exports = router;
