const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
// const newFlight = new Flight();



module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        const tickets = await Ticket.find({ flight: flight._id });

        res.render("flights/show", { flight, tickets }); // Pass both flight and tickets
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred.");
    }
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
