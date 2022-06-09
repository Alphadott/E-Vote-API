const express = require("express");
const session = require("express-session");
const router = express.Router();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const votersRoutes = require('./routes/voters');

const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
    origin: '*'
}));

app.use('/voters', votersRoutes);


port = process.env.port || 5000;
app.listen(port, function(){
    console.log("Listening to requests on port " + port);
    
})