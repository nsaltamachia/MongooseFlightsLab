var express = require('express');
var router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

// This router is mounted to a "starts with" path of "/"

//GET /tickets/new (new functionality)
router.get("/tickets/new", ticketsCtrl.new);
// POST /tickets (create functionality)
router.post("/tickets", ticketsCtrl.create)


module.exports = router;
