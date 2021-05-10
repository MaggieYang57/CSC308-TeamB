const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  user_email: { type: String, required: false },
  user_type: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  saved_trails: { type: [String], required: true },
  reviews: [
    {
      hike_id: { type: String, required: true },
      reviewBody: { type: String, required: false },
      deleted: { type: Boolean, default: false, required: false },
      date: { type: Date, default: Date.now, required: false }
    }
  ]
})

module.exports = UserSchema
