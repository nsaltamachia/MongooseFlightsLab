const Flight = require("../models/flight")

module.exports = {
    index,
    new: newFlight,
}

async function index(req, res) {
    const allFlights = await Flight.find({});
    res.render("flights/index", {
        flights: allFlights,
        title: "All Flights"
    })
}

function newFlight(req, res) {
    res.render("flights/new", {
        title: "Enter A New Flight"
    })
}
