const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Voter Schema
const VoterSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Others'], default: 'Male' },
    dob: { type: Date, required: true },
    imageURL: { type: String },
    imageCode: { type: String },
    fingPrintURL: { type: String },
    fingPrintCode: { type: String },
    vin: { type: Number, required: true },
    pollingUnit: { type: Schema.Types.ObjectId, ref: 'PollingUnit', required: true },
    isVerified: { type: Boolean, default: false },
    lastVerifiedAt: { type: Date },
    votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
});


module.exports = mongoose.model('Voter', VoterSchema);