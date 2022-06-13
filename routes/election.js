const express = require('express');
const router = express.Router();

const electionController = require('../controllers/electionController');

// Get all elections
router.get('/', electionController.list_elections_get);

// Get active elections
router.get('/active/:vin', electionController.active_elections_get);

// Get election detail
router.get('/:election', electionController.election_details_get);

// Register new elections
router.post('/', electionController.register_election_post);


module.exports = router;