const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
