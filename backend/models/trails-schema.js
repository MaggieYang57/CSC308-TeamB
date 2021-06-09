const mongoose = require('mongoose')

const trailSchema = mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: [Number], required: true },
  rating: { type: [Number], required: true },
  dog_friendly: { type: Boolean, required: true },
  horseback_riding: { type: Boolean, required: true },
  biking: { type: Boolean, required: true },
  bird_watching: { type: Boolean, required: true },
  family_friendly: { type: Boolean, required: true },
  imagesrc: { type: String, required: true }
})

module.exports = trailSchema
