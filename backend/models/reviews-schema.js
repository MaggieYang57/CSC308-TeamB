const mongoose = require('mongoose')

const types = mongoose.Schema.Types
const reviewSchema = mongoose.Schema({
  hike_id: { type: types.ObjectId, required: true },
  user_id: { type: types.ObjectId, required: false },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now, required: false },
  difficulty: { type: Number, required: false },
  accessibility: { type: Number, required: false },
  dog_friendly: { type: Boolean, required: false },
  horseback_riding: { type: Boolean, required: false },
  mountain_biking: { type: Boolean, required: false },
  bird_watching: { type: Boolean, required: false },
  family_friendly: { type: Boolean, required: false }
})

module.exports = reviewSchema
