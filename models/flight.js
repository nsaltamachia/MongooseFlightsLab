const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const flightSchema = Schema({
    airline: {
        type: "String",
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: "String",
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
    },
    flightNo: {
        type: "Number",
        required: true,
        minimum: 10,
        maximum: 9999
    },
    departs: {
        type: "Date",
        default: "One year from date created"
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Flight", flightSchema);