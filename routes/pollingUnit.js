const express = require('express');
const router = express.Router();

const pollingUnitController = require('../controllers/pollingUnitController');

// Routes
router.get('/', pollingUnitController.list_polling_units_get);

router.post('/', pollingUnitController.register_polling_unit_post);

module.exports = router;