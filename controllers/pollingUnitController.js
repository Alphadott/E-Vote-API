const PollingUnit = require('../models/pollingUnit');

// 
exports.list_polling_units_get = (req, res) => {
    PollingUnit.find({}).exec((err, polling_units) => {
        if (err) return handleError(err)

        //
        res.json(polling_units);
    });
}

exports.register_polling_unit_post = (req, res) => {
    PollingUnit.insertMany([{
            name: 'lgbar001',
            location: 'ikorodu west, Lagos'
        },
        {
            name: 'lglek001',
            location: 'Lekki Phase I, Lagos'
        },
        {
            name: 'lgojo004',
            location: 'Lekki Phase II, Lagos'
        }
    ], err => {
        if (err) return handleError(err);

        return true;
    })
}