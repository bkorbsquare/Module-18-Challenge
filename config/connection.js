// This file sets up the connection to the MongoDB database
const mongoose = require('mongoose');

// Connect to the Mongo DB
mongoose.connect('mongodb+srv://bkorbsquare:Steamship1@cluster0.bxqmt3n.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export the connection
module.exports = mongoose.connection;