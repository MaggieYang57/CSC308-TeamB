
const mongoose = require('mongoose');

const types = mongoose.Schema.Types;
const reviewSchema = mongoose.Schema({
    hike_id: {type: types.ObjectId, required: true},
    difficulty: {type: Number, required: true},
    accessibility: {type: Number, required: true},
    difficulty: {type: Number, required: true},
    dog_friendly: {type: Boolean, required: false},
    horseback_riding: {type: Boolean, required: false},
    mountain_biking: {type: Boolean, required: false},
    bird_watching: {type: Boolean, required: false},
    family_friendly: {type: Boolean, required: false},
    body: {type: String, required: true},
})

module.exports = reivewSchema;