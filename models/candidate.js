const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Candidate Schema
const CandidateSchema = new Schema({
    election: { type: Schema.Types.ObjectId, ref: 'Election', required: true },
    party: { type: String, required: true },
    partyLogoUrl: { type: String, required: true }
})


module.exports = mongoose.model('Candidate', CandidateSchema);