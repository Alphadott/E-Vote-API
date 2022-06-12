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
// var mongoDB = 'mongodb+srv://locallibrary:locallibrary@cluster0.rbubb.mongodb.net/?retryWrites=true&w=majority';
var mongoDB = 'mongodb+srv://evoting:evoting@cluster0.ffsk5.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.use('/voter', voterRoutes);
app.use('/vote', voteRoutes);
app.use('/election', electionRoutes);
app.use('/candidate', candidateRoutes);
app.use('/polling-unit', pollingUnitRoutes);


port = process.env.port || 5000;
app.listen(port, function() {
    console.log("Listening to requests on port " + port);

})