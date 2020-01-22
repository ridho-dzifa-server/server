const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rsvpSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    persons: {
        type: Number,
        required: true
    },
    arrival: {
        type: String,
        default: '00:00'
    },
    created_at: {
      type: Date,
      default: Date.now,
      required: true
    },
    updated_at: {
      type: Date,
      default: Date.now,
      required: true
    }
})

const RSVP = mongoose.model('RSVP', rsvpSchema);

module.exports = RSVP;
