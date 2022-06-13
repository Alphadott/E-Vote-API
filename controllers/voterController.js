const Voter = require('../models/voter');

// Verify voter using vin
exports.verify_voter_get = (req, res, next) => {
    Voter.findOne({ vin: req.params.vin }).exec((err, voter) => {
        if (err) return next(err);

        if (voter.isVerified) {
            res.status(200).json({ status: true, voter: voter });
        }

        res.status(200).json({ status: false, voter: voter });
    });
}

// Get voter details
exports.voter_details_get = (req, res, next) => {
    Voter.findOne({ vin: req.params.vin }).exec((err, voter) => {
        if (err) return next(err);

        res.status(200).json(voter);
    });
}

// Get verified voters
exports.verified_voters_get = (req, res, next) => {
    Voter.find({ isVerified: true }).exec((err, voters) => {
        if (err) return next(err);

        res.status(200).json(voters);
    });
}

// Get all voters
exports.list_voters_get = (req, res, next) => {
    Voter.find({}).exec((err, voters) => {
        if (err) return handleError(err);

        res.status(200).json(voters);
    });
}

// Register a new voter
exports.create_voter_post = (req, res, next) => {
    Voter.insertMany([{
            firstName: 'Ayietuoma',
            lastName: 'Igeh',
            middleName: 'Collins',
            gender: 'Male',
            dob: '1960-09-01',
            imageURL: 'https://my-app-resources.com/images/1.png',
            imageCode: 'a1y2i3e4t5u6o7m8a9',
            fingerPrintURL: 'https://my-app-resources.com/finger-prints/1.png',
            fingerprintCode: 'a1y2i3e4t5u6o7m8a9',
            vin: '234001',
            pollingUnit: 'lgbar001',
            isVerified: true,
            lastverifiedAt: '2022-09-06'
        },
        {
            firstName: 'Samson',
            lastName: 'Okeji',
            middleName: "",
            gender: 'Male',
            dob: '1960-12-22',
            imageURL: 'https://my-app-resources.com/images/samson.png',
            imageCode: 's1a2m3s4o5n6',
            fingPrintURL: 'https://my-app-resources.com/fingerprints/samson_thumb.png',
            fingerPrintCode: 's1a2m3s4o5n6',
            vin: 234002,
            pollingUnit: 'lgojo004',
            isValidated: false,
            lastVerifiedAt: '2022-09-06'
        },
        {
            firstName: 'Shirley',
            lastName: 'Abaegbu',
            middleName: '',
            gender: 'Female',
            dob: '1968-01-01',
            imageURL: 'https://my-app-resources.com/images/shirley.png',
            imageCode: 's1h2i3l4e5y6',
            fingPrintURL: 'https://my-app-resources.com/finger-prints/shirley.png',
            fingerPrintCode: 's1h2i3l4e5y6',
            vin: 234002,
            pollingUnit: 'lglek001',
            isValidated: false,
            lastVerifiedAt: ''
        },
        {
            firstName: 'Daniel',
            lastName: 'Ukpong',
            middleName: '',
            gender: 'Male',
            dob: '1959-12-02',
            imageURL: 'https://my-app-resources.com/images/daniel.png',
            imageCode: 'd1a2n3i4e5l6',
            fingPrintURL: 'https://my-app-resources.com/fingerprints/daniel_thumb.png',
            fingerPrintCode: 'd1a2n3i4e5l6',
            vin: 234002,
            pollingUnit: 'lglek014',
            isValidated: false,
            lastVerifiedAt: ''
        },
        {
            firstName: 'Arthur',
            lastName: 'Ogbalu',
            middleName: 'Kenechukwu',
            gender: 'Male',
            dob: '1952-03-17',
            imageURL: 'https://my-app-resources.com/images/arthur.png',
            imageCode: 'a1r2t3h4u5r6',
            fingPrintURL: 'https://my-app-resources.com/finger-prints/arthur.png',
            fingerPrintCode: 'a1r2t3h4u5r6',
            vin: 234005,
            pollingUnit: 'lgajj002',
            isValidated: false,
            lastVerifiedAt: ''
        }
    ], err => {
        if (err) return next(err);

        return true;
    });
}

// Submit voter fingerprint
exports.submit_fingerprint_post = (req, res) => {
    // res.send('NOT IMPLEMENTED: Voter details ' + req.params.vin);
    // // check if vin exists
    // exists = voters.find(el => el.vin == req.body.vin);

    // if (exists) {
    //     voters.map(el => {
    //         if (el.vin == req.body.vin) {
    //             el.finger_print = req.body.finger_print;
    //         }
    //     });

    //     res.json(voters, 201);
    // } else {
    //     res.json("VIN not found", 404);
    // }
}