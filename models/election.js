const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Election        =   mongoose.Schema;

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

// Election Schema
const ElectionSchema = new Election({
	election: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	startAt: {
		type: String,
		required
	},
	endAt: {
		type: String,
		required
	}
})


module.exports = mongoose.model('Election', ElectionSchema);
