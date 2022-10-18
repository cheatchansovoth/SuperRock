//models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    Price: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
  });
  
  module.exports = Book = mongoose.model('book', BookSchema);