const express = require('express');
const router = express.Router();

const electionController = require('../controllers/electionController');

// Get active elections
router.get('/elections/:vin', (req, res) => {
    // get elections happening in current voter polling unit
});


exports.module = router;