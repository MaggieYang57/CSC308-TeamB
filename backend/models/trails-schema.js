const mongoose = require('mongoose');

const trailSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    difficulty: {type: String, required: true},
    length: {type: String, required: true},
    elevation_gain: {type: String, required: true},
    route_type: {type: String, required: true},
    rating: {type: String, required: true},
    reviews: {type: String, required: false},
    tags: {type: [String], required: true},

})

//module.exports = mongoose.model('hike_data', trailSchema);
module.exports = trailSchema
