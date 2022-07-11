const mongoose = require('mongoose');

const annoucmentSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 20 },
  author: { type: String, required: true,  minlength: 50 },
  email: { type: String, required: true },
  publicationDate: { type: String, required: true },
  modyficationDate: { type: String},
  status: { type: String, required: true },
});

module.exports = mongoose.model('Annoucment', annoucmentSchema);
