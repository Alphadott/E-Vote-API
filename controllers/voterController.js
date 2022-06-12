const Voter = require('../models/voter');

// Get voter based on vin
exports.voter_detail_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Voter details ' + req.params.vin);
}

// Register a new voter
exports.create_voter_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Voter create POST");
}

// Submit voter fingerprint
exports.submit_fingerprint_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Voter details ' + req.params.vin);
}