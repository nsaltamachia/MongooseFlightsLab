const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newPerformer,
    create,
}

async function newPerformer(req, res) {
    try{
    const tickets = await Ticket.find({});
        res.render("tickets/new", { tickets });
    } catch {
        console.log("somethings wrong with the new ticket function");
        }
};

async function create(req, res) {
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log("err with the create function")
    }
    res.redirect("/flights")
}
