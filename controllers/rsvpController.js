const Rsvp = require('../models/rsvp');

class rsvpController {
  static getAllInvitees(req, res) {
    Rsvp.find({}).sort({
      created_at: -1
    })
      .then(invitees => {
        res.status(200).json(invitees)
      }).catch(err => {
        res.status(500).json({
          msg: 'Internal server error',
          err
        })
      })
  }

  static addInvitees(req, res) {
    const {
      name,
      persons,
      arrival
    } = req.body;

    Rsvp.create({
      name,
      persons,
      arrival
    })
      .then(newInvitees => {
        res.status(201).json(newInvitees)
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal server error',
          err
        })
      })
  }
}

module.exports = rsvpController;
