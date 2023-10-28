const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newTicket,
    create,
}

async function newTicket(req, res) {
    try {
        const tickets = await Ticket.find({}).sort("seat");
        
        res.render("tickets/new", { tickets });
    } catch (err) {
        console.log("err with the new function")
    }
}

async function create(req, res) {
    try {
        const ticket = await Ticket.create(req.body);
        const flight = Flight.findById(req.body._id)
    } catch (err) {
        console.log("err with the create function")
    }
    res.redirect(`/flights/${flight._id}`)
}
