const mongoose = require('mongoose');
const Election = require('../models/election');
const Voter = require('../models/voter');
const Candidate = require('../models/candidate');

// List all elections
exports.list_elections_get = (req, res, next) => {
    Election.find({}).exec((err, elections) => {
        if (err) res.next(err);

        res.json(elections);
    });
}

// List active elections
exports.active_elections_get = (req, res, next) => {
    // get active election based on voter polling unit

    // find the voter's polling unit
    let voter = Voter.findOne({ vin: req.params.vin }).exec((err, voter) => {
        if (err) return next(err);

        return voter;
    })

    res.json(voter);

    // find elections with the polling unit
    // Election.find({}).where
}

// Get election details
exports.election_details_get = (req, res) => {
    // Get details of an election
    Election.findOne({ election: req.params.election }).populate('candidates').exec((err, election) => {
        if (err) return next(err);

        res.json(election);
    });
    // checks if you already voted
    // if not voted, redirects to candidate info page
}

// Get candidate info for an election
exports.election_candidate_info_get = (req, res) => {
    // Get details of an election
    Election.findOne({ election: req.params.election }).exec((err, election) => {
        if (err) return next(err);

        // get the candidate info
        let candidate = req.params.candidate
    });
    // checks if you already voted
    // if not voted, redirects to candidate info page

    // Get the election & candidate id

    // return the election & candidate info
}

// Register election
exports.register_election_post = (req, res) => {
    Election.insertMany([{
            election: '2023-02-25-001',
            description: '2023 Presidential Election',
            startAt: '2022-09-06T10:45:01.007Z',
            endAt: '2022-09-07T10:45:01.007Z',
            candidates: [
                mongoose.Types.ObjectId("62a7670702b52b8a7cc2b5ac"),
                mongoose.Types.ObjectId("62a7670702b52b8a7cc2b5ad"),
                mongoose.Types.ObjectId("62a7670702b52b8a7cc2b5ae"),
                mongoose.Types.ObjectId("62a767856eceead81f8f3190")
            ],
            pollingUnits: ['lgbar001', 'lglek001', 'lgojo004']
        },
        {
            election: '2023-02-23-001',
            description: '2023 Governorship Election',
            startAt: '2022-09-04T10:45:01.007Z',
            endAt: '2022-09-05T10:45:01.007Z',
            candidates: [
                mongoose.Types.ObjectId("62a7670702b52b8a7cc2b5ac"),
                mongoose.Types.ObjectId("62a7670702b52b8a7cc2b5ad"),
                mongoose.Types.ObjectId("62a7670702b52b8a7cc2b5ae"),
                mongoose.Types.ObjectId("62a767856eceead81f8f3190")
            ],
            pollingUnits: ['lgbar001', 'lglek001', 'lgojo004']
        },
    ]).then(() => "Elections registered").catch(err => err);
}