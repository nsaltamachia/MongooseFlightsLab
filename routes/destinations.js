var express = require('express');
var router = express.Router();
const destinationsCtrl = require("../controllers/flights");

// POST /flights/:id/destinations (create destination for a movie)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;