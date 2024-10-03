const express = require('express');
const router = express.Router();
const {authUser,createUser, passKey} = require('../controllers/user.controller.js');

// Create a new user
router.post('/auth', createUser);

// Get a user by ID
router.get('/auth/:email', authUser);


router.get('/passKey/:email', passKey);


module.exports = router;
