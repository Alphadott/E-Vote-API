const mongoose = require('mongoose');
const Vote = require('../models/vote');
const Election = require('../models/election');

// Get votes for an election
exports.votes_get = (req, res, next) => {
    // Get votes in an election
    Election.findOne({ election: req.params.election }).populate({
        path: 'votes',
        populate: 'candidate'
    }).exec((err, election) => {
        if (err) return next(err);

        res.status(200).json(election);
    });
}

// Register a new vote
exports.create_vote_post = (req, res, next) => {
    Election.findById(req.body.electionId, (err, election) => {
        if (err) return next(err);

        let vote = new Vote({
            voter: mongoose.Types.ObjectId(req.body.voterId),
            election: mongoose.Types.ObjectId(req.body.electionId),
            candidate: mongoose.Types.ObjectId(req.body.candidateId),
            pollingUnit: req.body.pollingUnit
        });

        vote.save(function(err) {
            if (err) return res.send(err)
        });

        election.votes.push(vote);
        election.save();

        res.status(201).json(election);
    })
}