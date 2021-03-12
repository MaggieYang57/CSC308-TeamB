const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const reviewSchema = mongoose.Schema({
   hike_id: {type: types.ObjectId, required: true},
   user_id: {type: types.ObjectId, required: false},
   body: {type: String, required: true},
   date: { type: Date, default: Date.now, required: false },
   difficulty: {type: Number, required: false},
   deleted: {type: Boolean, required: false},
   accessibility: {type: Number, required: false},
   dog_friendly: {type: Boolean, required: false},
   horseback_riding: {type: Boolean, required: false},
   mountain_biking: {type: Boolean, required: false},
   bird_watching: {type: Boolean, required: false},
   family_friendly: {type: Boolean, required: false},
})

const trailSchema = mongoose.Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    difficulty: {type: Number, required: true},
    // length: {type: String, required: false},
    // elevation_gain: {type: String, required: false},
    // route_type: {type: String, required: false},
    rating: {type: [Number], required: true},
    reviews: [{reviewSchema, required: false}],
    dog_friendly: {type: Boolean, required: true},
    horseback_riding: {type: Boolean, required: true},
    biking: {type: Boolean, required: true},
    bird_watching: {type: Boolean, required: true},
    family_friendly: {type: Boolean, required: true},

})

//module.exports = mongoose.model('hike_data', trailSchema);
module.exports = trailSchema;
