const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  user_email: { type: String, required: false },
  user_type: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  saved_trails: { type: [String], required: true },
})

module.exports = UserSchema
