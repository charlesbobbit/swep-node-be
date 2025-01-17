const mongoose = require('mongoose');

const stage_one_vp = new mongoose.Schema({
  status: {
    type: String,
    enum: ['incomplete', 'in review', 'declined', 'complete'],
    default: 'incomplete'
  },

  health_center_bio_data: {
    type: String,
    trim: true
  },

  clearance_certificate: {
    type: String,
    trim: true
  },

  passport: {
    type: String,
    trim: true
  },

  comments: [{
    type: String,
  }],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});


module.exports = mongoose.model('Stage_one_vp', stage_one_vp)