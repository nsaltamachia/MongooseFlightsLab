const Flight = require("../models/flight")

module.exports = {
    index,
    new: newFlight,
    create,
}
async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    try {
        const flight = await Flight.create(req.body);
        res.redirect("/flights")
    } catch (err) {
        console.log(err);
        res.render("flights/new", { errorMsg: err.message })
    }
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
