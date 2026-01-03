const express = require('express');
const {login} = require('../controllers/auth.controller');

const router = express.Router();

// Import controller (adjust path as needed)
// POST /auth/login
router.post('/login', login);
module.exports = router;