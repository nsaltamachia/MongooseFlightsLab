const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airport: {
        type: "String",
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: null,
    },
    arrival: {
        type: "date",
    }
},  {
    timestamps: true
});


const flightSchema = new Schema({
    airline: {
        type: "String",
        enum: ["American", "Southwest", "United"],
        default: "select airline",
    },
    airport: {
        type: "String",
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "AUS"
    },
    flightNo: {
        type: "Number",
        required: true,
        minimum: 10,
        maximum: 9999,
        default: "",
    },
    departs: {
        type: "date",
    },
    destination: [destinationSchema],
   
},
    { timestamps: true }
);
// Compile the Schema into a model and export it
module.exports = mongoose.model("Flight", flightSchema);
// Do I need to export the destinationSchema, too?