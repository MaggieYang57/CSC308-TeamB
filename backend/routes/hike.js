const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const trailSchema = require("../models/trails-schema");
const Trail = mongoose.model("Trail", trailSchema, "hike_data");

router.get('/', async (req, res) => {
  try {
    const hikes = await Trail.find({}).sort({ rating: -1 })
    res.json(hikes)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/dog-friendly', async (req, res) => {
  try {
    const hikes = await Trail.find({ dog_friendly: true }).sort({ rating: -1 })
    res.json(hikes)
  } catch (err) {
    res.json({ message: err })
  }
})

// GET individual hike
router.get('/:id', async (req, res) => {
  try {
    const hikes = await Trail.find({ _id: req.params.id })
    res.json(hikes)
  } catch (err) {
    res.status(404).send('Invalid hike id')
  }
})

// DELETE individual hike
router.delete('/:id', async (req, res) => {
  try {
    const removedHike = await Trail.remove({ _id: req.params.id })
    res.json(removedHike)
  } catch (err) {
    res.json({ message: err })
  }
})

// Post request to add a hike
router.post('/', (req, res) => {
  const hike = new Trail({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    difficulty: req.body.difficulty,
    rating: req.body.rating,
    reviews: req.body.reviews,
    tags: req.body.tags
  })

  hike
    .save()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json({ message: err })
    })
})

/** *****************POST RATING FOR INDIV HIKE******************** */

const postRating = async (id, rate) => {
  const hike = await Trail.findByIdAndUpdate(
    {
      _id: id
    },
    {
      $push: {
        rating: rate
      }
    }
  )
  hike.save()
  console.log(hike)
}

router.post('/:id/rating', async (req, res) => {
  try {
    res.status(200)
    const _id = req.params.id
    const rating = req.body.rating
    console.log(_id, rating)
    await postRating(_id, rating)
    res.json({ Response: 'Rating of ' + rating + ' received for Hike ' + _id })
    return
  } catch (err) {
    res.json({ message: err })
  }
})


module.exports = router;
