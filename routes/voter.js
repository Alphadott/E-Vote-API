const express = require('express');
const router = express.Router();

const voterController = require('../controllers/voterController');

router.get('/', voterController.list_voters_get);

router.post('/', voterController.create_voter_post);

router.get('/verifyme/:vin', voterController.verify_voter_get);

router.get('/:vin', voterController.voter_details_get);

router.get('/verified/all', voterController.verified_voters_get);

router.post('/submit-fingerprint', voterController.submit_fingerprint_post);

module.exports = router;