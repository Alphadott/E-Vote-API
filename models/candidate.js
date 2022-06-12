const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Candidate        =   mongoose.Schema;

const url = "mongodb+srv://alphadot:alphadot@cluster0.29phplk.mongodb.net/?retryWrites=true&w=majority";
const connectionParams  =   {   useNewUrlParser: true,  useUnifiedTopology: true }
mongoose.connect(url,   connectionParams)
        .then( () => {    
                        console.log('Connected to database')
                     }
        )
        .catch( (err) => {
                        console.error(`Error connecting to the database. \n${err}`);
        }
    )

// Candidate Schema
const CandidateSchema = new Candidate({
	candidateFor: {
		type: String,
		required: true
	},
	party: {
		type: String,
		type: required
	},
	partyLogoUrl: {
		type: String,
		type: required
	}
})


module.exports = mongoose.model('Candidate', CandidateSchema);
