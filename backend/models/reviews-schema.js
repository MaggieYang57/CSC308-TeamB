const mongoose = require("mongoose");

const types = mongoose.Schema.Types
const ReviewSchema = mongoose.Schema({
  deleted: { type: Boolean, default: false, required: false },
  hike_id: { type: types.ObjectId, required: true },
  user_email: { type: String, required: false },
  user_name: { type: String, required: false },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now, required: false },
  difficulty: { type: Number, required: false },
  accessibility: { type: Number, required: false },
  dog_friendly: { type: Boolean, required: false },
  horseback_riding: { type: Boolean, required: false },
  mountain_biking: { type: Boolean, required: false },
  free_parking: { type: Boolean, required: false }
})

module.exports = ReviewSchema
