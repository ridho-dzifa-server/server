const express = require('express');
const router = express.Router();
const rsvp = require('./rsvp');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/rsvp', rsvp);

module.exports = router;
