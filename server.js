const express = require("express");
const session = require("express-session");
const router = express.Router();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const voterRoutes = require('./routes/voter');
const voteRoutes = require('./routes/vote');
const electionRoutes = require('./routes/election');
const candidateRoutes = require('./routes/candidate');
const pollingUnitRoutes = require('./routes/pollingUnit');

const app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
// var mongoDB = 'mongodb+srv://evoting:evoting@cluster0.ffsk5.mongodb.net/?retryWrites=true&w=majority';
var mongoDB = 'mongodb://evoting:evoting@cluster0-shard-00-00.ffsk5.mongodb.net:27017,cluster0-shard-00-01.ffsk5.mongodb.net:27017,cluster0-shard-00-02.ffsk5.mongodb.net:27017/?ssl=true&replicaSet=atlas-mj3ae3-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => res.send('<h1>Welcome to E-VOTE API</h1>'));

app.use('/api/voter', voterRoutes);
app.use('/api/vote', voteRoutes);
app.use('/api/election', electionRoutes);
app.use('/api/candidate', candidateRoutes);
app.use('/api/polling-unit', pollingUnitRoutes);


const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening to requests on port " + port);

})