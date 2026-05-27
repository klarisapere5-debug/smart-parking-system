const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    imgUrl: {
        type: String,
        required: true
    },

    amenities: [{
        type: String
    }]
});

module.exports = mongoose.model('Parking', parkingSchema);