const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const Voter        =   mongoose.Schema;

const url = "mongodb+srv://alphadot:alphadot@cluster0.29phplk.mongodb.net/?retryWrites=true&w=majority";
const connectionParams  =   {   useNewUrlParser: true,  useUnifiedTopology: true }


const userSchema = new User({ 

    firstname : { 
                    type : String, max : 15, lowercase  : true, trim  : true, required : [true, 'Firstname is required'] 
                },
    surname   : { 
                    type : String, max : 15, lowercase  : true, trim  : true, required : [true, 'Surname is required'] 
                },
    email     : { 
                    type : String, max : 30, lowercase  : true, trim  : true, required : [true, 'Email is required'],
                     unique : true
                },
    password : { 
                    type : String, max : 15, lowercase  : true, trim  : true, required : [true, 'Password is required'] 
                },
    entry     : { type : Date, default : Date.now }

});

module.exports = mongoose.model('User', userSchema);