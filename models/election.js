const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Election Schema
const ElectionSchema = new Schema({
    election: { type: String, required: true },
    description: { type: String, required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date },
    candidates: [{ type: Schema.Types.ObjectId, ref: 'Candidate' }],
    pollingUnits: [{ type: String }],
    votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
});


module.exports = mongoose.model('Election', ElectionSchema);