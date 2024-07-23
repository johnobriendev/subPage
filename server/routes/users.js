var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

// Route to handle form submission
router.post('/subscribe', userController.subscribe);

// Optionally, add a route to list all subscribers
router.get('/subscribers', userController.listSubscribers);

module.exports = router;
