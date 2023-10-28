const Flight = require("../models/flight")
const Destination = require("../models/flight")

module.exports = {
    create,
}

async function create(req, res) {
    console.log(req.body);
    
    try {
        const flight = await Flight.findById(req.params.id);
        const allDestinations = await Destination.find({}).sort("arrival");
        console.log("flight", flight);
    flight.destination.push(req.body);
         res.redirect(`/flights/${flight._id}`);
        await flight.save();
    } catch {
        (err)
        console.log(err)
        res.redirect(`/flights`);
    }
   
}