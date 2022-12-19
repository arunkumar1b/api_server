const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  content: String,
  image:{
    contents: String,
    names: String,
    image: String,
  },
  from: Object,
  socketid: String,
  time: String,
  date: String,
  to: String
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message
