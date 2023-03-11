const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bkorbsquare:Steamship1@cluster0.bxqmt3n.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;