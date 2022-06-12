const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Voter        =   mongoose.Schema;

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

// Voter Schema
const VoterSchema = new Voter({
	voterFor: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	middleName: {
		type: String
	},
	gender: {
		type: String,
		required: true,
	},
	DoB: {
		type: String,
		required
	},
	imageURL: {
		type: String,
		required: true,
	},
	imageCode: {
		type: String,
		required: true,
	},
	fingPrintURL: {
		type: String,
		required: true,
	},
	fingPrintCode: {
		type: String,
		required: true,
	},
	VIN: {
		type: Number,
		required
	},
	pollingUnit: {
		type: String,
		required
	},
	isVerified: {
		type: Boolean,
		default: false
	},
	lastVerifiedAt: {
		type: String,
		required
	}
})


module.exports = mongoose.model('Voter', VoterSchema);
