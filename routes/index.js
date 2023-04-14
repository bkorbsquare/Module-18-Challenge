// Description: This file is the entry point for all routes
const router = require('express').Router();
const apiRoutes = require('./api');

// Add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

// If no API routes are hit
router.use((req, res) => res.send('Wrong route!'));

// Export the router
module.exports = router;