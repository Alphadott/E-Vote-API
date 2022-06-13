const Candidate = require('../models/candidate');

exports.register_candidate_post = (req, res, next) => {
    Candidate.insertMany([{
            party: 'IPP',
            partyLogoUrl: 'https://my-app-resources.com/logo/ipp.jpg'
        },
        {
            party: 'EBP',
            partyLogoUrl: 'https://my-app-resources.com/logo/ebp.jpg'
        },
        {
            party: 'VIPP',
            partyLogoUrl: 'https://my-app-resources.com/logo/vipp.jpg'
        }
    ]).then(() => "Candidates registered successfully!").catch(err => err);
}