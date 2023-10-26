const Flight = require("../models/flight")
// const newFlight = new Flight();



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
    const allFlights = await Flight.find({}).sort("departs");

    // Adding the isExpired property (bonus)
    const currentDate = new Date();
    allFlights.forEach((flight) => {
        flight.departs = new Date(flight.departs);
        flight.isExpired = currentDate > flight.departs;
        console.log(`Flight ${flight._id} - Departs: ${flight.departs}, isExpired: ${flight.isExpired}`);
    })
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
