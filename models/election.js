const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Election Schema
const ElectionSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date },
    candidates: [{ type: Schema.Types.ObjectId, ref: 'Candidate' }]
});


module.exports = mongoose.model('Election', ElectionSchema);