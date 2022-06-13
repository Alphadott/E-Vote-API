const express = require('express');
const router = express.Router();

const candidateController = require('../controllers/candidateController');

// Routes
router.post('/', candidateController.register_candidate_post);

module.exports = router;