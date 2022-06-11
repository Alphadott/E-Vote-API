const express = require('express');
const router = express.Router();

const voters = require('../DB/voters');

router.get('/', (req, res) => res.send("works"));

router.get('/verifyme/:vin', (req, res) => {''
    let voter = voters.find(el => el.vin == req.params.vin);
    
    if(!voter){
        res.json({"status":-1, "msg":"No voter with this VIN found"}, 404);
    }

    if(!voter.finger_print){
        res.json({"status":0, "voter": voter, "msg":"Voter is not valid, Request for finger print"}, 200);
    };

    res.json({"status":1, "voter": voter, "msg":"Voter is valid"}, 200);
});

router.post('/submit-fingerprint', (req, res) => {
    // check if vin exists
    exists = voters.find(el => el.vin == req.body.vin);

    if(exists){
        voters.map(el => {
            if(el.vin == req.body.vin){
                el.finger_print = req.body.finger_print;
            }
        });

        res.json(voters, 201);
    }else{
        res.json("VIN not found", 404);
    }
});

module.exports = router;