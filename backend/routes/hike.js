const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const trailSchema = require('../models/trails-schema');
const Trail = mongoose.model('Trail', trailSchema, 'hike_data');
var ObjectID = require('mongodb').ObjectID;

router.get('/testing', (req, res) => {
   res.send('List of all hikes!');
})



router.get('/:id/reviews', (req, res) => {
   res.send('Get review for each hike page!');
})

router.get('/:id/reviews', (req, res) => {
   res.send('Get review for each hike page!');
})

router.post('/:id/reviews', (req, res) => {
   console.log(req.body);
   res.send('Post a review on this hike page');
})


//testing GET all hikes

router.get('/', async (req, res) => {
   try {
      const hikes = await Trail.find({});
      res.json(hikes);
   }
   catch (err) {
      res.json({ message: err });
   }
});

//testing GET individual hike
router.get('/:id', async (req, res) => {
   try {
      const hikes = await Trail.find({ "_id": req.params.id });
      res.json(hikes);
   }
   catch (err) {
      res.json({ message: err });
   }
});

// Post request to add a review 
router.post('/', (req, res) => {
   const hike = new Trail({
      title: req.body.title,
      location: req.body.location,
      description: req.body.description,
      difficulty: req.body.difficulty,
      //length: req.body.length,
      //elevation_gain: req.body.elevation_gain,
      //route_type: req.body.route_type,
      rating: req.body.rating,
      reviews: req.body.reviews,
      tags: req.body.tags
   });

   hike.save()
      .then(data => {
         res.json(data);
      })
      .catch(err => {
         res.json({ message: 'failed' });
      });
});

module.exports = router;