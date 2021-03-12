const mongoose = require('mongoose');

const types = mongoose.Schema.Types;
const trailSchema = mongoose.Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    difficulty: {type: [Number], required: true},
    // length: {type: String, required: false},
    // elevation_gain: {type: String, required: false},
    // route_type: {type: String, required: false},
    rating: {type: [Number], required: true},
    reviews: [{type: types.ObjectId, ref: 'Review', required: false}],
    dog_friendly: {type: Boolean, required: true},
    horseback_riding: {type: Boolean, required: true},
    biking: {type: Boolean, required: true},
    bird_watching: {type: Boolean, required: true},
    family_friendly: {type: Boolean, required: true},
    imagesrc: {type: String, required: true},
})

//module.exports = mongoose.model('hike_data', trailSchema);
module.exports = trailSchema;
