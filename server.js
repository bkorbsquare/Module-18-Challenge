// Description: This file is the entry point to our application. It sets up the Express server and connects to our MongoDB database.
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const PORT = 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to the Mongo DB
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});