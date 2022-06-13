const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');

// Routes
router.get('/:election', voteController.votes_get);

router.post('/', voteController.create_vote_post);

module.exports = router;