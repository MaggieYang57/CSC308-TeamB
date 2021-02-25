const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose, 2);

const types = mongoose.Schema.Types;
const trailSchema = mongoose.Schema({
   title: { type: String, required: true },
   location: { type: String, required: true },
   description: { type: String, required: true },
   difficulty: { type: String, required: true },
   //length: {type: String, required: false},
   //elevation_gain: {type: String, required: false},
   //route_type: {type: String, required: false},
   rating: { type: Float, required: true },
   reviews: [{
      hikeID: { type: String, required: false },
      userID: { type: String, required: false },
      reviewBody: { type: String, required: false },
      userRating: { type: Number, required: false },
      date: { type: Date, required: false },
   }],
   tags: { type: [String], required: true },

})

// location
// difficulty should be a float 


//module.exports = mongoose.model('hike_data', trailSchema);
module.exports = trailSchema
