const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Voter        =   mongoose.Schema;

const url = "mongodb+srv://alphadot:alphadot@cluster0.29phplk.mongodb.net/?retryWrites=true&w=majority";
const connectionParams  =   {   useNewUrlParser: true,  useUnifiedTopology: true }


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Voter
var VoterSchema = new Schema({
    role: {
        type: [{
            type: String
        }],
        default: 'field is required'
    },
    firstname: {
        type: String,
        required: 'field is required'
    },
    lastname: {
        type: String,
        required: 'field is required'
    },
    email: {
        type: String,
        required: 'email is required!'
    },
    password: {
        type: String,
        required: 'password is required!',
        select: false
    },
    photo: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Voters', VoterSchema);
