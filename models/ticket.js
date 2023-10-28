const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
    seat: {
        type: String,
        match: `/[A-F][1-9]\d?/`,
    },
    price: {
        type: Number,
        minimum: 0,
        default: ""
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: "flight"
     },
}, {
  timestamps: true
});
    

// Compile the Schema into a model and export it
module.exports = mongoose.model("Ticket", ticketSchema);
// Do I need to export the destinationSchema, too?