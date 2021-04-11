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
    reviews: [{
         hike_id: {type: String, required: true},
         user_id: {type: String, required: false},
         reviewBody: { type: String, required: false },
         deleted: {type: Boolean, default: false, required: false},
         date: { type: Date, default: Date.now, required: false },
      }],
    dog_friendly: {type: Boolean, required: true},
    horseback_riding: {type: Boolean, required: true},
    biking: {type: Boolean, required: true},
    bird_watching: {type: Boolean, required: true},
    family_friendly: {type: Boolean, required: true},
    imagesrc: {type: String, required: true},
})

//module.exports = mongoose.model('hike_data', trailSchema);
module.exports = trailSchema;
