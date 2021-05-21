const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const ReviewSchema = require('../models/reviews-schema')
const Review = mongoose.model('Review', ReviewSchema, 'review')

// REVIEWS
// GET All the reviews in reviews db
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ deleted: false })
    res.json(reviews)
  } catch (err) {
    res.json({ message: err })
  }
})

// GET All the reviews of an individual hike
router.get('/hike/:id', async (req, res) => {
  try {
    const hikeReviews = await Review.find({ hike_id: req.params.id, deleted: false })
    res.json(hikeReviews)
  } catch (err) {
    res.json({ message: err })
  }
})

// GET All the reviews for an individual user by email
router.get('/user/:id', async (req, res) => {
  try {
    const hikeReviews = await Review.find({ user_email: req.params.id, deleted: false })
    res.json(hikeReviews)
  } catch (err) {
    res.json({ message: err })
  }
})

// POST method to add a review on the individual hike page by hikeid
router.post('/hike/:id', async (req, res) => {
  const reviewPost = new Review({
    deleted: req.body.deleted,
    hike_id: req.params.id,
    user_email: req.body.user_email,
    user_name: req.body.user_name,
    body: req.body.body,
    date: req.body.date,
    difficulty: req.body.difficulty,
    accessibility: req.body.accessibility,
    dog_friendly: req.body.dog_friendly,
    horseback_riding: req.body.horseback_riding,
    mountain_biking: req.body.mountain_biking,
    free_parking: req.body.free_parking
  })

  reviewPost
    .save()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json({ message: err })
    })
})

// Soft DELETE individual review by id
router.post('/:id/delete', async (req, res) => {
  try {
    await Review.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {

        deleted: true

      }
    )
    res.json({ Response: 'Review is marked as deleted' })
  } catch (err) {
    res.json({ message: err })
  }
})

// Hard DELETE individual review by id
router.delete('/:reviewID', async (req, res) => {
  try {
    await Review.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $pull: {
          reviews: { _id: req.params.reviewID }
        }
      }
    )
    res.json({ Response: 'Review is deleted' })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
