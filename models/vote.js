const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Vote        =   mongoose.Schema;

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

// Vote Schema
const VoteSchema = new Vote({
	voteFor: {
		type: String,
		required: true
	},
	vin: {
		type: Number,
		required: true,
	},
	pollingUnit: {
		type: String,
		required: true,
	},
	votedParty: {
		type: String,
		required: true,
	},
	votedAt: {
		type: String,
		required
	}
})


module.exports = mongoose.model('Vote', VoteSchema);
