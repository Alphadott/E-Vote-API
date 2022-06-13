const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Vote Schema
const VoteSchema = new Schema({
    voter: { type: Schema.Types.ObjectId, ref: 'Voter', required: true },
    election: { type: Schema.Types.ObjectId, ref: 'Election', required: true },
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate', required: true },
    votedAt: { type: Date, default: Date.now(), required: true },
    pollingUnit: { type: String, required: true, required: true },
}, { timestmaps: true });


module.exports = mongoose.model('Vote', VoteSchema);