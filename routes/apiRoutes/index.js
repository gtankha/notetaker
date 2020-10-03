const router = require('express').Router();
const noteRoutes = require('./notes'); // routes are in notes.js
router.use(noteRoutes);
module.exports = router;